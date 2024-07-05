//++++++++++If++++++++++
// const isUserloggedIn= true;
const temprature=38;
// if(tamprature=>30){
//     console.log("temp is greater than 30");
// }else{
//     console.log("temp is less then 30");
// }
const score=200;
if(score>100){
    let pow="giftbike"
    // console.log(`user power:${pow}`);
}
// console.log(pow);
const balance=1000;
if(balance<500){
    console.log("balance is less than 500");
}
else if(balance<700){
    console.log("balance is less than 700");
}
else if(balance<900){
    console.log("balance is less than 900");
}

else {
    console.log("balance is less than 1200");
}
let isUserloggedIn=true;
let debitcard=true;
let loggedInFromGoogle=false;
let loggedInFromEmail= true;

if(isUserloggedIn && debitcard){
    console.log("allow to shopping");
}
if(loggedInFromEmail||loggedInFromGoogle){
    console.log("User is logged in");
}

