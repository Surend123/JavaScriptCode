const name="surendra";
let no=50;
//console.log(name+no+"kumar");Not good Way of concatinate
console.log(`Hello my name ${name} in my pocket have ${no} rupees`);
const str=new String("Surendra Kumar Yadav");// String Object 
console.log(str);
console.log(str.charAt(2));
console.log(str[1]);
console.log(str.at(3));
console.log(str.charCodeAt(3));
console.log(str.codePointAt(1));
console.log(str.endsWith("Yadav"));
console.log(str.includes("Kumar"));
console.log(str.isWellFormed());
console.log(str.lastIndexOf("a"));
console.log(str.match("re"));
//important function
// let str1="surendra";
// let str2="subham";
// str1=str1.normalize("NFD");
// str2=str2.normalize("NFD");
// console.log(str1===str2);
console.log("abc".padEnd(25,"hi"));
console.log("abc".padStart(25,"hi"));
console.log(str.repeat(2));

console.log(str.replace("Yadav","Ahir"));
console.log(str);
console.log(str.replaceAll(" ","-"));
console.log(str.search("re"));
console.log(str.slice(4,8));//important function;
console.log(str.split(" ",3));//important function
str.toLowerCase;
str.toUpperCase;
str.toString();
str.trim();
str.trimStart();
str.trimEnd();

