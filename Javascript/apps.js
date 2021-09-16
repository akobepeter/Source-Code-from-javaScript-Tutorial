// const  items =Array.from( document.querySelectorAll('[data-time'));
// const filtered = items.filter(item=>item.textContent.includes('flexbox'))
// .map(item => item.dataset.time)
// .map(timeCode =>{
//     const parts = timecode.spilt(':').map(part=>parseFloat(part));
//     return(parts[0]*60) +parts[1];
// })
// .reduce((runningTotal,seconds)=> runningTotal + seconds,0)

// console.log(filtered);

    //Arrow Function Exercise
//const numbers = [3,62,234,7,23,74,23,76,92];
//const result = numbers.filter(numbers=>numbers>70);
//console.log(result);


void function iife_void() {
    var msg = function() {console.log("Hello world");}
        msg();
    }();

    var dict = {
        HTML: 'Hyper Text Markup Language',
        CSS:'Cascading Style Sheets',
        JS: 'JavaScript'
    };
    function addAbbreviations(strings,...values){
        var abbreviated = values.map(value =>{
            if(dict[value]){
              return `<abbr title ="${dict[value]}">${value}</abbr>`  
            }
        });
        console.log(abbreviated);
    }

    var first = 'Wes';
    var last= 'Bos';
    var sentence =`my name is ${first} ${last} and i love to code with ${'HTML'},${'CSS'} and ${'JS'}`;

    var bio = document.querySelector('bio');
    var p = document.createElement('p');
    p.innerHTML = sentence;
    bio.appendChild(p);
    
   
    // Template String

//   const person = {
//       name: 'peter',
//       job:'developer',
//       city:'jos',
//       bio:'Peter is really a shy guy but loves to teach web development'
//   };

//   const markup =`
//   <div class ="person">
//   <h1>${person.name}
//   <span class="job">${person.job}</span>
//   </h1>
//   <p class="city">${person.city}</p>
//   <p class="bio">${person.bio}</p>
//   </div>   
  
//   `;
// //   document.body.innerHTML=markup;
//   document.body.innerHTML = markup;

//   const song = {
//       name: 'Dying to live',
//       artist: 'Tupac',
//       featuring:'Biggie Smalls'
//   };

//   const markup = `
//     <div class="song">
//     <p>
//     ${song.name} - ${song.artist}
//     ${song.featuring? `(featuring ${song.featuring})`:``}
//     </p>
//   </div>
//   `;
//   document.body.innerHTML = markup;

    function highlight(strings,...values){
        let str = '';
        strings.forEach((string,i) => {
            str +=`${string}<span  contenteditable  class='h1'>${values[i]||''}</span>`;
        }); 
        return str;
    }
    const name = 'Peter';
    const age = 100;
   
    //const sentence =highlight` My dog's name is ${name} and he is ${age} years old`;
   document.body.innerHTML = sentence;
    console.log(sentence);



hoist_function();
function hoist_function(){
    console.log("foo");
}



