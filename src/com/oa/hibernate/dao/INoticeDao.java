package com.oa.hibernate.dao;

import java.util.Date;

import com.oa.hibernate.beans.Notice;

public interface INoticeDao {
	public Notice[] getNotice();
	public Notice getNotice(Long id);
	public Notice getNotice(Date noticeDate);
	public boolean insert(Notice notice);
	public boolean delete(Notice notice);
	public boolean alter(Notice notice);
}
