function twoNumsWithSumOfS(arr,len,sum){
    var found=false;
    if(len<1)
        return found;
    var left=0;
    var right=len-1;
    while(left<right){
        if(arr[left]+arr[right]==sum){
            console.log(arr[left]);
            console.log(arr[right]);
            found=true;
            break;
        }
        else if(arr[left]+arr[right]>sum)
            right--;
        else
            left++;
    }
    return found;
}
var arr=[1,2,4,7,11,15];
console.log(twoNumsWithSumOfS(arr,6,15));
function continuousSequenceWithSumOfS(sum){
    if(sum<3)
        return;
    var small=1;
    var big=2;
    var curSum=small+big;
    var mid=(sum+1)>>1;
    while(small<mid){
        if(curSum==sum)
            print(small,big);
        while(curSum>sum&&small<mid){
            curSum-=small;
            small++;
            if(curSum==sum)
                print(small,big);
        }
        big++;
        curSum+=big;
    }
}
function print(small,big){
    for(var i=small;i<big;i++)
        console.log(i);
}
continuousSequenceWithSumOfS(9);