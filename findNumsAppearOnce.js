function findNumsAppearOnce(arr,len){
    if(arr==null||len<=0)
        return;
    var resultOR=0;
    for(var i=0;i<len;i++)
        resultOR^=arr[i];
    var indexOf1=findFirstBitIs1(resultOR);
    var num1=0;
    var num2=0;
    for(var i=0;i<len;i++){
        if(isBit1(arr[i],indexOf1)){
            num1^=arr[i];
        }
        else{
            num2^=arr[i];
        }
    }
    console.log(num1);
    console.log(num2);
}
function findFirstBitIs1(num){
    var indexBit=0;
    while(((num&1)==0)&&(indexBit<64)){
        num=num>>1;
        indexBit++;
    }
    return indexBit;
}
function isBit1(num,index){
    num=num>>index;
    return (num&1);
}
var arr=[2,4,3,6,3,2,5,5];
findNumsAppearOnce(arr,8);

