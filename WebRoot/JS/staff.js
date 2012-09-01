function hidden(length,loginType){
	if(loginType=="staffLogin"){
		document.getElementById("register").style.display="none";
		document.getElementById("stalt").style.display="none";
		document.getElementById("stdel").style.display="none";
		document.getElementById("title").firstChild.firstChild.data="人事信息";
		for(i=0;i<length;i++){
			document.getElementById("Stalt"+i).style.display="none";
			document.getElementById("Stdel"+i).style.display="none";
		}
	}
}

function register(){
	nwdiv("员工注册");
	
	outdiv=document.getElementById("nwdiv");
	
	undiv=document.createElement("div");
	outdiv.appendChild(undiv);
	unspan1=document.createElement("span");
	unspan1.style.cssText="margin-left:100px;";
	undiv.appendChild(unspan1);
	untitle=document.createTextNode("用户名：");
	unspan1.appendChild(untitle);
	uninput=document.createElement("input");
	uninput.id="username";
	uninput.onblur=function(){charValid("username");};
	uninput.style.cssText="width:120px;";
	undiv.appendChild(uninput);	
	
	rndiv=document.createElement("div");
	rndiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(rndiv);
	rnspan1=document.createElement("span");
	rnspan1.style.cssText="margin-left:100px;";
	rndiv.appendChild(rnspan1);
	rntitle=document.createTextNode("姓   名：");
	rnspan1.appendChild(rntitle);
	rninput=document.createElement("input");
	rninput.id="realname";
	rninput.onblur=function(){wordsValid("realname",10);};
	rninput.style.cssText="width:120px;";
	rndiv.appendChild(rninput);
	
	dpdiv=document.createElement("div");
	dpdiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(dpdiv);
	dpspan1=document.createElement("span");
	dpspan1.style.cssText="margin-left:100px;";
	dpdiv.appendChild(dpspan1);
	dptitle=document.createTextNode("部   门：");
	dpspan1.appendChild(dptitle);
	dpinput=document.createElement("input");
	dpinput.id="department";
	dpinput.onblur=function(){wordsValid("department",20);};
	dpinput.style.cssText="width:120px;";
	dpdiv.appendChild(dpinput);
	
	ptdiv=document.createElement("div");
	ptdiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(ptdiv);
	ptspan1=document.createElement("span");
	ptspan1.style.cssText="margin-left:100px;";
	ptdiv.appendChild(ptspan1);
	pttitle=document.createTextNode("职   位：");
	ptspan1.appendChild(pttitle);
	ptinput=document.createElement("input");
	ptinput.id="position";
	ptinput.onblur=function(){wordsValid("position",20);};
	ptinput.style.cssText="width:120px;";
	ptdiv.appendChild(ptinput);
	
	subbut=document.getElementById("submit");
	subbut.onclick=function(){
		if(charValid("username")&&wordsValid("realname",10)&&wordsValid("department",20)&&wordsValid("position",20)){
			uname1=document.getElementById("username").value;
			rname1=document.getElementById("realname").value;
			dept1=document.getElementById("department").value;
			post1=document.getElementById("position").value;
			info="uname="+uname1+"&rname="+rname1+"&dept="+dept1+"&post="+post1;
			sendRequest("register.do",registerResponse,info);
		}
		else{alert("输入了非法的信息！");}
	};
	
	ret=document.getElementById("reset");
	ret.onclick=function(){
		document.getElementById("username").value="";
		document.getElementById("realname").value="";
		document.getElementById("department").value="";
		document.getElementById("position").value="";
		
	};
}

function registerResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			rest=new Array(9);
			for(j=0;j<9;j++){
				rest[j]=XMLHttpReq.responseXML.getElementsByTagName("res")[j].firstChild.data;
			}
			window.alert(rest[0]);
			if(rest[8]!="error"){
				document.getElementById("username").value="";
				document.getElementById("realname").value="";
				document.getElementById("department").value="";
				document.getElementById("position").value="";
			
				ntr=document.createElement("tr");
				ntr.id="staff"+rest[8];
				ntd=new Array(7);
				ntxt=new Array(7);
				for(i=0;i<7;i++){
					ntd[i]=document.createElement("td");
					ntxt[i]=document.createTextNode(rest[i+1]);
					ntd[i].appendChild(ntxt[i]);
					ntr.appendChild(ntd[i]);
				}
				ntd[0].id="stname"+rest[8];
				ntd[0].style.cssText="width:70px;";
				ntd[1].id="stdepartment"+rest[8];
				ntd[1].style.cssText="width:90px;";
				ntd[2].id="stposition"+rest[8];
				ntd[2].style.cssText="width:90px;";
				ntd[3].id="staddress"+rest[8];
				ntd[3].style.cssText="width:200px;";
				ntd[4].id="stmobile"+rest[8];
				ntd[4].style.cssText="width:100px;";
				ntd[5].id="stemail"+rest[8];
				ntd[5].style.cssText="width:150px;";
				ntd[6].id="stpower"+rest[8];
				ntd[6].style.cssText="width:60px;";
			
				xgtd=document.createElement("td");
				xgtd.id="stalt";
				xgtd.style.cssText="width:33px;";
				xgimg=document.createElement("img");
				xgimg.className="butt";
				xgimg.src="IMG/alter.png";
				xgimg.onclick=function(){altStaff(rest[8]);};
				xgtd.appendChild(xgimg);
				ntr.appendChild(xgtd);
			
				sctd=document.createElement("td");
				sctd.id="stdel";
				sctd.style.cssText="width:33px;";
				scimg=document.createElement("img");
				scimg.className="butt";
				scimg.src="IMG/delete.png";
				scimg.onclick=function(){delStaff(rest[8]);};
				sctd.appendChild(scimg);
				ntr.appendChild(sctd);

				statbo=document.getElementById("stafftbo");		
				statbo.insertBefore(ntr,statbo.firstChild);
			}
		}else{//页面不正常
			window.alert("用户名已存在");
		}
	}
}

