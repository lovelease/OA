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

public class DeleteOffAction extends Action{
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
		Off[] off=offDao.getOff();
		if(off.length>=1){
			boolean isSuccess=false;
			for(int i=0;i<off.length;i++){
				offDao.delete(off[i]);
				if(i==off.length-1){
					isSuccess=true;
				}
			}
			session.setAttribute("allOff",offDao.getOff() );
			if(isSuccess){
				out.println("<response>");
				out.println("<res>所有请假记录已清空！</res>");
				out.println("</response>");
				out.close();
			}else{
				out.println("<response>");
				out.println("<res>删除失败，请重新删除！</res>");
				out.println("</response>");
				out.close();
			}
		}else{
			out.println("<response>");
			out.println("<res>目前没有任何请假记录！</res>");
			out.println("</response>");
			out.close();
		}
		return null;
	}
}
