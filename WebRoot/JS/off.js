function hidden(){
	type=document.getElementById("loginType").value;
	if(type=="managerLogin"){
		document.getElementById("title").firstChild.firstChild.data="请假批示";
		document.getElementById("apply").style.display="none";
	}
	else{
		document.getElementById("agree").style.display="none";
		document.getElementById("reject").style.display="none";
		document.getElementById("deleteAll").style.display="none";
		for(i=0;;i++){
			if(document.getElementById("agree"+i)!=null){
				document.getElementById("agree"+i).style.display="none";
			}
			else{
				break;
			}
		}
		for(i=0;;i++){
			if(document.getElementById("reject"+i)!=null){
				document.getElementById("reject"+i).style.display="none";
			}
			else{
				break;
			}
		}
	}
}

function apply(username,realname){
	nwdiv("请假申请");
	
	outdiv=document.getElementById("nwdiv");
	
	appdiv1=document.createElement("div");
	appdiv1.style.cssText="margin-top:40px;";
	outdiv.appendChild(appdiv1);
	btspan1=document.createElement("span");
	btspan1.style.cssText="margin-left:30px;";
	bttitle1=document.createTextNode("开始时间：");
	btspan1.appendChild(bttitle1);
	appdiv1.appendChild(btspan1);
	btspan2=document.createElement("span");
	btspan2.id="bdate";
	appdiv1.appendChild(btspan2);
	time("byear","bmonth","bday","bdate",1);
	btspan3=document.createElement("span");
	btspan3.id="btime";
	btspan3.style.cssText="margin-left:20px;"
	appdiv1.appendChild(btspan3);
	showtime("h","btimeh","btime");
	showtime("m","btimem","btime");
	
	appdiv2=document.createElement("div");
	appdiv2.style.cssText="margin-top:20px;";
	outdiv.appendChild(appdiv2);
	etspan1=document.createElement("span");
	etspan1.style.cssText="margin-left:30px;";
	ettitle1=document.createTextNode("结束时间：");
	etspan1.appendChild(ettitle1);
	appdiv2.appendChild(etspan1);
	etspan2=document.createElement("span");
	etspan2.id="edate";
	appdiv2.appendChild(etspan2);
	time("eyear","emonth","eday","edate",1);
	etspan3=document.createElement("span");
	etspan3.id="etime";
	etspan3.style.cssText="margin-left:20px;"
	appdiv2.appendChild(etspan3);
	showtime("h","etimeh","etime");
	showtime("m","etimem","etime");
	
	appdiv3=document.createElement("div");
	appdiv3.style.cssText="margin-top:20px;";
	outdiv.appendChild(appdiv3);
	respan1=document.createElement("span");
	respan1.style.cssText="margin-left:30px;";
	appdiv3.appendChild(respan1);
	retitle1=document.createTextNode("请假原因：");
	respan1.appendChild(retitle1);
	reinput=document.createElement("input");
	reinput.id="reasoncnt";
	reinput.style.cssText="width:240px;";
	reinput.onblur=function(){wordsValid("reasoncnt",40);};
	appdiv3.appendChild(reinput);
	
	subbut=document.getElementById("submit");
	subbut.onclick=function(){
		recnt=document.getElementById("reasoncnt").value;

		byobj=document.getElementById("byear");
		byval=byobj.options[byobj.selectedIndex].value;
		bmobj=document.getElementById("bmonth");
		bmval=bmobj.options[bmobj.selectedIndex].value;
		bdobj=document.getElementById("bday");
		bdval=bdobj.options[bdobj.selectedIndex].value;
		bhobj=document.getElementById("btimeh");
		bhval=bhobj.options[bhobj.selectedIndex].value;
		bmiobj=document.getElementById("btimem");
		bmival=bmiobj.options[bmiobj.selectedIndex].value;
		eyobj=document.getElementById("eyear");
		eyval=eyobj.options[eyobj.selectedIndex].value;
		emobj=document.getElementById("emonth");
		emval=emobj.options[emobj.selectedIndex].value;
		edobj=document.getElementById("eday");
		edval=edobj.options[edobj.selectedIndex].value;
		ehobj=document.getElementById("etimeh");
		ehval=ehobj.options[ehobj.selectedIndex].value;
		emiobj=document.getElementById("etimem");
		emival=emiobj.options[emiobj.selectedIndex].value;
		
		begintime=new Date(byval,bmval-1,bdval,bhval,bmival,0);
		endtime=new Date(eyval,emval-1,edval,ehval,emival,0);
		
		rightnow=new Date();		
		if(begintime<=rightnow){
			alert("你输入的时间已过期！");
		}
		else{
			if(begintime>=endtime){
				alert("非法的时间区间！");
			}
			else{
				if(recnt==""){
					alert("请填写完整内容！");
				}
				else{
					if(recnt.length>20){
						alert("你输入的内容超过40个字符！");
					}
					else{
						bti=byval+" "+bmval+" "+bdval+" "+bhval+" "+bmival;
						eti=eyval+" "+emval+" "+edval+" "+ehval+" "+emival;
						information="uname="+username+"&rname="+realname+"&reason="+recnt+"&begin="+bti+"&end="+eti;
						sendRequest("offApply.do",offApplyResponse,information);
					}
				}
			}
		}
	}
	
	ret=document.getElementById("reset");
	ret.onclick=function(){
		document.getElementById("reasoncnt").value="";
	};
}

