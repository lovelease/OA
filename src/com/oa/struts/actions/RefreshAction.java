package com.oa.struts.actions;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.Staff;
import com.oa.hibernate.dao.MailDao;
import com.oa.hibernate.dao.MeetingDao;
import com.oa.hibernate.dao.NewsDao;
import com.oa.hibernate.dao.NoticeDao;
import com.oa.hibernate.dao.OffDao;
import com.oa.hibernate.dao.RegimeDao;
import com.oa.hibernate.dao.StaffDao;

public class RefreshAction extends Action{
	private StaffDao staffDao;
	private RegimeDao regimeDao;
	private NewsDao newsDao;
	private NoticeDao noticeDao;
	private MeetingDao meetingDao;
	private OffDao offDao;
	private MailDao mailDao;
	
	public StaffDao getStaffDao() {
		return staffDao;
	}
	public void setStaffDao(StaffDao staffDao) {
		this.staffDao = staffDao;
	}
	public RegimeDao getRegimeDao() {
		return regimeDao;
	}
	public void setRegimeDao(RegimeDao regimeDao) {
		this.regimeDao = regimeDao;
	}
	public NewsDao getNewsDao() {
		return newsDao;
	}
	public void setNewsDao(NewsDao newsDao) {
		this.newsDao = newsDao;
	}
	public NoticeDao getNoticeDao() {
		return noticeDao;
	}
	public void setNoticeDao(NoticeDao noticeDao) {
		this.noticeDao = noticeDao;
	}
	public MeetingDao getMeetingDao() {
		return meetingDao;
	}
	public void setMeetingDao(MeetingDao meetingDao) {
		this.meetingDao = meetingDao;
	}
	public OffDao getOffDao() {
		return offDao;
	}
	public void setOffDao(OffDao offDao) {
		this.offDao = offDao;
	}
	public MailDao getMailDao() {
		return mailDao;
	}
	public void setMailDao(MailDao mailDao) {
		this.mailDao = mailDao;
	}
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		ActionForward forward=new ActionForward();
		HttpSession session = request.getSession(false);
		
		session.setAttribute("allStaff", staffDao.getStaff());
		session.setAttribute("regime",regimeDao.getRegime());
		session.setAttribute("news",newsDao.getNews());
		session.setAttribute("notice", noticeDao.getNotice());
		session.setAttribute("meeting", meetingDao.getMeeting());
		
		Staff staff=(Staff)session.getAttribute("staff");
		session.setAttribute("off", offDao.getOff(staff.getUsername()));
		
		session.setAttribute("allOff", offDao.getOff());
		session.setAttribute("mail", mailDao.getMail(staff.getUsername()));
		
		return mapping.findForward("res");
	}
}
