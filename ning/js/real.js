// JavaScript Document
function real(n){
	"use strict";
	var a=myform1.text1.value;
	n=parseInt(a);
	var x=0;
	for(var i=1;i<n+1;i++){
		x=x+i;
	}
	alert(x);
}

function double(m){
	"use strict";
	var b=myform2.text2.value;
	m=parseInt(b);
	var x=0;
	for(var i=2;i<m+1;i+2){
			x=x+i;
	}
	if(m%2==0){
		x=x+1;
	}
	else{
		x=x+2;
	}
	alert(x);
}

function square(){
	"use strict";
	var height=myform3.text3.value;
	var weight=myform3.text4.value;
    var b=parseInt(height);
	var c=parseInt(weight);
	var a=[b,c];
	var m=a[0]+a[1];
	var n=a[0]*a[1];
	alert(m);
	alert(n);	
}

function clear1(){
	myform1.text1.value="";
}

function clear2(){
	myform2.text2.value="";
}

function clear3(){
	myform3.text3.value="";
	myform3.text4.value="";
}


