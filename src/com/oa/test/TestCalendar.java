package com.oa.test;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.oa.hibernate.beans.Attendance;
import com.oa.hibernate.dao.AttendanceDao;
import com.oa.struts.actions.AttendanceAction;
public class TestCalendar {


	public static void main(String[] args) throws Exception{
		AttendanceAction aa=new AttendanceAction();
//		System.out.println(aa.offResult());
		
		Attendance attendance=new Attendance();
		Calendar rightNow = Calendar.getInstance();
		
		Date date=rightNow.getTime();
		System.out.println(date);
		attendance.setUsername("i");
		attendance.setOfftime(date);
		ApplicationContext context=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/beans-config.xml");
		AttendanceDao ad=(AttendanceDao)context.getBean("attendanceDao");
		System.out.println(date);
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date d1=sdf.parse("2009-5-1 23:00:00");
		Date d2=sdf.parse("2009-5-2 23:00:00");
		
		System.out.println(d1.before(d2));
	}
}
