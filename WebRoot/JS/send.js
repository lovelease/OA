function hidden(loginType){
	if(loginType=="staffLogin"){
		document.getElementById("dropone").style.display="none";
	}
}

function sLargeMode(){
	agree=document.getElementById("sendmail");
	agree.style.cssText="width:52px;height:52px;margin-top:2px;margin-left:72px;";
}

function sSmallMode(){
	agree=document.getElementById("sendmail");
	agree.style.cssText="width:40px;height:40px;margin-top:7px;margin-left:75px;";
}

function dLargeMode(){
	agree=document.getElementById("dropone");
	agree.style.cssText="width:44px;height:44px;";
}

function dSmallMode(){
	agree=document.getElementById("dropone");
	agree.style.cssText="width:34px;height:34px;margin-top:2px;margin-left:5px;";
}

function sendMail(senderUn,senderRn){
	ttl=document.getElementById("titleinput").value;
	addresel=document.getElementById("addressee");
	receiver=addresel.options[addresel.selectedIndex].value;
	cont=document.getElementById("content").value;
	now=new Date();
	year=now.getYear();
	month=now.getMonth();
	date=now.getDate();
	hour=now.getHours();
	minute=now.getMinutes();
	second=now.getSeconds();
	sendtime=year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
	if(ttl.length<=20&&ttl.length!=0){
		sendInfo="title="+ttl+"&addressee="+receiver+"&content="+cont+"&time="+sendtime+"&senderUn="+senderUn+"&senderRn="+senderRn;
		sendRequest("sendMail.do",sendMailResponse,sendInfo);
	}
	else if(ttl.length==0){alert("请输入标题！");}
	else{alert("标题超过40个字符！");}
}

function sendMailResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			window.alert(res);
			if(res=="发送成功！"){
				document.getElementById("titleinput").value="";
				document.getElementById("content").value="";
			}
		}else{
			alert("你所请求的页面有异常。");
		}
	}
}

function deleteMail(){
	if(confirm("确定清空该用户的收件箱吗？")){
		addresel=document.getElementById("addressee");
		delobj=addresel.options[addresel.selectedIndex].value;
		sendRequest("deleteMail.do",deleteMailResponse,"username="+delobj);
	}
}

function deleteMailResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			window.alert(res);
		}else{
			alert("你所请求的页面有异常。");
		}
	}
}
