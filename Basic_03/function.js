function fun1(){
    console.log("S");
    console.log("k");
    console.log("y");
}
// fun1();
function addTwoNum(num1,num2){
    return num1+num2;
}
const result=addTwoNum(3,"a");
// console.log(result);

function loginUser(username="sam"){
    if(!username){
        console.log("Please enter your username");
        return
    }
  return `${username} just logged in`
}
console.log(loginUser());
// function addTocartprice(...num1){
//     return num1;
// }
function addTocartprice(val1,val2,...num1){
    return num1;
}
console.log(addTocartprice(1,200,500));

const user={
    username:"surendra",
    age:34
}
function userdetails(anyObject){
    console.log(`username${anyObject.username} and his age ${anyObject.age}`);
}
userdetails(user);
const myarr=[200,300,400,500];
function getLastele(getarr){
let n=getarr.length;

    return getarr[n-1]
}
console.log(getLastele(myarr));