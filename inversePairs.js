function inversePairs(arr,len){
    if(arr==null||len<=0)
        return;
    var copy=new Array(len);
    for(var i=0;i<len;i++){
        copy[i]=arr[i];
    }
    var count=inversePairsCore(arr,copy,0,len-1);
    return count;
}
function inversePairsCore(arr,copy,start,end){
    if(start==end){
        copy[start]=arr[start];
        return 0;
    }
    var mid=(end-start)>>1;
    var left=inversePairsCore(copy,arr,start,start+mid);
    var right=inversePairsCore(copy,arr,start+mid+1,end);
    var i=start+mid;
    var j=end;
    var indexCopy=end;
    var count=0;
    while(i>=start&&j>=start+mid+1){
        if(arr[i]>arr[j]){
            copy[indexCopy--]=arr[i--];
            count+=j-start-mid;
        }
        else{
            copy[indexCopy--]=arr[j--];
        }
    }
    for(;i>=start;i--){
        copy[indexCopy--]=arr[i];
    }
    for(;j>=start+mid+1;j--){
        copy[indexCopy--]=arr[j];
    }
    return left+right+count;
}
var arr=[7,5,6,7];
console.log(inversePairs(arr,4));