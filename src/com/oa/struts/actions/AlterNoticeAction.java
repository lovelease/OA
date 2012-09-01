package com.oa.struts.actions;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.Notice;
import com.oa.hibernate.dao.NoticeDao;

public class AlterNoticeAction extends Action{
	private NoticeDao noticeDao;

	public NoticeDao getNoticeDao() {
		return noticeDao;
	}
	public void setNoticeDao(NoticeDao noticeDao) {
		this.noticeDao = noticeDao;
	}
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=response.getWriter();
		
		HttpSession session = request.getSession(false);
		Long id=Long.valueOf(request.getParameter("id"));
		String content=request.getParameter("cnt");
		
		Notice notice=noticeDao.getNotice(id);
		if(notice!=null){
			notice.setContent(content);
			if(noticeDao.alter(notice)){
				session.setAttribute("notice", noticeDao.getNotice());
				out.println("<response>");
				out.println("<res>修改成功！</res>");
				out.println("<res>"+content+"</res>");
				out.println("<res>"+id+"</res>");
				out.println("</response>");
				out.close();
			}else{
				out.println("<response>");
				out.println("<res>服务器忙，请稍后再试！</res>");
				out.println("</response>");
				out.close();
			}
		}else{
			out.println("<response>");
			out.println("<res>不存在该记录</res>");
			out.println("</response>");
			out.close();
		}
		return null;
	}
}
