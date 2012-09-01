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

public class AlterStaffAction extends Action{
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
		
		String realname=request.getParameter("rname");
		String department=request.getParameter("dept");
		String position=request.getParameter("post");
		String newpower=request.getParameter("npow");
		String oldpower=request.getParameter("oldpow");
		String id=request.getParameter("idInfo");
		Long power;
		if(newpower.equals("员工")){power=0L;}
		else{power=1L;}
	
		Staff staff=staffDao.getStaff(Long.valueOf(id));
		staff.setRealname(realname);
		staff.setDepartment(department);
		staff.setPozition(position);
		staff.setPower(power);
		
		if(staffDao.update(staff)){
//			session.setAttribute("staff", staffDao.getStaff(Long.valueOf(id)));
			session.setAttribute("allStaff", staffDao.getStaff());
			out.println("<response>");
			out.println("<res>修改成功！</res>");
			out.println("<res>"+realname+"</res>");
			out.println("<res>"+department+"</res>");
			out.println("<res>"+position+"</res>");
			out.println("<res>"+newpower+"</res>");
			out.println("<res>"+oldpower+"</res>");
			out.println("<res>"+id+"</res>");
			out.println("</response>");
			out.close();
		}else{
			out.println("<response>");
			out.println("<res>操作失败，请重新修改！</res>");
			out.println("</response>");
			out.close();
		}
		if(power==1L&&oldpower.equals("员工")){
			Staff oldManager=(Staff)session.getAttribute("staff");
			oldManager.setPower(0L);
			staffDao.update(oldManager);
			session.setAttribute("allStaff", staffDao.getStaff());
			session.setAttribute("staff", staffDao.getStaff(oldManager.getUsername()));
			session.invalidate();
		}
		
		return null;
	}
	
}
