function one1(n){
    var count=0;
    var flag=1;
    while(flag){
        if(n&flag)
           count++;
        flag=flag<<1;
    }
    return count;
}
function one2(n){
    var count=0;
    while(n){
        count++;
        n=n&(n-1);
    }
    return count;
}
console.log(one2(1));