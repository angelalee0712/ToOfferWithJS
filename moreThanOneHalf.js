function moreThanOneHalf(arr,len){
    if(arr==null||len<=0)
        return;
    var mid=len>>1;
    var index=partition(arr,len);
    var result=0;
    while(index!=mid){
        if(index>mid){
            index=partition(arr,index);
        }
        else{
            index=partition(arr+index+1,len-index);
        }
    }
    result=arr[mid];
    if(!checkMoreThanHalf(arr,len,result))
        result=0;
    return result;
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
function checkMoreThanHalf(arr,len,num){
    var isHalf=true;
    var times=0;
    for(var i=0;i<len;i++){
        if(arr[i]==num)
            times++;
    }
    if(times*2<len)
        isHalf=false;
    return isHalf;
}


//根据数组特性找出现次数大于数组长度一半的数
function moreThanOneHalf2(arr,len){
    var times=1;
    var result=arr[0];
    for(var i=0;i<len;i++){
        if(times==0){
            result=arr[i];
            times=1
        }
        else if(arr[i]==result){
            times++;
        }
        else{
            times--;
        }

    }
    if(!checkMoreThanHalf(arr,len,result))
        result=0;
    return result;
}
var arr=[1,2,2,3,4,5,2,2,2,2];
console.log(moreThanOneHalf2(arr,10));