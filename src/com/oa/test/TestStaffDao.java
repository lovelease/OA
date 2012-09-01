package com.oa.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.oa.hibernate.beans.*;
import com.oa.hibernate.dao.*;

public class TestStaffDao {
	
	public static void main(String[] args) {
		
		ApplicationContext context=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/beans-config.xml");
		IStaffDao staffDao=(IStaffDao)context.getBean("staffDao");
		Staff staff=staffDao.getStaff("zhuzhu", "zhuzhu");
		System.out.println(staff.getRealname());
	}

}
