<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean"%>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html"%>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic"%>
<%@ taglib uri="http://struts.apache.org/tags-nested" prefix="nested"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'attendance.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/attendance.css">
	
	<script Language="JavaScript" src="JS/attendance.js"></script>


  </head>
  
  <body>
  	<div id="title"><span>工作考勤</span></div>
  	<img id="titlebg" src="IMG/title.png" />
  	<center>
    <form id="button" name="attendance" action="" method="post">
    	<table>
    		<tr>
    			<td><center><input type="image" src="IMG/hello.png" onClick="on()" /></center></td>
    			<td><center><input type="image" src="IMG/byebye.png" onClick="off()" /></center></td>
    		</tr>
    		<tr>
    			<td width=100px><center>上班考勤</center></td>
    			<td width=100px><center>下班考勤</center></td>
    		</tr>
    	</table>
    </form>
    <div id="message"><html:errors property="result" /></div>
    </center>
  </body>
</html>
