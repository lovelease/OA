<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.oa.hibernate.beans.Staff"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%
	String loginType=(String)session.getAttribute("type");
	Staff staff=(Staff)session.getAttribute("staff");
	Staff[] allStaff=(Staff[])session.getAttribute("allStaff");
	int length=allStaff.length;
 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'send.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/send.css">
	
	<script type="text/javascript" src="JS/send.js"></script>
	<script src="JS/createXMLHttpRequest.js"></script>

  </head>
  
  <body onLoad="hidden('<%=loginType %>')">
    <div id="title">
     	<span>发文管理</span><span><input id="loginType" type="hidden" value="<%=loginType %>" /></span>
    </div>
    <img id="titlebg" src="IMG/title.png" />
    <div id="bgimg">
    	<span><input id="titleinput" /></span>
    	<span>
    		<select id="addressee">
    			<%for(int i=0;i<length;i++){ 
    				if(!allStaff[i].getUsername().equals(staff.getUsername())){
    			%>
    			<option value="<%=allStaff[i].getUsername() %>"><%=allStaff[i].getRealname() %></option>
    			<%	} 
    			}
    			%>
    		</select>
    	</span>
    	<div style="position:absolute;top:2px;left:620px;">
    		<img id="dropone" src="IMG/reject.png" alt="清空选定员工的收件箱" onmouseover="dLargeMode()" onmouseout="dSmallMode()"onClick="deleteMail()"/>
    	</div>
    	<div>
    		<textarea id="content"></textarea>
    	</div>
    	<div>
    		<img id="sendmail" src="IMG/agree.png" alt="发送" onmouseover="sLargeMode()" onmouseout="sSmallMode()" onClick="sendMail('<%=staff.getUsername() %>','<%=staff.getRealname() %>')" />
    	</div>
    </div>
    
  </body>
</html>
