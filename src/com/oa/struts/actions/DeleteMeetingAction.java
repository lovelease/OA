package com.oa.struts.actions;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.Meeting;
import com.oa.hibernate.dao.MeetingDao;

public class DeleteMeetingAction extends Action{
	private MeetingDao meetingDao;

	public MeetingDao getMeetingDao() {
		return meetingDao;
	}

	public void setMeetingDao(MeetingDao meetingDao) {
		this.meetingDao = meetingDao;
	}
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=response.getWriter();
		
		HttpSession session = request.getSession(false);
		
		Long id=Long.valueOf(request.getParameter("id"));
		Meeting meeting=meetingDao.getMeeting(id);
		if(meetingDao.delete(meeting)){
			session.setAttribute("meeting", meetingDao.getMeeting());
			out.println("<response>");
			out.println("<res>删除成功！</res>");
			out.println("<res>"+id.toString()+"</res>");
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
