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

import com.oa.hibernate.beans.Off;
import com.oa.hibernate.dao.OffDao;

public class OffApplyAction extends Action{
	private OffDao offDao;

	public OffDao getOffDao() {
		return offDao;
	}

	public void setOffDao(OffDao offDao) {
		this.offDao = offDao;
	}
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=response.getWriter();
		
		HttpSession session = request.getSession(false);
		
		String username=request.getParameter("uname");
		String realname=request.getParameter("rname");
		String reason=request.getParameter("reason");
		String begin=request.getParameter("begin");
		String end=request.getParameter("end");
		String[] begArr=begin.split(" ");
		String[] endArr=end.split(" ");
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date begintime=sdf.parse(begArr[0]+"-"+begArr[1]+"-"+begArr[2]+" "+begArr[3]+":"+begArr[4]+":"+"00");
		Date endtime=sdf.parse(endArr[0]+"-"+endArr[1]+"-"+endArr[2]+" "+endArr[3]+":"+endArr[4]+":"+"00");
		
		Off off=new Off();
		off.setUsername(username);
		off.setRealname(realname);
		off.setReson(reason);
		off.setBegin(begintime);
		off.setEnd(endtime);
		off.setStatus(0L);
		
		if(offDao.insert(off)){
			session.setAttribute("off", offDao.getOff(username));
			session.setAttribute("allOff", offDao.getOff());
			if(begArr[4].equals("0")||begArr[4].equals("5")){
				begArr[4]="0"+begArr[4];
			}
			if(endArr[4].equals("0")||endArr[4].equals("5")){
				endArr[4]="0"+endArr[4];
			}
			if(begArr[3].equals("9")){
				begArr[3]="0"+begArr[3];
			}
			if(endArr[3].equals("9")){
				endArr[3]="0"+endArr[3];
			}
			if(Integer.valueOf(begArr[2])>=1&&Integer.valueOf(begArr[2])<=9){
				begArr[2]="0"+begArr[2];
			}
			if(Integer.valueOf(endArr[2])>=1&&Integer.valueOf(endArr[2])<=9){
				endArr[2]="0"+endArr[2];
			}
			if(!begArr[1].equals("10")&&!begArr[1].equals("11")&&!begArr[1].equals("12")){
				begArr[1]="0"+begArr[1];
			}
			if(!endArr[1].equals("10")&&!endArr[1].equals("11")&&!endArr[1].equals("12")){
				endArr[1]="0"+endArr[1];
			}
			out.println("<response>");
			out.println("<res>申请成功，请等待批准！</res>");
			out.println("<res>"+realname+"</res>");
			out.println("<res>"+begArr[0]+"-"+begArr[1]+"-"+begArr[2]+" "+begArr[3]+":"+begArr[4]+":"+"00.0"+"</res>");
			out.println("<res>"+endArr[0]+"-"+endArr[1]+"-"+endArr[2]+" "+endArr[3]+":"+endArr[4]+":"+"00.0"+"</res>");
			out.println("<res>"+reason+"</res>");
			out.println("<res>受理中</res>");
			out.println("</response>");
			out.close();
		}else{
			out.println("<response>");
			out.println("<res>服务器忙，请稍后再试！</res>");
			out.println("</response>");
			out.close();
		}
		
		
		return null;
	}
}
