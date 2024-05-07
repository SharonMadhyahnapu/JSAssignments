//2.Filter

function abc(value,index,array){
    return index%2==0;
}
const fres=arr.filter(abc);
console.log(fres);




Array.prototype.myfilter=function (fn){

    const fres1=[];
for (let index = 0; index < this.length; index++) {
    if(fn(this[index],index,this)){
    fres1.push(this[index])
}
}
return fres1;
};
function fn(value,index,array){
return index%2==0;
};
console.log(arr.myfilter(fn));