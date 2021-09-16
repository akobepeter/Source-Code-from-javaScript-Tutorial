const firstName = 'Jordan';
console.log(firstName);



const arr =[
    'string',
    42,
    function () {console.log('hi');} 
]

arr[2]();



const obj={
    1:"test",
    name:'Peter',
    age:10,
     you:{
        app:function() {console.log('how far');}
    }
    
};
obj[1];
obj.you.app();

const x =42;
const explicit = String(x);
console.log(explicit);


var secretNumber =4;
var myGuess= 'guess a number: ' + myGuess;

if( myGuess > secretNumber ){
    console.log('guess is high');
}else if( myGuess < secretNumber){
    console.log('guess is low');
}

const a = null;
console.log(typeof a);


const o = new Object();
o.firstName= "Samuel";
o.lastName ="Akobe";
console.log(o.lastName);


var d;
console.log(d);
 d =90;


var array1 = [1,2,3,4,];
array1.push(5,6,'seven');
for(var i =0,len=array1.length;i<len;i++){console.log(array1[i])}




var counter =0;
while (counter<array1.length) {
    for(var i =0,len=array1.length;i<len;i++){console.log(array1[i])}
    counter++;
}


var array1 = ['all','cows','are','big'];
for( var index in array1){
//console.log(index);//print out the index 0,1,2,3
console.log(array1[index]);
}

var array2 = [1,2,3,4,5];
console.log(array2.slice(1,3));

var array3 = [1,2,3,4];
var array4 = array3.concat([2,3,4,5]);
console.log(array4);
console.log(array3);



var fruits = ['mango','banana','orange','lemon','apple'];
var totalFruit = fruits.splice(2,2);
console.log(totalFruit);

var arr5 = [1,2,3,4];
//console.log(arr5.length);
arr5.length=3;
console.log(arr5);


//Spread Operator

function addFourNums(a,b,c,d) {
    return a+b+c+d;
}
var numbers = [1,2,3,4];
console.log(addFourNums(...numbers));




//var arrs = [1,2,3,4,5];
function findSum(arrs,weight) {
    for(var i =0,arrlength=arrs.length;i<arrlength;i++){
        for(var j=i+1;j<arrlength;j++){
            if (arrs[i]+arrs[j]==weight) {
                return[i,j];
            }
        }
    }
    return -1;
}

console.log(findSum([1,2,3,4,5],7))

var arrs1 = [1,2,3,4,5];
function findSumBetter(arrs1,weight) {
    var hashtable={};

    for(var i =0,arrlength=arrs1.length;i<arrlength;i++){
        var currentElement = arrs1[i],
        difference = weight -currentElement;

        if(hashtable[currentElement]!= undefined){
            return[i,hashtable[weight-currentElement]];
        }else{
            hashtable[difference]=i;
        }
        // for(var j=i+1;j<arrlength;j++){
        //     if (arrs[i]+arrs[j]==weight) {
        //         return[i,j];
            }
            return -1;
        }
    //}
   
//}

console.log(findSumBetter([1,2,3,4,5],7))




function arraySlice(array,beginIndex,endIndex) {
    if (!beginIndex&& !endIndex) {
        return array;
    }
    endIndex= array.length;
    var partArray = [];
    for(var i = beginIndex;i<endIndex;i++){
        partArray.push(array[i]);
    }
    return partArray;
}

console.log(arraySlice[1,2,3,4],2,4);






function medianOfArray(array) {
    var length = array.length;

    if(length%2 == 1){
        return array[Math.floor(length/2)]
    }else{
        return (array[Math.floor(length/2)]+array[length/2-1])/2;
    }
}

function medianOfTwoSortedArray(arr1,arr2,pos) {
    if(pos<= 0){
        return -1
    }
    if(pos ==1){
        return (arr1[0]+arr2[0])/2;
    }
    if(pos ==2){
        return(Math.max(arr1[0],arr2[0])+Math.min(arr1[1]+arr2[1]))/2;
    }

    var median1 = medianOfArray(arr1);
        median2 = medianOfArray(arr2);

        if(median1 == median2){
            return median1
        }
        var evenOffSet = pos%2 ===0?1:0;
            offsetMinus = Math.floor(pos/2)-evenOffSet
            offsetPlus = Math.floor(pos/2)+evenOffSet;

            if(median1<median2){
                return medianOfTwoSortedArray(arr1.slice(offsetMinus),arr2.slice(offsetMinus),offsetPlus);
            }else{
                return medianOfTwoSortedArray(arr2.slice(offsetMinus),arr1.slice(offsetMinus),offsetPlus);
            }
}

