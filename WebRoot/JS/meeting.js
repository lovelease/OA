function hidden(){
	var type=document.getElementById("loginType").value;
	if(type=="staffLogin"){
		document.getElementById("title").firstChild.firstChild.data="会议查询";
		document.getElementById("button").style.display="none";
		document.getElementById("halt").style.display="none";
		document.getElementById("hdel").style.display="none";
		for(i=0;;i++){
			if(document.getElementById("altr"+i)!=null){
				document.getElementById("altr"+i).style.display="none";
			}
			else{
				break;
			}
		}
		for(i=0;;i++){
			if(document.getElementById("delt"+i)!=null){
				document.getElementById("delt"+i).style.display="none";
			}
			else{
				break;
			}
		}
	}
}

function publish(){

	nwdiv("发布会议");
	xindiv=document.getElementById("nwdiv");
	cntdiv=document.createElement("div");
	cntspan1=document.createElement("span");
	cntspan1.style.cssText="margin-left:60px;"
	cntitle=document.createTextNode("会议内容：");
	cntin=document.createElement("input");
	cntin.id="contx";
	cntin.onblur=function(){wordsValid("contx",40)};
	cntin.style.cssText="margin-left:15px;width:137px;"
	cntspan1.appendChild(cntitle);
	cntdiv.appendChild(cntspan1);
	cntdiv.appendChild(cntin);
	xindiv.appendChild(cntdiv);

	datediv=document.createElement("div");
	datespan1=document.createElement("span");
	datespan1.style.cssText="margin-left:60px;";
	datetitle=document.createTextNode("会议日期：");
	datespan2=document.createElement("span");
	datespan2.id="date1";
	datespan2.style.cssText="margin-left:15px;"
	datespan1.appendChild(datetitle);
	datediv.appendChild(datespan1);
	datediv.appendChild(datespan2);
	xindiv.appendChild(datediv);
	time("year","month","day","date1",1);
	
	btimediv=document.createElement("div");
	xindiv.appendChild(btimediv);
	btimespan1=document.createElement("span");
	btimespan1.style.cssText="margin-left:60px;";
	btimetitle=document.createTextNode("开始时间：");
	btimespan1.appendChild(btimetitle);
	btimediv.appendChild(btimespan1);
	btimespan2=document.createElement("span");
	btimespan2.id="bth";
	btimespan2.style.cssText="margin-left:15px;";
	btimediv.appendChild(btimespan2);
	showtime("h","btimeh","bth");
	btimespan3=document.createElement("span");
	btimespan3.style.cssText="margin-left:19px;";
	btimetxt1=document.createTextNode("时");
	btimespan3.appendChild(btimetxt1);
	btimediv.appendChild(btimespan3);
	btimespan4=document.createElement("span");
	btimespan4.id="btm";
	btimespan4.style.cssText="margin-left:19px;";
	btimediv.appendChild(btimespan4);
	showtime("m","btimem","btm");
	btimespan5=document.createElement("span");
	btimespan5.style.cssText="margin-left:19px;";
	btimetxt2=document.createTextNode("分");
	btimespan5.appendChild(btimetxt2);
	btimediv.appendChild(btimespan5);
	
	etimediv=document.createElement("div");
	xindiv.appendChild(etimediv);
	etimespan1=document.createElement("span");
	etimespan1.style.cssText="margin-left:60px;";
	etimetitle=document.createTextNode("结束时间：");
	etimespan1.appendChild(etimetitle);
	etimediv.appendChild(etimespan1);
	etimespan2=document.createElement("span");
	etimespan2.id="eth";
	etimespan2.style.cssText="margin-left:15px;";
	etimediv.appendChild(etimespan2);
	showtime("h","etimeh","eth");
	etimespan3=document.createElement("span");
	etimespan3.style.cssText="margin-left:19px;";
	etimetxt1=document.createTextNode("时");
	etimespan3.appendChild(etimetxt1);
	etimediv.appendChild(etimespan3);
	etimespan4=document.createElement("span");
	etimespan4.id="etm";
	etimespan4.style.cssText="margin-left:19px;";
	etimediv.appendChild(etimespan4);
	showtime("m","etimem","etm");
	etimespan5=document.createElement("span");
	etimespan5.style.cssText="margin-left:19px;";
	etimetxt2=document.createTextNode("分");
	etimespan5.appendChild(etimetxt2);
	etimediv.appendChild(etimespan5);
	
	romdiv=document.createElement("div");
	romspan=document.createElement("span");
	romspan.style.cssText="margin-left:60px;";
	romtitle=document.createTextNode("会议地点：");
	romspan.appendChild(romtitle);
	romdiv.appendChild(romspan);
	romin=document.createElement("input");
	romin.id="room";
	romin.onblur=function(){wordsValid("room",20);};
	romin.style.cssText="margin-left:15px;width:135px;";
	romdiv.appendChild(romin);
	xindiv.appendChild(romdiv);
	
	attdiv=document.createElement("div");
	attspan=document.createElement("span");
	attspan.style.cssText="margin-left:60px;";
	atttitle=document.createTextNode("与会对象：");
	attspan.appendChild(atttitle);
	attdiv.appendChild(attspan);
	attin=document.createElement("input");
	attin.id="attendant";
	attin.onblur=function(){wordsValid("attendant",20);};
	attin.style.cssText="margin-left:15px;width:135px;";
	attdiv.appendChild(attin);
	xindiv.appendChild(attdiv);
	
	subbut=document.getElementById("submit");
	subbut.onclick=function(){
		metcnt=document.getElementById("contx").value;
		metrom=document.getElementById("room").value;
		yhdx=document.getElementById("attendant").value;
		
		ysl=document.getElementById("year");
		yvl=ysl.options[ysl.selectedIndex].value;
		msl=document.getElementById("month");
		mvl=msl.options[msl.selectedIndex].value;
		dsl=document.getElementById("day");
		dvl=dsl.options[dsl.selectedIndex].value;
		
		bhsel1=document.getElementById("btimeh");
		bhval1=bhsel1.options[bhsel1.selectedIndex].value;
		bmsel1=document.getElementById("btimem");
		bmval1=bmsel1.options[bmsel1.selectedIndex].value;
		ehsel1=document.getElementById("etimeh");
		ehval1=ehsel1.options[ehsel1.selectedIndex].value;
		emsel1=document.getElementById("etimem");
		emval1=emsel1.options[emsel1.selectedIndex].value;
		Info="hyn="+yvl+"&hyy="+mvl+"&hyr="+dvl+"&kss="+bhval1+"&ksf="+bmval1+"&jss="+ehval1+"&jsf="+emval1+"&content="+metcnt+"&room="+metrom+"&attendant="+yhdx;
		timeValid("year","month","day","btimeh","btimem","etimeh","etimem","publishMeeting.do",publishResponse,Info);
	};
	
	ret=document.getElementById("reset");
	ret.onclick=function(){
		document.getElementById("contx").value="";
		document.getElementById("room").value="";
		document.getElementById("attendant").value="";
	};
}

function publishResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			rest=new Array(7);
			for(j=0;j<7;j++){
				rest[j]=XMLHttpReq.responseXML.getElementsByTagName("res")[j].firstChild.data;
			}
			window.alert(rest[0]);
			if(rest[6]!="冲突"){
				document.getElementById("contx").value="";
				document.getElementById("room").value="";
				document.getElementById("attendant").value="";
			
				ntr=document.createElement("tr");
				ntr.id="meeting"+rest[6];
				ntd=new Array(5);
				ntxt=new Array(5);
				for(i=0;i<5;i++){
					ntd[i]=document.createElement("td");
					ntxt[i]=document.createTextNode(rest[i+1]);
					ntd[i].appendChild(ntxt[i]);
					ntr.appendChild(ntd[i]);
				}
				ntd[0].id="cnt"+rest[6];
				ntd[0].style.cssText="width:310px;";
				ntd[1].id="btim"+rest[6];
				ntd[1].style.cssText="width:180px;";
				ntd[2].id="etim"+rest[6];
				ntd[2].style.cssText="width:100px;";
				ntd[3].id="rom"+rest[6];
				ntd[3].style.cssText="width:90px;";
				ntd[4].id="att"+rest[6];
				ntd[4].style.cssText="width:90px;";
			
				xgtd=document.createElement("td");
				xgtd.id="altr";
				xgtd.style.cssText="width:31px;";
				xgimg=document.createElement("img");
				xgimg.className="butt";
				xgimg.src="IMG/alter.png";
				xgimg.onclick=function(){altMeeting(rest[6]);};
				xgtd.appendChild(xgimg);
				ntr.appendChild(xgtd);
			
				sctd=document.createElement("td");
				sctd.id="delt";
				sctd.style.cssText="width:33px;";
				scimg=document.createElement("img");
				scimg.className="butt";
				scimg.src="IMG/delete.png";
				scimg.onclick=function(){delMeeting(rest[6]);};
				sctd.appendChild(scimg);
				ntr.appendChild(sctd);

				mettbo=document.getElementById("meetingtbo");		
				mettbo.insertBefore(ntr,mettbo.firstChild);
			}
		}else{//页面不正常
			window.alert("您所请求的页面有异常。");
		}
	}
}

