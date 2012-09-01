package com.oa.hibernate.dao;

import com.oa.hibernate.beans.Mail;

public interface IMailDao {
	public Mail[] getMail(String addressee);
	public Mail getMail(Long id);
	public boolean insert(Mail mail);
	public boolean delete(Mail[] mail);
	public boolean delete(Mail mail);
	public boolean update(Mail mail);
}
