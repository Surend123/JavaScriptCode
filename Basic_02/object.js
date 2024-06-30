//object litrals
const mySym=Symbol("key1");

const JsUser={
     name:"Surendra",
     "full name":"surendra kumar yadav",
     age:22,
     location:"Biaora",
     [mySym]:"mykey1",//breakets must be important
     email:"surendra780@gmail.com",
     isLoggedIn:false,
     lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser[]);
console.log(typeof JsUser[mySym]);
console.log(JsUser["full name"]);
JsUser.email="surendra78059@gmail.com";
console.log(JsUser.email);
Object.freeze(JsUser);
JsUser.age=18;
JsUser.email="sky748993@gmail.com";
console.log(JsUser.age);
console.log(JsUser.email);
// JsUser.greeting=function(){
//     console.log("hello js users");
// }
// console.log(JsUser.greeting);
// JsUser.greetingtwo=function(){
//      console.log(`Hello js user,${this["full name"]}`);
// }
// console.log(JsUser.greetingtwo);
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());