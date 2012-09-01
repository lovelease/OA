<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.oa.hibernate.beans.Meeting"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%
	Meeting[] meeting=(Meeting[])session.getAttribute("meeting");
	int length=meeting.length;
	String[] endT=new String[length];
	for(int i=0;i<length;i++){
		endT[i]=meeting[i].getEndtime().toString().split(" ")[1];
	}
	String loginType=(String)session.getAttribute("type");
 %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'meetingManage.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="CSS/meeting.css">
	
	<script type="text/javascript" src="JS/meeting.js"></script>
	<script type="text/javascript" src="JS/share.js"></script>
	<script src="JS/createXMLHttpRequest.js"></script>

  </head>
  
  <body onLoad="hidden();toRed(<%=length %>)">
    <div id="title"><span>会议管理</span><span id="button" onClick="publish()">发布会议</span><span><input id="loginType" type="hidden" value="<%=loginType %>" /></span>
    	<span>
    		<%for(int i=0;i<length;i++){ %>
    		<input id="<%=i %>" type="hidden" value="<%=meeting[i].getId() %>" />
    		<%} %>
    	</span>
    	<span><input id="lenInfo" type="hidden" value="<%=length %>" /></span>
    </div>
  	<img id="titlebg" src="IMG/title.png" />
  	<div id="rounddiv">
    	<div>
    		<table id="head" style="border-collapse: collapse; ">
    			<tr>
    				<td id="hcnt">会议内容</td><td id="hbtim">会议时间</td><td id="hetim">结束时间</td>
    				<td id="hrom">会议地点</td><td id="hatt">与会对象</td><td id="halt">修改</td><td id="hdel">删除</td>
    			</tr>
    		</table>
    	</div>
    	<div id="content">
    		<table id="meetingtb" style=" border-collapse: collapse;border:1px solid;">
    			<tbody id="meetingtbo">
    				<%for(int i=0;i<length;i++){ %>
    				<tr id="meeting<%=meeting[i].getId() %>">
    					<td id="cnt<%=meeting[i].getId() %>" style="width:310px;"><%=meeting[i].getContent() %></td>
    					<td id="btim<%=meeting[i].getId() %>" style="width:180px;"><%=meeting[i].getBegintime() %></td>
    					<td id="etim<%=meeting[i].getId() %>" style="width:100px;"><%=endT[i] %></td>
    					<td id="rom<%=meeting[i].getId() %>" style="width:90px;"><%=meeting[i].getRoom() %></td>
    					<td id="att<%=meeting[i].getId() %>" style="width:90px;"><%=meeting[i].getAttendant() %></td>
    					<td id="altr<%=i %>" style="width:31px;"><img class="butt" src="IMG/alter.png" onClick="altMeeting(<%=meeting[i].getId() %>)"/></td>
    					<td id="delt<%=i %>" style="width:33px;"><img class="butt" src="IMG/delete.png" onClick="delMeeting(<%=meeting[i].getId() %>)"/></td>
    				</tr>
    				<%} %>
    			</tbody>
    		</table>
    	</div>
  </body>
</html>
