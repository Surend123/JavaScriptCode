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
     lastLoginDays:["Monday","Saturday"],
     greeting :function(){
        console.log("Hello JS user");
    },
    greetingTwo : function(){
        console.log(`Hello JS user, ${this.name}`);
    }
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser[]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser["full name"]);
JsUser.email="surendra78059@gmail.com";
// console.log(JsUser.email);
Object.freeze(JsUser);
JsUser.age=18;
JsUser.email="sky748993@gmail.com";
// console.log(JsUser.age);
// console.log(JsUser.email);


// console.log(typeof JsUser.greeting());
// console.log(JsUser.greetingTwo());
// ++++++++++++object part 2+++++++++++++++++++++++++++++===
// singoleton object-----------------
//const instUser= new Object();//singolton
const  instaUser={}//Object litrals
instaUser.id="123abc";
instaUser.name="Surendra";
instaUser.isLoggedIn=false;
// console.log(instaUser);
const regularUser= {
    email :"some@gmail.com",
    fullname:{
        username:{
            firstname:"surendra",
            middlename:"Kumar",
            lastname:"Yadav"
        }
    }
}
// console.log(regularUser.fullname.username.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:'b'};
const obj3={5:"a",6:"b"};
// const obj4={obj1,obj2};
// const obj4=Object.assign({},obj1,obj2,obj3);
//spread object in combination
 const obj4={ ...obj1,...obj2}
 console.log(obj4);
const users =[{
    id:1,
    email:"h@gmail.com"

},
{
    id:2,
    email:"b@gmail.com"
}
]
// console.log(users[0].email);
console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename:"js in hindi ",
    price: "999",
    courseInstr:"Hitesh"
}
const{courseInstr:instructor}=course;
// console.log(courseInstr);
console.log(instructor);