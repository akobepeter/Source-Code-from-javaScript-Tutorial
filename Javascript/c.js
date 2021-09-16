var a = 30;
var b = a;
console.log(a,b);



function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
   
}
console.log(factorial(10));



var numbers = [20,1,90,790,0,67,56,5];
var result = numbers.sort( function(a,b){return b-a});
console.log(result);