console.log(medianOfTwoSortedArray([1,2,3],[4,5,6],3))
// console.log(medianOfArray([1,2,3,4]));



var years= [1950,1989,1970,1956,2000];
var ages =[];
for(var i=0,yearslen=years.length;i<yearslen;i++){
    ages[i]= 2019-years[i];
    console.log(ages[i]);
}





function average(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}

var numbers=[58,11,87,57,45];
console.log(average(...numbers));



function sayHello() {
    for(var i = 0;i<5;i++){
        console.log(i);
    }
}
sayHello();


const person={
    name:"Mosh",
    walk() {},
    talk(){}
    };

    console.log(person.talk());

    const square =number=>number*number;
    console.log(square(2));




    const jobs = [
        {id:1,isActive:true},
        {id:2,isActive:true},
        {id:3,isActive:false}
    ];

    const activeJobs = jobs.filter(function(job) {
        return jobs.isActive = false;
    })
    console.log(activeJobs);


    const person1 ={
        talk(){
            setTimeout(()=> {
                console.log('this',this);     
            },1000);
           
        }
    };

    person1.talk();


    const colors = ['red','green','blue'];
   const items = colors.map(function(color) {
        return `<li>${color}</li>`;
    })
    console.log(items);




    const address ={
        street: '123 st main',
        city: 'Jos',
        country: 'Nigeria'
    }
    //const {street,city,country} = address;
    const {street:st} = address;
    console.log(st);



    //Map
    var nums = [1,2,3,4,5,6,7];
    var multiply = nums.map(function(num) {
        return num*10;
    });
    console.log(multiply);



    //Filter
    var num1 = [100,2003,10,203,333,12];
    var test = num1.filter(function(numx) {
        return numx>100;
    })
    console.log(test);


    //Reduce
    var sum =[0,1,2,3,4];
    var reduce = sum.reduce(function(prevVal,currentVal,index,array) {
        return prevVal +currentVal;
    },1);
    console.log(reduce);



    function Matrix(rows,columns) {
        var jaggedarray = new Array(rows);;
        for(var i =0;i<columns;i++){
            jaggedarray[i]= new Array(rows);
        }
        return jaggedarray;
    }
    console.log(Matrix(3,3));


    var M = [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20]
    ];


    function spiralPrint(M) {
        var topRow = 0,
        leftCol = 0,
        btmRow =M.length - 1,
        rightCol = M[0].length -1;

        while (topRow < btmRow && leftCol<rightCol) {
            for(var col = 0;col<rightCol;col++){
                console.log(M[topRow][col])
            }
            topRow++;
            for(var row = topRow;row<=btmRow;row++){
                console.log(M[row][rightCol])
            }
            rightCol--;
            if(topRow<= btmRow){
                for(var col= rightCol;col>=0;col--){
                    console.log(M[btmRow][col]);
                }
                btmRow--;
            }
            if(leftCol <= rightCol){
                for(var row = btmRow;row >topRow;row--){
                    console.log(M[row][leftCol]);
                }
                leftCol++;
            }
        }
    }
