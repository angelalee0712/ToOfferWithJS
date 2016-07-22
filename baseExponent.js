var invalid=false;
function baseExponent(base,exponent){
    var result=1.0;
    var invalid=false;
    var absexponent=exponent;
    if(equal(base,0.0)&&exponent<0){
        invalid=true;
        return 0.0;
    }
    if(exponent<0)
        absexponent=-exponent;
    for(var i=1;i<=absexponent;i++){
        result*=base;
    }
    if(exponent<0){
        result=1/result;
    }
    return result;
}
function equal(num1,num2){
    if(num1-num2>-0.0000001&&num1-num2<0.0000001){
        return true;
    }else{
        return false;
    }
}
function baseExponent2(base,exponent){
    var absexponent=exponent;
    if(exponent<0)
        absexponent=-exponent;
    if(exponent==0)
       return 1;
    if(exponent==1)
       return base;
    var result=1.0;
    for(var i=1;i<=(absexponent>>1);i++){
        result*=base;
    }
    result*=result;
    if(absexponent&1==1)
        result*=base;
    if(exponent<0)
        result=1/result;
    return result;
}
console.log(baseExponent2(3,-3));