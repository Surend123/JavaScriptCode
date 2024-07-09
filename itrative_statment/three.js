//for of loop
//["","","",""]
//[{},{},{}]
const arr=[1,2,3,4,5,6,7];
for (const i of arr) {
    // console.log(i);
}
const greetings="hello world!";
for (const greet of greetings) {
    // console.log(greet);
}
//map

const map=new Map();
map.set('in','india')
map.set('usa','united states of amerika')
map.set('fr','france');
map.set('in','india')
// console.log(map);

for (const[key,value] of map) {
    // console.log(key +":-"+value)
}

const myobj={
    game1:"vollyball",
    game2:"badminton"
}
//it is node possible  at this type

// for (const key of myobj) {
//     console.log(key);
// }