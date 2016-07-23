function leftInCircle(n,m){
    if(n<1||m<1)
        return -1;
    var last=0;
    for(var i=2;i<=n;i++){
        last=(last+m)%i;
    }
    return last;
}
console.log(leftInCircle(5,3));