package com.oa.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.oa.hibernate.dao.INoticeDao;
import com.oa.hibernate.dao.NoticeDao;

public class TestNoticeDao {

	public static void main(String[] args) {
		ApplicationContext context=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/beans-config.xml");
		INoticeDao noticeDao=(INoticeDao)context.getBean("noticeDao");
		int length=noticeDao.getNotice().length;
		String[] contentArray=new String[length];
		for(int i=0;i<length;i++){
			contentArray[i]=noticeDao.getNotice()[i].getContent();
		}
		for(int i=0;i<length;i++){
			System.out.println(contentArray[i]);
		}
	}
}
