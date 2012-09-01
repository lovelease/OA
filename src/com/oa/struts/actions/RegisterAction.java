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

public class RegisterAction extends Action{
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
		
		String username=request.getParameter("uname");
		String realname=request.getParameter("rname");
		String department=request.getParameter("dept");
		String position=request.getParameter("post");
		
		Staff staff=new Staff();
		staff.setDepartment(department);
		staff.setPassword("000000");
		staff.setPower(0L);
		staff.setPozition(position);
		staff.setRealname(realname);
		staff.setUsername(username);
		
		if(staffDao.insert(staff)){
			session.setAttribute("allStaff", staffDao.getStaff());
			Long id=staffDao.getStaff(username).getUserid();
			out.println("<response>");
			out.println("<res>注册成功！</res>");
			out.println("<res>"+realname+"</res>");
			out.println("<res>"+department+"</res>");
			out.println("<res>"+position+"</res>");
			out.println("<res>未填写</res>");
			out.println("<res>未填写</res>");
			out.println("<res>未填写</res>");
			out.println("<res>员工</res>");
			out.println("<res>"+id+"</res>");
			out.println("</response>");
			out.close();
		}else{
			out.println("<response>");
			out.println("<res>用户名已存在！</res>");
			out.println("<res>error</res>");
			out.println("<res>error</res>");
			out.println("<res>error</res>");
			out.println("<res>error</res>");
			out.println("<res>error</res>");
			out.println("<res>error</res>");
			out.println("<res>error</res>");
			out.println("<res>error</res>");
			out.println("</response>");
			out.close();
		}		
		return null;
	}
}
