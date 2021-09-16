let val;


val = document;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.scripts[2].getAttribute("src");


let scripts = document.scripts;

scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script);
});

console.log(val);


//document.getElementById()




//Change content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My List";
// taskTitle.innerHTML = "Task List";


//document.querySelector()

console.log(document.querySelector(".collection-item")); 
console.log(document.querySelector("h5"));


document.querySelector("li").style.color="red";
document.querySelector("li:nth-child(3)").style.color="aqua";


//DOM Selector for multiple elements

//document.getElementsByclassName


// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color="blue";
// items[2].textContent= "Javascript"


// const listItems =document.querySelector("ul").getElementsByClassName("collection-item");
// console.log(listItems);


//document.getElementsByTagName

 
let lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color="grey";
lis[2].textContent= "c++"
 

//converting HTML collection into array

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li,index) {
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// })
// console.log(lis);



//document.querySelectorAll()

// const items = document.querySelectorAll("ul.collection li.collection-item");

// console.log(items);





//Traversing the DOM

let val1;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val1 = listItem;
val1 = list;

//Get child nodes
val1= list.childNodes;


//Get children element nodes
val1= list.children;

val1= list.children[1]; 
list.children[1].textContent="Hello";


//children of children

//list.children[2].children[0].id="test-link";
val1=list.children[2].children[1];


//count child element
val1= list.childElementCount;
//ge parent node
val1 = listItem.parentNode;
val1 = listItem.parentElement.parentElement;


//Get next sibling
val1= listItem.nextSibling;

console.log(val1);

//create element

let li = document.createElement("li");

//Add class
li.className="collection-item"


//Add class
li.id="new-item"

//Add attribute
li.setAttribute("title","New Item");


//create text node and append
li = document.createTextNode("Hello Somebody");
li.appendChild()
// console.log(is);
console.log(li);







