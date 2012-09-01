 <%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.oa.hibernate.beans.Staff"%>

<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean"%>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html"%>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic"%>
<%@ taglib uri="http://struts.apache.org/tags-nested" prefix="nested"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<% 
	Staff[] staffArray=(Staff[])session.getAttribute("allStaff"); 
	int length=staffArray.length;
	String[] realname=new String[length];
	String[] username=new String[length];
	for(int i=0;i<length;i++){
		realname[i]=staffArray[i].getRealname();
		username[i]=staffArray[i].getUsername();
	}
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'attendanceQuerry.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/attendanceQuerry.css">
	<script type="text/javascript" src="JS/fenye.js"></script>
	<script src="JS/attendanceQuerry.js"></script>
	<script src="JS/createXMLHttpRequest.js"></script>
	<script src="JS/share.js"></script>

  </head>
  
  <body onLoad="fenye();time('by','bm','bd','bdiv',0);time('ey','em','ed','ediv',0)">
    <div id="title">
    	<span>考勤查询</span>
    	<span id="add" onClick="clr()">清空考勤记录</span>
    	<span style="position:relative;left:80px;">选择查询区间：</span>
    	<form id="bdiv" style="position:absolute;left:450px;width:145px;"></form>
    	<span style="position:absolute;left:600px;">至</span>
    	<form id="ediv" style="position:absolute;left:630px;width:145px;"></form>
    </div>
    <img id="titlebg" src="IMG/title.png" />
    <div id="introduce"><center>请点击要查询的员工姓名</center></div>
    <div id="rounddiv">
    	<div id="content">
    		<table>
    		<%for(int i=0;i<length;i=i+7){ %>
    			<tr>
    				<td><center><a id="tt<%=i %>" href="" target="_new" onClick="send(<%=i %>)"><%=realname[i] %></a></center></td>
    			<%if(i==length-1) break; %>
    				<td><center><a id="tt<%=i+1 %>" href="" target="_new" onClick="send(<%=i+1 %>)"><%=realname[i+1] %></a></center></td>
    			<%if(i==length-2) break; %>
    				<td><center><a id="tt<%=i+2 %>" href="" target="_new" onClick="send(<%=i+2 %>)"><%=realname[i+2] %></a></center></td>
    			<%if(i==length-3) break; %>
    				<td><center><a id="tt<%=i+3 %>" href="" target="_new" onClick="send(<%=i+3 %>)"><%=realname[i+3] %></a></center></td>
    			<%if(i==length-4) break; %>
    				<td><center><a id="tt<%=i+4 %>" href="" target="_new" onClick="send(<%=i+4 %>)"><%=realname[i+4] %></a></center></td>
    			<%if(i==length-5) break; %>
    				<td><center><a id="tt<%=i+5 %>" href="" target="_new" onClick="send(<%=i+5 %>)"><%=realname[i+5] %></a></center></td>
    			<%if(i==length-6) break; %>
    				<td><center><a id="tt<%=i+6 %>" href="" target="_new" onClick="send(<%=i+6 %>)"><%=realname[i+6] %></a></center></td>
    			</tr>
    		<% } %>
    		</table>
    	</div>
    </div>
    <div id="pages"></div>
    <%for(int i=0;i<length;i++){ %>
    <input id="un<%=i %>" type="hidden" value="<%=username[i] %>" />
    <%} %>
  </body>
</html>