function altStaff(id){
	nwdiv("修改员工信息");
//alert(id);
	outdiv=document.getElementById("nwdiv");
	
	rndiv=document.createElement("div");
	outdiv.appendChild(rndiv);
	rnspan1=document.createElement("span");
	rnspan1.style.cssText="margin-left:100px;";
	rndiv.appendChild(rnspan1);
	rntitle=document.createTextNode("姓名：");
	rnspan1.appendChild(rntitle);
	rninput=document.createElement("input");
	rninput.id="realname";
	oldname=document.getElementById("stname"+id).firstChild.data;
	rninput.value=oldname;
	rninput.onblur=function(){wordsValid("realname",10);};
	rninput.style.cssText="width:120px;";
	rndiv.appendChild(rninput);	
	
	dpdiv=document.createElement("div");
	dpdiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(dpdiv);
	dpspan1=document.createElement("span");
	dpspan1.style.cssText="margin-left:100px;";
	dpdiv.appendChild(dpspan1);
	dptitle=document.createTextNode("部门：");
	dpspan1.appendChild(dptitle);
	dpinput=document.createElement("input");
	dpinput.id="department";
	olddept=document.getElementById("stdepartment"+id).firstChild.data;
	dpinput.value=olddept;
	dpinput.onblur=function(){wordsValid("department",20);};
	dpinput.style.cssText="width:120px;";
	dpdiv.appendChild(dpinput);
	
	ptdiv=document.createElement("div");
	ptdiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(ptdiv);
	ptspan1=document.createElement("span");
	ptspan1.style.cssText="margin-left:100px;";
	ptdiv.appendChild(ptspan1);
	pttitle=document.createTextNode("职位：");
	ptspan1.appendChild(pttitle);
	ptinput=document.createElement("input");
	ptinput.id="position";
	oldpost=document.getElementById("stposition"+id).firstChild.data;
	ptinput.value=oldpost;
	ptinput.onblur=function(){wordsValid("position",20);};
	ptinput.style.cssText="width:120px;";
	ptdiv.appendChild(ptinput);
	
	pwdiv=document.createElement("div");
	pwdiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(pwdiv);
	pwspan1=document.createElement("span");
	pwspan1.style.cssText="margin-left:100px;";
	pwdiv.appendChild(pwspan1);
	pwtitle=document.createTextNode("权限：");
	pwspan1.appendChild(pwtitle);
	pwspan2=document.createElement("span");
	pwdiv.appendChild(pwspan2);
	pwsel=document.createElement("select");
	pwsel.id="power";
	pwsel.className="power";
	pwspan2.appendChild(pwsel);
	pwopt1=document.createElement("option");
	pwopt1.value="员工";
	pwsel.appendChild(pwopt1);
	pwtxt1=document.createTextNode("员工");
	pwopt1.appendChild(pwtxt1);
	pwopt2=document.createElement("option");
	pwopt2.value="管理员";
	pwsel.appendChild(pwopt2);
	pwtxt2=document.createTextNode("管理员");
	pwopt2.appendChild(pwtxt2);
	
	subbut=document.getElementById("submit");
	subbut.onclick=function(){
		if(wordsValid("realname",10)&&wordsValid("department",20)&&wordsValid("position",20)){
		
			rname1=document.getElementById("realname").value;
			dept1=document.getElementById("department").value;
			post1=document.getElementById("position").value;
			powse=document.getElementById("power");
			powval=powse.options[powse.selectedIndex].value;
			if(document.getElementById("pow"+id)==null){
				oldpower="员工";
			}
			else{
				oldpower=document.getElementById("pow"+id).value;
			}
			info="rname="+rname1+"&dept="+dept1+"&post="+post1+"&npow="+powval+"&oldpow="+oldpower+"&idInfo="+id;

//			oldpower=document.getElementById("stpower"+id).firstChild.data;
			
			if(powval==oldpower){
				sendRequest("alterStaff.do",alterResponse,info);
			}
			else{
				if(powval=="员工"){
					alert("请先指定新的系统管理员！");
				}
				else{
					if(confirm("你确定要将该用户提升为管理员吗？你将在下次登录时失去管理员权限！")){
						sendRequest("alterStaff.do",alterResponse,info);
					}
				}
			}
		}
		else{alert("输入了非法的信息！");}
	};
	
	ret=document.getElementById("reset");
	ret.onclick=function(){
		document.getElementById("realname").value="";
		document.getElementById("department").value="";
		document.getElementById("position").value="";
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
			document.getElementById("stname"+rest[6]).firstChild.data=rest[1];
			document.getElementById("stdepartment"+rest[6]).firstChild.data=rest[2];
			document.getElementById("stposition"+rest[6]).firstChild.data=rest[3];
			document.getElementById("stpower"+rest[6]).firstChild.data=rest[4];
			if(rest[4]=="管理员"&&rest[5]=="员工"){
				oldone=document.getElementById("thisStaff").value;
				document.getElementById("stpower"+oldone).firstChild.data="员工";
				window.top.location.replace("login.jsp");
			}
			guanbi();
		}else{
			alert("您所请求的页面有异常。");
		}
	}
}

function delStaff(id){
	quanxian=document.getElementById("stpower"+id).firstChild.data;

	if(quanxian=="管理员"){
		alert("不能删除管理员");
	}
	else{
		if(confirm("确定要注销该员工吗？")){
			sendRequest("deleteStaff.do",deleteResponse,"idInfo="+id);
		}
	}
}

function deleteResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res0=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			res1=XMLHttpReq.responseXML.getElementsByTagName("res")[1].firstChild.data;
			window.alert(res0);
			deltr=document.getElementById("staff"+res1);
			deltr.parentNode.removeChild(deltr);
		}else{
			alert("你所请求的页面有异常。");
		}
	}
}

