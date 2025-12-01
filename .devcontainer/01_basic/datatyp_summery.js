// primitive  7 types
/*    these data call by value (through copy value) 
String ,Number , Boolean , null , undefine 
symbol (unique repration ) , bigInt (for big value- 518491617)
*/
 
const Id = Symbol('518491617')
const NewId = Symbol('518491617')
console.log(Id == NewId)
const bigNumber = (typeof 519491617519491617519491617n) 
const bigNumber = 519491617519491617519491617n
console.log(bigNumber);


//  Reference  ( non primitive  )

/*  allocate memory in  reference 
Array [] , Objects {} , Function    

*/
 
 const  heros  = [ "mummy", "papa", " myself"] ;
 let myobeject = {
        name : "Suchita",
        age : 36,
        gender : false,
}
const nyFunction = function(){
    console.log("divine light");
}
console.log();
