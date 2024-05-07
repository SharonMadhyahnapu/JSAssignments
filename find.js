//5.find
 
const arr=[1,2,3,4,5];
// function abc(ele){
//     return ele>6;
// }
// const fdres=arr.find(abc);
// console.log(fdres);

Array.prototype.myfind=function(abc){
    for (let index = 0; index < this.length; index++) {
        if(abc(this[index])){
            return this[index];
        }   
    }
};

function abc(ele){
    return ele<5;
}
console.log(arr.myfind(abc));

