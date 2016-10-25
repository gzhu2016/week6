/**
 * Created by mac on 2016/10/25.
 */
//第一题一到n的所有自然数和

function total1(n){
    var sum=0
    for(i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;

    //第二题一到n的所有偶数和

    function total2(n){
        var sum=0;
        for(var i=1;i<=n;i++){
            if(i%2==0){
                sum=sum+i;
            }
            return sum;
    //第三题定义一个函数，传入参数长（height）和宽（width）之后，返回一个数组（data），数组第一个元素（data[0]）为该矩形的周长，第二个元素（data[1]）为该矩形的面积
            function square(height,width){

                var data=new Array();

                data[0]=(height+width)*2;
                data[1]=height*width;

                return data;
            }