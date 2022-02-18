var myname="Lubna";
var num=87;
var chr='s';
var obj={};
var my_bool=true;



console.log( typeof myname);
console.log( typeof num);
console.log( typeof chr);
console.log( typeof obj);
console.log( typeof my_bool);

//  * 
//  * ex. var a = 23;
//  * 
//  * +=
//  *  add right operand value to left operand and assigns to left operand.
//  * 
//  * -=
//  * subtract right operand value from left operand and assign value to left operand
//  * 
//  * *=
//  * multiply right operand value to left operand and assign value to left operand
//  * 
//  * 
//  * /=
//  * divides the value of left operand with right operand and stores the value in the left operand
//  * 
//  * 
//  * %=
//  * modulus of the l right operand and assign the value to the left operand
console.log(5!=5&&6==6);
console.log(5==5&&6==6);
console.log(5!=5||6==6);
console.log(5==5||6==6);



// conditionals
a=5
b=6
if(a>b)
console.log(a);
else
console.log(b);
if(null)
console.log("truthy");
else
console.log("falsy");
if(1)
console.log("truthy");
else
console.log("falsy");
if(NaN)
console.log("truthy");
else
console.log("falsy");
if(0)
console.log("truthy");
else
console.log("falsy");

console.log(23+10)
console.log(23+"10")
console.log("23"+10)
23-10
console.log(23-"10")
console.log("23"-10)
console.log("23"-"10");


// loop....

for(var i=0;i<10;i++){
console.log("the value of i",i)}


// Array...
var p=["lubna",24,2000,"INDIA"]
for(i=0;i<p.length;i++)
{
    console.log(`the value ${p[i]}`);
}

// function......
function test(){
    console.log("the first statement");
}
test();
(function(){
    console.log("the anonymous");
})();


// arrow function

var test2 = () => {
    console.log("arrow function");
}
test2();

var greet="hello";
var test1=()=>{
    return `${greet}"lubna"`;
}
let my=test1();
console.log(my);

var say = (myname) =>`hello my name is ${myname}`
console.log(say("anam"));


var  sub=(a,b)=> a-b
 var p=sub(5,3)
 console.log(p);

 //celsius into fahrenheight

 var far=(cel)=>(cel*1.8)+32;
 var f=far(60);
 console.log("the temp in fahrenheight "+f+"f");
