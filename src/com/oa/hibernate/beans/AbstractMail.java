package com.oa.hibernate.beans;

import java.util.Date;

/**
 * AbstractMail generated by MyEclipse Persistence Tools
 */

public abstract class AbstractMail implements java.io.Serializable {

	// Fields

	private Long id;
	private String sender;
	private String addressee;
	private String title;
	private String content;
	private Date sendtime;
	private Long status;

	// Constructors

	/** default constructor */
	public AbstractMail() {
	}

	/** minimal constructor */
	public AbstractMail(String sender, String addressee, String title,
			Date sendtime, Long status) {
		this.sender = sender;
		this.addressee = addressee;
		this.title = title;
		this.sendtime = sendtime;
		this.status = status;
	}

	/** full constructor */
	public AbstractMail(String sender, String addressee, String title,
			String content, Date sendtime, Long status) {
		this.sender = sender;
		this.addressee = addressee;
		this.title = title;
		this.content = content;
		this.sendtime = sendtime;
		this.status = status;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSender() {
		return this.sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public String getAddressee() {
		return this.addressee;
	}

	public void setAddressee(String addressee) {
		this.addressee = addressee;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getSendtime() {
		return this.sendtime;
	}

	public void setSendtime(Date sendtime) {
		this.sendtime = sendtime;
	}

	public Long getStatus() {
		return this.status;
	}

	public void setStatus(Long status) {
		this.status = status;
	}

}