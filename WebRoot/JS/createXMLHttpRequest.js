//创建XMLHttpRequest对象
var XMLHttpReq=false;
function createXMLHttpRequest(){
	if(window.XMLHttpRequest){//mozilla浏览器
		XMLHttpReq=new XMLHttpRequest();
	}
	else if(window.ActiveXObject){//IE浏览器
		try{
			XMLHttpReq=new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{
				XMLHttpReq=new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){}
		}
	}
}

function sendRequest(url,processResponse,req){
	createXMLHttpRequest();
	XMLHttpReq.open("POST",url,true);
	XMLHttpReq.onreadystatechange=processResponse;//指定响应函数
	XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var txt=document.getElementById("txt");
	XMLHttpReq.send(req);//发送请求
}