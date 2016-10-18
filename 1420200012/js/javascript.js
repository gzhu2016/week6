// 自然数之和
function sum_Naturalnumber(n){
	var sum=0;
	for(var i=1;i<=n;i++)
		sum=sum+i;	
	console.log(sum);
}
sum_Naturalnumber(7)

// 偶数之和
function sum_Evennumber(n){
	var sum=0;
	for(var i=2;i<=n;i+=2){
		sum=sum+i;	
	}
	console.log(sum);
}
sum_Evennumber(4)

// 计算周长和面积
function girth_area(height,width)
{
	var data=new Array();
	data[0]=(height+width)*2;
	data[1]=height*width;
	return data;
}
console.log("矩形的周长和面积分别是："+girth_area(8,2));

