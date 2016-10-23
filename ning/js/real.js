// JavaScript Document
function real(n){
	"use strict";
	var a=myform.text1.value;
	n=parseInt(a);
	var x=0;
	for(var i=1;i<n+1;i++){
		x=x+i;
	}
	alert(x);
}

function double(m){
	"use strict";
	var b=myform.text2.value;
	m=parseInt(b);
	var x=0;
	for(var i=2;i<m+1;i=i+2){
			x=x+i;
	}
	alert(x);
}

function square(){
	"use strict";
	var height=myform.text3.value;
	var weight=myform.text4.value;
    var b=parseInt(height);
	var c=parseInt(weight);
	var a=[b,c];
	var m=(a[0]+a[1])*2;
	var n=a[0]*a[1];
	alert(m);
	alert(n);	
}

function clear1(){
	myform.text1.value="";
}

function clear2(){
	myform.text2.value="";
}

function clear3(){
	myform.text3.value="";
	myform.text4.value="";
}


