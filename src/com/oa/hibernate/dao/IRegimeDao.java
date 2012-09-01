package com.oa.hibernate.dao;

import com.oa.hibernate.beans.Regime;

public interface IRegimeDao {
	public Regime[] getRegime();
	public String[] getRegimeContent();
	public Regime getRegime(String content);
	public Regime getRegime(Long id);
	public boolean insert(Regime regime);
	public boolean delete(Regime regime);
	public boolean alter(Regime regime);
}
