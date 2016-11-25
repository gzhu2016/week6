/**
 * Created by hasee on 2016/11/25.
 */
function addnaturalnumber()
{
    for(var i=1,s1=0;i<=n;i++)
        s1=s1+i;
    return s1;
}

function even()
{
    for (var i=2,s2=0;i<=n;i=i+2)
        s2=s2+i;
    return s2;
}
function rectangle(height,width){
    var data;
    data[0]=2*(height+width);
    data[1]=height*width;
    return data;
}