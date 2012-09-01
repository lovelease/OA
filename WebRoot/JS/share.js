function bgdiv(){
	backgdiv=document.createElement("div");
	backgdiv.id="bgdiv";
	backgdiv.style.cssText="position:absolute;top:0px;left:0px;z-index:1;background:#999999;width:1016px;height:524px;filter:alpha(opacity=50)";
	document.body.appendChild(backgdiv);
}

function nwdiv(title){
	bgdiv();
	tckdiv=document.createElement("div");
	tckdiv.id="nwdiv";
	tckdiv.style.cssText="position:absolute;background-image:url('IMG/addbg.png');z-index:2;top:22%;left:30%;width:400px;height:270px;color:#003366";
	p=document.createElement("p");
	p.id="title";
	tjxx=document.createTextNode(title);
	p.style.cssText="margin-top:10px;font-family:华文彩云;text-align:center";
	exit=document.createElement("img");
	exit.src="IMG/close.png";
	exit.onclick=guanbi;
	exit.alt="关闭";
	exit.style.cssText="position:absolute;cursor:hand;top:3px;right:5px";
	subutt=document.createElement("span");
	subutt.id="submit";
	subutt.style.cssText="position:absolute;bottom:10px;left:160px;color:#003366;cursor:hand;text-decoration:underline";
	qd=document.createTextNode("确定");
	rebutt=document.createElement("span");
	rebutt.id="reset";
	rebutt.style.cssText="position:absolute;bottom:10px;left:220px;color:#003366;cursor:hand;text-decoration:underline";
	cz=document.createTextNode("重置");
	
	p.appendChild(tjxx);
	rebutt.appendChild(cz);
	subutt.appendChild(qd);
	tckdiv.appendChild(p);
	tckdiv.appendChild(exit);
	tckdiv.appendChild(subutt);
	tckdiv.appendChild(rebutt);
	document.body.appendChild(tckdiv);
	
	this.add=function(component){nwdiv.appendChild(component);};
}

function guanbi(){
	bjdiv=document.getElementById("bgdiv");
	srdiv=document.getElementById("nwdiv");
	srdiv.parentNode.removeChild(srdiv);
	bjdiv.parentNode.removeChild(bjdiv);
}

function time(yname,mname,dname,divname,type){
	thediv=document.getElementById(divname);

	selyear=document.createElement("select");
	selyear.id=yname;
	selyear.name=yname;

	selyear.onblur=function(){
		thediv2=document.getElementById(divname);
		selmonth2=document.getElementById(mname);
		yfval=selmonth2.options[selmonth2.selectedIndex].text;
		oldsel=document.getElementById(dname);
		oldsel.parentNode.removeChild(oldsel);
		nlen=dateLen(yname,yfval);
		nselday=document.createElement("select");
		nselday.id=dname;
		nselday.name=dname;
		optd=new Array(nlen);
		txtd=new Array(nlen);
		for(i=0;i<nlen;i++){
			optd[i]=document.createElement("option");			
			optd[i].value=i+1;			
			txtd[i]=document.createTextNode(i+1);
			optd[i].appendChild(txtd[i]);
			nselday.appendChild(optd[i]);
		}
		thediv2.appendChild(nselday);
	};

	now=new Date();
	opty=new Array(2);
	txty=new Array(2);
	if(type==1){
		for(i=0;i<2;i++){
			opty[i]=document.createElement("option");		
			opty[i].value=now.getYear()+i;		
			txty[i]=document.createTextNode(now.getYear()+i);
			opty[i].appendChild(txty[i]);
			selyear.appendChild(opty[i]);
		}
	}else{
		for(i=0;i<2;i++){
			opty[i]=document.createElement("option");		
			opty[i].value=now.getYear()-i;		
			txty[i]=document.createTextNode(now.getYear()-i);
			opty[i].appendChild(txty[i]);
			selyear.appendChild(opty[i]);
		}
	}
	thediv.appendChild(selyear);
	
	selmonth=document.createElement("select");
	selmonth.id=mname;
	selmonth.name=mname;
	selmonth.onblur=function(){
		thediv3=document.getElementById(divname);
		selmonth3=document.getElementById(mname);
		yfval=selmonth3.options[selmonth3.selectedIndex].text;
		oldsel=document.getElementById(dname);
		oldsel.parentNode.removeChild(oldsel);
		nlen=dateLen(yname,yfval);
		nselday=document.createElement("select");
		nselday.id=dname;
		nselday.name=dname;
		optd=new Array(nlen);
		txtd=new Array(nlen);
		for(i=0;i<nlen;i++){
			optd[i]=document.createElement("option");			
			optd[i].value=i+1;			
			txtd[i]=document.createTextNode(i+1);
			optd[i].appendChild(txtd[i]);
			nselday.appendChild(optd[i]);
		}
		thediv3.appendChild(nselday);
	};
	optm=new Array(12);
	txtm=new Array(12);
	for(i=0;i<12;i++){
		optm[i]=document.createElement("option");		
		optm[i].value=i+1;		
		txtm[i]=document.createTextNode(i+1);
		optm[i].appendChild(txtm[i]);
		selmonth.appendChild(optm[i]);
	}
	thediv.appendChild(selmonth);

	selday=document.createElement("select");
	selday.id=dname;
	selday.name=dname;
	len=dateLen(yname,selmonth.options[selmonth.selectedIndex].text);
	optd=new Array(len);
	txtd=new Array(len);

	for(i=0;i<len;i++){
		optd[i]=document.createElement("option");	
		optd[i].value=i+1;	
		txtd[i]=document.createTextNode(i+1);
		optd[i].appendChild(txtd[i]);
		selday.appendChild(optd[i]);
	}
	thediv.appendChild(selday);
}

