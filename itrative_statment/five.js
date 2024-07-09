const coding=["js","ruby","java","python","cpp"];
// 
coding.forEach((item)=>{
    // console.log(item);
})
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe);
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})
const mycoding=[
    {
        languageName:"javascript",
        languageextension:"js"
    },
    {
        languageName:"c programing",
        languageextension:"c"
    },
    {
        languageName:"c++",
        languageextension:"cpp"
    },
    {
        languageName:"python",
        languageextension:"py"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languageName);
})