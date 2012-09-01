package com.oa.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.oa.hibernate.dao.IAttendanceDao;

public class TestAttendanceDao {

	public static void main(String[] args) {
		ApplicationContext context=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/beans-config.xml");
		IAttendanceDao attendanceDao=(IAttendanceDao)context.getBean("attendanceDao");
		int length=attendanceDao.getAttendance().length;
		String[] attendance=new String[length];
/*		for(int i=0;i<length;i++){
			attendance[i]=attendanceDao.getAttendance()[i].getOfftime().toString();
			System.out.println(attendance[i]);
		}
*/
	}
}