console.log(spiralPrint(M));


        //TIC-TAC-TOE CHECK

        function checkRow(rowArr,letter) {
            for(var i= 0;i<3;i++){
                if (rowArr[i]!=letter) {
                    return false;
                }
            }
            return true;
        }

        function checkColumn(gameBoardMatrix,columnIndex,letter) {
            for(var i =0;i<3;i++){
                if(gameBoardMatrix[i][columnIndex] !=letter){
                    return false;
                }
            }
            return true;
        }

        function ticTacToeWinner(gameBoardMatrix,letter) {
            //check rows

            var rowWin = checkRow(gameBoardMatrix[0],letter)
            || checkRow(gameBoardMatrix[1],letter)
            || checkRow(gameBoardMatrix[2],letter)

            var colWin = checkColumn(gameBoardMatrix,0,letter)
            || checkColumn(gameBoardMatrix,1,letter)
            || checkColumn(gameBoardMatrix,2,letter)

            var diagonalWinLeftToRight = (gameBoardMatrix[0][0] ==letter && gameBoardMatrix[1][1] == letter && gameBoardMatrix[2][2] ==letter);
            var diagonalWinRightToLeft = (gameBoardMatrix[0][2] ==letter && gameBoardMatrix[1][1] == letter && gameBoardMatrix[2][0] ==letter);

            return rowWin||colWin ||diagonalWinLeftToRight||diagonalWinRightToLeft;
        }

        var board = [[' O','X','-'],['-','X','O'],['O','X','-']];
        console.log(ticTacToeWinner(board,'X'));




        var matrix = [[1,0,1],[0,0,1],[1,1,1]];

        function rotateMatrix90Left(mat) {
            var N = mat.length;
            for(var x = 0;x<N/2;x++){
                for(var y=x;y<N-x-1;y++){
                    var temp = mat[x][y];

                    mat[x][y]= mat[y][N-1-x];

                    mat[y][N-1-x] = mat[N-1-x][N-1-y];

                    mat[N-1-x][N-1-y] = mat[N-1-y][x];

                    mat[N-1-y][x] =temp;


                }
            }
        }

    rotateMatrix90Left(matrix);
    console.log(matrix);

    function ExampleClass() {
        this.name ="My name";

        this.sayName =function() {
            console.log(this.name);
        }
    }

    var example1 = new ExampleClass('Peter');
    example1.sayName();

    console.log(example1);

    // function exampleclass() {
    //     this.array = [1,2,3,4,5];
    //     this.name = 'JavaScript';
    // }

    // var example2 = new exampleclass2();

    // exampleclass2.prototype.sayName = function() {

    //     console.log(this.name);
    // }

    // example2.sayName();


    function ExampleClass2(name,size) {
        this.name=name;
        this.size=size;
    }
     var example2 = new ExampleClass2('Public',5);
     console.log(example2.name);


     function ExampleClass3(name,size) {

        var privateName = name;
        var privateSize = size;

        this.getName = function() {return privateName;}
        this.setName = function(name) {privateName = name;}

        this.getSize = function() {return privateSize;}
        this.setSize = function(size) {return privateSize =size;}
        }
        var example3 = new ExampleClass3('Sammie',3);
        example3.setSize(12);

        console.log(example3.getSize());
         
     
        var emptyJSObj = {};
        emptyJSObj.examplekey = 'example value';
        console.log(emptyJSObj);


        function Animal(name,animalType) {
            this.name = name;
            this.animalType= animalType;

            Animal.prototype.sayName= function() {
                console.log(this.name);
            Animal.prototype.sayanimalType=function() {
                console.log(this.animalType);
            }
            }
        }

        function Dog(name) {
            Animal.call(this,name,'Dog');
        }
        Dog.prototype =Object.create(Animal.prototype);
        var myAnimal = new Animal('ditto','pokemon');
        myAnimal.sayName();
        myAnimal.sayanimalType();

        // var foo ={
        //     bar1:memory(),
        //     bar2:memory()
        // }
        // function clickEvent() {
        //     console.log(foo.bar1[0]);
        // }




        var int1 = 24;
        var int2=int1;
        int2=50;

        console.log(int1);
        console.log(int2);

        var obj1 = {};
        var obj2 = obj1;
        obj2.test = 'test';
        console.log(JSON.stringify(obj1));

        obj2.arr = [];
        var l =obj2.arr;
        l.push(1);
        console.log(l);

    //   console.log(this)


        var person9= {
            firstName: 'Akobe',
            lastName: 'Peter',
            greet: function() {
                console.log(`hi ${this.firstName}`);
            },
           
        };
        console.log(person9.greet());

        var student ={
            firstName: "John",
            lastName:"Doe"
        }
       var GreetStudent = person9.greet.bind(student);
       console.log(GreetStudent());


        var newPerson ={
            firstName: 'Jane',
            lastName: 'Doe',
            greet: () =>console.log(`hi ${this.firstName}`),
        }
        newPerson.greet();




         const arr9 = [
             'string',
             42,
             function() {
                console.log('Hello world');                 
             }
         ];
       for(let i =0;i<arr9.length;i++){console.log(arr9[i]);}

       const string = Number('String');
       console.log(typeof string);


       const o9={
           1:2,
           7:9,
       };
       console.log(o9['1']);


       //deep copy
       const number90 = [1,20,7,89,100];
       const descendnumber = number90.sort(function(a,b) {
           return a<b;
       }).reverse();
       console.log(descendnumber);



       function makeAnArray() {
           const arr11 = [];

           for(var i =0;i<5;i++){
            arr11.push(function() {
                console.log(i);
            })
            return arr11
           }
       }
       const arr11 = makeAnArray()
       arr11[0]();


       var obj3 ={};
       var obj4 = obj3;
       obj4.test = 'test';
       console.log(JSON.stringify(obj3));
   


       var person122 ={
           firstName: 'Akobe',
           lastName : 'Peter',
           greet:function() {
               console.log(`Hi ${this.firstName}`);
           }
       };

       var student={
           firstName: 'Samuel',
           lastName: 'Peter',
       }
       student.greet =person122.greet;
      // console.log(student.greet());

      //using any of this three methods bind(),call() & apply();

       var greetstudent =person122.greet.bind(student);
      greetstudent();


