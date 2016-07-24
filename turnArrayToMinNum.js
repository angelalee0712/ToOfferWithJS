var maxLen=10;//定义整数的最大位数
var combine1=new Array(maxLen*2+1);
var combine2=new Array(maxLen*2+1);
function turnArrayToMinNum(arr,len){
    if(arr==null||len<=0)
        return;
    var strArr=new Array(len);
    for(var i=0;i<len;i++){
        strArr[i]=arr[i].toString();//将整数数组转换成字符串数组
    }
    quickSort(strArr,0,len-1);
    console.log(strArr.join(""));//将字符串数组转化成数字
}
function partition(arr,left,right){//快排找界标：使用自定义的比较规则
    var set=left-1;
    var temp1=[];
    var temp2=[];
    temp2.push(arr[right]);
    temp1.push(arr[0]);
    for(var i=left;i<=right;i++){
        temp1=[];
        temp1.push(arr[i]);
        if(!compare(temp1,temp2)) {
            set++;
            var temp = arr[i];
            arr[i] = arr[set];
            arr[set] = temp;
        }
    }
    return set;
}
function quickSort(arr,left,right){//快排
    if(left<right){
        var index=partition(arr,left,right);
        quickSort(arr,left,index-1);
        quickSort(arr,index+1,right);
    }
}
function compare(str1,str2){//自定义比较规则：若mn>nm，则规定n<m
    str1=str1.join("");
    str2=str2.join("");
    combine1=str1.slice(0);
    combine1=combine1.concat(str2);
    combine2=str2.slice(0);
    combine2=combine2.concat(str1);
    if(combine1<=combine2)
        return false;
    else
        return true;
}
var arr=[3,32,321];
console.log(turnArrayToMinNum(arr,3));
