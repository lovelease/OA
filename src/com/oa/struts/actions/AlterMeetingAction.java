package com.oa.struts.actions;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.Meeting;
import com.oa.hibernate.dao.MeetingDao;

public class AlterMeetingAction extends Action{
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
		String cnt=request.getParameter("content");
		String rom=request.getParameter("room");
		String att=request.getParameter("attendant");
		String year=request.getParameter("hyn");
		String month=request.getParameter("hyy");
		String date=request.getParameter("hyr");
		String bh=request.getParameter("kss");
		String bm=request.getParameter("ksf");
		String eh=request.getParameter("jss");
		String em=request.getParameter("jsf");
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date begin=sdf.parse(year+"-"+month+"-"+date+" "+bh+":"+bm+":"+"00");
		Date end=sdf.parse(year+"-"+month+"-"+date+" "+eh+":"+em+":"+"00");
		
		List list=meetingDao.getMeeting(rom);
		Meeting[] met=new Meeting[list.size()];
		Date[] btime=new Date[list.size()];
		Date[] etime=new Date[list.size()];
		boolean isConflict=false;
		if(list.size()!=0){
			for(int i=0;i<list.size();i++){
				met[i]=(Meeting)list.get(i);
				btime[i]=met[i].getBegintime();
				etime[i]=met[i].getEndtime();
				if(end.before(btime[i])||begin.after(etime[i])){
				}else{
					isConflict=true;
				}
			}
		}
		if(isConflict==true){
			out.println("<response>");
			out.println("<res>该房间在该时间段已有预定！</res>");
			out.println("<res>"+cnt+"</res>");
			out.println("<res>"+year+"-"+month+"-"+date+" "+bh+":"+bm+":"+"00.0"+"</res>");
			out.println("<res>"+eh+":"+em+":"+"00.0"+"</res>");
			out.println("<res>"+rom+"</res>");
			out.println("<res>"+att+"</res>");
			out.println("<res>冲突</res>");
			out.println("</response>");
			out.close();
		}else{
			Meeting meeting=meetingDao.getMeeting(id);
			meeting.setAttendant(att);
			meeting.setBegintime(begin);
			meeting.setContent(cnt);
			meeting.setEndtime(end);
			meeting.setRoom(rom);
			if(meetingDao.alter(meeting)){
				session.setAttribute("meeting",meetingDao.getMeeting());
				
				if(bm.equals("0")||bm.equals("5")){
					bm="0"+bm;
				}
				if(em.equals("0")||em.equals("5")){
					em="0"+em;
				}
				if(bh.equals("9")){
					bh="0"+bh;
				}
				if(eh.equals("9")){
					eh="0"+eh;
				}
				if(Integer.valueOf(date)>=1&&Integer.valueOf(date)<=9){
					date="0"+date;
				}
				if(!month.equals("10")&&!month.equals("11")&&!month.equals("12")){
					month="0"+month;
				}
				
				out.println("<response>");
				out.println("<res>修改成功！</res>");
				out.println("<res>"+cnt+"</res>");
				out.println("<res>"+year+"-"+month+"-"+date+" "+bh+":"+bm+":"+"00.0"+"</res>");
				out.println("<res>"+eh+":"+em+":"+"00.0"+"</res>");
				out.println("<res>"+rom+"</res>");
				out.println("<res>"+att+"</res>");
				out.println("<res>"+id.toString()+"</res>");
				out.println("</response>");
				out.close();
			}else{
				out.println("<response>");
				out.println("<res>服务器忙，请稍后再试！</res>");
				out.println("</response>");
				out.close();
			}
		}
		return null;
	}
}
