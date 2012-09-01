package com.oa.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.oa.hibernate.dao.INewsDao;

public class TestNewsDao {

	public static void main(String[] args) {
		ApplicationContext context=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/beans-config.xml");
		INewsDao newsDao=(INewsDao)context.getBean("newsDao");
		int length=newsDao.getNews().length;
		String[] contentArray=new String[length];
		for(int i=0;i<length;i++){
			contentArray[i]=newsDao.getNews()[i].getContent();
		}
		for(int i=0;i<length;i++){
			System.out.println(contentArray[i]);
		}
	}
}
