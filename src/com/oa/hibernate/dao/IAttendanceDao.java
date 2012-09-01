package com.oa.hibernate.dao;

import java.util.Date;

import com.oa.hibernate.beans.Attendance;

public interface IAttendanceDao {
	public Attendance[] getAttendance();
	public Attendance getAttendance(Date rightNow);
	public Attendance getAttendance(Long id);
	public Attendance[] getAttendance(String username);
	public Attendance[] getAttendance(String username,Date btime,Date etime);
	public boolean setOn(Attendance attendance);
	public boolean setOff(Attendance attendance);
	public Date[] getOnTime(String username);
	public Date[] getOffTime(String username);
	public boolean delete(Attendance[] attendance);
}
