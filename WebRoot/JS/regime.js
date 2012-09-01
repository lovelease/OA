function add(){
	var div1=document.createElement("div");
		div1.id="div1";
		div1.style.cssText="position:absolute;top:0px;left:0px;z-index:1;background:#999999;width:1016px;height:524px;filter:alpha(opacity=50)";
	var div2=document.createElement("div");
		div2.id="addRegime";
		div2.style.cssText="position:absolute;background-image:url('IMG/addbg.png');z-index:2;top:22%;left:30%;width:400px;height:270px";
	var p=document.createElement("p");
		p.id="p1";
		p.style.cssText="margin-top:10px;font-family:华文彩云;text-align:center";
	var exit=document.createElement("img");
		exit.src="IMG/close.png";
		exit.onclick=quxiao;
		exit.alt="关闭";
		exit.style.cssText="position:absolute;cursor:hand;top:3px;right:5px";
	var middle=document.createElement("center");
		middle.id="middle";
	var textarea=document.createElement("textarea");
		textarea.id="txt";
		textarea.style.cssText="width:320px;height:170px";
	var span1=document.createElement("span");
		span1.id="span1";
		span1.onclick=validate;
		span1.style.cssText="position:absolute;top:230px;left:160px;color:#003366;cursor:hand;text-decoration:underline";
	var span2=document.createElement("span");
		span2.id="span2";
		span2.onclick=function(){textarea.value="";};
		span2.style.cssText="position:absolute;top:230px;left:220px;color:#003366;cursor:hand;text-decoration:underline";
	var title=document.createTextNode("添加信息");
	var tj=document.createTextNode("添加");
	var cz=document.createTextNode("重置");
	p.appendChild(title);
	span1.appendChild(tj);
	span2.appendChild(cz);
	middle.appendChild(textarea);
	div2.appendChild(exit);
	div2.appendChild(p);
	div2.appendChild(middle);
	div2.appendChild(span1);
	div2.appendChild(span2);
	document.body.appendChild(div1);
	document.body.appendChild(div2);
}
function quxiao(){
	var div1=document.getElementById("div1");
	var div2=document.getElementById("addRegime");
	document.body.removeChild(div1);
	document.body.removeChild(div2);
}
function addResponse(){	
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			var res0=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			window.alert(res0);
			document.getElementById("txt").value="";
			var res1=XMLHttpReq.responseXML.getElementsByTagName("res")[1].firstChild.data;
			div=document.getElementById("content");
			ndiv=document.getElementById("newdiv");
			if(ndiv!=null){
				div.removeChild(ndiv);
			}
			var res2=XMLHttpReq.responseXML.getElementsByTagName("res")[2].firstChild.data;
			dch=document.createElement("div");
			dch.id="div"+res2;
			span11=document.createElement("span");
			span11.style.cssText="width:660px;text-size:14px;line-height:20px;";		
			xiugai=document.createElement("img");		
			xiugai.className="alter";			
			xiugai.src="IMG/alter.png";
			xiugai.alt="修改";
			xiugai.onclick=function(){alterRegime(res2);};
			del=document.createElement("img");
			del.className="alter";
			del.src="IMG/delete.png";
			del.alt="删除";
			del.onclick=function(){deleteRegime(res2);};	
			br1=document.createElement("br");
			span22=document.createElement("span");
			span22.id="cnt"+res2;
			img3=document.createElement("img");
			img3.id="mark";
			img3.src="IMG/regime.png";
			br2=document.createElement("br");		
			text=document.createTextNode(res1);
			span22.appendChild(img3);			
			span22.appendChild(text);
					
			span11.appendChild(xiugai);
			span11.appendChild(del);
			dch.appendChild(span11);
			dch.appendChild(br1);
			dch.appendChild(span22);
			dch.appendChild(br2);
			div.insertBefore(dch,div.firstChild);
			fenye();
		}else{//页面不正常
			window.alert("您所请求的页面有异常。");
		}
	}
}
function validate(){
	cont=document.getElementById("txt").value;
	if(cont!=""){
		if(cont.length<=333){
			sendRequest("addRegime.do",addResponse,"content="+cont);
		}else{
			alert("输入的信息过长!");
		}
	}else{
		alert("你输入的内容为空！");
	}
}
function deleteRegime(id){
	if(confirm("确定删除这条记录吗？")){
		sendRequest("deleteRegime.do",deleteResponse,"id="+id);
	}
}
function deleteResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res0=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			res1=XMLHttpReq.responseXML.getElementsByTagName("res")[1].firstChild.data;
			window.alert(res0);
			condiv=document.getElementById("content");
			regdiv=document.getElementById("div"+res1);
			condiv.removeChild(regdiv);
			ndiv=document.getElementById("newdiv");
			if(ndiv!=null){
				condiv.removeChild(ndiv);
			}
			fenye();
		}else{//页面不正常
			window.alert("您所请求的页面有异常。");
		}
	}
}

function alterRegime(id){
	var div1=document.createElement("div");
		div1.id="div1";
		div1.style.cssText="position:absolute;top:0px;left:0px;z-index:1;background:#999999;width:1016px;height:524px;filter:alpha(opacity=45)";
	var div2=document.createElement("div");
		div2.id="addRegime";
		div2.style.cssText="position:absolute;background-image:url('IMG/addbg.png');z-index:2;top:22%;left:30%;width:400px;height:270px";
	var p=document.createElement("p");
		p.id="p1";
		p.style.cssText="margin-top:10px;font-family:华文彩云;text-align:center";
	var exit=document.createElement("img");
		exit.src="IMG/close.png";
		exit.onclick=quxiao;
		exit.alt="关闭";
		exit.style.cssText="position:absolute;cursor:hand;top:3px;right:5px";
	var middle=document.createElement("center");
		middle.id="middle";
	var textarea=document.createElement("textarea");
		textarea.id="txt";
		textarea.value=document.getElementById("cnt"+id).lastChild.data;
		textarea.style.cssText="width:320px;height:170px";
	var span1=document.createElement("span");
		span1.id="span1";
		span1.onclick=function(){valid(id);};
		span1.style.cssText="position:absolute;top:230px;left:160px;color:#003366;cursor:hand;text-decoration:underline";
	var span2=document.createElement("span");
		span2.id="span2";
		span2.onclick=function(){textarea.value="";};
		span2.style.cssText="position:absolute;top:230px;left:220px;color:#003366;cursor:hand;text-decoration:underline";
	var title=document.createTextNode("修改信息");
	var tj=document.createTextNode("修改");
	var cz=document.createTextNode("重置");
	p.appendChild(title);
	span1.appendChild(tj);
	span2.appendChild(cz);
	middle.appendChild(textarea);
	div2.appendChild(exit);
	div2.appendChild(p);
	div2.appendChild(middle);
	div2.appendChild(span1);
	div2.appendChild(span2);
	document.body.appendChild(div1);
	document.body.appendChild(div2);
}

function alterResponse(){
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			res0=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			res1=XMLHttpReq.responseXML.getElementsByTagName("res")[1].firstChild.data;
			res2=XMLHttpReq.responseXML.getElementsByTagName("res")[2].firstChild.data;
			window.alert(res0);
			spn=document.getElementById("cnt"+res2);
			spn.lastChild.data=res1;
			quxiao();
		}else{//页面不正常
			window.alert("您所请求的页面有异常。");
		}
	}
}

function valid(id){
	cnt=document.getElementById("txt").value;
	if(cnt!=""){
		sendRequest("alterRegime.do",alterResponse,"cnt="+cnt+"&id="+id);
	}else{
		alert("你输入的内容为空");
	}
}