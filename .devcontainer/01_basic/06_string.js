const name ="divine"
const name2 = "light"
const bubble = 518491617 
// console.log( name + name2 + bubble + "count");  // old method
//with out defint we can concatinate any value in i add "count"
console.log(`Hi suchita this is a powerfull word ${name}  ${name2} and ${bubble} count`);
// new way to string presestion 

const gamename = new String ('divinelight') // define string in different way 
console.log(gamename);
console.log(gamename[0]);
console.log(gamename.__proto__); // means telling object {} bracket means object
console.log(gamename.length);
console.log(gamename.toLowerCase()); // after variablename add . u can see all function
console.log(gamename.toUpperCase());
console.log(gamename.charAt(9));
console.log(gamename.indexOf('l'));  

const newString = gamename.substring(0, 6) // 6th value will not count and dont use 
// -ve value if u give it will ignor
console.log(newString); // counting always start from 0

const anotherString =gamename.slice(-11 ,4) // gives revese value
console.log(anotherString);

const newStringOne = "    divine_light  "
console.log(newStringOne); // simply print with sapce 
console.log(newStringOne.trim()); // dont count space white space and new line space


const url = "https://sdcforu.in%9/"
console.log(url.replace('%9' ,'.divinelight'));
console.log(url.includes('com')); //if things will avaiable its give true otherwise false
console.log(gamename.split(''));
console.log(newStringOne.split('_')); // split in array formate











