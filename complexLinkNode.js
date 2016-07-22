var Node=function(num,next,sibling){
    this.num=num;
    this.next=next;
    this.sibling=sibling;
}
var complexLinkNode=function(){
    this.head=null;
}
complexLinkNode.prototype={
    insert: function (element) {
        var p = new Node(element, null,null);
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
    copy:function(head){
        if(head==null)
            return;
        this.copyNodes(head);
        this.setSibling(head);
        this.separate(head);
    },
    copyNodes:function(head){

        var p=head;
        while(p){
            var clone=new Node(p.num, p.next,null);
            p.next=clone;
            p=clone.next;
        }
    },
    setSibling:function(head){
        var p=head;
        while(p){
            var clone= p.next;
            if(p.sibling!=null)
                clone.sibling= p.sibling.next;
            p=clone.next;
        }
    },
    separate:function(head){
        var p=head;
        var cloneHead=null;
        var cloneNode=null;
        if(p!=null){
            cloneHead= cloneNode=p.next;
            p.next=cloneHead.next;
            p= p.next;
        }
        while(p){
            cloneNode.next= p.next;
            cloneNode=cloneNode.next;
            p.next=cloneNode.next;
            p= p.next;
        }
        return cloneHead;
    }
}
var cln=new complexLinkNode();
cln.insert(1);
cln.insert(2);
cln.insert(3);
cln.insert(4);