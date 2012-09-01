<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<% com.oa.hibernate.beans.Regime[] regime=(com.oa.hibernate.beans.Regime[])session.getAttribute("regime"); 
   int length=regime.length;
   String loginType=(String)session.getAttribute("type");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'regime.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/regime.css">
	
	<script Language="JavaScript" src="JS/fenye.js"></script>
	<script Language="JavaScript" src="JS/hidden.js"></script>
	<script src="JS/regime.js"></script>
	<script src="JS/createXMLHttpRequest.js"></script>

  </head>
  
  <body onLoad="fenye();hidden()">
    <div id="title"><span>企业制度</span><span id="add" onClick="add()">添加</span><span><input id="loginType" type="hidden" value="<%=loginType %>" /></span></div>
    <img id="titlebg" src="IMG/title.png" />
    <div id="rounddiv">
    	<div id="content">
    		<% for(int i=0;i<length;i++){ %>
    		<div id="div<%=regime[i].getId() %>">
    			<span id="button<%=i %>" style="width:660px;">
    				<img class="alter" src="IMG/alter.png" alt="修改" onClick="alterRegime(<%=regime[i].getId() %>)" />
    				<img class="alter" src="IMG/delete.png" alt="删除" onClick="deleteRegime(<%=regime[i].getId() %>)"/>
    			</span><br />
    			<span id="cnt<%=regime[i].getId() %>"><img id="mark" src="IMG/regime.png" /><%=regime[i].getContent() %></span><br />
    		</div>
    		<% } %>
    	</div>
    </div>
    <div id="pages"></div>
  </body>
</html>
