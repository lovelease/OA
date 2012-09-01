function clr(){
	if(confirm("您确定要清空所有考勤记录吗？")){		
		sendRequest("attQuerry.do",processResponse,"name=deleteAll");
	}
}
function processResponse(){	
	if(XMLHttpReq.readyState==4){//判断对象状态
		if(XMLHttpReq.status==200){//信息已经成功返回，开始处理信息
			var res=XMLHttpReq.responseXML.getElementsByTagName("res")[0].firstChild.data;
			window.alert(res);
		}else{//页面不正常
			window.alert("您所请求的页面有异常。");
		}
	}
}

function send(i){
	un=document.getElementById("un"+i).value;

	by=document.getElementById("by");
	byval=by.options[by.selectedIndex].text;
	bm=document.getElementById("bm");
	bmval=bm.options[bm.selectedIndex].text;
	bd=document.getElementById("bd");
	bdval=bd.options[bd.selectedIndex].text;
	ey=document.getElementById("ey");
	eyval=ey.options[ey.selectedIndex].text;
	em=document.getElementById("em");
	emval=em.options[em.selectedIndex].text;
	ed=document.getElementById("ed");
	edval=ed.options[ed.selectedIndex].text;
	begin=new Date(byval,bmval,bdval);
	end=new Date(eyval,emval,edval);
	if(begin<=end){
		document.getElementById("tt"+i).href="attQuerry.do?name="+un+"&by="+byval+"&bm="+bmval+"&bd="+bdval+"&ey="+eyval+"&em="+emval+"&ed="+edval;
	}
	else{
		document.getElementById("tt"+i).href="attendanceQuerry.jsp";
		document.getElementById("tt"+i).target="main";
		alert("你输入的时间区间非法！");
	}
}