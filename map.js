//1.map

const arr=[1,2,3,4,5];  

const res=arr.map((val,ind,arr)=>{
    return val*2;
});
console.log(res);


Array.prototype.mymap = function(a){
    const res2=[]
    // console.log(a,this);
    // console.log(array);
    for (let index = 0; index < this.length; index++) {
       res2.push(a(this[index],index,this));  
    }
return res2;
}
const res1=arr.mymap((val,ind,arr)=>{
    return val*3;
});
console.log(res1);