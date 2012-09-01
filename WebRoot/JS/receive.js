function hasMail(length){
	delimg=document.getElementById("deleteAll");
	if(length==0){
		delimg.src="IMG/recyclebin_blue.png";
	}
	else{
		delimg.src="IMG/recyclebin_full.png";
	}
}

function deleteAll(username,len){

	if(len==0){
		alert("收件箱内无信件！");
	}
	else{
		if(confirm("你确定要清空收件箱吗？")){
			sendRequest("deleteAllMail.do",deleteAllMailResponse,"username="+username);
		}
	}
}

function deleteAllMailResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			window.alert(res);
			if(res=="收件箱已清空！"){
				mbody=document.getElementById("mailbody");
				mbody.parentNode.removeChild(mbody);
				document.getElementById("deleteAll").src="IMG/recyclebin_blue.png";
			}
		}else{
			alert("你所请求的页面有异常。");
		}
	}
}

function deleteOneMail(id,username){
	if(confirm("确定删除该信件吗？")){
		sendRequest("deleteOneMail.do",deleteOneMailResponse,"id="+id+"&username="+username);
	}
}

function deleteOneMailResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res=XMLHttpReq.responseXML.getElementsByTagName("res");
			window.alert(res[0].firstChild.data);
			if(res[0].firstChild.data=="删除成功！"){
				therow=document.getElementById("onerow"+res[1].firstChild.data);
				therow.parentNode.removeChild(therow);
				len=document.getElementById("lenInfo").value;
				len-=1;
				document.getElementById("lenInfo").value=len;
				if(len==0){
					document.getElementById("deleteAll").src="IMG/recyclebin_blue.png";
				}
				
			}
		}else{
			alert("你所请求的页面有异常。");
		}
	}
}

function weidu(length){
	id=new Array(length);
	sta=new Array(length);
	for(i=0;i<length;i++){
		id[i]=document.getElementById(i).value;
		sta[i]=document.getElementById("status"+id[i]).firstChild.data;
		if(sta[i]=="未读"){
			document.getElementById("onerow"+id[i]).style.cssText="font-weight:bold;font-style:italic;";
		}
	}
}

function detail(id,username){
	bgdiv();
	detaildiv=document.createElement("div");
	detaildiv.id="dtldiv";
	detaildiv.style.cssText="position:absolute;z-index:2;top:50px;left:180px;background-image:url('IMG/detail.png');width:570px;height:431px;";
	document.body.appendChild(detaildiv);
	ttldiv=document.createElement("div");
	ttldiv.style.cssText="margin-top:20px;text-align:center;font-family:'华文琥珀';color:white;font-size:25px;";
	detaildiv.appendChild(ttldiv);
	titl=document.createTextNode("内       容");
	ttldiv.appendChild(titl);
	txtarea=document.createElement("textarea");
	cc=document.getElementById("cntt"+id).value;
	txtarea.value=cc;
	txtarea.style.cssText="margin-left:37px;margin-top:20px;width:500px;height:280px;overflow-y:auto;";
	detaildiv.appendChild(txtarea);
	closediv=document.createElement("div");
	closediv.style.cssText="width:70px;height:25px;cursor:hand;margin-top:20px;margin-left:260px;font-weight:bold;color:white;";
	closediv.onmouseout=function(){closediv.style.cssText="width:70px;height:25px;cursor:hand;margin-top:20px;margin-left:260px;font-weight:bold;color:white;";}
	closediv.onmouseover=function(){closediv.style.cssText="width:80px;height:25px;cursor:hand;margin-top:20px;margin-left:255px;font-weight:bold;color:white;font-size:20px;";}
	detaildiv.appendChild(closediv);
	guanbi=document.createTextNode("【关闭】");
	closediv.appendChild(guanbi);
	closediv.onclick=function(){
		dtl=document.getElementById("dtldiv");
		dtl.parentNode.removeChild(dtl);
		bd=document.getElementById("bgdiv");
		bd.parentNode.removeChild(bd);
	}
	
	sendRequest("toRead.do",toReadResponse,"id="+id+"&username="+username);
}

function bgdiv(){
	backgdiv=document.createElement("div");
	backgdiv.id="bgdiv";
	backgdiv.style.cssText="position:absolute;top:0px;left:0px;z-index:1;background:#999999;width:1016px;height:524px;filter:alpha(opacity=50)";
	document.body.appendChild(backgdiv);
}

function toReadResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res=XMLHttpReq.responseXML.getElementsByTagName("res");
				therow=document.getElementById("onerow"+res[0].firstChild.data);
				therow.style.cssText="font-weight:normal;font-style:normal;";
				stat=document.getElementById("status"+res[0].firstChild.data).firstChild.data="已读";
		}else{
			alert("你所请求的页面有异常。");
		}
	}
}

function hasFull(length){
	if(length>=15){
		alert("你的收件箱中已有 "+length+" 封邮件，请尽快清理，以确保你能收到新邮件！");
	}
}