const score = 900;
console.log(score );

const count = new Number(518491617) // 9 number
console.log(count);

console.log(count.toString()); //converting no to string  and checking string fun.
console.log(count.toString().length); // checking string lenght by fun.
console.log(count.toFixed(2)); // after decimal we get 2 value 518491617.00

 const newcount = 518491617.99
console.log(newcount.toPrecision(9)); // 518491617.9 will precisise 518491618

const hurdreds = 100000
console.log(hurdreds.toLocaleString('en-In'));

///// ****MATHS ****/////

console.log(Math);  // we check all math laibery Math.   then we can see all fun.
console.log(Math.abs(-4));
console.log(Math.round(8.95));
console.log(Math.ceil(8.95));
console.log(Math.floor(8.95))
console.log(Math.max(8.95 ,77, 491))

console.log(Math.random()); //math.random always gives value b/w 0-1
console.log((Math.random()* 10)+1);
console.log(Math.floor(Math.random()*10)+1);// floor means min & +1 means add 1 in that value
const min = 10
const max = 20 // for range we can give min and max value
console.log(Math.floor(Math.random()* (max - min + 1))+ min); 






