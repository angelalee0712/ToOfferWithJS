function firstNotRepeatingChar(str){
    if(str==null)
        return;
    var hash=new Array(256);
    for(var i=0;i<256;i++){
        hash[i]=0;
    }
    for(var i=0;i<str.length;i++){
        hash[str[i].charCodeAt()]++;//charCodeAt（）是将字符转换成对应的ASCII码，比如a对应的ASCII码是97.
    }
    for(var i=0;i<str.length;i++){
        if(hash[str[i].charCodeAt()]==1)
            return str[i];
    }
}
var str="abac";
console.log(firstNotRepeatingChar(str));