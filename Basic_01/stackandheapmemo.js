//primitive data type
let myname="surendra";
let yourname="surendra";
yourname="surya";
console.log(myname);
console.log(yourname);

//Heap memory allocation none premitive datatype
let firstiq={
    name:"surendra",
    age:23,
    mobileno:7805947337
}
let secondiq=firstiq;
secondiq.age=40;
console.log(firstiq);
console.log(secondiq);