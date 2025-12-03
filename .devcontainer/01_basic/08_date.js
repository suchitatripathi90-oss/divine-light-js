// date 
let mydate = new Date()
console.log(mydate); // output little no understable  == 2025-12-03T06:24:32.069Z
console.log(mydate.toString()); // date convert in str = Wed Dec 03 2025 06:27:01 GMT+0000 (Coordinated Universal Tim
console.log(mydate.toDateString()); // much better= Wed Dec 03 2025
console.log(typeof mydate); // data type is object

let creatnewdate =new Date(1988 ,10,09) // in js month start from 0 = january, 1=f,2=m
console.log(creatnewdate.toDateString()); // Wed Nov 09 1988

let newdate =new Date(1988 ,10,09,4 ,5)
console.log(newdate.toLocaleString());  // 11/9/1988, 4:05:00 AM


