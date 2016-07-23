function permutation(str){
    if(str==null)
        return;
    permutationOfString(str,0);
}
var result=[];
function permutationOfString(str,begin){

    if(str[begin]=='p')
//        result.push(str);
    console.log(str);
    else{

        for(var ch=begin;str[ch]!='p';ch++){
            var temp=str[ch];
            str[ch]=str[begin];
            str[begin]=temp;
            permutationOfString(str,begin+1);
            temp=str[ch];
            str[ch]=str[begin];
            str[begin]=temp;
        }
    }
}
var str=['a','b','c','p'];
permutation(str);