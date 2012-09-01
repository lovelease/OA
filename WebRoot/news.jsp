<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.oa.hibernate.beans.News"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%
News[] news=(News[])session.getAttribute("news");
int length=news.length;
String loginType=(String)session.getAttribute("type");
 %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'news.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="CSS/news.css">
	

	<script Language="JavaScript" src="JS/fenye.js"></script>
	<script Language="JavaScript" src="JS/hidden.js"></script>
	<script src="JS/createXMLHttpRequest.js"></script>
	<script src="JS/news.js"></script>
	
  </head>
  
  <body onLoad="fenye();hidden()">
    <div id="title"><span>企业新闻</span><span id="add" onClick="add()">添加</span><span><input id="loginType" type="hidden" value="<%=loginType %>" /></span></div>
    <img id="titlebg" src="IMG/title.png"/ >
    <div id="rounddiv">
    	<div id="content" style="height:399px;">
    		<% for(int i=0;i<length;i++){ %>
    		<div id="div<%=news[i].getId() %>">
    			<span id="date"><%=news[i].getNewsdate() %></span>
    			<span id="button<%=i %>" style="width:490px;">
    				<img class="alter" src="IMG/alter.png" alt="修改"  onClick="alterNews(<%=news[i].getId() %>)" /></img>
    				<img class="alter" src="IMG/delete.png" alt="删除"  onClick="deleteNews(<%=news[i].getId() %>)" /></img>
    			</span><br />
    			<span id="cnt<%=news[i].getId() %>"><img id="mark" src="IMG/regime.png" /><%=news[i].getContent() %></span><br />
    		</div>
    		<% } %>
    	</div>
    </div>
    <div id="pages"></div>
  </body>
</html>
