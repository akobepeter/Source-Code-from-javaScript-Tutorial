const form = document.querySelector('form');
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
//Clear input
taskInput.value= "";

//form.addEventListener("submit",runEvent);


taskInput.addEventListener('Keydown',runEvent);

function runEvent(event) {

    console.log(`EVENT TYPE: ${event.type}`)
 
    console.log(event.target.value);

    heading.innerText=event.target.value;

    // Get input value

   // console.log(taskInput.value);

    //event.preventDefault();
}



//EVENT BUBBLING

document.querySelector(".card-title").addEventListener("click",function() {
    console.log("card content")
})





//local Storage & Session Storage


    // Set local storage item
//localStorage.setItem("name","john");



    // Set session storage item
    //sessionStorage.setItem("name","peter");


    //remove from local storage
    //localStorage.removeItem("lastname")


        // get from storage 
//const name =localStorage.getItem("name","john");

//clear local storage

// localStorage.clear();

// console.log(name);

document.querySelector('form').addEventListener('submit',function(e) {
    const task = document.getElementById('task').value;
    let tasks;
    if(localStorage.getItem("tasks") === null){
    tasks=[];
    }else{
        tasks =JSON.parse( localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem("tasks",JSON.stringify(tasks));
    alert('Task saved')
    e.preventDefault();
})

const tasks= JSON.parse(localStorage.getItem("tasks"));
tasks.forEach(function(task) {
    console.log(task);
});





