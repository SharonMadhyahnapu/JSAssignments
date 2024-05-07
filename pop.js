//4.pop
arr=[1,2,3,4];
//console.log(arr.pop());
// console.log(arr);

Array.prototype.mypop=function(){
     let a;
    for (let index = 0; index < this.length; index++) {
        if(index==this.length-1){
             a=this[index];
             this.length=this.length-1;
        }
}
return a
};
console.log(arr.mypop());
console.log(arr);
