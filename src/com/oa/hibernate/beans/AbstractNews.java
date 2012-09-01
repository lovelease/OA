package com.oa.hibernate.beans;

import java.util.Date;

/**
 * AbstractNews generated by MyEclipse Persistence Tools
 */

public abstract class AbstractNews implements java.io.Serializable {

	// Fields

	private Long id;
	private String content;
	private Date newsdate;

	// Constructors

	/** default constructor */
	public AbstractNews() {
	}

	/** full constructor */
	public AbstractNews(String content, Date newsdate) {
		this.content = content;
		this.newsdate = newsdate;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getNewsdate() {
		return this.newsdate;
	}

	public void setNewsdate(Date newsdate) {
		this.newsdate = newsdate;
	}

}