function altMeeting(id){
	nwdiv("修改信息");
	
	altcnt=document.getElementById("cnt"+id).firstChild.data;
	altrom=document.getElementById("rom"+id).firstChild.data;
	altatt=document.getElementById("att"+id).firstChild.data;
	
	xindiv=document.getElementById("nwdiv");
	cntdiv=document.createElement("div");
	cntspan1=document.createElement("span");
	cntspan1.style.cssText="margin-left:60px;"
	cntitle=document.createTextNode("会议内容：");
	cntin=document.createElement("input");
	cntin.id="contx";
	cntin.value=altcnt;
	cntin.onblur=function(){wordsValid("contx",40)};
	cntin.style.cssText="margin-left:15px;width:137px;"
	cntspan1.appendChild(cntitle);
	cntdiv.appendChild(cntspan1);
	cntdiv.appendChild(cntin);
	xindiv.appendChild(cntdiv);

	datediv=document.createElement("div");
	datespan1=document.createElement("span");
	datespan1.style.cssText="margin-left:60px;";
	datetitle=document.createTextNode("会议日期：");
	datespan2=document.createElement("span");
	datespan2.id="date1";
	datespan2.style.cssText="margin-left:15px;"
	datespan1.appendChild(datetitle);
	datediv.appendChild(datespan1);
	datediv.appendChild(datespan2);
	xindiv.appendChild(datediv);
	time("year","month","day","date1",1);
	
	btimediv=document.createElement("div");
	xindiv.appendChild(btimediv);
	btimespan1=document.createElement("span");
	btimespan1.style.cssText="margin-left:60px;";
	btimetitle=document.createTextNode("开始时间：");
	btimespan1.appendChild(btimetitle);
	btimediv.appendChild(btimespan1);
	btimespan2=document.createElement("span");
	btimespan2.id="bth";
	btimespan2.style.cssText="margin-left:15px;";
	btimediv.appendChild(btimespan2);
	showtime("h","btimeh","bth");
	btimespan3=document.createElement("span");
	btimespan3.style.cssText="margin-left:19px;";
	btimetxt1=document.createTextNode("时");
	btimespan3.appendChild(btimetxt1);
	btimediv.appendChild(btimespan3);
	btimespan4=document.createElement("span");
	btimespan4.id="btm";
	btimespan4.style.cssText="margin-left:19px;";
	btimediv.appendChild(btimespan4);
	showtime("m","btimem","btm");
	btimespan5=document.createElement("span");
	btimespan5.style.cssText="margin-left:19px;";
	btimetxt2=document.createTextNode("分");
	btimespan5.appendChild(btimetxt2);
	btimediv.appendChild(btimespan5);
	
	etimediv=document.createElement("div");
	xindiv.appendChild(etimediv);
	etimespan1=document.createElement("span");
	etimespan1.style.cssText="margin-left:60px;";
	etimetitle=document.createTextNode("结束时间：");
	etimespan1.appendChild(etimetitle);
	etimediv.appendChild(etimespan1);
	etimespan2=document.createElement("span");
	etimespan2.id="eth";
	etimespan2.style.cssText="margin-left:15px;";
	etimediv.appendChild(etimespan2);
	showtime("h","etimeh","eth");
	etimespan3=document.createElement("span");
	etimespan3.style.cssText="margin-left:19px;";
	etimetxt1=document.createTextNode("时");
	etimespan3.appendChild(etimetxt1);
	etimediv.appendChild(etimespan3);
	etimespan4=document.createElement("span");
	etimespan4.id="etm";
	etimespan4.style.cssText="margin-left:19px;";
	etimediv.appendChild(etimespan4);
	showtime("m","etimem","etm");
	etimespan5=document.createElement("span");
	etimespan5.style.cssText="margin-left:19px;";
	etimetxt2=document.createTextNode("分");
	etimespan5.appendChild(etimetxt2);
	etimediv.appendChild(etimespan5);
	
	romdiv=document.createElement("div");
	romspan=document.createElement("span");
	romspan.style.cssText="margin-left:60px;";
	romtitle=document.createTextNode("会议地点：");
	romspan.appendChild(romtitle);
	romdiv.appendChild(romspan);
	romin=document.createElement("input");
	romin.id="room";
	romin.value=altrom;
	romin.onblur=function(){wordsValid("room",20);};
	romin.style.cssText="margin-left:15px;width:135px;";
	romdiv.appendChild(romin);
	xindiv.appendChild(romdiv);
	
	attdiv=document.createElement("div");
	attspan=document.createElement("span");
	attspan.style.cssText="margin-left:60px;";
	atttitle=document.createTextNode("与会对象：");
	attspan.appendChild(atttitle);
	attdiv.appendChild(attspan);
	attin=document.createElement("input");
	attin.id="attendant";
	attin.value=altatt;
	attin.onblur=function(){wordsValid("attendant",20);};
	attin.style.cssText="margin-left:15px;width:135px;";
	attdiv.appendChild(attin);
	xindiv.appendChild(attdiv);
	
	subbut=document.getElementById("submit");
	subbut.onclick=function(){
		metcnt=document.getElementById("contx").value;
		metrom=document.getElementById("room").value;
		yhdx=document.getElementById("attendant").value;
		
		ysl=document.getElementById("year");
		yvl=ysl.options[ysl.selectedIndex].value;
		msl=document.getElementById("month");
		mvl=msl.options[msl.selectedIndex].value;
		dsl=document.getElementById("day");
		dvl=dsl.options[dsl.selectedIndex].value;
		
		bhsel1=document.getElementById("btimeh");
		bhval1=bhsel1.options[bhsel1.selectedIndex].value;
		bmsel1=document.getElementById("btimem");
		bmval1=bmsel1.options[bmsel1.selectedIndex].value;
		ehsel1=document.getElementById("etimeh");
		ehval1=ehsel1.options[ehsel1.selectedIndex].value;
		emsel1=document.getElementById("etimem");
		emval1=emsel1.options[emsel1.selectedIndex].value;

		Info="id="+id+"&hyn="+yvl+"&hyy="+mvl+"&hyr="+dvl+"&kss="+bhval1+"&ksf="+bmval1+"&jss="+ehval1+"&jsf="+emval1+"&content="+metcnt+"&room="+metrom+"&attendant="+yhdx;
		timeValid("year","month","day","btimeh","btimem","etimeh","etimem","alterMeeting.do",alterResponse,Info);
	};
	
	ret=document.getElementById("reset");
	ret.onclick=function(){
		document.getElementById("contx").value="";
		document.getElementById("room").value="";
		document.getElementById("attendant").value="";
	};
}

function alterResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			rest=new Array(7);
			for(j=0;j<7;j++){
				rest[j]=XMLHttpReq.responseXML.getElementsByTagName("res")[j].firstChild.data;
			}
			window.alert(rest[0]);
			if(rest[6]!="冲突"){
				bgdiv2=document.getElementById("bgdiv");
				bgdiv2.parentNode.removeChild(bgdiv2);
				nwdiv2=document.getElementById("nwdiv");
				nwdiv2.parentNode.removeChild(nwdiv2);
			
				document.getElementById("cnt"+rest[6]).firstChild.data=rest[1];
				document.getElementById("btim"+rest[6]).firstChild.data=rest[2];
				document.getElementById("etim"+rest[6]).firstChild.data=rest[3];
				document.getElementById("rom"+rest[6]).firstChild.data=rest[4];
				document.getElementById("att"+rest[6]).firstChild.data=rest[5];
			}
		}else{
			alert("您所请求的页面有异常。");
		}
	}
}

function delMeeting(id){
	delValid("deleteMeeting.do",deleteResponse,id);
}

function deleteResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res0=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			res1=XMLHttpReq.responseXML.getElementsByTagName("res")[1].firstChild.data;
			window.alert(res0);
			deltr=document.getElementById("meeting"+res1);
			deltr.parentNode.removeChild(deltr);
		}else{
			alert("你所请求的页面有异常。");
		}
	}
}

function toRed(length){
	time1=new Date();
	nwy=time1.getYear();
	nwmo=time1.getMonth();
	nwd=time1.getDate();
	nwh=time1.getHours();
	nwmi=time1.getMinutes();
	nws=time1.getSeconds();
	nwtime=new Date(nwy,nwmo,nwd,nwh,nwmi,nws);

	allId=new Array(length);
	allTim=new Array(length);
	allY=new Array(length);
	allMo=new Array(length);
	allD=new Array(length);
	allH=new Array(length);
	allMi=new Array(length);
	allS=new Array(length);
	finTim=new Array(length);
	isExist=false;
	for(i=0;i<length;i++){
		allId[i]=document.getElementById(i).value;
		allTim[i]=document.getElementById("btim"+allId[i]).firstChild.data;
		allY[i]=allTim[i].substring(0,4);
		allMo[i]=allTim[i].substring(5,7);
		allD[i]=allTim[i].substring(8,10);
		allH[i]=allTim[i].substring(11,13);
		allMi[i]=allTim[i].substring(14,16);
		allS[i]=allTim[i].substring(17,19);
		finTim[i]=new Date(allY[i],allMo[i]-1,allD[i],allH[i],allMi[i],allS[i]);
		
		if(finTim[i]<=nwtime){
			isExist=true;
			document.getElementById("meeting"+allId[i]).style.cssText="color:red;font-style:italic;";
		}
	}
	typ=document.getElementById("loginType").value;
	if(typ=="managerLogin"){
		if(isExist){
			alert("存在过期会议，请尽快删除！");
		}
	}
}