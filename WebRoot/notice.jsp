<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.oa.hibernate.beans.Notice"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%
	Notice[] notice=(Notice[])session.getAttribute("notice");
	int length=notice.length;
	String loginType=(String)session.getAttribute("type");
 %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'notice.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="CSS/notice.css">

	<script Language="JavaScript" src="JS/fenye.js"></script>
	<script Language="JavaScript" src="JS/hidden.js"></script>
	<script src="JS/createXMLHttpRequest.js"></script>
	<script src="JS/notice.js"></script>

  </head>
  
  <body onLoad="fenye();hidden()">
  	<div id="title"><span>公告通知</span><span id="add" onClick="add()">添加</span><span><input id="loginType" type="hidden" value="<%=loginType %>" /></span></div>
    <img id="titlebg" src="IMG/title.png"/ >
    <div id="rounddiv">
    	<div id="content" style="height:375px;">
    		<% for(int i=0;i<length;i++){ %>
    		<div id="div<%=notice[i].getId() %>">
    			<span id="date"><%=notice[i].getNoticedate() %></span>
    			<span id="button<%=i %>" style="width:490px;">
    				<img class="alter" src="IMG/alter.png" alt="修改"  onClick="alterNotice(<%=notice[i].getId() %>)" /></img>
    				<img class="alter" src="IMG/delete.png" alt="删除"  onClick="deleteNotice(<%=notice[i].getId() %>)" /></img>
    			</span><br />
    			<span id="cnt<%=notice[i].getId() %>"><img id="mark" src="IMG/regime.png" /><%=notice[i].getContent() %></span><br />
    		</div>
    		<% } %>
    	</div>
    </div>
    <div id="pages"></div>
  </body>
</html>
