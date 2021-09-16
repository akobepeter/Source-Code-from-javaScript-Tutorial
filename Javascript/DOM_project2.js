//Create Element


let li = document.createElement("li");

//Add class
li.className= "collection-item";


//Add id
li.id="New-item";


//Add attribute
li.setAttribute("title","New-Item");


//create text node and append

li.appendChild( document.createTextNode("Hello "));

//create new link element
const link = document.createElement("a");

//Add classes
link.className="delete-item secondary-content";

//Add icon html
link.innerHTML="<i class='fa fa-remove'></i>";

//Append link into li
li.appendChild(link);



//Append li as child to ul
document.querySelector("ul.collection").appendChild(li);


console.log(li);


//Replace element

const newHeading = document.createElement("h2");

//App id
newHeading.id="task-title";

//new text node

newHeading.appendChild(document.createTextNode("Task list"));


//Get the old heading

const oldHeading = document.getElementById("task-title");
//Parent

const cardAction= document.querySelector(".card-action");

//Replace
cardAction.replaceChild(newHeading,oldHeading);




//REMOVE ELEMENT

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");


//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);



//CLASSES & ATTR

const firstLi = document.querySelector("li:first-child");
const links = firstLi.children[0];


let val;

val = links.className;
val = links.classList;
links.classList.add("test");
links.classList.remove("test");
val = links;

console.log(val);





//EventListeners The Object

// document.querySelector(".clear-task").addEventListener('click',function(e) {
// console.log("Enter");

// //e.preventDefault();
// })


const heading= document.querySelector("h5");

const card= document.querySelector(".card-action");

//document.querySelector(".clear-task").addEventListener('click',onclick);

card.addEventListener("mousemove",runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

   // heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}




function onclick(e) {

    // console.log("Clicked");

    let val;

    val = e;

    //Event target element
    val = e.target;

    val= e.target.innerHTML="How Far";
   val = e.target.style.background="red";

    val = e.clientY;
    console.log(val);
   
}
    
    //e.preventDefault();
    




//set local storage item
//localStorage.setItem("name","John");



//set session storage item
//sessionStorage.setItem("name","Peter");



//remove from storage 
localStorage.removeItem("name");



