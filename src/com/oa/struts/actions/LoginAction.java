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

import com.oa.struts.util.ToTimeFormat;
import com.oa.hibernate.beans.Attendance;
import com.oa.hibernate.beans.News;
import com.oa.hibernate.beans.Notice;
import com.oa.hibernate.beans.Regime;
import com.oa.hibernate.beans.Staff;
import com.oa.hibernate.dao.AttendanceDao;
import com.oa.hibernate.dao.MailDao;
import com.oa.hibernate.dao.MeetingDao;
import com.oa.hibernate.dao.NewsDao;
import com.oa.hibernate.dao.NoticeDao;
import com.oa.hibernate.dao.OffDao;
import com.oa.hibernate.dao.RegimeDao;
import com.oa.hibernate.dao.StaffDao;
import com.oa.struts.forms.LoginForm;

public class LoginAction extends Action{
	
	private StaffDao staffDao;
	private RegimeDao regimeDao;
	private NewsDao newsDao;
	private NoticeDao noticeDao;
	private AttendanceDao attendanceDao;
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
	public AttendanceDao getAttendanceDao() {
		return attendanceDao;
	}
	public void setAttendanceDao(AttendanceDao attendanceDao) {
		this.attendanceDao = attendanceDao;
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
		
		ActionMessages errors=new ActionMessages();
		ActionForward forward=new ActionForward();
		LoginForm loginForm=(LoginForm)form;
		
		String username=loginForm.getUsername();
		String password=loginForm.getPassword();
		
		// invalidate the original session if exists
		HttpSession session = request.getSession(false);
		if (session != null) {
			session.invalidate();
		}
		// create a new session for the user
		session = request.getSession(true);
		Staff staff=staffDao.getStaff(username, password);
		if(staff==null){
			errors.add("errorMsg",new ActionMessage("用户名或密码错误，请重新输入！",false));//false指不从资源文件中取值，而是用当前输入的信息
			addErrors(request,errors);
			forward=mapping.findForward("failed");
		}
		else{
			String type=request.getParameter("type");
			session.setAttribute("staff",staff);
			session.setAttribute("type", type);
			session.setAttribute("aid", querryAttendance(username));
			if(type.equals("staffLogin")){
				forward=mapping.findForward("stafflogin");
			}else{
				if(staff.getPower()==0L){
					errors.add("errorMsg",new ActionMessage("对不起，您不是管理员，请登录员工页面！",false));
					addErrors(request,errors);
					forward=mapping.findForward("failed");
				}else{
					forward=mapping.findForward("managerlogin");
				}
			}
		}
		
		Regime[] strArr=regimeDao.getRegime();
		session.setAttribute("regime", strArr);
		News[] newsArray=newsDao.getNews();
		session.setAttribute("news",newsArray);
		Notice[] noticeArray=noticeDao.getNotice();
		session.setAttribute("notice", noticeArray);
		Staff[] staffArray=staffDao.getStaff();
		session.setAttribute("allStaff", staffArray);
		session.setAttribute("meeting", meetingDao.getMeeting());
		session.setAttribute("off", offDao.getOff(username));
		session.setAttribute("allOff", offDao.getOff());
		session.setAttribute("mail", mailDao.getMail(username));
		
		return forward;
	}
	public Long querryAttendance(String username){
		Long id=null;
		Date rightNow=Calendar.getInstance().getTime();
		String newTime=ToTimeFormat.toTimeFormat(rightNow);
		String finalTime=newTime.substring(0, 10);
		Attendance[] attendance=attendanceDao.getAttendance(username);
		Date[] onTimeArray=new Date[attendance.length];
		for(int i=0;i<attendance.length;i++){
			onTimeArray[i]=attendance[i].getOntime();
		}
		String[] time=new String[onTimeArray.length];
		for(int i=0;i<onTimeArray.length;i++){
			time[i]=onTimeArray[i].toString().split(" ")[0];
		}
		for(int j=0;j<onTimeArray.length;j++){
			if(finalTime.equals(time[j])){
				id=attendance[j].getId();
				break;
			}
		}
		return id;
	}
	
}