// primitive  7 types
/*    these data call by value (through copy value) 
String ,Number , Boolean , null , undefine 
symbol (unique repration ) , bigInt (for big value- 518491617)
*/
 
const Id = Symbol('518491617')
const NewId = Symbol('518491617')
console.log(Id == NewId)
//const bigNumber = (typeof 519491617519491617519491617n) 
const bigNumber = 519491617519491617519491617n
console.log(bigNumber);


//  Reference  ( non primitive  )

/*  allocate memory in  reference 
Array []-object , Objects {} -object , Function- " function object "
 or object, run code check

*/
 
 const  heros  = [ "mummy", "papa", " myself"] ;

 let myobeject = {
        name : "Suchita",
        age : 36,
        gender : false,
}
const myFunction = function(){
    console.log("divine light");
}

console.log(typeof myFunction); // in nonprimited -function retun called "fucntion object"
console.log( typeof myobeject);//in nonprimited - retun  datatype called " object" of object
console.log( typeof heros);// in nonprimited - retun  datatype called " object" of array

 // Memory "new topic"
 // stack (primitive) -we get copy of declear value
 //heap (non-premitive) - we get reference of declear value

 let myYoutubename = "divinelight"
 let anothername = myYoutubename
 anothername = "bubble"
 console.log(myYoutubename);
console.log(anothername);

let user = { 
    email: "divinelight@gmail.com" ,
    upi: "dubble@upi"
}
let usertwo = user
usertwo.email =  "divine@gmail.com"

console.log(user.email);
console.log(usertwo.email);




 
