var schools = ("Alama  Ace Unique");
console.log(schools);
var grade = "5";
var name = "<br>";
document.write("<b>Entering Switch block</b>");
document.write(name);
switch(grade)
{
case "5": document.write("<b> Excellent Grade</b>");
          document.write(name);
          break;
    
case "4": document.write("<b> Good Grade</b>");
          document.write(name);
          break;
case 3: document.write("<b> Average Grade</b>");
        document.write(name);
          break; 
case 2: document.write("<b> Below Average Grade</b>");
        document.write(name);
          break;
case 1: document.write("<b> TryAgain Grade</b>");
          document.write(name);
          break;
default: document.write("<b> Keeptrying Grade</b>");
         document.write(name);
         break;
}
document.write("<b>Exiting switch block</b>");
document.write(name);
document.write(name);

var count = 0;
console.log("Start loop");
console.log(name);
while( count > 10){
    console.log("current count: " + count + name); 
    count++;
}
console.log("Stop looping");
console.log(name);
console.log(name);


var count = 0;
console.log("Start looping");
console.log(name);
do{
    console.log("current count: " + count + name); 
    count++;
}
while(count < 5);
console.log("Stop looping");
console.log(name);
var count = 0;
 console.log("Start loop");
while( count < 10){
    console.log("current count: " + count); 
    count++;
}
console.log("Stop looping");

console.log(name);

var count = 0;
console.log("Start looping");
do{
    console.log("current count: " + count); 
    count++;
}
while(count < 5);
console.log("Stop looping");

console.log(name);


var count;
console.log("Start loop");
for( count = 0; count < 10; count++){
console.log("current count: " + count);

}
console.log("Stop looping");

var count = 0;
document.write("Start loop");
document.write("<br>");
while(count<20)
{
    if (count == 5){
        break;
    }
    count = count+1;
    document.write(count + "<br>");
}
document.write("Stop Loop");
document.write("<br>");

 var x= 1;
 document.write("Start loop");
 document.write("<br>");
 while(x>0){
     if(x==7){
         break;
     }
     x =x+1;
     document.write(x + "<br>"); 
 }
 document.write("Stop");
 document.write("<br>");

 var x = 0;
 document.write("Start loop");
 document.write("<br>");
 while(x<10){
     x =x+1;
     if(x==7){
        continue;
     }
    
     document.write(x + "<br>"); 
 }
 document.write("Stop");
 document.write("<br>");

 var person = new Object();

  person.name = "Peter";
  person.age = 30;
  console.log(person.name, "is", person.age,"years Old");
  document.write("<br>");
  
  var Emi =  {
 name:"Peter",
 age:10,
 color:"black",
  }
  document.write("My name is ",Emi.name," and i am ",Emi.age,"years old "," and my best color is ",Emi.color);
document.write("<br>");

  var Emi = {
    name:"Peter",
    age:10,
    color:"black"
 };
 console.log(Emi["name"],Emi["age"],Emi["color"]);
 

 var ObjName = Emi.age;
 console.log(ObjName); 

var names;
console.log(typeof names);

var age = 7;
if(age >=7){
    console.log("Start driving");
}

var age = 17;
if(age >17){
    console.log("Start driving");
}else{
    console.log("Stop driving");   
}


var person = "Mike";
console.log("Attendance shit");
switch(person){
    case "Mike": console.log("Welcome Inside");
    case "Peter": console.log("You have been Evicted");
    case "Samuel": console.log("GET OUT");
    default: console.log("You are Save"); 
}
console.log("Good bye");

// var count = 10;
// document.write("Start loop");
// while(count > 0){
//     document.write("Current Count: " + count);
//     count++;
// }
// document.write("Terminate");

var count = 0;
console.log("Start loop");
do{
    console.log("Current  count: " + count);
    count++;
}while (count<9); {
  console.log("End");   
}

// var count = 5;
// console.log("Start loop");
// for( count = 0;count<5;count--){
//     console.log("Current  count: " + count);
// }
//   console.log("End");   

var peter = new Object();
peter.name = "Samuel";
peter.age = 10;
console.log("Has the property?",peter.hasOwnProperty("name"));
console.log(peter.hasOwnProperty("likes"));
var person = {
    name:"Peter",
    age:10,
    sayname:function(){
        return this.name;
    },
}; 
    
console.log(person.sayname());





document.write("Start<br>");
outerloop:
for( var i = 0; i<5; i++){
    document.write("Outerloop: " + i + "<br>");
    innerloop:
for( var y = 0; y < 5; y++){
 if (y>3)break;
 if (i==2)break innerloop;
 if (i==4)break outerloop;
 document.write("innerloop: " + y + "<br>");
  }   

}
document.write("Stop");


console.log("Start");
outerloop:
for( var i = 0; i<5; i++){
    console.log("Outerloop: " + i);
    // innerloop:
for( var y = 0; y < 5; y++){
 if (y==3){
continue outerloop;
}

//  if (i==2)break innerloop;
//  if (i==4)break outerloop;
console.log("innerloop: " + y );
  }   

}
console.log("Stop");

var age2 = 30;
--age2;
console.log(age2);

var age = 30;
age++;
console.log(age);
var x;
console.log("Start loop");
for(x = 0; x <= 5; x++){
    console.log("Current x: " + x);   
}
console.log("Stop");

var name = "Peter";
if(name == "Peter"){
    console.log("Good boy");
}
else{
    console.log("Hustler lo omo");
}


var name = "martins";
if(name == "Peter"){
    console.log("Good boy");
}
else if(name =="Paul"){
    console.log("Hustler lo omo");
}else if( name== "martins"){
 console.log("No be my name");
}
else{
    console.log("What is your name");
}
 console.log("1"=== 1);
 console.log(1 !== "1");

 var num1 = 100;
 var num2 = 200;
 var result =  (num1 > num2) ? "Nice" : "Not nice ";
 console.log(result);

 var me  = 10;
//  me = me + 10;
me +=10;
 console.log(me);
 var name = "Peter", age = 10, address = "Lagos";
//  var age = 10;
//  var address = "Lagos";
 console.log("Name: " , name); 
 console.log("Age: ", age);
 console.log ("Address: ",address);
//  var num = 100;
//  if( num<50){
//      alert("Yes greater than " + num);
//  }else{
//      alert("No it is not true");
//  }

var age = 0;
do{
    age++;
    console.log("You are a young boy:"+ age);
}while(age<=25);

// var num = 0;
// while(num = true){
//     console.log("Keep looping " + num);
//     num++;
// }

var person = {
    name: "Ryan",
    age: 30,
    address: "lagos"
};
for(item in person){
    console.log(item);
}



var num = 0;
do{
    console.log("num " + num);
    num++;
}while(num <5);

var num1 = 0;
while( num1<10){
    num1++;
    console.log("Keep looping "  +num1);
}

var num = 0;
for(i = 0; i < 10;i++){
    if (i==5){
        break;
    }
    num++;
}
console.log(" num " + num);


var num = 0;
 outerLabel:for(i = 0; i < 10;i++){
    for(ii = 0; ii < 10;ii++){
    if (i == 5 && ii == 5){
        continue outerLabel;
    }
        num++;
    }
}
console.log(" num: " + num);










