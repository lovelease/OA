function inputUserId(){
	document.getElementById("userId").setAttribute("value","");
}
function inputPsw(){
	document.getElementById("psw").setAttribute("value","");

}
function endUserId(){
	var username=document.getElementById("userId").getAttribute("value");
	if(username==""){
		alert("用户名不能为空");
	}else{
		for(i=0;i<username.length;i++){
			if(username.charAt(i).charCodeAt()<'48'||username.charAt(i).charCodeAt()>'57'&&username.charAt(i).charCodeAt()<'65'||username.charAt(i).charCodeAt()>'90'&&username.charAt(i).charCodeAt()<'97'||username.charAt(i).charCodeAt()>'122'){
				alert("用户名中含有非法字符:"+username.charAt(i));
			}
		}
	}
}
function endPsw(){
	if(document.getElementById("psw").getAttribute("value")==""){
		alert("密码不能为空");
	}
}
function endValid(){
	if(document.getElementById("valid").getAttribute("value")==""){
		alert("验证码不能为空");
	}
}

//-------------------------------------显示当前时间---------------------------------------
var timerID = null;
var timerRunning = false;
function stopclock (){
	if(timerRunning)
	clearTimeout(timerID);
	timerRunning = false;
}
function startclock () {
	stopclock();
	showtime();
}
function showtime () {
	var now = new Date();
	var days=now.getDay();
	switch(days){
		case 0:days="星期日";break;
		case 1:days="星期一";break;
		case 2:days="星期二";break;
		case 3:days="星期三";break;
		case 4:days="星期四";break;
		case 5:days="星期五";break;
		case 6:days="星期六";
	}
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds()
	var timeValue = now.getYear()+"年 "+(now.getMonth()+1)+"月"+now.getDate()+"日 "+days+" "
	timeValue += ((hours <10) ? "0":"")+hours
	timeValue += ((minutes < 10) ? ":0" : ":") + minutes
	timeValue += ((seconds < 10) ? ":0" : ":") + seconds
	document.clock.thetime.value = timeValue;
	timerID = setTimeout("showtime()",1000);
	timerRunning = true;
}

function staffLogin(){
	var input=document.getElementById("valid").value;
	if(input==seedary){
		document.login.action="login.do?type=staffLogin";
		document.login.submit();
	}else{
		alert("验证码错误，请重新输入！");
		document.login.reset();
	}
}

function managerLogin(){
	var input=document.getElementById("valid").value;
	if(input==seedary){
		document.login.action="login.do?type=managerLogin";
		document.login.submit();
	}else{
		alert("验证码错误，请重新输入！");
		document.login.reset();
	}
}

//发送请求函数
function sendRequest(){
	createXMLHttpRequest();
	XMLHttpReq.open("POST","login.do",true);
	XMLHttpReq.onreadystatechange=processResponse;//指定响应函数
	XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	XMLHttpReq.send(null);//发送请求	
}

//处理返回信息函数
function processResponse(){	
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			var res=XMLHttpReq.responseXML.getElementsByTagName("res")[1].firstChild.data;
			window.alert(res);
		}else{//页面不正常
			window.alert("您所请求的页面有异常。");
		}
	}
}

//--------------------------随机验证码-------------------------- 
//length 验证码长度 
//isCapital 是否大写字母 
//isLower 是否小写字母 
//isNumber 是否数字 
var seedary; 
function rnd_str(length,isCapital,isLower,isNumber) { 
	var str="";
	var Capital="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
	var Lower="a b c d e f g h i j k l m n o p q r s t u v w x y z";
	var Number="0 1 2 3 4 5 6 7 8 9";
	if(isCapital) {str += Capital;}
	if(isLower) {
		if(isCapital)str += " "+Lower;
		else str+=Lower;
	}
	if(isNumber) {
		if(isCapital==false&&isLower==false)str+=Number;
		else str += " "+Number;
	}
	var array=str.split(" ");
	seedary="";
	for(i=0;i<length;i++){
		seedary += array[Math.round(Math.random()*(array.length-1))];
	}
	var td=document.getElementById("validcode");
	var newNode=document.createTextNode(seedary);
	td.appendChild(newNode);
}
