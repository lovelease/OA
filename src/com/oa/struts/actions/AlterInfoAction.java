package com.oa.struts.actions;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.oa.hibernate.beans.Staff;
import com.oa.hibernate.dao.StaffDao;

public class AlterInfoAction extends Action{
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
		
		String password=request.getParameter("nwpd");
		String address=request.getParameter("nwad");
		String mobile=request.getParameter("nwmb");
		String email=request.getParameter("nwem");
		String id=request.getParameter("idInfo");
		
		Staff staff=staffDao.getStaff(Long.valueOf(id));
		staff.setPassword(password);
		staff.setAddress(address);
		staff.setMobile(Long.valueOf(mobile));
		staff.setEmail(email);
		
		out.println("<response>");
		if(staffDao.update(staff)){
			session.setAttribute("staff", staffDao.getStaff(Long.valueOf(id)));
			session.setAttribute("allStaff", staffDao.getStaff());
			out.println("<res>修改成功！</res>");
			out.println("<res>"+address+"</res>");
			out.println("<res>"+mobile+"</res>");
			out.println("<res>"+email+"</res>");
			out.println("<res>"+id+"</res>");
		}else{
			out.println("<res>修改失败，请重新操作！</res>");
		}
		out.println("</response>");
		out.close();
		return null;
	}
}
