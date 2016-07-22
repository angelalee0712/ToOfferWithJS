function searchInTwoDemenArray(arr,rows,cols,num){
    if(arr==null||rows<=0||cols<=0)
        return;
    findInMatrix(arr,rows,cols,num);
}
function findInMatrix(arr,rows,cols,num){
    var found=false;
    var row=0;
    var col=cols-1;
    while(row<rows&&col>=0){
        var value=arr[row][col];
        if(value==num){
            found=true;
            break;
        }
        else if(value>num)
            col--;
        else
            row++;
    }
    return found;
}
var arr=[[1, 2, 8, 9],[2, 4, 9, 12],[4, 7, 10, 13],[6, 8, 11, 15]];
console.log(searchInTwoDemenArray(arr,4,4,5));