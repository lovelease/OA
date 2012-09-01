package com.oa.hibernate.dao;

import java.util.List;

import com.oa.hibernate.beans.Meeting;

public interface IMeetingDao {
	public Meeting[] getMeeting();
	public List getMeeting(String room);
	public Meeting getMeeting(Long id);
	public boolean insert(Meeting meeting);
	public boolean alter(Meeting meeting);
	public boolean delete(Meeting meeting);
}
