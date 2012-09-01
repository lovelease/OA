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
	String[] pwr=new String[length];
	String[] mob=new String[length];
	for(int i=0;i<length;i++){
		if(allStaff[i].getPower()==0){pwr[i]="员工";}
		else{pwr[i]="管理员";}
		if(allStaff[i].getAddress()==null){allStaff[i].setAddress("未填写");}
		if(allStaff[i].getEmail()==null){allStaff[i].setEmail("未填写");}
		if(allStaff[i].getMobile()==null){mob[i]="未填写";}
		else{mob[i]=allStaff[i].getMobile().toString();}
	}
	
 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>

  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'staffManage.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/staff.css">
	
	<script type="text/javascript" src="JS/staff.js"></script>
	<script type="text/javascript" src="JS/share.js"></script>
	<script src="JS/createXMLHttpRequest.js"></script>

  </head>
  
  <body onLoad="hidden(<%=length %>,'<%=loginType %>')">
    <div id="title"><span>员工管理</span><span id="register" onClick="register()">员工注册</span><span id="alterInfo" onClick="pwdsub(<%=staff.getUserid() %>)">修改个人资料</span><span>
 		<span><input id="lenInfo" type="hidden" value="<%=length %>" /></span>
 		<span><input id="pwdInfo" type="hidden" value="<%=staff.getPassword() %>" /></span>
 		<span><input id="thisStaff" type="hidden" value="<%=staff.getUserid() %>" /></span>
 		<span>
 			<%for(int i=0;i<length;i++){ %>
 			<input id="pow<%=allStaff[i].getUserid() %>" type="hidden" value="<%=pwr[i] %>" />
 			<%} %>
 		</span>
 	</div>
 	<img id="titlebg" src="IMG/title.png" />
  	<div id="rounddiv">
    	<div>
    		<table id="head" style="border-collapse: collapse; ">
    			<tr>
    				<td id="stname" Style="width:70px;">姓名</td><td id="stdepartment" Style="width:90px;">部门</td><td id="stposition" Style="width:90px;">职位</td><td id="staddress" Style="width:200px;">地址</td>
    				<td id="stmobile" Style="width:100px;">手机</td><td id="stemail" Style="width:150px;">邮箱</td><td id="stpower" Style="width:60px;">权限</td><td id="stalt" Style="width:33px;">修改</td><td id="stdel" Style="width:33px;">注销</td>
    			</tr>
    		</table>
    	</div>
    	<div id="content">
    		<table id="stafftb" style=" border-collapse: collapse;border:1px solid;">
    			<tbody id="stafftbo">
    				<%for(int i=0;i<length;i++){ %>
    				<tr id="staff<%=allStaff[i].getUserid() %>">
    					<td id="stname<%=allStaff[i].getUserid() %>" style="width:70px;"><%=allStaff[i].getRealname() %></td>
    					<td id="stdepartment<%=allStaff[i].getUserid() %>" style="width:90px;"><%=allStaff[i].getDepartment() %></td>
    					<td id="stposition<%=allStaff[i].getUserid() %>" style="width:90px;"><%=allStaff[i].getPozition() %></td>
    					<td id="staddress<%=allStaff[i].getUserid() %>" style="width:200px;"><%=allStaff[i].getAddress() %></td>
    					<td id="stmobile<%=allStaff[i].getUserid() %>" style="width:100px;"><%=mob[i] %></td>
    					<td id="stemail<%=allStaff[i].getUserid() %>" style="width:150px;"><%=allStaff[i].getEmail() %></td>
    					<td id="stpower<%=allStaff[i].getUserid() %>" style="width:60px;"><%=pwr[i] %></td>
    					<td id="stalt<%=i %>" style="width:33px;"><img class="butt" src="IMG/alter.png" onClick="altStaff(<%=allStaff[i].getUserid() %>)"/></td>
    					<td id="stdel<%=i %>" style="width:33px;"><img class="butt" src="IMG/delete.png" onClick="delStaff(<%=allStaff[i].getUserid() %>)"/></td>
    				</tr>
    				<%} %>
    			</tbody>
    		</table>
    	</div>
  </body>
</html>
