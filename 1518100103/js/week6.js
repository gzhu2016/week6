/**
 * Created by pc on 2016/10/18.
 */
function total1(n){
    var sum=0;
    for(var i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
function total2(n){
    var sum=0;
    for(var i=1;i<=n;i++){
        if(i%2==0){
            sum+=i;
        }
    }
    return sum;
}
function rectangle(height,width){
    var data;
    data[0]=2*(height+width);
    data[1]=height*width;
    return data;
}