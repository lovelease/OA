<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%com.oa.hibernate.beans.Staff staff=(com.oa.hibernate.beans.Staff)session.getAttribute("staff");%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>    
    <title>My JSP 'top.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/top.css">
	<script Language="JavaScript" src="JS/login.js"></script>
	
  </head>
  <%if(staff==null){ %><jsp:forward page="login.jsp target=_top"></jsp:forward><%} %>
  <%	String power=null;
	if(staff.getPower()==0){
		power="员工";
	}else{
		power="管理员";
	} 
	String mode=null;
	if(session.getAttribute("type").equals("staffLogin")){
		mode="员工登录";
	}else{
		mode="管理员登陆";
	}
%>
  <body onLoad="startclock()">
	<div>
		<table>
			<tr>
				<td><a href="regime.jsp" target="main"><img src="IMG/button_homepage.png" border="0"></a></td>
				<td><a href="logout.do" target="_top"><img src="IMG/button_logout.png" border="0"></a></td>
			</tr>
			<tr>
				<td><a href="regime.jsp" target="main">首页</a></td>
				<td><a href="logout.do" target="_top">退出</a></td>
			</tr>
		</table>
	</div>
	<span class="username">用户名：<%=staff.getRealname() %></span>
	<span class="department">部门：<%=staff.getDepartment() %></span>
	<span class="power">权限：<%=power %></span>
	<span class="mode">登录方式：<%=mode %></span>
    <form class="time" name="clock">
		<input name="thetime" style="font-family:'微软雅黑';font-size:15px;color:#003366;background-image:url(./IMG/formbg.png);border:0px" size="33" readonly="readonly">
	</form>
  </body>
</html>
