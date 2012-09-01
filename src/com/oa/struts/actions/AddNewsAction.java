package com.oa.struts.actions;

import java.io.PrintWriter;
import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.News;
import com.oa.hibernate.dao.NewsDao;
import com.oa.struts.util.ToTimeFormat;

public class AddNewsAction extends Action{
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
		
		String content=request.getParameter("content");
		News news=new News();
		news.setContent(content);
		Date rightNow=Calendar.getInstance().getTime();
		news.setNewsdate(rightNow);
		if(newsDao.insert(news)){
			session.setAttribute("news", newsDao.getNews());
			String newTime=ToTimeFormat.toTimeFormat(rightNow);
			String idInfo=newsDao.getNews(rightNow).getId().toString();
			out.println("<response>");
			out.println("<res>添加成功！</res>");
			out.println("<res>"+content+"</res>");
			out.println("<res>"+idInfo+"</res>");
			out.println("<res>"+newTime+"</res>");
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
