package com.oa.hibernate.dao;

import java.util.List;

import com.oa.hibernate.beans.Staff;

public interface IStaffDao {
	
	public Staff getStaff(String username,String password);
	public Staff[] getStaff();
	public Staff getStaff(String username);
	public Staff getStaff(Long id);
	public boolean insert(Staff staff);
	public boolean update(Staff staff);
	public boolean delete(Staff staff);
}