function offApplyResponse(){

	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			rest=new Array(6);
			for(j=0;j<6;j++){
				rest[j]=XMLHttpReq.responseXML.getElementsByTagName("res")[j].firstChild.data;
			}
			window.alert(rest[0]);
			guanbi();
			
			ntr=document.createElement("tr");
			ntr.id="offApp"+rest[5];
			ntd=new Array(5);
			ntxt=new Array(5);
			for(i=0;i<5;i++){
				ntd[i]=document.createElement("td");
				ntxt[i]=document.createTextNode(rest[i+1]);
				ntd[i].appendChild(ntxt[i]);
				ntr.appendChild(ntd[i]);
			}
			ntd[0].id="applier"+rest[5];
			ntd[0].style.cssText="width:80px;";
			ntd[1].id="from"+rest[5];
			ntd[1].style.cssText="width:180px;";
			ntd[2].id="to"+rest[5];
			ntd[2].style.cssText="width:180;";
			ntd[3].id="reason"+rest[5];
			ntd[3].style.cssText="width:280px;";
			ntd[4].id="status"+rest[5];
			ntd[4].style.cssText="width:55px;";
			
			offbo=document.getElementById("offbody");		
			offbo.insertBefore(ntr,offbo.firstChild);
			
		}else{
			alert("你所请求的页面有异常。");
		}
	}
}

function agree(id){
	if(document.getElementById("status"+id).firstChild.data=="受理中"){
		sendRequest("agreeOff.do",agreeResponse,"idInfo="+id);
	}
	else{
		alert("该申请已受理，请勿重复操作！");
	}
}

function agreeResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res0=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			res1=XMLHttpReq.responseXML.getElementsByTagName("res")[1].firstChild.data;
			window.alert(res0);
			document.getElementById("status"+res1).firstChild.data="已批准";
			document.getElementById("offApp"+res1).style.cssText="color:green;";
		}else{//页面不正常
			window.alert("您所请求的页面有异常。");
		}
	}
}

function reject(id){
	if(document.getElementById("status"+id).firstChild.data=="受理中"){
		if(confirm("确定要拒绝吗？")){
			sendRequest("rejectOff.do",rejectResponse,"idInfo="+id);
		}
	}
	else{
		alert("该申请已受理，请勿重复操作！");
	}
}

function rejectResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res0=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			res1=XMLHttpReq.responseXML.getElementsByTagName("res")[1].firstChild.data;
			window.alert(res0);
			document.getElementById("status"+res1).firstChild.data="已拒绝";
			document.getElementById("offApp"+res1).style.cssText="color:red;";
		}else{//页面不正常
			window.alert("您所请求的页面有异常。");
		}
	}
}

function deleteAll(){
	if(confirm("确定要清空请假记录吗？")){
		sendRequest("deleteOff.do",deleteResponse,null);
	}
}

function deleteResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res0=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			window.alert(res0);
			tb=document.getElementById("offbody");
			tb.parentNode.removeChild(tb);
		}else{//页面不正常
			window.alert("您所请求的页面有异常。");
		}
	}
}

function checkStatus(length,loginType){
	stat=new Array(length);
	idArr=new Array(length);
	isExist=false;
	for(i=0;i<length;i++){
		idArr[i]=document.getElementById(i).value;
		stat[i]=document.getElementById("status"+idArr[i]).firstChild.data;
		if(stat[i]=="已批准"){
			document.getElementById("offApp"+idArr[i]).style.cssText="color:green;";
		}
		if(stat[i]=="已拒绝"){
			document.getElementById("offApp"+idArr[i]).style.cssText="color:red;";
		}
		if(stat[i]=="受理中"){
			isExist=true;
		}
	}
	if(loginType=="managerLogin"&&isExist==true){
		alert("存在未受理的请假申请，请尽快处理！");
	}	
}