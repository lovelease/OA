package com.oa.hibernate.dao;

import com.oa.struts.util.ToTimeFormat;

import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.oa.hibernate.beans.Attendance;

public class AttendanceDao extends HibernateDaoSupport implements IAttendanceDao{
	public Attendance[] getAttendance(){
		Attendance[] attendance;
		try{
			String qs="from Attendance";
			List list=getHibernateTemplate().find(qs);
			Iterator itr=list.iterator();
			attendance=new Attendance[list.size()];
			for(int i=0;itr.hasNext();i++){
				attendance[i]=(Attendance)itr.next();
			}
		}catch(HibernateException e){
			throw e;
		}
		return attendance;
	}
	public Attendance getAttendance(Date rightNow){
		String newTime=ToTimeFormat.toTimeFormat(rightNow);
		String qs="from Attendance where ontime=to_date('"+newTime+"','yyyy-mm-dd hh24:mi:ss')";
		List list=getHibernateTemplate().find(qs);	
		return (Attendance)list.get(0);
	}
	public Attendance getAttendance(Long id){
			String qs="from Attendance where id in ("+id+")";
			List result=getHibernateTemplate().find(qs);
			return (Attendance)result.get(0);
	}
	public Attendance[] getAttendance(String username){
		String qs="from Attendance where username='"+username+"'";
		List list=getHibernateTemplate().find(qs);
		Iterator itr=list.iterator();
		Attendance[] attendance=new Attendance[list.size()];
		for(int i=0;itr.hasNext();i++){
			attendance[i]=(Attendance)itr.next();
		}
		return attendance;
	}
	
	public Attendance[] getAttendance(String username,Date btime,Date etime){
		String tobtime=ToTimeFormat.toTimeFormat(btime);
		String toetime=ToTimeFormat.toTimeFormat(etime);
		String qs="from Attendance where username='"+username+"' and ontime between to_date('"+tobtime+"','yyyy-mm-dd hh24:mi:ss') and to_date('"+toetime+"','yyyy-mm-dd hh24:mi:ss'))";
		List list=getHibernateTemplate().find(qs);
		Iterator itr=list.iterator();
		Attendance[] attendance=new Attendance[list.size()];
		for(int i=0;itr.hasNext();i++){
			attendance[i]=(Attendance)itr.next();
		}
		return attendance;
	}
	
	public boolean setOn(Attendance attendance){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().save(attendance);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	public boolean setOff(Attendance attendance){
		boolean isSuccess=false;
		try{
			getHibernateTemplate().update(attendance);
			isSuccess=true;
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
	public Date[] getOnTime(String username){
		String qs="from Attendance where username='"+username+"'";
		List list=getHibernateTemplate().find(qs);
		Iterator itr=list.iterator();
		Attendance[] array=new Attendance[list.size()];
		Date[] dateArray=new Date[list.size()];
		for(int i=0;itr.hasNext();i++){
			array[i]=(Attendance)itr.next();
			dateArray[i]=array[i].getOntime();
		}	
		return dateArray;
	}
	public Date[] getOffTime(String username){
		String qs="from Attendance where username='"+username+"'";
		List list=getHibernateTemplate().find(qs);
		Iterator itr=list.iterator();
		Attendance[] array=new Attendance[list.size()];
		Date[] dateArray=new Date[list.size()];
		for(int i=0;itr.hasNext();i++){
			array[i]=(Attendance)itr.next();
			dateArray[i]=array[i].getOfftime();
		}
		return dateArray;
	}
	public boolean delete(Attendance[] attendance){
		boolean isSuccess=false;
		try{
			for(int i=0;i<attendance.length;i++){
				getHibernateTemplate().delete(attendance[i]);
				if(i==attendance.length-1){
					isSuccess=true;
				}
			}
		}catch(HibernateException e){
			throw e;
		}
		return isSuccess;
	}
}
