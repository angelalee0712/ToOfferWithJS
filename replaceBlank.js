function replaceBlank(str){
    if(str==null)
        return;
    var blankNum=getBlankNum(str);
    var newLen=str.length+2*blankNum;
    var p1=str.length-1;
    var p2=newLen-1;
    var temp=[];
    while(p1>=0&&p1<=p2){
        if(str[p1]==' '){
            temp[p2--]='0';
            temp[p2--]='2';
            temp[p2--]='%';
        }
        else{
            temp[p2--]=str[p1];
        }
        p1--;
    }
    console.log(temp);
}
function getBlankNum(str){
    var count=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==' ')
            count++;
    }
    return count;
}
var str="we are happy";

replaceBlank(str);