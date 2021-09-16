 let a = 10;
let b = 20;
let result = a+b;
console.log(result);



// console.log(Math.max(2,4,5,9));
console.log(Math.min(2,4) +100);
console.log(Math.max(2,4) + 200);

//    let num = Number(prompt("Pick a number: "));
//   if(num <10){
//       console.log("Small");
//   }else if(num <100){
//      console.log("Medium");
//  }else{
//      console.log("large");
//  }
 

num1 = 200;
num2 = 400;
console.log(num1 < num2 ? "True":"False");


// console.log(0);
// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);
// console.log(10);
// console.log(12);


// num2 = 50;
// num2 += 5;
// console.log(num2);
// if(1+1 == 2) console.log("Correct");



// var num = 0;
// do{
//     console.log("Even numbers " +num);
//     num = num + 2;
// }while(num<=12)


// let number = 0;
// while(number <= 12){
//     number =  number +2;
//     console.log(number);
// }

// let number = 20;
// while(number<100){
//     number++;
//     console.log(number);
// }


// let result = 1;
// let counter = 0;
// while(counter < 10){
//     result = result *2;
//     counter = counter +1;
// }
// console.log(result);





//  for(let num = 1; num <=100; num++){
//      if(num % 3 == 0 && num % 5 == 0){
//          console.log("FizzBuzz");
//       }else if(num % 5 == 0 || num % 3 == 0){
//           console.log( "Fizz"||"Buzz");
//      }
//      console.log(num);
//  }



// console.log("#");
// console.log("##");
// console.log("###");
// console.log("####");
// console.log("#####");
// console.log("######");
// console.log("#######");

// let me = "peter";
// console.log(me.length); 

// var board = "";
// for ( var y = 1; y <5 ; y++){
//     for( var x = 1; x <5;x++){
//         if (y % 2 ==0){
//             board = "" + board;
//             board += "#";
//         }
//         else{
//             board += "#";
//         }
//     }
//     board += "\n"; 
// }
// console.log(board);


var board = "";
for ( var y = 0; (y-1)<7 ; y++){

    board = board + "#";
    console.log(board);
    }


