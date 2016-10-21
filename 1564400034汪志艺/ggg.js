function qiuhe(n) {
    var i;var sum=0;
    for(i=0;i<=n;i++)
        if(i%2==0)
            sum+=i;
    document.write(sum);
}
function qiuhe(n) {
    var i;var sum=0;
    for(i=0;i<=n;i++)
        sum+=i;
    document.write(sum);
}

function recentage(length,width)
{
    var data=new Array();
    data[0]=2*(width+length);
    data[1]=length*width;
    return data;
}