package com.oa.struts.actions;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.Meeting;
import com.oa.hibernate.beans.Staff;
import com.oa.hibernate.dao.StaffDao;

public class DeleteStaffAction extends Action {
	private StaffDao staffDao;

	public StaffDao getStaffDao() {
		return staffDao;
	}

	public void setStaffDao(StaffDao staffDao) {
		this.staffDao = staffDao;
	}
	
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out=response.getWriter();
		
		HttpSession session = request.getSession(false);
		
		Long id=Long.valueOf(request.getParameter("idInfo"));
		Staff staff=staffDao.getStaff(id);
		if(staffDao.delete(staff)){
			session.setAttribute("allStaff",staffDao.getStaff());
			out.println("<response>");
			out.println("<res>删除成功！</res>");
			out.println("<res>"+id.toString()+"</res>");
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
