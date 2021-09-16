 var width = 100;
 console.log(width);
 var width = 200;
 console.log(width);




// function WriteCookie() {
//     if(document.myform.customer.value == " "){
//         alert("Enter some value!");
//         return;
//     }
//     cookievalue = escape(document.myform.value) + " ";
//     document.cookie="name " + cookievalue;
//     document.write("Setting Cookies:" + "name=" + cookiesvalue);
// }



function ReadCookie() {
    var allcookies = document.cookie();
    document.write("All Cookies: " +allcookies);
}
cookiearray = allcookies.split(';');
for( var i = 0;i<cookiearray.length;i++){
    name = cookiearray[i].split('=')[0];
    value = cookiearray[i].split('=')[1];
    document.write('Key is :' +name +'and Value is: ' +value);
}
















 //const person ={
    // name:'peter',
     //age:10
 //}

 for (var i = 0; i < 10; i++){
    console.log(i);
 }
     
  var age = 100;
 if(age >12){
     var dogYears = age * 7;
     console.log(`You are  ${dogYears}  dog years old!`);
 }
  
let points = 50;
points =60;


 (function(){
    var name = 'peter';
    console.log(name);
 })();

//  {
//  const name = "peter";
//  console.log(name);
//  }

 v = 15;
 function f1()  
 {
 'use strict';
 var v = 'Hi! I\'m a strict mode script';
 //console.log(v);    
 }
 console.log(v);


 var num  = 10;
 function test(){
     var num = 100;
     console.log("The local variable is " +num );
 }
 console.log("The global variable is " +num );
 test();


 "use strict";
 x = 3.14;
 console.log(x);

 console.log(pizza);
 var pizza = "Deep Dish";
 
//Arrow Functions

const name = ["peter","peace","samuel"];

const fullnames4 = name.map(name => ` ${name}Akobe`)
console.log(fullnames4);
const fullnames5 = name.map(() => `peter Akobe`)
console.log(fullnames5);
 "use strict"
 function test() {
     var num = 100
     console.log("value of num in test() " + num);
     {
         console.log("Inner Block begins");
         let num = 200;
         console.log("value of num: " +num);
     }
 }
 test();


function printMyName(name){
    console.log(name);
}
printMyName('kobe');

  

const printMyName2=(name,age) =>{
    console.log(name,age);
}
printMyName2('kobe',12);

 var main = function() {
     for(var x = 0;x<5;x++){
         console.log(x);
     }
     console.log("x can be accessed outside the  block scope  x value is:" +x);
     console.log("x is hoisted to the function scope");
 }
 main();


 var num =9
 var factorial = 1;
 for (var i = num; i >= 1; i--) {
     factorial*=i;
 }
 console.log(factorial);

 var obj = {a:1,b:2,c:3};
 for(me in obj){
     console.log(obj);
 }

 'use strict'
 for(let temp,i=0,j=1;j<30;temp =i,i=j,j=i+temp){
     console.log(j);
 }



 const race = '100m Dash';
 const winners = ['Hunter Gath','Singa Song','Imda Bos'];
const win = winners.map((winner,i) => ({name:winner,race,place:i+1}));

 const ages = [23,62,45,234,2,63,,234,63,34];
 const old = ages.filter(age => age >= 60);
    console.log(old);

 for(var val of[12,13,123]){
     console.log(val);
 }


 class car{
     constructor(make,color){
         this.make = make;
         this.color = color;
     }
 }

 const bemmer = new car('benz','blue');
 const subie = new car('Subaru','white');

 car.prototype.summarize = function() {
     return  `This car is a  ${this.make}  in the color ${this.color}`;
 };

    //when you need arguments object
    const orderChildren = function(){
        const children  =Array.from(arguments);
        return children.map((child,i)=>{
            return `${child} was child#${i+1}`;
        })
        console.log(arguments);
    }


//const button = document.querySelector('#pushy');
//button.addEventListener('click',function(){
    //console.log(this);
    //this.classList.toggle('on');
//});
console.log(d);
var d = 7;

const person = {
    points:23,
    score:function(){
        console.log(this);
        this.points++;
    }
}

 function calculateBil(total= 100,tax=0.13,tip=0.15) {

     return total +(total*tax) + (total*tip);
 }
 const totalBill = calculateBil();
 console.log(totalBill);

