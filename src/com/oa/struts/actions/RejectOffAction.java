package com.oa.struts.actions;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.Off;
import com.oa.hibernate.dao.OffDao;

public class RejectOffAction extends Action{
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
		
		Long id=Long.valueOf(request.getParameter("idInfo"));
		Off off=offDao.getOff(id);
		off.setStatus(2L);
		if(offDao.update(off)){
			session.setAttribute("allOff", offDao.getOff());
			out.println("<response>");
			out.println("<res>操作已成功！</res>");
			out.println("<res>"+id+"</res>");
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
