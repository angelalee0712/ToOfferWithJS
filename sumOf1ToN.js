function sumOf1ToN(n){
    var result=n;
    result&&(result+=sumOf1ToN(n-1));
    return result;
}
console.log(sumOf1ToN(10));
