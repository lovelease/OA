function hidden(){
	var loginType=document.getElementById("loginType").value;
	if(loginType=="staffLogin"){
		document.getElementById("add").style.display="none";
		for(i=0;;i++){
			if(document.getElementById("button"+i)!=null){
				document.getElementById("button"+i).style.display="none";
			}
			else{
				break;
			}
		}
	}
}