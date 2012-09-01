<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.oa.hibernate.beans.Off"%>
<%@page import="com.oa.hibernate.beans.Staff"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<% 
	String loginType=(String)session.getAttribute("type");
	Staff staff=(Staff)session.getAttribute("staff");
	int length;
	Off[] off=null;
	String[] sta=null;
	if(loginType.equals("staffLogin")){
		off=(Off[])session.getAttribute("off");
		length=off.length;
		sta=new String[length];
		for(int i=0;i<length;i++){
			if(off[i].getStatus()==0){sta[i]="受理中";}
			else if(off[i].getStatus()==1){sta[i]="已批准";}
			else{sta[i]="已拒绝";}
		}
	}
	else{
		off=(Off[])session.getAttribute("allOff");
		length=off.length;
		sta=new String[length];
			for(int i=0;i<length;i++){
			if(off[i].getStatus()==0){sta[i]="受理中";}
			else if(off[i].getStatus()==1){sta[i]="已批准";}
			else{sta[i]="已拒绝";}
		}
	}
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'offApply.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/off.css">
	
	<script type="text/javascript" src="JS/off.js"></script>
	<script type="text/javascript" src="JS/share.js"></script>
	<script src="JS/createXMLHttpRequest.js"></script>

  </head>
  
  <body onLoad="hidden();checkStatus(<%=length %>,'<%=loginType %>')">
     <div id="title">
     	<span>请假记录</span><span id="apply" onClick="apply('<%=staff.getUsername()%>','<%=staff.getRealname() %>')">请假申请</span><span id="deleteAll" onClick="deleteAll()">清空记录</span><span><input id="loginType" type="hidden" value="<%=loginType %>" /></span>
     	<span>
    		<%for(int i=0;i<length;i++){ %>
    		<input id="<%=i %>" type="hidden" value="<%=off[i].getId() %>" />
    		<%} %>
    	</span>
     </div>
     <img id="titlebg" src="IMG/title.png" />
     <div id="rounddiv">
    	<div>
    		<table id="head" style="border-collapse: collapse; ">
    			<tr>
    				<td id="applier">申请人</td><td id="from">开始时间</td><td id="to">结束时间</td>
    				<td id="reason">请假原因</td><td id="status">状态</td><td id="agree">批准</td><td id="reject">拒绝</td>
    			</tr>
    		</table>
    	</div>
    	<div id="content">
    		<table style=" border-collapse: collapse;border:1px solid;">
    			<tbody id="offbody">
    				<%for(int i=0;i<length;i++){ %>
    				<tr id="offApp<%=off[i].getId() %>">
    					<td id="applier<%=off[i].getId() %>" style="width:80px;"><%=off[i].getRealname() %></td>
    					<td id="from<%=off[i].getId() %>" style="width:180px;"><%=off[i].getBegin() %></td>
    					<td id="to<%=off[i].getId() %>" style="width:180px;"><%=off[i].getEnd() %></td>
    					<td id="reason<%=off[i].getId() %>" style="width:280px;"><%=off[i].getReson() %></td>
    					<td id="status<%=off[i].getId() %>" style="width:55px;"><%=sta[i] %></td>
    					<td id="agree<%=i %>" style="width:31px;"><img class="butt" src="IMG/agree.png" onClick="agree(<%=off[i].getId() %>)"/></td>
    					<td id="reject<%=i %>" style="width:33px;"><img class="butt" src="IMG/reject.png" onClick="reject(<%=off[i].getId() %>)"/></td>
    				</tr>
    				<%} %>
    			</tbody>
    		</table>
    	</div>
    </div>
  </body>
</html>
