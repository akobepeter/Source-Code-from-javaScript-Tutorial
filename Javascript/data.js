// function myFunc(e){
//     e.preventDefault();
//     var firstName = document.getElementById("FirstName").value;
//     var lastName = document.getElementById("LastName").value;
//     alert("Welcome " + firstName + " " + lastName);
// }


// var submitBtn = document.getElementById("submit_btn")
// submitBtn.addEventListener("click", function(e) {
//     myFunc(e);
// })
var num1 = 5;
var num2 = num1;
console.log(num1,num2);
var num2 = 2;
console.log(num1,num2);

list1=[2,4,3];
list2=list1;
console.log(list1,list2);
list2[0]="me";
console.log(list1,list2);

var me = new Object()
var Obj1 = "Peter";
var Obj2 = Obj1;
console.log(Obj1,Obj2);
console.log("Hello World");

a = "Hello World";console.log(a);

{
    a = "Welcome"
    console.log(a);
}

// a = "Hello";
// console.log(typeof a);

typeof "me";

var  d,b,c;
console.log(d,b,c);

var name;
name = "walter";
console.log(name);
typeof name;

var x=2,y,z = "Hi";
console.log(x,y,z);


let  state = "Paul";
console.log(state.length);
state.length = 2;
console.log(state.length);
console.log(state.toUpperCase());
console.log(state.toLowerCase());
console.log(state.charAt(0));

z = "Hello".concat(" ","World");
console.log(z);
console.log("Java"+"Script"+" "+"Nice");

q = "   @  Should be Nice for what! "
console.log(q.trim());

x = 3.1432;
console.log(typeof x);

// d= new Number(3);
// console.log(Number);

f = 1e9;
console.log(f);

var capital = 5;
console.log(capital.toExponential());


console.log(3.1415926.toFixed(5));

 var pi = 325678;
console.log(pi.toPrecision(2));

// points = 10;
// points+=10;
// console.log(points);

// points = 10;
// points = points + 10;
// console.log(points);



points = 10;
++points;
console.log(points);

console.log("Hello" *5);
 
var answer = "5";
console.log(answer *1);

question = 5;
question+="5";
console.log(question);

console.log(String (4));
console.log(10..toString(2));
console.log(Boolean("hello"));

console.log(typeof []);

var pizzas=[];
pizzas[0] = "Bread";
pizzas[1] = "Tea";
pizzas[2] = "Sandwich";
pizzas[5] = "Honey";
console.log(pizzas.length);
delete pizzas[1];
console.log(pizzas);
pizzas.length = 3;
console.log(pizzas);

pizzas.length = 12;
console.log(pizzas);
pizzas.pop();
console.log(pizzas);

var me = ["seyi","yemi","samuel","peter","kemi"];
delete me[4];
console.log(me);
me.pop();
console.log(me);
me[4]="Kunle";
console.log(me);
me.pop();
console.log(me);
me[me.length - 1];
console.log(me);
me.push("Victory");
console.log(me);
console.log(me.length);
me.shift();
console.log(me);
me.unshift("Precious");
console.log(me);
me = me.concat(["Akobe","Aisha","Shegz"]);
console.log(me);
me.join(" & ");
console.log(me);
me.slice(2,4)
 console.log(me);
 me.splice(2,3,"Seun","ceecee","matthew","dan","Amos")
 console.log(me);
 me.splice(2,2);
 console.log(me);
 var us = new Array("Ben","Tawe","Flora","the");
 console.log(us.length);
 console.log(us.reverse());
 console.log(us.sort());
 var they = new Array(1,2,3,9);
 console.log(they.sort());
 console.log(they.indexOf("me"));

 mult=[["you","free","dog"],[0,1],[],[true,false]];
 console.log(mult);



  coordinates = [[1,3],[4,2]];
  console.log(coordinates);
  x1 = coordinates[0][0];
  console.log(x1);

  var age = 3;
  if(age>18){
      console.log("You can learn how to drive now");
  }else{
    console.log("You haven't gotten to the age"); 
  }

  n = 12;
  if(n%3===0){
    console.log("n is an even number");
  }else{
      console.log("n is an odd number");
  }

  for(var n = 1;n<9;n++){
    for(var m = 1;m<13;m++){
        console.log(m + " multiplied by " + n +" is "+ n*m);
    } 
  }
  for(var i = 0, max = us.length; i < max; i++){
    console.log(us[i]);
  }
  
  var count = 0;
  do{
      console.log("Current count is " + count);
      count++;
  }while(count<10);

   function hello(one,two){
       console.log(one + two);
   }
  hello(1,2);


// hi = new Function('console.log("Welcome");');
// seeya = goodbye;
// function bye(){
//     console.log("How Far");
// }
// seeya();
// var colors = new Array();
// console.log(Array.isArray(colors));
// colors.pop("orange");
// console.log(colors);
// var removedItem = colors.pop();
// console.log(colors," Removed Item ",removedItem);
var values = ["red","orange","green"];
values.unshift("black","blue","brown");
values.shift();
console.log(values);
console.log(Array.isArray(values));
 var deletedItems = values.splice(1,4,'voice','noise');
 console.log('Values: ',values, 'Deleted: ', deletedItems); 
var colors = ["red","blue","green","black","purple","gold"];
console.log(colors.lastIndexOf("re"));

var number = [1,2,3,4,5];
var sum = number.reduce(function(prevValue,currentValue,index,array){
    return currentValue - prevValue;
});
console.log(sum);
// var date = new Date().getHours();
// console.log(date);
// var date = new Date(Date.parse("May 25,2009"));
// console.log(date);

// var currentTime = new Date().toTimeString();
// console.log(currentTime);

function square(x){
    console.log (x*x);
}
square(4.5);

function add(x,y,z){
    console.log(x+y+z);
}
add(2,3,4);

 function mean(x,y,z){
    console.log ((x+y+z)/3);
 }
  mean(4,4,4);

// function hello(name){
//  console.log("Hello " + name);
// }
// hello("Peter");


// function hello(name){
//     if(name === undefined) name ="Peter";
//     console.log("Hello " + name);
//    }
//    hello();

//    function discount(amount,price){
//        if(amount===undefined) amount=10;
//     console.log( price*(100-amount)/100);
//    }
//    discount(20);

   var a = 1;
   function locala(){
       var a = 3;
       console.log("a inside function: " + a);
   }
   locala();
   console.log("a outside function: " + a);

   function hello(name){
    console.log("Hello " + name);
   }
   hello();

   function discount(amount,price){
       console.log(price*(100-amount)/100);
   }
   discount(20,15);


    c= 2;
    function localb(){
        c = 4;
        console.log("c inside function:" +c);
    }
    localb();
    console.log("c outside function:" +c);

   function localc(){
        c = 7;
       console.log("c inside function:" +c);
   }
   localc();
   console.log("c outside function:" +c); 
   
   
   var currentTime = new Date().toDateString();
   console.log(currentTime);
   
   let seyi = ["green","gray","crimson","black","blue","green"];
   console.log(seyi.lastIndexOf("blue "));

   var peace = ["Oshela","Flora","Akobe","Cynthia","Moses","Betrand","Alice"];
//    peace.reverse();
   console.log(peace.reverse());

   var a = 10;
   console.log(a);
   var a = 20;
   console.log(a);


