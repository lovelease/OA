package com.oa.struts.util;

import java.util.Date;

public class ToTimeFormat {
	public static String toTimeFormat(Date time){
		String str=time.toString();
		String[] strArray=str.split(" ");
		String month="";
		if(strArray[1].equals("Jan")){
			month="01";
		}else if(strArray[1].equals("Feb")){
			month="02";
		}else if(strArray[1].equals("Mar")){
			month="03";
		}else if(strArray[1].equals("Apr")){
			month="04";
		}else if(strArray[1].equals("May")){
			month="05";
		}else if(strArray[1].equals("Jun")){
			month="06";
		}else if(strArray[1].equals("Jul")){
			month="07";
		}else if(strArray[1].equals("Aug")){
			month="08";
		}else if(strArray[1].equals("Sep")){
			month="09";
		}else if(strArray[1].equals("Oct")){
			month="10";
		}else if(strArray[1].equals("Nov")){
			month="11";
		}else{
			month="12";
		}
		String newTime=strArray[5]+"-"+month+"-"+strArray[2]+" "+strArray[3];
		return newTime;
	}
}