const hello = ()=>console.log('Hello World');
hello();

var nuim = [1,2,3,4,5];
var total = nuim.map(function(nui) {
    return nui*6;
});
console.log(total);
console.log(nuim);

var c = [0,1,2,3];
var addOne = c.map(function(cc) {
    return cc+ 1;
});
console.log(addOne);



function printOne() {
    console.log(1);
}


function printTwo() {
    console.log(2);
}

function printThree() {
    console.log(3);
}

setTimeout(printOne,1000);
setTimeout(printTwo,0);
printThree();

function getUserFromDatabase(callback) {
    setTimeout(()=>callback({firstName: 'Jordan',lastName:'Hayashi'}),1000);
}
function greetUsers() {
  getUserFromDatabase(function (userObject) {
      console.log('Hi '+ userObject.firstName);
  });
}
greetUsers();

// getUsers(1);
    
//   functionName({firstName: 'Jordan'}); 

function hang(seconds){
    var now = new Date().getTime();
    while (new Date().getTime()< now +(seconds +1000)) {
        console.log('It time to start coding');
    }
}

//hang(10);




function makeHelloMessage() {
    var message = ' Hello world';

    function logMessage() {
        console.log(message);

        return logMessage;
    }
}

 var Howfar = makeHelloMessage()

//  Howfar();



function makeFunctionArray() {
    var arr = [];
    for(var i =0;i<5;i++){
    arr.push(
        (function() {
        console.log(i);
    })(1)
);
}
return arr;
}

var functions = makeFunctionArray();
//functions[0](); 


(function(){
    console.log('Hi');
})();



function hellos (){
    return 'Hello World';
}
 console.log(hellos());



 function greet(whattosay) {
     
    return function us(message) {
        console.log(whattosay + ' ' + message);
    }
 }

 greet('Hi')('Doe');



 function makeGreeting(language) {
     
    return function(firstName,lastName) {
        
        if(language === 'en'){
            console.log(`Hello my names are ${firstName} ${lastName}`)
        }

        
        if(language === 'es'){
            console.log(`Hallo my names are ${firstName} ${lastName}`)
        }
    }
 }
 makeGreeting('en')('John','Paul');



 console.log(['1','7','11'].map(parseInt));

 function countDown(n) {
     if (n<=0) {
         return 1;
     }else{
      console.log(n);
         return  countDown(n-1);
     }
     
 }
 countDown(12);


 function factorialNum(num) {
     
    if (num<=0) {
        return 1;
    }else{
        
        return (num * factorialNum(num-1));
    }
 }

 console.log(factorialNum(5));


 function getNthFibo(n) {
     
    if (n<=1) return n;
       

        var sum =0,
         last = 1,
        lastLast =0;
    

    for(var i=1;i<n;i++){
        sum = lastLast + last;
        lastLast= last;
        last = sum;
    }
     return sum;
  }
  getNthFibo(3);




function getNthFibo(n) {
    if(n<=1){
        return n;
    }else{
        return getNthFibo(n-1) + getNthFibo(n-2);
    }

}

getNthFibo(6);