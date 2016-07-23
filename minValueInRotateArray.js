function minValue(arr){
    var p1= 0,p2=arr.length-1;
    var mid=p1;
    while(arr[p1]>=arr[p2]){
        if(p2-p1==1){
            mid=p2;
            break;
        }
        mid=Math.floor((p1+p2)/2);
        if(arr[p1]==arr[mid]&&arr[mid]==arr[p2])
            return minInOrder(arr,p1,p2);
        if(arr[mid]>=arr[p1])
            p1=mid;
        else if(arr[mid]<=arr[p2])
            p2=mid;
    }
    return arr[mid];
}
function minInOrder(arr ,p1,p2){
    var min=arr[p1];
    for(var i=p1+1;i<=p2;i++){
        if(min>arr[i])
            min=arr[i];
    }
    return min;
}
var arr=[1,0,1,1,1];
var result=minValue(arr);
console.log(result);
