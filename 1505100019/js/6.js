/**
 * Created by 毛毛 on 2016/10/18.
 */

//定义自然数相加函数
function qiuhe(n){
    var sum = 0;
    for (var i = 1;i <= n;i++) {
        sum = sum + i
    }
    console.log(sum)

}
qiuhe(8000)

//定义偶数累加求和函数
function oushu(n){
    var sum = 0
    for (var i = 0; i <= n;i++ ){
        if(i % 2 == 0){
            sum = sum + i
        }
        console.log(sum);
    }
}
oushu(800)

//定义矩形周长和面积的计算
function zhouchang(height,width){
    var height;
    var width;
    zhouchang  = (height + width )*2;
    console.log(zhouchang );
}
function mianji(height,width){
    var height;
    var width;
    mianji  = height * width;
    console.log(mianji )
}

zhouchang(20,30)
mianji (40,50)


var data=new Array();

data[0]=zhouchang;
data[1]=mianji;

document.write("矩形的周长为："+data[0]+"<br>");
document.write("矩形的面积为："+data[1]+"<br>");