function sumOfNum1AndNum2(num1,num2){
    var sum=0;
    var carry=0;
    do{
        sum=num1^num2;
        carry=(num1&num2)<<1;
        num1=sum;
        num2=carry;
    }while(num2!=0);
    console.log(sum);
}
sumOfNum1AndNum2(3,4);
