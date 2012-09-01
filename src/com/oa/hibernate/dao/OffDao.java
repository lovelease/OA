package com.oa.hibernate.dao;

import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.oa.hibernate.beans.News;
import com.oa.hibernate.beans.Off;

public class OffDao extends HibernateDaoSupport implements IOffDao{
	public Off[] getOff(){
		Off[] off;
		try{
			String qs="from Off order by id desc";
			List list=getHibernateTemplate().find(qs);
			Iterator itr=list.iterator();
			off=new Off[list.size()];
			for(int i=0;itr.hasNext();i++){
				off[i]=(Off)itr.next();
			}
		}catch(HibernateException e){
			throw e;
		}
		return off;
	}
	
	public Off getOff(Long id){
		String qs="from Off where id='"+id+"'";
		List list=getHibernateTemplate().find(qs);
		return (Off)list.get(0);
	}
	
	public Off[] getOff(String username){
		Off[] off;
		try{
			String qs="from Off where username='"+username+"' order by id desc";
			List list=getHibernateTemplate().find(qs);
			Iterator itr=list.iterator();
			off=new Off[list.size()];
			for(int i=0;itr.hasNext();i++){
				off[i]=(Off)itr.next();
			}
		}catch(HibernateException e){
			throw e;
		}
		return off;
	}
	
	public boolean insert(Off off){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().save(off);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean update(Off off){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().update(off);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean delete(Off off){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().delete(off);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
}
