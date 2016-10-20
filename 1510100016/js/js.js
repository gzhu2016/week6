/**
 * Created by 文婕 on 2016/10/19.
 */
//定义一个自然数累加求和的函数
function qiuhe(n){
    var sum = 0;
    for (var i=1;i<=n;i++){
        sum = sum + 1;
    }
    console.log(sum);
}

//定义一个偶数累加求和的函数
function qiuhe2(n){
    var sum = 0
    for (var i=1;i<=n;i++){
        if(i % 2 == 0){
            sum = sum + 1
        }
        console.log(sum);
    }
}

//定义一个矩形周长和面积的计算
function C(height,width){
    var height;
    var width;
    C  = (height + width )*2;
    console.log(zhouchang );
}
function S(height,width){
    var height;
    var width;
    S  = height * width;
    console.log(mianji )
}

C(20,30)
S (40,50)


var data=new Array();

data[0]=C;
data[1]=S;

document.write("矩形的周长为："+data[0]+"<br>");
document.write("矩形的面积为："+data[1]+"<br>");