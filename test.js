var maxLen=10;
var combine1=new Array(maxLen*2+1);
var combine2=new Array(maxLen*2+1);
function partition(arr,left,right){
    var set=left-1;
    var temp1=[];
    var temp2=[];
    temp2.push(arr[right]);
    temp1.push(arr[0]);
//    return compare(temp1,temp2);
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
function compare(str1,str2){
    str1=str1.join("");
    str2=str2.join("");
    combine1=str1.slice(0);
    combine1=combine1.concat(str2);
//    return combine1;
    combine2=str2.slice(0);
    combine2=combine2.concat(str1);
    if(combine1<=combine2)
        return false;
    else
        return true;
}
var arr=['1','2','4','5','3'];
console.log(partition(arr,0,4));
