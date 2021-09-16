let total = 0,count = 1;
while(count<=10){
    total += count;
    count += 1;
}
console.log(total);
//console.log(sum(range(1,10)));



// for(var i = 0; i < 10;i++){
//     console.log("Start looping");
//     console.log(i);
// }

// function repeatLog(n ,action){
//     for(let i = 0; i< n;i++){
//         action(i);
//     }
// }
// console.log(3,console.log);


let labels = [];
var repeat = 0;
repeat(5,i=>{
    labels.push('unit ${i+1}')
});
console.log(labels);