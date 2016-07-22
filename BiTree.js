function Node(element, left, right) {
    this.element = element;
    this.left = left;
    this.right = right;
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
var queue=function(){};
queue.prototype={
    push:function(value){},
    pop:function(){},
    empty:function(){},
    front:function(){}
};
var stack=new stack();
var text="";
function BST() {
    this.root = null;
}
BST.prototype = {
    insert: function (element) {
        var n = new Node(element, null, null);
        if (this.root == null) {
            this.root = n;
            n.level = 0;
            return true;
        } else {
            var current = this.root;
            var parent = null;
            while (current != null) {
                if (element < current.element) {
                    parent = current;
                    current = current.left;
                } else if (element > current.element) {
                    parent = current;
                    current = current.right;
                } else {
                    return false;
                }
            }
            n.level = parent.level + 1;
            if (element < parent.element) {
                parent.left = n;

            } else {
                parent.right = n;
            }
            return true;
        }
    },
    preOrder: function (root) { // 先序遍历:递归
        if(root!=null){
            text+=root.element;
            if(root.left!=null)
                this.preOrder(root.left);
            if(root.right!=null)
                this.preOrder(root.right);
        }
    },
    preOrder: function (root) { // 先序遍历:非递归

        stack.Init();
        while(root!=null||!stack.Empty()){
            while(root!=null){
                stack.Push(root);
                text+=root.element;
                root=root.left;
            }
            root=stack.Pop();
            root=root.right;
        }
    },
    inOrder: function (root) {// 中序遍历:递归
        if(root!=null){

            if(root.left!=null)
                this.inOrder(root.left);
            text+=root.element;
            if(root.right!=null)
                this.inOrder(root.right);
        }
    },
    inOrder: function (root) {// 中序遍历：非递归
        stack.Init();
        while(root||!stack.Empty()){
            while(root){
                stack.Push(root);
                root=root.left;
            }
            root=stack.Pop();
            text+=root.element;

            root=root.right;
        }
    },
    postOrder: function (root) {// 后序遍历：递归
        if(root!=null){

            if(root.left!=null)
                this.postOrder(root.left);
            if(root.right!=null)
                this.postOrder(root.right);
            text+=root.element;
        }
    },
    postOrder: function (root) {// 后序遍历：非递归
        //未完待续。。。。
    },
    levelOrder:function(root){
        if(root==null)
            return;
        var queue=new queue();
        queue.push(root);
        while(!queue.empty()){
            var p=queue.front();
            queue.pop();
            console.log(p.element);
            if(p.left)
                queue.push(p.left);
            if(p.right)
                queue.push(p.right);
        }
    },
    hasSubTree:function(root1,root2){
        var result=false;
        if(root1!=null&&root2!=null){
            if(root1.element==root2.element){
                result=this.doesTree1HasTree2(root1,root2);
            }
            if(!result)
                result=this.hasSubTree(root1.left,root2);
            if(!result)
                result=this.hasSubTree(root1.right,root2);
        }
        return result;
    },
    doesTree1HasTree2:function(root1,root2){
        if(root2==null)
            return true;
        if(root1==null)
            return false;
        if(root1.element!==root2.element)
            return false;
        return this.doesTree1HasTree2(root1.left,root2.left)&&this.doesTree1HasTree2(root1.right,root2.right);
    },
    mirror:function(root){
        if(root==null||(root.left==null&&root.right==null))
            return;
        var temp=root.left;
        root.left=root.right;
        root.right=temp;
        if(root.left)
             this.mirror(root.left);
        if(root.right)
             this.mirror(root.right);
    },
    expectedSumInBiTree:function(root,expectedSum){
        if(root==null)
            return;
        stack.Init();
        var currentSum=0;
        this.findPath(root,expectedSum,stack,currentSum);
    },
    findPath:function(root,expectedSum,stack,currentSum){
        currentSum+=root.element;
        stack.Push(root);
        var isLeaf=root.left==null&&root.right==null;
        if(isLeaf&&currentSum==expectedSum){
            while(!stack.Empty()){
                console.log(stack.Top().element);
                stack.Pop();
            }
        }
        if(root.left!=null){
            this.findPath(root.left,expectedSum,stack,currentSum);
        }
        if(root.right!=null) {
            this.findPath(root.right, expectedSum, stack, currentSum);
        }
        currentSum-=root.element;
        stack.Pop();
    },
    convertToLinkNode:function(root){
        if(root==null)
            return;
        if(root.left==null&&root.right==null)
            return root;
        var left=this.convertToLinkNode(root.left);
        var p=left;
        while(p!=null&& p.right!=null)
            p= p.right;
        if(left!=null){
            p.right=root;
            root.left=p;
        }
        var right=this.convertToLinkNode(root.right);
        if(right!=null){
            root.right=right;
            right.left=root;
        }
        return left!=null?left:root;
    },
    depth:function(root){
        if(root==null)
            return 0;
        var left=this.depth(root.left);
        var right=this.depth(root.right);
        return (left>right)?(left+1):(right+1);
    }
};

var a = new BST();
a.insert(3);
a.insert(1);
a.insert(5);
a.insert(2);
a.insert(4);
console.log('先序遍历结果：');
//a.preOrder(a.root);
console.log(text);
console.log('中序遍历结果：');
//a.inOrder(a.root);
console.log(text);
console.log('后序遍历结果：');
//a.postOrder(a.root);
//console.log(text);

var b=new BST();
b.insert(10);
b.insert(6);
b.insert(8);
b.insert(4);
b.insert(14);
b.insert(12);
b.insert(16);
console.log(a.hasSubTree(a.root, b.root));

a.mirror(a.root);
a.inOrder(a.root);
console.log(text);

a.expectedSumInBiTree(a.root,6);

console.log(b.convertToLinkNode(b.root));

console.log(a.depth(a.root));