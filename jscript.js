//Section 14: Local Storage
//#110. What is Local Storage?
//#111. Storing & Getting Data

//store data in local storage
// sessionStorage.setItem('name', 'mario');
// sessionStorage.setItem('age', 50);

 localStorage.setItem('name1', 'herbert');
 localStorage.setItem('age1', 52);

//get data from session / local storage
//session storage seems overuled when local storage declaration added  Why?
// let name= sessionStorage.getItem('name');
// let age= sessionStorage.getItem('age');

 let name1= localStorage.getItem('name1')
 let age1= localStorage.getItem('age1')

//console.log(name, age);
//console.log(name1, age1);
//document.getElementById("bob1").innerHTML= "The session storage is: " + name + " " + age;
//document.getElementById("bob2").innerHTML= "The local storage is: " + name1 + " " + age1;

//updating data
//local storage seems to retain only the updated data!
// localStorage.setItem('name1', 'Jooney');
// localStorage.age1= '21';

// name1= localStorage.getItem('name1');
// age1= localStorage.getItem('age1');

console.log(name1, age1);
document.getElementById("bob3").innerHTML= "The local storage updated is: " + name1 + " " + age1;

//deleting locally stored data #112. Deleting Storage Data
//localStorage.removeItem('name1');
localStorage.clear();

name1= localStorage.getItem('name1');
age1= localStorage.getItem('age1');
console.log(name1, age1);
document.getElementById("bob4").innerHTML= "The local storage cleared is: " + name1 + " " + age1;

//#113. Stringifying & Parsing Data