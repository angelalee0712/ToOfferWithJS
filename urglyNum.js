function urglyNum(index){
    if(index<=0)
        return;
    var num=0;
    var urgly=0;
    while(urgly!=index){
        num++;
        if(isUrgly(num)){
            urgly++;
            console.log(num);
        }
    }
}
function isUrgly(num){
    while(num%2==0)
       num/=2;
    while(num%3==0)
       num/=3;
    while(num%5==0)
       num/=5;
    if(num==1)
       return true;
    else
       return false;
}
urglyNum(10);