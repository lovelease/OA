package com.oa.struts.actions;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.Regime;
import com.oa.hibernate.dao.RegimeDao;

public class AddRegimeAction extends Action{
	private RegimeDao regimeDao;
	
	public RegimeDao getRegimeDao() {
		return regimeDao;
	}

	public void setRegimeDao(RegimeDao regimeDao) {
		this.regimeDao = regimeDao;
	}
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=response.getWriter();
		
		HttpSession session = request.getSession(false);
		
		String content=request.getParameter("content");	
		Regime regime=new Regime();
		regime.setContent(content);	
		if(regimeDao.insert(regime)){
			session.setAttribute("regime",regimeDao.getRegime());
			String idInfo=regimeDao.getRegime(content).getId().toString();
			out.println("<response>");
			out.println("<res>添加成功！</res>");
			out.println("<res>"+content+"</res>");
			out.println("<res>"+idInfo+"</res>");
			out.println("</response>");
		}else{
			out.println("<response>");
			out.println("<res>服务器忙，请稍后再试！</res>");
			out.println("</response>");
		}
		return null;
	}
}
