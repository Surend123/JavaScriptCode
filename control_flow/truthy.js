//truthy and falsy function++++++++++++++++++++=
const userEmail=[];
// if(userEmail){
//     console.log(`Got user Email is ${userEmail}`);
// }else{
//     console.log("I have not user Email");
// }
// if(userEmail.length==0){
//     console.log("Not get email");
// }
const emptyobj={}
if(Object.keys(emptyobj).length==0){
    console.log("object is empty");
}
//nullish coalescing operator(??):null undefine
let val1;
// val1=5??10
// val1=null??10
// val1=undefined??10
// val1=null??10??20
// val1=null??undefined??45
console.log(val1);
const score=88;
score>90?console.log("is Good score"):console.log("Is well score");;
