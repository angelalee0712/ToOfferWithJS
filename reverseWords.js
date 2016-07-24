function reverseWords(str){
    if(str==null)
        return;
    var start=0;
    var end=0;
    while(str[end]!='p'){
        end++;
    }
    end--;
    reverse(str,start,end);
    end=0;
    while(str[start]!='p'){
        if(str[start]==' '){
            start++;
            end++;
        }
        else if(str[end]==' '||str[end]=='p'){
            reverse(str,start,--end);
            start=++end;
        }
        else{
            end++;
        }
    }
    console.log(str);
}
function reverse(str,start,end){
    if(start==null||end==null)
        return;
    while(start<end){
        var temp=str[start];
        str[start]=str[end];
        str[end]=temp;
        start++;
        end--;
    }
}
var str=['i',' ','a','m',' ','a',' ','g','i','r','l','.','p'];
reverseWords(str);

function rotateString(str,n){
    var len=str.length;
    if(len>0&&str!=null&&len>n){
        var firstStart=0;
        var firstEnd=n-1;
        var secondStart=n;
        var secondEnd=len-1;
        reverse(str,firstStart,firstEnd);
        reverse(str,secondStart,secondEnd);
        reverse(str,0,len-1);
    }
    console.log(str);
}
var str2=['a','b','c','d','e'];
rotateString(str2,3);
