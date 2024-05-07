//7.unshift()
const arr=[1,2,3,4,5]
//const arr=[4,2,6,3,7];
// arr.unshift(1,8);
// console.log(arr.length);

const a=[0,5,8];
const arr2=a.concat(arr);
console.log(arr2);

Array.prototype.myunshift = function(...a) {
    
    const arr2 = a.concat(this);
    
    for (let index = 0; index < arr2.length; index++) {
        this[index] = arr2[index];
    }
    
    return this.length;
};
arr.myunshift(0,5,8); 
console.log(arr);