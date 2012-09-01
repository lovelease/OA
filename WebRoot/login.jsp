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
    
    <title>用户登录</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/login.css">

	<script Language="JavaScript" src="JS/login.js"></script> 
  </head>
  
  <body onload="startclock();rnd_str(4,1,1,1)">
  	<div><img src="IMG/login_logo.png" /></div>
  	<center>
  		<form name="login" action="" method="post">
  			<div class="message"><html:errors property="errorMsg" /></div>
  			<div class="form">
  				<table>
  					<tr><td>用户名：</td><td><input id="userId" type="text" value="请输入用户名" name="username" size="10" onfocus="inputUserId()" onblur="endUserId()"></td><td></td></tr>
  					<tr><td class="center">密码：</td><td><input id="psw" type="password"  name="password" size="13" onfocus="inputPsw()" onblur="endPsw()"></td><td></td></tr>
  					<tr><td>验证码：</td><td><input id="valid" type="text" onblur="endValid()"></td><td id="validcode"></td>
  					<tr><td><input type="button" value="员工登录" onClick="staffLogin()"></td><td class="center"><input type="button" value="管理员登录" onClick="managerLogin()"></td></tr>
  				</table>
  			</div>
  		</form>
  	</center>
  	<form class="time" name="clock">
		<input name="thetime"  style="font-family:'微软雅黑'; font-size:15px;color:#003366;background-color:#ccccff;border:0px" size="33" readonly="readonly">
	</form>
  </body>
</html>
