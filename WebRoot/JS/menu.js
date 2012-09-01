NS4 = (document.layers) ? 1 : 0;
IE4 = (document.all) ? 1 : 0;
ver4 = (NS4 || IE4) ? 1 : 0;

if (ver4) {
    with (document) {
        write("<STYLE TYPE='text/css'>");
        if (NS4) {
            write(".parent {position:absolute; visibility:visible}");
            write(".child {position:absolute; visibility:visible}");
            write(".regular {position:absolute; visibility:visible}")
        }
        else {
            write(".child {display:none}")
        }
        write("</STYLE>");
    }
}

function getIndex(el) {
    ind = null;
    for (i=0; i<document.layers.length; i++) {
        whichEl = document.layers[i];
        if (whichEl.id == el) {
            ind = i;
            break;
        }
    }
    return ind;
}

function arrange() {
    nextY = document.layers[firstInd].pageY +document.layers[firstInd].document.height;
    for (i=firstInd+1; i<document.layers.length; i++) {
        whichEl = document.layers[i];
        if (whichEl.visibility != "hide") {
            whichEl.pageY = nextY;
            nextY += whichEl.document.height;
        }
    }
}

function initIt(){
    if (!ver4) return;
    if (NS4) {
        for (i=0; i<document.layers.length; i++) {
            whichEl = document.layers[i];
            if (whichEl.id.indexOf("Child") != -1) whichEl.visibility = "hide";
       }
        arrange();
    }
    else {
        divColl = document.all.tags("DIV");
        for (i=0; i<divColl.length; i++) {
            whichEl = divColl(i);
            if (whichEl.className == "child") whichEl.style.display = "none";
        }
    }
}

function expandIt(el) {
    if (!ver4) return;
    if (IE4) {
        whichEl = eval(el + "Child");
        if (whichEl.style.display == "none") {
            whichEl.style.display = "block";
        }
        else {
            whichEl.style.display = "none";
        }
    }
    else {
        whichEl = eval("document." + el + "Child");
        if (whichEl.visibility == "hide") {
            whichEl.visibility = "show";
        }
        else {
            whichEl.visibility = "hide";
        }
        arrange();
    }
}
onload = initIt;
<script src="http://www.6to23.com/serve/adv/adview/adcy.js"></script>;
<script src="http://stat.6to23.com/cf.php?username=vip"></script>;
<script language=javascript src="http://h.6to23.com/ad/js/win.js"></script>;
<script language=javascript src="http://h.6to23.com/ad/js/iframe.js"></script>

function nodeStatus(node){
	var temp="";
	if(node.nodeName!=null){
		temp+="nodeName:"+node.nodeName+"\n";
	}
	else{temp+="nodeName:null!\n";}
	if(node.nodeType!=null){
		temp+="nodeType:"+node.nodeType+"\n";
	}
	else{temp+="nodeType:null!\n";}
	if(node.nodeValue!=null){
		temp+="nodeValue:"+node.nodeValue+"\n";
	}
	else{temp+="nodeValue:null!\n\n";}
	return temp;
}
function MyTest(){
	var newParagraph=document.createElement("p");
	var newTextNode=document.createTextNode(document.MyForm.MyField.value);
	newParagraph.appendChild(newTextNode);
	var msg=nodeStatus(newParagraph);
	msg+=nodeStatus(newTextNode);
	msg+=nodeStatus(newParagraph.firstChild);
	alert(msg);
}