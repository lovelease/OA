package com.oa.hibernate.dao;

import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.oa.hibernate.beans.Meeting;
import com.oa.hibernate.beans.Regime;

public class MeetingDao extends HibernateDaoSupport implements IMeetingDao{
	
	public Meeting[] getMeeting(){
		Meeting[] meeting;
		try{
			String qs="from Meeting order by id desc";
			List list=getHibernateTemplate().find(qs);
			Iterator itr=list.iterator();
			meeting=new Meeting[list.size()];
			for(int i=0;itr.hasNext();i++){
				meeting[i]=(Meeting)itr.next();
			}
		}catch(HibernateException e){
			throw e;
		}
		return meeting;
	}
	
	public List getMeeting(String room){
		String qs="from Meeting where room='"+room+"'";
		List list=getHibernateTemplate().find(qs);
		return list;
	}
	
	public Meeting getMeeting(Long id){
		String qs="from Meeting where id='"+id+"'";
		List list=getHibernateTemplate().find(qs);
		return (Meeting)list.get(0);
	}
	
	public boolean insert(Meeting meeting){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().save(meeting);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean alter(Meeting meeting){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().update(meeting);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean delete(Meeting meeting){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().delete(meeting);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
}
