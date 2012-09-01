package com.oa.hibernate.dao;

import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.oa.hibernate.beans.Regime;

public class RegimeDao extends HibernateDaoSupport implements IRegimeDao{
	public Regime[] getRegime(){
		Regime[] regArray;
		try{
			String qs="from Regime order by id desc";
			List list=getHibernateTemplate().find(qs);
			Iterator itr=list.iterator();
			regArray=new Regime[list.size()];
			for(int i=0;itr.hasNext();i++){
				regArray[i]=(Regime)itr.next();
			}
		}catch(HibernateException e){
			throw e;
		}
		return regArray;
	}
	public String[] getRegimeContent(){
		int len=getRegime().length;
		String[] contentArray=new String[len];
		for(int i=0;i<len;i++){
			contentArray[i]=getRegime()[i].getContent();
		}
		return contentArray;
	}
	public Regime getRegime(String content){
		try{
			String qs="from Regime where content=?";
			List list=getHibernateTemplate().find(qs,content);
			return (Regime)list.get(0);
		}catch(HibernateException e){
			throw e;
		}			
	}
	
	public Regime getRegime(Long id){
		try{
			String qs="from Regime where id='"+id+"'";
			List list=getHibernateTemplate().find(qs);
			return (Regime)list.get(0);
		}catch(HibernateException e){
			throw e;
		}
	}
	
	public boolean insert(Regime regime){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().save(regime);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean delete(Regime regime){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().delete(regime);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean alter(Regime regime){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().update(regime);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
}