function pwdsub(id){
	nwdiv("密码确认");
	
	outdiv=document.getElementById("nwdiv");
	subdiv=document.createElement("div");
	subdiv.style.cssText="margin-top:70px;";
	outdiv.appendChild(subdiv);
	subspan1=document.createElement("span");
	subspan1.style.cssText="margin-left:50px;";
	subdiv.appendChild(subspan1);
	subtitle=document.createTextNode("请输入密码：");
	subspan1.appendChild(subtitle);
	subinput=document.createElement("input");
	subinput.id="pwdsubmit";
	subinput.type="password";
	subinput.onblur=function(){wordsValid("pwdsubmit",30);};
	subdiv.appendChild(subinput);
	
	subbut=document.getElementById("submit");
	subbut.onclick=function(){
		if(wordsValid("pwdsubmit",30)){
			inputpwd=document.getElementById("pwdsubmit").value;
			rightpwd=document.getElementById("pwdInfo").value;
			if(inputpwd==rightpwd){
				guanbi();
				alterInfo(id);
			}
			else{
				alert("密码错误，你不能进行该操作！");
				document.getElementById("pwdsubmit").value="";
			}
			
//			info="uname="+uname1+"&rname="+rname1+"&dept="+dept1+"&post="+post1;
//			sendRequest("register.do",registerResponse,info);
		}
		else{alert("输入了非法的信息！");}
	};
	
	ret=document.getElementById("reset");
	ret.onclick=function(){
		document.getElementById("pwdsubmit").value="";		
	};		
}


function alterInfo(id){
	nwdiv("修改个人资料");
	outdiv=document.getElementById("nwdiv");
	
	undiv=document.createElement("div");
	outdiv.appendChild(undiv);
	unspan1=document.createElement("span");
	unspan1.style.cssText="margin-left:100px;";
	undiv.appendChild(unspan1);
	untitle=document.createTextNode("新 密 码 ：");
	unspan1.appendChild(untitle);
	uninput=document.createElement("input");
	uninput.id="newpwd";
	uninput.type="password";
	oldpwd=document.getElementById("pwdInfo").value;
	uninput.value=oldpwd;
	uninput.onblur=function(){charValid("newpwd");};
	uninput.onfocus=function(){uninput.value="";};
	uninput.style.cssText="width:120px;";
	undiv.appendChild(uninput);	
	
	rndiv=document.createElement("div");
	rndiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(rndiv);
	rnspan1=document.createElement("span");
	rnspan1.style.cssText="margin-left:100px;";
	rndiv.appendChild(rnspan1);
	rntitle=document.createTextNode("再输一次：");
	rnspan1.appendChild(rntitle);
	rninput=document.createElement("input");
	rninput.id="newpwd2";
	rninput.type="password";
	rninput.value=oldpwd;
	rninput.onfocus=function(){rninput.value="";};
	rninput.onblur=function(){pwdValid("newpwd","newpwd2",20)};
	rninput.style.cssText="width:120px;";
	rndiv.appendChild(rninput);
	
	dpdiv=document.createElement("div");
	dpdiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(dpdiv);
	dpspan1=document.createElement("span");
	dpspan1.style.cssText="margin-left:100px;";
	dpdiv.appendChild(dpspan1);
	dptitle=document.createTextNode("地      址：");
	dpspan1.appendChild(dptitle);
	dpinput=document.createElement("input");
	dpinput.id="address";
	oldadd=document.getElementById("staddress"+id).firstChild.data;
	dpinput.value=oldadd;
	dpinput.onfocus=function(){dpinput.value="";};
	dpinput.onblur=function(){wordsValid("address",40);};
	dpinput.style.cssText="width:120px;";
	dpdiv.appendChild(dpinput);
	
	ptdiv=document.createElement("div");
	ptdiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(ptdiv);
	ptspan1=document.createElement("span");
	ptspan1.style.cssText="margin-left:100px;";
	ptdiv.appendChild(ptspan1);
	pttitle=document.createTextNode("手      机：");
	ptspan1.appendChild(pttitle);
	ptinput=document.createElement("input");
	ptinput.id="mobile";
	oldmobile=document.getElementById("stmobile"+id).firstChild.data;
	ptinput.value=oldmobile;
	ptinput.onfocus=function(){ptinput.value="";};
	ptinput.onblur=function(){mobileValid("mobile");};
	ptinput.style.cssText="width:120px;";
	ptdiv.appendChild(ptinput);
	
	emdiv=document.createElement("div");
	emdiv.style.cssText="margin-top:15px;";
	outdiv.appendChild(emdiv);
	emspan1=document.createElement("span");
	emspan1.style.cssText="margin-left:100px;";
	emdiv.appendChild(emspan1);
	emtitle=document.createTextNode("e m a i l：");
	emspan1.appendChild(emtitle);
	eminput=document.createElement("input");
	eminput.id="email";
	oldemail=document.getElementById("stemail"+id).firstChild.data;
	eminput.value=oldemail;
	eminput.onfocus=function(){eminput.value="";};
	eminput.onblur=function(){emailValid()};
	eminput.style.cssText="width:120px;";
	emdiv.appendChild(eminput);
	
	subbut=document.getElementById("submit");
	subbut.onclick=function(){
		if(pwdValid("newpwd","newpwd2",20)&&addValid("address",40)&&mobileValid("mobile")&&emailValid()){
			nwp1=document.getElementById("newpwd").value;
			add1=document.getElementById("address").value;
			mob1=document.getElementById("mobile").value;
			ema1=document.getElementById("email").value;
			info="nwpd="+nwp1+"&nwad="+add1+"&nwmb="+mob1+"&nwem="+ema1+"&idInfo="+id;
			sendRequest("alterInfo.do",alterInfoResponse,info);
		}
	};
	
	ret=document.getElementById("reset");
	ret.onclick=function(){
		document.getElementById("newpwd").value="";
		document.getElementById("newpwd2").value="";
		document.getElementById("address").value="";
		document.getElementById("mobile").value="";
		document.getElementById("email").value="";
	};
}

function alterInfoResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res=XMLHttpReq.responseXML.getElementsByTagName("res");
			window.alert(res[0].firstChild.data);
			document.getElementById("staddress"+res[4].firstChild.data).firstChild.data=res[1].firstChild.data;
			document.getElementById("stmobile"+res[4].firstChild.data).firstChild.data=res[2].firstChild.data;
			document.getElementById("stemail"+res[4].firstChild.data).firstChild.data=res[3].firstChild.data;
			guanbi();
		}else{
			alert("你所请求的页面有异常。");
		}
	}
	
}

function pwdValid(id1,id2,length){

	isRight=true;
	pwd1=document.getElementById(id1).value;
	pwd2=document.getElementById(id2).value;
	if(pwd1==""||pwd2==""){
		isRight=false;
		alert("密码不能为空！");
	}
	else{
		if(pwd1!=pwd2){
			isRight=false;
			alert("两次输入的密码不一致！");
		}
		else{
			if(!wordsValid(id1,length)){
				isRight=false;
			}
			else{
				if(!charValid(id1)){
					isRight=false;
				}
			}
		}
	}
	return isRight;
}

function addValid(id,length){

	addre=document.getElementById(id).value;
	if(addre.length==0){
		alert("请填写完整的地址");
		return false;
	}
	else if(addre.length>length/2){
		alert("地址长度超过"+length+"个字符");
		return false;
	}
	else{
		return true;
	}
}

function mobileValid(id){

	isRight=true;
	mobilenum=document.getElementById(id).value;
		if(mobilenum.length!=11){
			isRight=false;
		}
		else{
			for(i=0;i<mobilenum.length;i++){
				if(mobilenum.charAt(i)<'0'||mobilenum.charAt(i)>'9'){
					isRight=false;
				}
				else{
					if(mobilenum.charAt(0)!=1){
						isRight=false;
					}
					else{
						if(mobilenum.charAt(1)!=3&&mobilenum.charAt(1)!=5&&mobilenum.charAt(1)!=8){
							isRight=false;
						}
					}
				}
			}		
		}
	if(isRight==false){alert("手机输入不正确！");}
	return isRight;
}

function isEmail(s){
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

function emailValid(){
	wwww=document.getElementById("email").value;
	return isEmail(wwww);
}