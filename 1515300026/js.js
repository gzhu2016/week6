/**
 * Created by lenovo on 2016/10/16.
 */
function mystyle(n)
{
    var i,sum=0;
    for(i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    //document.write(sum);
    //alert(sum);
    console.log(sum);
}

function mystyle2(n)
{
    var i,sum=0;
    for(i=2;i<=n;i+2)
    {
        sum=sum+i;
    }
    //document.write(sum);
    return(sum);
}
function mystyle3(height, width)
{
    var data=new Array(),i;
    data[0]=2*(eight+width);
    data[1]=height*width;
    /*for(i=0;i<2;i++)
    {
        document.write(data[i]);
    }*/
    return(data);
}