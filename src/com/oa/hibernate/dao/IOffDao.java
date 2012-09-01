package com.oa.hibernate.dao;

import com.oa.hibernate.beans.Off;

public interface IOffDao {
	public Off[] getOff();
	public Off getOff(Long id);
	public Off[] getOff(String username);
	public boolean insert(Off off);
	public boolean update(Off off);
	public boolean delete(Off off);
}
