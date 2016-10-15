/**
 * Created by z on 2016/10/15.
 */
//定义一个自然数累加求和的函数
function sumNum(n)
{
    var i,sum=0;
    for(i=1;i<=n;i++)
    {
        sum+=i;
    }
    console.log(sum);
    return sum;
}

//定义一个偶数累加求和的函数
function sumEvenNum(n)
{
    var i,sum=0;
    for(i=2;i<=n;i+=2)
    {
        sum+=i;
    }
    console.log(sum);
    return sum;
}

//函数3
function f3(height,width)
{
    var date=new Array();

    date[0]=2*(height+width);
    date[1]=height*width;

    console.log(date);
    return date;
}