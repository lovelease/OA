<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="com.oa.hibernate.beans.Staff" %>
<%@ page import="com.oa.hibernate.beans.Attendance;"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%	
	Staff staff=(Staff)session.getAttribute("staffInfo");
	String btime=(String)session.getAttribute("btime");
	String etime=(String)session.getAttribute("etime");
	Attendance[] attendanceArray=(Attendance[])session.getAttribute("querryResult");
	int length=attendanceArray.length;
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>考勤结果</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="CSS/attendanceRecord.css">


  </head>
  
  <body>
  	<div><center>员工信息</center></div>
  	<div>
  		<center>
  			<table>
  				<tr style="font-weight:bold;">
  					<td>用户名</td><td>姓名</td><td>部门</td><td>职位</td><td>电话</td>
  				</tr>	
  				<tr>
  					<td><%=staff.getUsername() %></td><td><%=staff.getRealname() %></td>
  					<td><%=staff.getDepartment() %></td><td><%=staff.getPozition() %></td>
  					<td><%=staff.getMobile() %></td>
  				</tr>
  			</table>
  		</center>
  	</div>
  	<div id="result"><span Style="margin-left:60px;">考勤结果</span><span Style="text-align:right;width:200px;">查询区间：</span><span><%=btime %></span><span style="width:50px;text-align:center;">至</span><span><%=etime %></span></div>
  	<div>
  		<center>
  			<table>
  				<tr style="font-weight:bold;">
  					<td>姓名</td><td>上班时间</td><td>上班状态</td><td>下班时间</td><td>下班状态</td>
  				</tr>
  				<%for(int i=0;i<length;i++){ %>
  				<tr>
  					<td><%=staff.getRealname() %></td><td><%=attendanceArray[i].getOntime() %></td>
  					<td><%=attendanceArray[i].getOnresult() %></td><td><%=attendanceArray[i].getOfftime() %></td>
  					<td><%=attendanceArray[i].getOffresult() %></td>
  				</tr>
  				<%} %>
  			</table>
  		</center>
  	</div>
  </body>
</html>
