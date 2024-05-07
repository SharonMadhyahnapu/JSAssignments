//6.shift()
const arr=[1,2,3,4,5];
// console.log(arr.shift());
// console.log(arr);

Array.prototype.myshift=function(){
let Fval=this[0];
for (let index = 0; index < this.length-1; index++) {
    this[index]=this[index+1];
}
this.length=this.length-1;

return Fval;

}

console.log(arr.myshift());
console.log(arr);