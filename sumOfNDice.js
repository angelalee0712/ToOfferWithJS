function sumOfNDice(n){
    var probabilities=new Array(2);
    probabilities[0]=new Array(6*n+1);
    probabilities[1]=new Array(6*n+1);
    for(var i=0;i<6*n+1;i++){
        probabilities[0][i]=0;
        probabilities[1][i]=0;
    }
    for(var i=1;i<=6;i++){
        probabilities[1][i]=1/6;
    }
    var flag=1;
    for(var k=2;k<=n;k++){
        for(var i=0;i<6*n+1;i++){
            probabilities[1-flag][i]=0;
            var j=1;
            while(j<=i&&j<=6){
                probabilities[1-flag][i]+=probabilities[flag][i-j++]/6;
            }
        }
        flag=1-flag;
    }
    for(var i=n;i<=6*n;i++){
        console.log(probabilities[flag][i]);
    }
}
sumOfNDice(2);//几个结果相加等于0.99999，接近于1，说明是正确的