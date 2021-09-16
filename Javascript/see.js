var number =[1,2,3,4,5,5,4,3,1];
var everyNumber = number.every(function(item,index,array){
 return item>2;
});
console.log(everyNumber);



// var numbers =[1,2,3,4,5,5,4,3,1];
//  varmapresult = numbers.forEach(function(item,index,array){
//     console.log(item,index,array);
// });



// var numbers =[1,2,3,4,5,5,4,3,1];
//  var mapresult = numbers.map(function(item,index,array){
//      return item;
//     // console.log(mapresult );
// });
// console.log(mapresult );

var date = new Date(Date.parse("2018 oct 29"));
console.log(date);

var a = "hoist me";
function hoist(){
    console.log(a);
  
    // console.log(a);  
}
// hoist();

add(2,3);
function add(x,y){
    console.log(x+y);
}
substract(5,2);
function substract(x,y){
    console.log(x-y);
}
// function pizzas(topping,callback){
// console.log("This is a " + topping + "pizzas");
// callback();
// }
// function cook(){
// console.log("The pizza is cooking");


// }


var values = [1,3,12,5,23,18,7];
console.log(values.sort(compare));
function compare(val1,val2){
    return val1 - val2;
}


function mean(values,callback){
    var total = 0;
    for(i-0,max=values.length;i<max;i++){
        if(typeof callback === "function"){
            total +=callback(values[i]);
        }else{
            total += values[i];
        }
    }
    return total/max;
}

var colors = ["red","green","blue"];
for(var i=0, max=colors.length; i < max; i++){
    console.log( "Color at position " + i +" is " + colors[i]);
} 



  var numbers =[1,2,3];
  var mapresult = numbers.map(function(item,values,array){
      return item>2;
      // console.log(mapresult );
  });
  console.log(mapresult);


var str = "JavaScript_1Tutorial";
var result = str.substr(0,11);
console.log(result);

var val1 = [1,2,3,4];
var add = val1.reduce(function(prevalue,currentvalue){
    return prevalue+currentvalue;
});
console.log(add);

var str = "The quick brown fox jumped over the lazy dog";
var newstr = str.split(" ");
console.log(newstr);

var person = "Peter";
var dog;
dog = "farida";
console.log(person,dog)
// total = newstr.reduce(function(prev,newstr){
//     return prev + newstr.length;
// },0);
// console.log(newstr);


// for(num = 5; num <= 50; num++){
//      if(num%3 == 0 && num%5 == 0 ){
//         console.log(num); 
//      }
    
// }
var date = new Date().toLocaleDateString();
console.log(date);

// for(n = 300; n <= 333; n++){
//     if(n%2 != 0){
//        console.log(n); 
//     }
// }

    people = "Peter"
    function myScript(){
        var people = "Jaafar";
        console.log("inside function: " +people);
    }
    console.log("outside function: " +people);

    // myScript();
        //console.log("outside function: " +people);


console.log((100+23).valueOf());

   
var x = 100 + 23;
console.log(x.valueOf());

var me = {
firstname:"Peter",
lastname:"Akobe",
allies:["Fradi","Sophie","gee","cee"],
fullname:function(){
    return this.firstname + " " +this.lastname;
 }
};
me.fullname();
//  console.log("city" in me);
// for(item in me);
// console.log(me);
// for(var key in me){
//     if(me.hasOwnProperty(key)){
//         console.log(key + ": " +me[key]);
//     }


// }
//me.city = "lagos";//Adding properties to an object
//console.log(me);// Print all the object values out

//me["firstname"] = "samuel";// changing properties of an object
//console.log(me);// print all the object values out

// delete me.firstname;// delete any object
// console.log(me);//print all the object values out



// var jla = {
//     superman:{realname:"clark kent"},
//     batman:{realname:"bruce wayne"},
//     flash:{realname:"barry allen",age:20},
//     wonderwoman:{realname:"dianna prince"}
// };
// console.log(jla['flash']['realname'] +" is "+ ['age']);

get = ({name:"lisa " , age:9});
 console.log("My name is "  ['name'] + "and i am "  ['age'] + "years old");
// console.log(get);

// function greet(option){
// option = option || {};
// greeting = option.greeting || hello;
// name = option.name || Peter;
// age = option.age || 12
// return greeting + "! My name is " + name + "and i am" + age + "years old";
// }
// greet();

 

var sa = /hello/;
var sentence = 'hello world';
console.log(sa.test(sentence));


var re = /^\d{3}/;
console.log(re.test('123hello'));


 var str ="Visit W3Schools";
 var n = str.search(/w3schools/i);
 console.log(n);

 var peter = new RegExp(/good/);
 var words = "God is good";
 console.log(peter.test(words));

//  var pattern = /\w+ing/;
//  var word = "gee";
//  console.log(pattern.exec(word));


var pattern = /JAVA/i;
var word = "javascript";
console.log(pattern.test(word));



var say = "HelloWorldfromjavascript";
console.log(say.split(/\s+/));


var them = "Hello from this side";
console.log(them.replace(/[aeiou]/ig,"*"));


dice = {
    sides:6,
    roll:function(){
        return Math.floor(6 * Math.random()) + 1;
    }
}
dice.roll();
console.log(dice.roll());


  var see = [1,2,3,4];
  for(var i = 0; i<5; i++){
    console.log(i);
  }
//   for(var i = 0, max = see.length;i<max;i++){
      //console.log(see[i]);
  //}



  var string = Number("same text");
  console.log(typeof string);






















