function getLeastKNumbers(arr,len,k){
    if(arr==null||len<=0)
        return;
    var index=partition(arr,len);
    var result=0;
    while(index!=k-1){
        if(index>k-1){
            index=partition(arr,index);
        }
        else{
            index=partition(arr+index+1,len-index);
        }
    }
    for(var i=0;i<k;i++)
        console.log(arr[i]);
}
function partition(arr,len){
    var set=-1;
    for(var i=0;i<len;i++){
        if(arr[i]<=arr[len-1]) {
            set++;
            var temp = arr[i];
            arr[i] = arr[set];
            arr[set] = temp;
        }

    }
    return set;
}
var arr=[1,4,5,3,2,6,7,8];
getLeastKNumbers(arr,8,5);