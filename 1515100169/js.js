function sum(n)
{
    for(var i=1,s=0;i<=n;i++)
        s=s+i
    console.log(s)
}
sum(100)
function juge(x)
{
    var r = x % 2
    if (r == 0) return true
    else return false
}
function sum1(n)
{
    for(var i=1,s=0;i<=n;i++)
        if (juge(i)==true) s=s+i
    console.log(s)
}
sum1(100)
function area(height,width)
{
    var data=new Array()
    data[0]=(height+width)*2
    data[1]=height*width
    document.write("C="+data[0]+",S="+data[1])
}
area(8,6)