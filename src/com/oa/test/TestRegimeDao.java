package com.oa.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.oa.hibernate.dao.IRegimeDao;

public class TestRegimeDao {

	public static void main(String[] args) {
		ApplicationContext context=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/beans-config.xml");
		IRegimeDao regDao=(IRegimeDao)context.getBean("regimeDao");
		int length=regDao.getRegime().length;
		String[] contentArray=new String[length];
		for(int i=0;i<length;i++){
			contentArray[i]=regDao.getRegime()[i].getContent();
		}
		for(int i=0;i<length;i++){
			//System.out.println(contentArray[i]);
		}
		System.out.println(regDao.getRegime(Long.valueOf("481")).getContent());
	}
}
