var Node=function(num,next){
    this.num=num;
    this.next=next;
}
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
var stack=new stack();
var LinkList=function(){
    this.head=null;
}
LinkList.prototype={
    insert: function (element) {
        var p = new Node(element, null);
        if (this.head == null) {
            this.head = p;
            return true;
        } else {

            var parent = this.head;
            while (parent.next!= null) {
                    parent=parent.next;
            }
            parent.next=p;
            return true;
        }
    },
    deleteInO1:function(head,toBeDeleted){
        if(head==null||toBeDeleted==null)
            return;
        if(toBeDeleted.next!=null){
            var p=toBeDeleted.next;
            toBeDeleted.num=p.num;
            toBeDeleted.next=p.next;
            p=null;
        }
        else if(head==toBeDeleted){
            toBeDeleted=null;
            head=null;
        }else{
            var p=head;
            while(p.next!=toBeDeleted){
                p= p.next;
            }
            p.next=null;
            toBeDeleted=null;
        }
    },
    print:function(head){
        var p=head;
        var text=' ';
        while(p!=null){
            text+= p.num;
            p= p.next;
        }
        console.log(text);
    },
    invertPrint:function(head){
        var p=head;
        var text=' ';
        stack.Init();
        while(p){
            stack.Push(p);
            p= p.next;
        }
        while(!stack.Empty()){
            var s=stack.Top().num;
            text+=s;
            stack.Pop();
        }
        console.log(text);
    },
    reverseList:function(head){
        var reverseHead=null;
        var p=head;
        var prev=null;
        while(p!=null){
            var pnext= p.next;
            if(pnext==null)
                reverseHead=p;
            p.next=prev;
            prev=p;
            p=pnext;
        }
        console.log(reverseHead.num);
    },
    merge:function(head1,head2){
        if(head1==null)
            return head2;
        else if(head2==null)
            return head1;
        var head=null;
        if(head1.num<head2.num){
            head=head1;
            head.next=this.merge(head1.next,head2);
        }
        else{
            head=head2;
            head.next=this.merge(head1,head2.next);
        }
        return head;
    },
    firstCommonNode:function(head1,head2){
        var len1=getLen(head1);
        var len2=getLen(head2);
        var dif=len1-len2;
        var longHead=head1;
        var shortHead=head2;
        if(len2>len1){
            var dif=len2-len1;
            var longHead=head2;
            var shortHead=head1;
        }
        for(var i=0;i<dif;i++)
            longHead=longHead.next;
        while(longHead!=null&&shortHead!=null&&longHead!=shortHead){
            longHead=longHead.next;
            shortHead=shortHead.next;
        }
        return longHead;
    }
}

var ll=new LinkList();
ll.insert(2);
ll.insert(3);
ll.insert(5);
ll.insert(7);
ll.print(ll.head);
ll.invertPrint(ll.head);
ll.reverseList(ll.head);
var ll2=new LinkList();
ll2.insert(1);
ll2.insert(4);
ll2.insert(6);
ll2.insert(8);
console.log(ll.merge(ll.head,ll2.head));