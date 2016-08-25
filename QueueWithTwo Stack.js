var stack=function(){

}
stack.prototype={
    Init:function(){
        this.STACKMAX = 100;
        this.stack = new Array(this.STACKMACK);
        this.top = -1;
        return this.stack;
    },
    Empty:function(){
        if(this.top==-1){
            return true;
        }
        else{
            return false;
        }
    },
    Push:function(elem){
        if(this.top==this.STACKMAX-1){
            return "栈满";
        }
        else{
            this.top++;
            this.stack[this.top] = elem;
        }
    },
    Pop:function(){
        if(this.top==-1){
            return "空栈,无法删除栈顶元素！";
        }
        else{
            var x = this.stack[this.top];
            this.top--;
            return x;
        }
    },
    Top:function(){
        if(this.top!=-1){
            return this.stack[this.top];
        }
        else{
            return "空栈，顶元素无返回值！";
        }
    },
    Clear:function(){
        this.top=-1;
    },
    Length:function(){
        return this.top+1;
    }
}
var stack1=new stack();
var stack2=new stack();
stack1.Init();
stack2.Init();
function appendTail(ele){
    stack1.Push(ele);
}
function deleteHead(){
    if(stack2.Empty()){
        while(!stack1.Empty()){
            var top=stack1.Top();
            stack1.Pop();
            stack2.Push(top);
        }
    }
    var head=stack2.Top();
    stack2.Pop();
    return head;
}