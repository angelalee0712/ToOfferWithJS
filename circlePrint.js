function circlePrint(arr,rows,cols){
    if(arr==null||rows==null||cols==null)
         return;
    var start=0;
    var result=[];
    while(rows>start*2&&cols<start*2){
//        printMatrixInCircle(arr,rows,cols,start);
        var endX=cols-1-start;
        var endY=rows-1-start;

        for(var i=start;i<=endX;i++)
            console.log(arr[start][i]);
        if(endY>start){
            for(var i=start+1;i<=endY;i++)
                result.push(arr[i][endX]);
        }
        if(endY>start&&endX>start){
            for(var i=endX-1;i>=start;i--)
                result.push(arr[endY][i]);
        }
        if(endY-1>start&&endX>start){
            for(var i=endY-1;i>start+1;i--)
                result.push(arr[i][start]);
        }
        start++;
    }

    for(var i=0;i<result.length;i++)
        console.log(result[i]);
}
function printMatrixInCircle(arr,rows,cols,start){
    var endX=cols-1-start;
    var endY=rows-1-start;
    var result=[];
    for(var i=start;i<=endX;i++)
        console.log(arr[start][i]);
    if(endY>start){
        for(var i=start+1;i<=endY;i++)
            result.push(arr[i][endX]);
    }
    if(endY>start&&endX>start){
        for(var i=endX-1;i>=start;i--)
            result.push(arr[endY][i]);
    }
    if(endY-1>start&&endX>start){
        for(var i=endY-1;i>start+1;i--)
            result.push(arr[i][start]);
    }

}
var arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12]];

circlePrint(arr,3,4);
