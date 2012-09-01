package com.oa.struts.actions;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.News;
import com.oa.hibernate.dao.NewsDao;

public class DeleteNewsAction extends Action{
	private NewsDao newsDao;

	public NewsDao getNewsDao() {
		return newsDao;
	}

	public void setNewsDao(NewsDao newsDao) {
		this.newsDao = newsDao;
	}
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=response.getWriter();
		
		HttpSession session = request.getSession(false);
		
		Long id=Long.valueOf(request.getParameter("id"));
		
		News news=newsDao.getNews(id);
		if(news!=null){
			if(newsDao.delete(news)){
				session.setAttribute("news", newsDao.getNews());
				out.println("<response>");
				out.println("<res>删除成功！</res>");
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
			out.println("<res>不存在该记录！</res>");
			out.println("</response>");
			out.close();
		}
		return null;
	}
}
