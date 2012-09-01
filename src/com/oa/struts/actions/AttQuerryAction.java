package com.oa.struts.actions;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.Attendance;
import com.oa.hibernate.beans.Staff;
import com.oa.hibernate.dao.AttendanceDao;
import com.oa.hibernate.dao.StaffDao;
import com.oa.struts.util.ToTimeFormat;

public class AttQuerryAction extends Action{
	private AttendanceDao attendanceDao;
	private StaffDao staffDao;
	
	public AttendanceDao getAttendanceDao() {
		return attendanceDao;
	}
	public void setAttendanceDao(AttendanceDao attendanceDao) {
		this.attendanceDao = attendanceDao;
	}
	public StaffDao getStaffDao() {
		return staffDao;
	}
	public void setStaffDao(StaffDao staffDao) {
		this.staffDao = staffDao;
	}
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=response.getWriter();
		
		ActionForward forward=new ActionForward();
		forward=null;
		HttpSession session = request.getSession(false);
		String name=(String)request.getParameter("name");
		
		if(name.equals("deleteAll")){
			Attendance[] allRecord=attendanceDao.getAttendance();
			if(allRecord.length>=1){
				boolean isDeleted=attendanceDao.delete(allRecord);
				if(isDeleted){
					out.println("<response>");
					out.println("<res>所有考勤记录已清空！</res>");
					out.println("</response>");
					out.close();
				}else{
					out.println("<response>");
					out.println("<res>删除失败，请重新删除！</res>");
					out.println("</response>");
					out.close();
				}
			}else{
				out.println("<response>");
				out.println("<res>目前没有任何考勤记录！</res>");
				out.println("</response>");
				out.close();
			}
		}
		else{
			String by=request.getParameter("by");
			String bm=request.getParameter("bm");
			String bd=request.getParameter("bd");
			String ey=request.getParameter("ey");
			String em=request.getParameter("em");
			String ed=request.getParameter("ed");
			String btime=by+"-"+bm+"-"+bd+" 00:00:00";
			String etime=ey+"-"+em+"-"+ed+" 24:00:00";
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Date tobtime=sdf.parse(btime);
			Date toetime=sdf.parse(etime);
				Attendance[] attendance=attendanceDao.getAttendance(name, tobtime, toetime);
				session.setAttribute("querryResult",attendance);
				Staff staff=staffDao.getStaff(name);
				session.setAttribute("staffInfo",staff);
				
				session.setAttribute("btime",ToTimeFormat.toTimeFormat(tobtime));
				session.setAttribute("etime",ToTimeFormat.toTimeFormat(toetime));
				forward=mapping.findForward("attendanceRecord");
			
		}
		return forward;
	}
}
