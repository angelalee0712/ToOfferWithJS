function straight(arr,len){
    if(arr==null||len<=0)
       return;
    mergeSort(arr,0,len-1);
    var numOf0=0;
    var numOfGap=0;
    for(var i=0;i<len;i++){
        if(arr[i]==0)
            numOf0++;
    }
    var small=numOf0;
    var big=small+1;
    while(big<len){
        if(arr[small]==arr[big])
            return false;
        numOfGap+=arr[big]-arr[small]-1;
        small=big;
        big++;
    }
    return (numOf0>=numOfGap)?true:false;
}
function partition(arr,left,right){
    var set=left-1;
    for(var i=left;i<=right;i++){
        if(arr[i]<=arr[right]) {
            set++;
            var temp = arr[i];
            arr[i] = arr[set];
            arr[set] = temp;
        }
    }
    return set;
}
function mergeSort(arr,left,right){
    if(left<right){
        var index=partition(arr,left,right);
        mergeSort(arr,left,index-1);
        mergeSort(arr,index+1,right);
    }

}
var arr=[0,1,4,1,5];
console.log(straight(arr,5));
