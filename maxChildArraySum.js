function maxChildArraySum(arr,len){
    if(arr==null||len<0)
        return;
    var sum=0;
    var maxSum=0;
    for(var i=0;i<len;i++){
        if(sum<=0){
            sum=arr[i];
        }
        else{
            sum+=arr[i];
        }
        if(sum>maxSum){
            maxSum=sum;
        }
    }
    return maxSum;
}
var arr=[1,-2,3,10,-4,7,2,-5];
console.log(maxChildArraySum(arr,8));