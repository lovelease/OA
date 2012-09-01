package com.oa.hibernate.dao;

import org.hibernate.HibernateException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.oa.hibernate.beans.News;
import com.oa.struts.util.ToTimeFormat;

import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class NewsDao extends HibernateDaoSupport implements INewsDao{
	public News[] getNews(){
		News[] newsArray;
		try{
			String qs="from News order by id desc";
			List newsList=getHibernateTemplate().find(qs);
			Iterator itr=newsList.iterator();
			newsArray=new News[newsList.size()];
			for(int i=0;itr.hasNext();i++){
				newsArray[i]=(News)itr.next();
			}
		}catch(HibernateException e){
			throw e;
		}
		return newsArray;
	}
	
	public News getNews(Long id){
		String qs="from News where id='"+id+"'";
		List list=getHibernateTemplate().find(qs);
		return (News)list.get(0);
	}
	
	public News getNews(Date newsDate){
		String newTime=ToTimeFormat.toTimeFormat(newsDate);
		String qs="from News where newsdate=to_date('"+newTime+"','yyyy-mm-dd hh24:mi:ss')";
		List list=getHibernateTemplate().find(qs);
		return (News)list.get(0);
	}
	
	public boolean insert(News news){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().save(news);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean delete(News news){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().delete(news);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean alter(News news){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().update(news);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
}
