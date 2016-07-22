function fibonacci1(n){
    var result=[0,1];
    if(n<2)
        return result[n];
    var fibnminusone=1;
    var fibnminustwo=0;
    var fibn=0;
    for(var i=2;i<=n;i++){
        fibn=fibnminusone+fibnminustwo;
        fibnminustwo=fibnminusone;
        fibnminusone=fibn;

    }
    return fibn;
}
function fibonacci2(n){
    if(n<=0)
        return 0;
    if(n==1)
        return 1;
    return fibonacci2(n-1)+fibonacci2(n-2);
}
console.log(fibonacci1(10));