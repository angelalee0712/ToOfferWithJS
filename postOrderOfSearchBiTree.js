function postOrderOfSearchBiTree(arr,length){
    if(arr==null)
        return;
    for(var i=0;i<length-1;i++){
        if(arr[i]>arr[length-1])
            break;
    }
    for(var j=i;j<length-1;j++){
        if(arr[j]<arr[length-1])
            return false;
    }
    var left=true;
    if(i>0)
         left=postOrderOfSearchBiTree(arr,i);
    var right=true;
    if(i<length-1)
         return postOrderOfSearchBiTree(arr+i,length-i-1);
    return (left&&right);
}
var arr=[7,4,6,5];
console.log(postOrderOfSearchBiTree(arr,7));