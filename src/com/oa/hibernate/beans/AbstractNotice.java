package com.oa.hibernate.beans;

import java.util.Date;

/**
 * AbstractNotice generated by MyEclipse Persistence Tools
 */

public abstract class AbstractNotice implements java.io.Serializable {

	// Fields

	private Long id;
	private String content;
	private Date noticedate;

	// Constructors

	/** default constructor */
	public AbstractNotice() {
	}

	/** full constructor */
	public AbstractNotice(String content, Date noticedate) {
		this.content = content;
		this.noticedate = noticedate;
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

	public Date getNoticedate() {
		return this.noticedate;
	}

	public void setNoticedate(Date noticedate) {
		this.noticedate = noticedate;
	}

}