<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.oa.hibernate.beans.Mail"%>
<%@page import="com.oa.hibernate.beans.Staff"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%
	Staff staff=(Staff)session.getAttribute("staff");
	Mail[] mail=(Mail[])session.getAttribute("mail");
	int length=mail.length;
	String[] status=new String[length];
	for(int i=0;i<length;i++){
		if(mail[i].getStatus()==0){status[i]="未读";}
		else{status[i]="已读";}
	}
 %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'receive.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/receive.css">
	
	<script type="text/javascript" src="JS/receive.js"></script>
	<script src="JS/createXMLHttpRequest.js"></script>

  </head>
  
  <body onLoad="hasMail(<%=length %>);weidu(<%=length %>);hasFull(<%=length %>)">
    <div id="title">
     	<span>收文管理</span>
     	<span><input id="lenInfo" type="hidden" value="<%=length %>" /></span>
     	<span>
     		<%for(int i=0;i<length;i++){ %>
     		<input id="<%=i %>" type="hidden" value="<%=mail[i].getId() %>">
     		<%} %>
     	</span>
     	<span>
     		<%for(int i=0;i<length;i++){ %>
     		<input id="cntt<%=mail[i].getId() %>" type="hidden" value="<%=mail[i].getContent() %>" />
     		<%} %>
    </div>
    
    <img id="titlebg" src="IMG/title.png" />
    <img id="deleteAll" alt="清空收件箱" onClick="deleteAll('<%=staff.getUsername() %>',<%=length %>)"/>
    <div id="rounddiv">
    	<div id="titlediv">
    		<table style="border-collapse: collapse;font-family:华文彩云;text-align:center;">
    			<tr>
    				<td style="width:330px">标题</td><td style="width:200px">发送时间</td>
    				<td style="width:90px">发件人</td><td style="width:50px">状态</td><td style="width:40px">删除</td>
    			</tr>
    		</table>
    	</div>
    	<div id="maildiv">
    		<table style="border-collapse: collapse;text-align:center;">
    			<tbody id="mailbody">
    				<%for(int i=0;i<length;i++){ %>
    				<tr id="onerow<%=mail[i].getId() %>">
    					<td id="ttl<%=mail[i].getId() %>" style="text-align:left;width:330px;cursor:hand;text-decoration:underline;" onClick="detail(<%=mail[i].getId() %>,'<%=staff.getUsername() %>')"><%=mail[i].getTitle() %></td>
    					<td id="sendtime<%=mail[i].getId() %>" style="width:200px"><%=mail[i].getSendtime() %></td>
    					<td id="sender<%=mail[i].getId() %>" style="width:90px"><%=mail[i].getSender() %></td>
    					<td id="status<%=mail[i].getId() %>" style="width:50px"><%=status[i] %></td>
    					<td id="delete"><img class="butt" src="IMG/shanchu.png" onClick="deleteOneMail(<%=mail[i].getId() %>,'<%=staff.getUsername() %>')"/></td>
    				</tr>
    				<%} %>
    			</tbody>
    		</table>
    	</div>
    </div>
  </body>
</html>
