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

import com.oa.hibernate.beans.Mail;
import com.oa.hibernate.dao.MailDao;

public class SendMailAction extends Action{
	private MailDao mailDao;

	public MailDao getMailDao() {
		return mailDao;
	}

	public void setMailDao(MailDao mailDao) {
		this.mailDao = mailDao;
	}
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=response.getWriter();
		
		HttpSession session = request.getSession(false);
		
		String title=request.getParameter("title");
		String addressee=request.getParameter("addressee");
		String content=request.getParameter("content");
		String sendtime=request.getParameter("time");
		String senderUn=request.getParameter("senderUn");
		String senderRn=request.getParameter("senderRn");
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date time=sdf.parse(sendtime);
		
		if(mailDao.getMail(addressee).length<20){
			Mail mail=new Mail();
			mail.setAddressee(addressee);
			mail.setContent(content);
			mail.setSender(senderRn);
			mail.setSendtime(time);
			mail.setStatus(0L);
			mail.setTitle(title);
			
			out.println("<response>");
			if(mailDao.insert(mail)){
				session.setAttribute("mail", mailDao.getMail(senderUn));
				out.println("<res>发送成功！</res>");
			}
			else{
				out.println("<res>发送失败，请重新发送！</res>");
			}
			out.println("</response>");
			out.close();
		}
		else{
			out.println("<response>");
			out.println("<res>发送失败，该用户的收信箱已满（20）！</res>");
			out.println("</response>");
			out.close();
		}
		return null;
	}
}