function showtime(type,selid,componentid){
	tdiv=document.getElementById(componentid);
	sel=document.createElement("select");
	sel.id=selid;
	sel.name=selid;
	if(type=="h"){
		opt=new Array(11);
		txt=new Array(11);
		for(i=0;i<9;i++){
			opt[i]=document.createElement("option");
			opt[i].value=i+9;
			txt[i]=document.createTextNode(i+9);
			opt[i].appendChild(txt[i]);
			sel.appendChild(opt[i]);
		}
		tdiv.appendChild(sel);
	}
	else{
		opt=new Array(12);
		txt=new Array(12);
		var j=0;
		for(i=0;i<12;i++){
			opt[i]=document.createElement("option");
			opt[i].value=j;
			txt[i]=document.createTextNode(j);
			opt[i].appendChild(txt[i]);
			sel.appendChild(opt[i]);
			j+=5;
		}
		tdiv.appendChild(sel);
	}
}

function dateLen(year,month){
	var datelen;
	if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
		datelen=31;
	}
	else if(month==4||month==6||month==9||month==11){
		datelen=30;
	}
	else{
		nf=document.getElementById(year);
		nfval=nf.options[nf.selectedIndex].text;
		if(isLeapYear(nfval)){
			datelen=29;
			
		}else{
			datelen=28;
		}
	}
	return datelen;
}

function isLeapYear(year){
    return (year%4==0&&year%100!=0)||year%400==0;
}

function wordsValid(id,number){
	isRight=true;
	cont1=document.getElementById(id).value;
	if(cont1!=""){
		if(cont1.length>number/3){
			isRight=false;
			alert("输入的字符过长！");
		}
	}else{
		isRight=false;
		alert("你输入的内容为空！");
	}
	return isRight;
}

function timeValid(yearid,monthid,dateid,bthid,btmid,ethid,etmid,hrf,processResponse,para){

	ysel=document.getElementById(yearid);
	yval=ysel.options[ysel.selectedIndex].value;
	msel=document.getElementById(monthid);
	mval=msel.options[msel.selectedIndex].value;
	dsel=document.getElementById(dateid);
	dval=dsel.options[dsel.selectedIndex].value;
	
	btimh=parseInt(getTime(bthid));
	btimm=parseInt(getTime(btmid));
	etimh=parseInt(getTime(ethid));
	etimm=parseInt(getTime(etmid));
	
	inputbdate=new Date(yval,mval-1,dval,btimh,btimm,0);
	inputedate=new Date(yval,mval-1,dval,etimh,etimm,0);
	
	date=new Date();
	ny=date.getYear();
	nmo=date.getMonth();
	nd=date.getDate();
	nh=date.getHours();
	nmi=date.getMinutes();
	ns=date.getSeconds();
	nowt=new Date(ny,nmo,nd,nh,nmi,ns);
	
	mtcnt=document.getElementById("contx").value;
	mtadd=document.getElementById("room").value;
	mtoj=document.getElementById("attendant").value;
	
	if(mtcnt==""||mtadd==""||mtoj==""){
		alert("请填写完整内容！");
	}
	else{
		if(inputbdate<nowt){
			alert("你输入的日期已过期！");
		}
		else{
			if(inputbdate>=inputedate){
				alert("你输入的时间区间非法！");
			}
			else{
				sendRequest(hrf,processResponse,para);
			}
		}
	}
}

function getTime(selid){
	selobj=document.getElementById(selid);
	selval=selobj.options[selobj.selectedIndex].value;
	return selval;
}

function delValid(url,processResponse,id){
	if(confirm("你确定要删除吗？")){
		sendRequest(url,processResponse,"id="+id);
	}
}

function charValid(id){
	isChar=true;
	var theobjt=document.getElementById(id).value;
	if(theobjt==""){
		isChar=false;
		alert("输入不能为空");
	}else{
		for(i=0;i<theobjt.length;i++){
			if(theobjt.charAt(i).charCodeAt()<'48'||theobjt.charAt(i).charCodeAt()>'57'&&theobjt.charAt(i).charCodeAt()<'65'||theobjt.charAt(i).charCodeAt()>'90'&&theobjt.charAt(i).charCodeAt()<'97'||theobjt.charAt(i).charCodeAt()>'122'){
				isChar=false;
				
			}
		}
		if(isChar==false){alert("输入了非法字符!");}
	}
	return isChar;
}