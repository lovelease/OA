package com.oa.hibernate.dao;

import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.oa.hibernate.beans.Staff;

public class StaffDao extends HibernateDaoSupport implements IStaffDao{
	
	public Staff getStaff(String username,String password){
			String qs="from Staff where username=? and password=?";
			List list=getHibernateTemplate().find(qs,new String[]{username,password});
			if(list.size()!=0){
				return (Staff)list.get(0);
			}
		return null;
	}
	public Staff[] getStaff(){
		String qs="from Staff order by userid desc";
		List list=getHibernateTemplate().find(qs);
		Iterator itr=list.iterator();
		Staff[] staff=new Staff[list.size()];
		for(int i=0;itr.hasNext();i++){
			staff[i]=(Staff)itr.next();
		}
		return staff;
	}
	
	public Staff getStaff(Long id){
		String qs="from Staff where id='"+id+"'";
		List list=getHibernateTemplate().find(qs);
		return (Staff)list.get(0);
	}
	
	public Staff getStaff(String username){
		String qs="from Staff where username='"+username+"'";
		List list=getHibernateTemplate().find(qs);
		return (Staff)list.get(0);
	}
	
	public boolean insert(Staff staff){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().save(staff);
			isSuccess=true;
		}catch(HibernateException e){
			isSuccess=false;
			throw e;
		}
		return isSuccess;
	}
	
	public boolean update(Staff staff){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().update(staff);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	
	public boolean delete(Staff staff){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().delete(staff);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
}
