<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'test.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

	<script type="text/javascript" src="JS/share.js"></script>
	<script>
		function strToDate(){
			date=new Date("2009","4","14");
			now=new Date();
			y=now.getYear();
			m=now.getMonth();
			d=now.getDate();
			rightnow=new Date(y,m,d);
			alert(date>rightnow);	
		}
function isEmail(s)
{
if (s.length > 50){
alert("Email地址长度不能超过50位!")
document.joinus.email.focus() 
return false;
}
var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|com|gov|mil|org|cc|edu|biz|int|tv)$"
var re = new RegExp(regu);
if (s.search(re) != -1) {
return true;
} 
else {
alert ("请输入有效合法的E-mail地址！")
document.joinus.email.focus() 
return false;
}
}
function test(){
	ww=document.getElementById("s").value;
	alert(isEmail(ww));
}
		
	</script>
  </head>
  
  <body onLoad="time('year','month','day','ddd');showtime('h','bh','btime');showtime('m','bm','btime');showtime('h','eh','etime');showtime('m','em','etime')">
    <button onClick="strToDate()">Time</button>
    <div id="ddd"></div><button onClick="alert(dateValid('year','month','day'));">test</button>
    <div id="btime"></div>
    <div id="etime"></div>
    <button onClick="timeValid('year','month','day','bh','bm','eh','em')">test2</button>
 	<input id="s"></input>
 	<button onClick="test()">testEmail</button>
 	<div>
 		<select id="sel">
 			<%for(int i=0;i<6;i++){ %>
 			<option value=<%=i %>><%=i %></option>
 			<%} %>
 		</select>
 		<select>
 			<option value="1">1</option>
 			<option value="2" selected>2</option>
 		</select>
 	</div>
  </body>
</html>
