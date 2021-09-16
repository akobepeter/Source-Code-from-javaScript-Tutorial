

const name = "Peter", age = 90, isCool = true, rating = 4.5, x= null, z= undefined;let y;
console.log(`my name is ${name} and my age is ${age}`);

const s = "technology,computers,science";
const m = s.split(",");
console.log(m);
console.log(s.length);


const a = [1,2,3];
const b = [4,5,6];
const c = [...a,...b];
console.log(c);



const person = {
    firstName: "Akobe",
    lastName: "Peter",
    hobbies: ["reading","programming","reading hard"],
    address:{
        city: "Jos",
        country:"Nigeria",
        area: "Alama"
    },
};
console.log(person.hobbies[1]);
const {firstName,lastName, address:{city},hobbies}= person;
console.log(`${firstName} leaves in ${city} and he loves  ${hobbies[1]}`);



const todos = [
{
    id:1,
    text: "Sweep the room",
    isCompleted:true,
},

{
    id:2,
    text: "meeting with myself",
    isCompleted:true,
},

{
    id:3,
    text: "Working on myself",
    isCompleted:false,
},
];

console.log(JSON.stringify(todos));

// todos.forEach((todo)=> console.log(todo.text));

for(todo of todos){
console.log(`${todo.id} = ${todo.text}`);
}
for(let i =10;i>=0;i--){
console.log(i);
}


function Person(firstName,lastName,dob) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob =new Date(dob);
}

Person.prototype.getFullNames= function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getFullYear = function() {
    return this.dob.getFullYear();
}

const person5 = new Person('Peter','Akobe','29-07-1999');

console.log(`My names are ${person5.firstName} ${person5.lastName}`);

console.log(person5.getFullNames());

//console.log(person5.getFullYear());

// var a = 10;

// if (a == 10) {
//     console.log('x is 10');
// }


function addNums(num1 =2,num2=9) {
    return num1 + num2;
}

console.log(addNums());



// console.log(document.querySelector('.container'));

const item = document.querySelectorAll('.item');

item.forEach((item)=>console.log(item));

const ul = document.querySelector('.items');
//ul.remove()
//ul.firstElementChild.remove();
ul.children[1].remove();


var names = ['Dave','yinks','Samuel'];
for(var i =0;i<names.length;i++){
    console.log(names[i]);
}




var y = 0;
while(y>10){
    console.log(y);
    y++;
}

class Person00{
    constructor(firstName,middleName,age){
        this.firstName=firstName;
        this.middleName =middleName;
        this.age=age;
    }
    getFullNames(){
        return ` My names are ${this.firstName} ${this.middleName}`;
    }
}
const mee = new Person00('Sarah','Samson',10);

console.log(mee.getFullNames());