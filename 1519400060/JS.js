//1.自然数累加求和函数
function sumNumber(n)
{
    for(var i=0,sum=0;i<=n;sum+=i++)
    {
    }
    console.log(sum);
    return sum;
}

//2.偶数累加求和函数
function sumEvenNumber(n)
{
    for(var i=0,sum=0;i<=n;sum+=i,i+=2)
    {
    }
    console.log(sum);
    return sum;
}

//3.
function CSfunction(height,width)
{
    var CS=new Array();

    CS[0]=2*(height+width);
    CS[1]=height*width;
    console.log(CS);
    return CS;
}
