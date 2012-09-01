package com.oa.hibernate.dao;

import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.oa.hibernate.beans.Mail;

public class MailDao extends HibernateDaoSupport implements IMailDao{
	public Mail[] getMail(String addressee){
		Mail[] mail;
		String qs="from Mail where addressee='"+addressee+"' order by id desc";
		List list=getHibernateTemplate().find(qs);
		Iterator itr=list.iterator();
		mail=new Mail[list.size()];
		for(int i=0;itr.hasNext();i++){
			mail[i]=(Mail)itr.next();
		}
		return mail;
	}
	
	public Mail getMail(Long id){
		String qs="from Mail where id='"+id+"'";
		List list=getHibernateTemplate().find(qs);
		return (Mail)list.get(0);
	}
	
	public boolean insert(Mail mail){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().save(mail);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean delete(Mail mail){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().delete(mail);
			isSuccess=true;			
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean delete(Mail[] mail){
		boolean isSuccess=false;
		try{
			for(int i=0;i<mail.length;i++){
				getHibernateTemplate().delete(mail[i]);
			}
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	public boolean update(Mail mail){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().update(mail);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
}
