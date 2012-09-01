<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'left.jsp' starting page</title>
    
    <meta http-equiv="refresh" content="3600;url=refresh.do">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="CSS/left.css">
	<script type="text/javascript" src="JS/left.js"></script>
	
	<script>
		var value1=["企业制度","企业新闻","公告通知"];
		var href1=["regime.jsp","news.jsp","notice.jsp"];
		var value2=["工作考勤","会议查询","请假记录"];
		var href2=["attendance.jsp","meeting.jsp","off.jsp"];
		var value3=["人事信息"];
		var href3=["staff.jsp"];
		var value4=["收文管理","发文管理"];
		var href4=["receive.jsp","send.jsp"];
		var value5=["请假批示","会议管理"];
		var href5=["off.jsp","meeting.jsp"];
		var value6=["考勤查询","员工管理"];
		var href6=["attendanceQuerry.jsp","staff.jsp"];
		var value7=["收文管理","发文管理"];
		var href7=["receive.jsp","send.jsp"];
	</script>
  </head>
  
  <body>
  <% if(session.getAttribute("type").equals("staffLogin")){ %>
  		<p onClick="expand('parent1',value1,href1)"><img src="./IMG/info.png"><span style="cursor:hand">信息服务</span></p>
    	<ul id="parent1"></ul>
    	<p onClick="expand('parent2',value2,href2)"><img src="./IMG/pri_work.png"><span style="cursor:hand">个人办公</span></p>
   		<ul id="parent2" ></ul>
   		<p onClick="expand('parent3',value3,href3)"><img src="./IMG/renshisys.png"><span style="cursor:hand">人事系统</span></p>
   		<ul id="parent3"></ul>
   		<p onClick="expand('parent4',value4,href4)"><img src="./IMG/network.png"><span style="cursor:hand">站内通信</span></p>
   		<ul id="parent4"></ul>
  <% }else{ %>
  		<p onClick="expand('parent1',value1,href1)"><img src="./IMG/info.png"><span style="cursor:hand">信息服务</span></p>
    	<ul id="parent1"></ul>
    	<p onClick="expand('parent5',value5,href5)"><img src="./IMG/xingzhengsys.png"><span style="cursor:hand">行政系统</span></p>
   		<ul id="parent5" ></ul>
   		<p onClick="expand('parent6',value6,href6)"><img src="./IMG/renshisys.png"><span style="cursor:hand">人事系统</span></p>
   		<ul id="parent6"></ul>
   		<p onClick="expand('parent7',value7,href7)"><img src="./IMG/sysmanage.png"><span style="cursor:hand">站内通信</span></p>
   		<ul id="parent7"></ul>
  <% } %>
  </body>
</html>
