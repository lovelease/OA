package com.oa.hibernate.dao;

import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.oa.hibernate.beans.Notice;
import com.oa.struts.util.ToTimeFormat;

public class NoticeDao extends HibernateDaoSupport implements INoticeDao{
	public Notice[] getNotice(){
		Notice[] noticeArray;
		try{
			String qs="from Notice order by id desc";
			List list=getHibernateTemplate().find(qs);
			Iterator itr=list.iterator();
			noticeArray=new Notice[list.size()];
			for(int i=0;itr.hasNext();i++){
				noticeArray[i]=(Notice)itr.next();
			}
		}catch(HibernateException e){
			throw e;
		}
		return noticeArray;
	}
	
	public Notice getNotice(Long id){
		String qs="from Notice where id='"+id+"'";
		List list=getHibernateTemplate().find(qs);
		return (Notice)list.get(0);
	}
	
	public Notice getNotice(Date noticeDate){
		String newTime=ToTimeFormat.toTimeFormat(noticeDate);
		String qs="from Notice where noticedate=to_date('"+newTime+"','yyyy-mm-dd hh24:mi:ss')";
		List list=getHibernateTemplate().find(qs);
		return (Notice)list.get(0);
	}
	
	public boolean insert(Notice notice){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().save(notice);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean delete(Notice notice){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().delete(notice);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean alter(Notice notice){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().update(notice);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
}
