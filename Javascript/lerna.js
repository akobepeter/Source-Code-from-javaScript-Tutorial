

// function test() {
//   a = 123;
//   var b = 456;
//   if (a ==123) var c = 789
//
// }
//
//
// function isset(varname) {
//   return typeof varname !='undefined'
// }
//
// test()
// if (isset(a)) alert('a = "' + a + '"<br>')
// if (isset(b)) alert('b = "' + b + '"<br>')
// if (isset(c)) alert('c = "' + c + '"<br>')

//
// displayItems("Peter","Samuel","Kunle","Seyi");
// function displayItems(v1,v2,v3,v4,){
// for (var i = 0; i < displayItems.arguments.length; ++i)
// alert(displayItems.arguments[i])
// }


// word = myNames("i", "AM","PETER");
// for (var i = 0; i < word.length; ++i) {
// document.write(word[i]+"<br>");
// }
//
//
// function myNames() {
//   var p = new Array()
//
//   for (var i = 0; i < myNames.arguments.length; ++i)
//    p[i] +=  myNames.arguments[i].charAt(0).toUpperCase() +
//          myNames.arguments[i].substr(1).toLowerCase() + " "
//
//          return p
  // return p.substr(0,p.length-1)

  //}


// function User(foreName,UserName,Password) {
//   this.forename = forename
//   this.username = username
//   this.password = password
//
//   this.shower=function() {
//     document.write("foreName: " + this.foreName + "<br>")
//     document.write("UserName: " + this.UserName + "<br>")
//     document.write("Password: " + this.Password + "<br>")
//
//   }
//
// }
function amIOldEnough(age){
alert(age);
//   if(age<12){
//     return "No,sorry."
//   }else if(age<18){
//     return "Only if you are accompanied by an adult";
//   }
//   else{
//     return "Yep,come on in";
//   }
// }
//amIOldEnough(17);

//document.getElementsByClassName('something');
document.getElementsByTagName('p');
var div = document.getElementById('mylink');
//alert(div.getAttribute("id"));
// div.setAttribute("id","welcome");
// alert(div.getAttribute('id'));
//var number = [9,0,3,7,6,8,5,6];
//var result = number.sort(function(a,b){ return b-a});
  //document.write(result + " <br>");


var num = function(){
return argument[0]-1;
 }
 var countDown= num(10); 
 console.log(countDown);
 //countDown(num -1);
 //console.log(num);



  values = function(number){
  //"use strict";
  if(number < 0){
    throw new Error("You can't square a negative number");
  }
  return Math.sqrt(number);
  
}
console.log(values(121));



function myClick(){
 var div = document.createElement("h1");
 var text = "hello";
  var newT1 = document.body.appendChild(div)
  newT1.innerText  = text;  
}


//CREATING AND DISPLAYING AN ASSOCIATIVE ARRAY

// balls = {
//   "golf":"Golf balls,6",
//   "tennis": "Tennis balls,3",
//   "soccer": "Soccer balls,1",
//   "ping": "Ping Pong balls,1 doz"
// }
// for(ball in balls){
//   document.write(balls["soccer"]+ " <br> ")
//   document.write(ball + " = " +balls[ball] + "<br>")
// }








// var card = new Object();
//  card.name= "Happy Xmas";
//  card.phone=  "25 Dec";
//  card.address=  "Everywhere";
// card.display=function(){
//    return   "People say " + card.name + " to others  during  " + card.phone +" " + card.address;
//  }
}
