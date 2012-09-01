function expand(id,childArray,href){
	var ul=document.getElementById(id);
	var length=childArray.length;
	if(ul.hasChildNodes()){
		for(i=0;i<length;i++){
			ul.removeChild(document.getElementById("li"+id+(i+1)));
		}
	}else{
		var a=new Array(length);
		var li=new Array(length);
		var text=new Array(length);
		var tag=new Array(length);
		for(i=0;i<length;i++){
			text[i]=document.createTextNode(childArray[i]);
			a[i]=document.createElement("a");
			a[i].href=href[i];
			a[i].target="main";
			li[i]=document.createElement("li");
			li[i].id="li"+id+(i+1);
			a[i].appendChild(text[i]);
			li[i].appendChild(a[i]);
			ul.appendChild(li[i]);
		}
	}
}