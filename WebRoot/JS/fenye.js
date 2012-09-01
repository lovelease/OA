function fenye(){
	var obj = document.getElementById("content");
	var page = document.getElementById("pages");
    var allpages = Math.ceil(parseInt(obj.scrollHeight)/parseInt(obj. offsetHeight));
    var dheight=(allpages-parseInt(obj.scrollHeight)/parseInt(obj. offsetHeight))*obj. offsetHeight;
    var nDiv=document.createElement("div");
    nDiv.id="newdiv";
    nDiv.style.height=dheight+"px";
    obj.appendChild(nDiv);
    page.innerHTML = "<span>共"+allpages+"页</span>&nbsp";
    for (var i=1;i<=allpages;i++){
        page.innerHTML += "<a href=\"javascript:showPage('"+i+"');\">第"+i+"页</a>&nbsp;";
    }
}
function showPage(pageINdex){
	var obj = document.getElementById("content"); 
    obj.scrollTop=(pageINdex-1)*parseInt(obj.offsetHeight);
}