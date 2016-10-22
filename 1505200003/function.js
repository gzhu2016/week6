/**
 * Created by bbb on 2016/10/17.
 */
<!DOCTYPE HTML>
<html lang="ch">
<head>
</head>
<body>
    <script type="text/javascript">

    //求自然数1~n之和
        var x,sum=0;
        function function1(n) {
           for(x=1;x<=n;++x) {
               sum+=x;
               return sum;
           }
            console.log("自然数1~"+n+"之和："+sum);
        }



        //求自然输1~n之间的偶数之和
        function function2(n){
            for(x=2;x<=n;++x){
                if(x%2===1)
                continue;sum+=x;
                return sum;
            }
            console.log("自然数1~"+n+"之间的偶数之和："+sum);
        }



        //求矩形周长和面积
    var perimeter,area;
        function function3(height,weight){
            perimeter=2*(height+weight);
            return perimeter;
        }

        function function4(height,weight){
            area=height*weight;
            return area;
        }

    var data=[perimeter,area];
    console.log("矩形的周长："+data[0]+"<br/>"+"矩形的面积："+data[1]);


        
        
    </body>
    </script> 
    </html>