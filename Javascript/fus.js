function total(num1,num2){
    return num1 + num2;
    console.log(total); 
};  
 total(1,2);  
// console.log(total(1,2));


 var array = new Function('num1','num2','return num1+num2');
     console.log(array(2,4));

    // var array = new Function('num1','num2','num3','return num1+num2+num3/6');
    // console.log(array(2,4,6));

var sum = function( num2,num1){
    return num2 - num1;
    console.log(sum);
};
sum(2,5);

console.log(me(5,5));
function me(num1,num2){
    return num1 + num2;
}


function callingAFunction(myFunc,myArgs){
    return myFunc(myArgs);
}

function addNumber(num){
    return num + 100;
}
 var result = callingAFunction(addNumber,1000);
 console.log(result);



 function sum(num1,num2){
    return num1 + num2;
 }

function callingSum(num1,num2){
    return sum.apply(this,arguments);   
  }

  console.log(callingSum(11,11));


  function repeat(n,action){
      for(let i = 0; i < n;i++){
          action(i);
      }
  }
  repeat(3,console.log);

  let labels = [];
  repeat(5, i=>labels.push('Unit ${i +1}'));
  console.log(labels);


  function greaterThan(n){
      return m =>m>n;
  }
  let greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11));


  function unless(test,then){
      if (!test) then();
  }
  repeat(3,n =>{
      unless(n %2 ==1,()=>{
          console.log(n,"is even");
      });
  });

 
 // ["jibrin","Peter"].forEach(1 => console.log(1));


//  (function filte(array,test){
//      let passed = [];
//      for(let element of array){
//          if(test(element)){
//              passed.push(element);
//          }

//      }
//      return passed;
//  }
//  console.log('filter(SCRIPTS,script => script.living)')';


var me = [1,2,3,4,5];
var us = me.map(function( item,index,array){
    return 'Num ' +item;
   // console.log(us);
});
console.log(us);




var number = [1,2,3,4,5];
var reducenumber = me.reduce(function(prevValue,currentValue,index,array){
    return prevValue + currentValue;
   // console.log(us);
});
console.log(reducenumber);



let rabbit = {};
rabbit.speak = function(line){
    console.log("The rabbit says '${line}'");
};
rabbit.speak("I'm alive");
function speak(line){
    console.log("The ${this.type} rabbit")
}


var a = null;
if(a == undefined){
    console.log("welcome");
}else{
    console.log(-1);
}

var string = Number(" Same text");
console.log(typeof string);