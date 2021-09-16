
i = 1
message = prompt("Do you want to play??")
eat_message = prompt("Do you want to eat??")

while(i){
    message = prompt("Do you want to play??")
    if (message === 'yes'){
        eat_message = prompt("Do you want to eat??")        
    } else{
        message = prompt("Do you want to play??")
    }
    
}



// var name = "Goodness"

// if(name){
//     console.log("Welcome!!")
// }
// i = 0

// while(name == "Goodness"){
//     i += 1
//     console.log("Welcome!!", i)
//     if(i == 5){
//         name = "James"
//     }
    
// }