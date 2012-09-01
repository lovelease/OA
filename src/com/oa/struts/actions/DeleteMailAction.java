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

public class DeleteMailAction extends Action{
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
		
		String theobj=request.getParameter("username");
		Mail[] mail=mailDao.getMail(theobj);	
		out.println("<response>");
		if(mail.length!=0){
			if(mailDao.delete(mail)){
				out.println("<res>操作已成功！</res>");
			}
			else{
				out.println("<res>操作失败，请重新操作！</res>");
			}
		}
		else{
			out.println("<res>该用户收件箱内无信件！</res>");
		}
		out.println("</response>");
		out.close();
		return null;
	}
}
