function print1ToN(n){

    var str=new Array(n);
    for(var i=0;i<n;i++)
        str[i]='0';
    while(!increment(str))
        print(str);

}
function increment(str){
    var isOverFlow=false;
    var nTakeOver=0;
    var length=str.length;
    for(var i=length-1;i>=0;i--){
        var nSum=str[i]+nTakeOver;
        if(i==length-1)
            nSum++;
        if(nSum>=10){
            if(i==0)
                isOverFlow=true;
            else{
                nSum=nSum-10;
                nTakeOver=1;
                str[i]=nSum;
            }
        }
        else{
            str[i]=nSum;
            break;
        }

    }
    return isOverFlow;
}
function print(str){
    var isBegin0=true;
    var text=' ';
    for(var i=0;i<str.length;i++){
        if(isBegin0&&str[i]!=='0')
             isBegin0=false;
        if(!isBegin0)
            text+=str[i];

    }
    console.log(text);
}

print1ToN(1);