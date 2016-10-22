/**
 * Created by Administrator on 2016/10/17 0017.
 */
//第一题
function plusone(n){//定义一个函数名为plusone，参数名为n的函数

    var sum=0;//声明一个变量且变量初始值为0

    for(i=1;i<=n;i++){//循环语句

        sum=sum+i;
    }
    return sum;//返回sum
}


//第二题
function plustwo(n){//定义一个函数名为plustwo，参数名为n的函数

    var sum2= 0,i;//声明一个变量sum2且变量初始值为0,声明一个变量i

    if(i%2==0){//条件语句判断i是否为偶数
        for(i=1;i<=n;i++){//循环语句
            sum2=i+sum2;
        }
    }
    return sum2;//返回sum2
}


//第三题
function square(height,width){//定义一个函数名为square，参数名为height与width的函数

    var data=new Array();//定义一个新数组data

    data[0]=(height+width)*2;//给数组赋值
    data[1]=height*width;

    return data;//返回数组data
}