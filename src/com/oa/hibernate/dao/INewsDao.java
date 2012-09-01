package com.oa.hibernate.dao;

import java.util.Date;

import com.oa.hibernate.beans.News;

public interface INewsDao {
	public News[] getNews();
	public News getNews(Long id);
	public News getNews(Date newsDate);
	public boolean insert(News news);
	public boolean delete(News news);
	public boolean alter(News news);
}
