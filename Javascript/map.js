var myMap = new Map();
myMap.set("J","John");
myMap.set("M","Mary");
myMap.set("T","Tom");


console.log(myMap.size);

var map = new Map();
map.set('name','Tutorial Point');
console.log(map.get('name'));

var map = new Map();
map.set('name','Tutorial Point');
console.log(map.has('name'));

var roles = new Map();
roles.set('r1','User')
.set('r2','Guest')
.set('r3','Admin');
console.log(roles.has('r2'));


var roles = new Map([
['r1','User'],
['r2','Guest'],
['r3','Admin'],
['r4','User'],
]);
console.log(roles.get('r1'));



var roles = new Map([
    ['r1','User'],
    ['r2','Guest'],
    ['r3','Admin'],
    ['r4','User'],
    ]);
    console.log(` value of key r1 before set(): ${roles.get('r1')}`);
    roles.set('r1','superUser')
    console.log(` value of key r1 after set(): ${roles.get('r1')}`);
    
    var myMap = new Map();
    myMap.set("bar","baz");
    console.log(myMap.size);
    myMap.clear();
    console.log(myMap.size);



    var myMap = new Map();
    myMap.set("id","admin");
    myMap.set("pass","admin@123");
    console.log(myMap.has("id"));
    myMap.delete("id");
    console.log(myMap.has(("id")));


    var myMap = new Map();
    myMap.set("id","admin");
    myMap.set("pass","admin@123");
    var itr = myMap.entries();
    console.log(itr.next().value);
    console.log(itr.next().value);



    function userdetails(key,value) {
        console.log("m[" + key + "] =" + value);
    }
    