function met() {
    return 'Hello world';
}
var val = met()
console.log(val);

// let double = function(num) {
//     return num *2;
// }
// var test = double(3);
// console.log(test);

let double = function(a) {
    return "hello " + a;
}
console.log(double("world"));

//var a = Number(prompt("Enter your first number"));
//var b = Number(prompt("Enter your second number"));
function add(a,b) {
    var sum = a+b;
    //alert("The sum of this values is " +sum);
}
//add(a,b);


//var a = Number(prompt("Enter your first number"));
function sum(a,b=1) {
    return a+b;
    //alert()
}
// alert(add(a,b));

function fun1(...params) {
    console.log(params.length);
}
fun1();
fun1(5);
fun1(5,6,7);
fun1(5,6,7,8);

//Anonymous Function
var f = function() {
    return "hello";
}
console.log(f());


//Anonymous Parameterized Function
var func = function(x,y) {
    return x*y
};
function product() {
    var result;
    result = func(10,20);
    console.log("The product: " +result)
}
//product();

//Recursion

function factorial(num){
    if(num <= 0){
        return 1;
    }else{
        return num * factorial(num -1);

    }
    
  }

 // console.log(factorial(5));


 //var foo = (x) =>10+x
 //console.log(foo(10));


  (function() {
      var msg = "Hello";
      console.log(msg);
  })();
var fun = new Function("x","y","return x*y;");
function product(){
    var result;
    result= fun(10,9);
    console.log("The product is : " +result);
}
product();



function notifyAll(fnSms,fnEmail) {
    console.log('starting notification process');
    fnSms();
    fnEmail();
}
notifyAll(function() {
    console.log('Sms send ..')
}, function(){
    console.log('email send..')
});
console.log("End of Script");



const msg=(name,age)=>{
    console.log( name + " is " +age);
}
msg("peter",7);

const msg2=name=>{
    console.log( name + " is a fine boy ");
}
msg2("peter");
//Arrow Function and this;

//const box = document.querySelector('box');
//box.addEventListener('click',function() {
    // let first = 'opening';
    // let second = 'open';
    // if(this.classList.contains(first)){
    //     [first,second]=[second,first];
    // }
    // this.classList.toggle('opening');
    // setTimeout(() => {
    //     console.log(this); 
    // this.classList.toggle('open');  
    // },500);

// });




hoist_function();
function hoist_function() {
    console.log('foo');
}
// hoist_function();



//  hoist_function();
// var hoist_function()=function() {
//     console.log("bar");
// };



var main = function() {
    var loop =function() {
        for(var x=10;x>=0;x--){
            console.log(x);
        }
    }();
    console.log("x can not be accessed outside the block scope x value is " +x);
}
main();


var main = function() {
        for(var x=10;x>=0;x--){
            console.log(x);
        }
    }
main();

"use strict";
function* rainbow() {
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
}
for (let color of rainbow()){
    console.log(color);
}


function* ask() {
  
    const name =  yield "What is your name?"; 
   const sport = yield "What is your favorite sport?"
return`${name}'s favorite sport is ${sport}`;
}
const it = ask();
console.log(it.next());
console.log(it.next('Ethan'));
console.log(it.next('cricket '));



//Template Strings Introduction
//var me = 'samuel';
var age = 12;
var sentence =`My  is ${me}  and I'm ${age*5} years old`;
console.log(sentence);

 
var me= {
    name:"peter",
    job:"developer",
    city:"jos",
    bio:"peter is really shy but loves to learn web development with javascript"
};


var markup =`
<div class="person">
<h2>
${me.name}
<span class="job">${me.job}</span>
</h2>
<p class= "location">${me.city}</p>
<p class= "bio">${me.bio}</p>
</div>
`;
console.log(markup);
//document.body.innerHTML=markup;



var dogs= [
    {name:'Snickers',age:'2'},
    {name:'hugo',age:8},
    {name:'sunny',age:1}
];

var markup=`
<ul class="dogs">
${dogs.map(dog=>`<li>${dog.name} is ${dog.age*7}</li>`).join('')}
</ul>
`;

console.log(markup);
//document.body.innerHTML = markup;





