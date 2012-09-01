package com.oa.test;

import com.oa.struts.util.ToTimeFormat;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TestDateFormat {

	public static void main(String[] args) {
		Date rightNow=Calendar.getInstance().getTime();
		System.out.println(rightNow);
//		String newTime=ToTimeFormat.toTimeFormat(rightNow);
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String newTime=sdf.format(rightNow);
		System.out.println(newTime);
//		try{
//			DateFormat ft=new SimpleDateFormat("yyyy-MM-dd");
//			Date stringToDate = ft.parse("1986-11-11");
//			Date date = new Date(stringToDate.getTime());
//			System.out.println(stringToDate);
//		}catch(Exception e){
//			e.printStackTrace();
//		}
	}

}
