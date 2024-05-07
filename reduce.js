//3.reduce

arr=[1,2,3,4,5];
// const result=arr.reduce((acc,value)=>{
//     console.log(acc,value);
// },100);

// const result1=arr.reduce((acc,val)=>acc+val,100);
// console.log(result1);
// console.log(arr);



Array.prototype.myreduce=function (abc,acc){
        let res;
        let i;
        if(acc){
            res=acc;
             i=0;
        }else{
            res=this[0];
            i=1;
    }
for (let index = i; index < this.length; index++) {
 res=abc(this[index],res)
}
return res;
};

const rres=arr.myreduce((acc,val)=>acc+val,100);
console.log(rres);