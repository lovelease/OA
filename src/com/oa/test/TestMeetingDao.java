package com.oa.test;

import java.util.Calendar;
import java.util.Date;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.oa.hibernate.beans.Meeting;
import com.oa.hibernate.dao.IMeetingDao;

public class TestMeetingDao {
	public static void main(String[] args) {
		ApplicationContext context=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/beans-config.xml");
		IMeetingDao meetingDao=(IMeetingDao)context.getBean("meetingDao");
		int length=meetingDao.getMeeting().length;
		String[] array=new String[length];
		for(int i=0;i<length;i++){
			array[i]=meetingDao.getMeeting()[i].getId().toString();
		}
		for(int i=0;i<length;i++){
			System.out.println(array[i]);
		}

/*		Meeting meeting=new Meeting();
		meeting.setAttendant("软件部");
		meeting.setContent("关于");
		meeting.setRoom("102");
		Calendar rightNow = Calendar.getInstance();
		Date date=rightNow.getTime();
		meeting.setBegintime(date);
		meeting.setEndtime(date);
		boolean b=meetingDao.insert(meeting);
		System.out.println(b);
*/
	}
}
