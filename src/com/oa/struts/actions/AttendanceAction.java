package com.oa.struts.actions;

import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.ActionMessage;
import org.apache.struts.action.ActionMessages;

import com.oa.struts.util.*;
import com.oa.hibernate.beans.Attendance;
import com.oa.hibernate.beans.Staff;
import com.oa.hibernate.dao.AttendanceDao;

public class AttendanceAction extends Action{
	private AttendanceDao attendanceDao;
	
	public AttendanceDao getAttendanceDao() {
		return attendanceDao;
	}
	public void setAttendanceDao(AttendanceDao attendanceDao) {
		this.attendanceDao = attendanceDao;
	}
	
	Date now=null;
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		ActionMessages message=new ActionMessages();
		ActionForward forward=new ActionForward();
		Date rightNow=Calendar.getInstance().getTime();
		now=rightNow;
		Attendance attendance=new Attendance();
		
		HttpSession session = request.getSession(false);
		String type=(String)request.getParameter("type");
		
		
		if(type.equals("on")){
			if(session.getAttribute("aid")!=null){
				message.add("result",new ActionMessage("对不起！今天你已经进行过上班考勤了！",false));
				addErrors(request,message);
				forward=mapping.findForward("on");
			}else{
				Staff staff=(Staff)session.getAttribute("staff");
				String username=staff.getUsername();
				String realname=staff.getRealname();
				attendance.setUsername(username);
				attendance.setOntime(rightNow);
				attendance.setOnresult(onResult());
				attendanceDao.setOn(attendance);
				Attendance idMsg=attendanceDao.getAttendance(rightNow);
				Long id=idMsg.getId();
				session.setAttribute("aid", id);
				String newTime=ToTimeFormat.toTimeFormat(rightNow);
				String result=realname+" "+newTime+" "+onResult();			
				message.add("result",new ActionMessage(result,false));
				addErrors(request,message);
				forward=mapping.findForward("on");
			}
			
		}else{
			Long id=(Long)session.getAttribute("aid");
//			System.out.println(id);
			if(id!=null){
				if(isOffExist(id)==false){
					attendance=attendanceDao.getAttendance(id);
					Staff staff=(Staff)session.getAttribute("staff");
					String username=staff.getUsername();
					String realname=staff.getRealname();
					attendance.setUsername(username);
					attendance.setOfftime(rightNow);
					attendance.setOffresult(offResult());
					attendanceDao.setOff(attendance);
					String newTime=ToTimeFormat.toTimeFormat(rightNow);
					String result=realname+" "+newTime+" "+offResult();
					message.add("result",new ActionMessage(result,false));
					addErrors(request,message);
					forward=mapping.findForward("off");
				}else{
					message.add("result", new ActionMessage("对不起！今天你已经进行过下班考勤了！",false));
					addErrors(request,message);
					forward=mapping.findForward("off");
				}
			}else{
				message.add("result", new ActionMessage("对不起！请先进行上班考勤！",false));
				addErrors(request,message);
				forward=mapping.findForward("off");
			}
		}
		return forward;
	}
	public String onResult(){
		String onResult="";
		Date standard=Calendar.getInstance().getTime();
		standard.setHours(9);
		standard.setMinutes(0);
		standard.setSeconds(0);
		if(now.after(standard)){
			onResult="迟到";
		}else{
			onResult="正常";
		}
		return onResult;
	}
	public String offResult(){
		String offResult="";
		Date standard=Calendar.getInstance().getTime();
		standard.setHours(17);
		standard.setMinutes(0);
		standard.setSeconds(0);
		if(now.before(standard)){
			offResult="早退";
		}else{
			offResult="正常";
		}
		return offResult;
	}
	public boolean isOffExist(Long id){
		boolean isOffExist=false;
		if(attendanceDao.getAttendance(id).getOfftime()!=null){
			isOffExist=true;
		}
		return isOffExist;
	}
}