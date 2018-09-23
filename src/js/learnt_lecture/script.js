console.log('hello world !')

// Lecturr: variable
/*
var name = 'Sachin'
console.log(name)

var lastName = 'Chahal'
console.log(name +' : '+ lastName)

var age = 26;
console.log(age)

var fullAge = true
console.log(fullAge)

console.log(salary);

var salary
console.log(salary); 
*/

// Lecture : variable 2
/*
var name = 'jonh'
var age=26
console.log(name + age)
console.log(age + age + name + age)

var job, isMarried;

console.log(job)

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old '+ job + '. Is he married? '+isMarried +'.')

age= 'thirty six'
job = 'driver'
name = 'Johny'

console.log(name + ' is a ' + age + ' years old '+ job + '. Is he married? '+isMarried +'.')

// if we want to read the data from console.
var lastName = prompt('What is the last name?')

console.log(lastName)

alert(name + ' is a ' + age + ' years old '+ job + '. Is he married? '+isMarried +'.')
*/

//Lecture : operators
/*
var birthYear = 2018 - 26;

var birthYear = 2018 - 26 * 2; //2018-52 depends on the precedence of the operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log(birthYear)

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++

ageMark *=2
console.log(ageJohn)
console.log(ageMark)
*/


//Lecture: if/else statement
/*
var name = 'john'
var age = 26
isMarried = 'yes'


if (isMarried === 'No') {
    console.log(name + ' is not married, will hopefully marry soon :)')
} else{
    console.log(name + ' is married happily')
}

*/

//Lecture : boolean logic and switch
/*
var age = 20;
if (age < 20) {
    console.log('John is a teenager')
} else if (age >= 20 && age < 30) {
    console.log("john is a young man")
} else {
    console.log('john is a man.')
}

var job = 'teacher'
job = prompt('what does john do??')
switch (job) {
    case 'teacher':
        console.log('john teached kids');
        break;
    case 'driver':
        console.log('john drives a car in boston')
        break;
    case 'cop':
        console.log('john helps fighting the crime.')
        break;
    default:
        console.log('john does something else');

}
*/

//Lecture : coding challenge 1
/*
var height_1, height_2;
var age_1, age_2;

height_1 = prompt('Enter the height of first friend')
age_1 = prompt('Enter the age of first friend..?')

height_2 = prompt('Enter the height of second friend')
age_2 = prompt('Enter the age of second friend..?')

height_3 = prompt('Enter the height of second friend')
age_3 = prompt('Enter the age of second friend..?')

var score_3 = Number(height_3) + (age_3 * 5)
var score_1 = Number(height_1) + (age_1 * 5)
var score_2 = Number(height_2) + (age_2 * 5)

console.log(score_1 + ':' + score_2 + ':' + score_3)

// when two friends are playing
var winner = 'Tie';
 if (score_1 === score_2) {
     winner = 'Tie';
    console.log("Game is Tie")
} else if (score_1 > score_2) {
    winner = 'Friend 1 Winner'
    console.log("Winner score is " + score_1)
} else {
    winner = 'Freind 2 Winner'
    console.log("Winner score is " + score_2)
}

 alert('Result is : ' + winner)



// when 3 friends are playing
if(score_1 === score_2 && score_2 === score_3){
    winner = 'Tie';
    console.log("Game is Tie")
}else
if (score_1 > score_2 && score_1 > score_3) {
    winner = 'Friend 1 Winner';
    console.log("Winner friend 1score is " + score_1)
}else if(score_2 > score_1 && score_2 > score_3){
    winner = 'Friend 2 Winner';
    console.log("Winner friend 2 score is " + score_2)
}else if (score_3 > score_2 && score_3 > score_1){
    winner = 'Friend 3 Winner';
    console.log("Winner friend 3 score is " + score_3)
}
*/

//Lecture : functions
/*
function calculateAge( birthYear){
    var age = 2018-birthYear;
    return age;
}

var personAge = calculateAge(1988);
//console.log(personAge);

// funciton can call another functions 
function yearUntilRetirement(name, year){
     var personAge = calculateAge(year);
    var retire = 62-personAge;
    if(retire>=0){
        console.log(name +' retries in '+ retire + ' years')
    }else{
        console.log(name + ' already retires')
    }
    
}

yearUntilRetirement('John', 1988);
yearUntilRetirement('Mery', 1948);
yearUntilRetirement('Kapil', 1998);
*/


// Lecture: statements and expressions
/*
function someFun(param){ // this is funciton statement 
    //code
}

var someFun = function(){ // this is function expression.
    //code
}

/**
 * Diff bet function statement and expression is
 * expression produces a value in outcome
 *  eg - 1. 3+4;
 *       2. var x = 3;
 * while statement just performs an action.
 *  eg. if(x==5){
 *      do something     
 * }
 */

// Lecture: Arrays
/*
   var names = ['john','Jame','Mark'];
   var years = new Array(1990, 1969, 1948);

   console.log(names[2]);
   console.log(names[3]); //undefined

   //mutation of array
   names[1] = 'Ben'
   console.log(names);
   console.log(names[1]);

   // here array can hold multiple data types.
   var john = ['john', 'Smith', 1990, 'Designer', false];

   //some function applicable to arrays...
   john.push('blue') // func that adds the element at the end of the array
   console.log(john);

   john.unshift('Mr.') // adds the element at the begning
   console.log(john);
   console.log(john.pop()) // remove the elemnet from the end and also return the removed value
   console.log(john);
   console.log(john.shift()); // remove the element from the begning and return the removed value
   console.log(john);

   john.indexOf('Smith'); // return the position of the element what be pass as the parameter.
   // most imp use case of indexOf is to find out certain element is in the array or not, if it is not there then it will return -1

   if(john.indexOf('Teacher') === -1){
       console.log("John is not a Teacher.")
   }
*/

//////////////////////////////////////////////////////////
// Lecture : Objects
/*
var john = {
    name:'John',
    lastName:'Smith',
    yearOfBirth : 1990,
    job: 'Teacher',
    isMarried:false
};

console.log(john);

// two main ways to acces the element of the object.
console.log(john.lastName); // dot . notation
console.log(john['yearOfBirth']); // square bracket way with key  passed as string.

var xyz = 'job';
console.log(john[xyz]);

// data mutation.
john.lastName = 'Miller';
john.job= 'designer';

console.log(john);

// different way of creating object

var jane = new Object();
jane.name = 'Jame'
jane.lastName = 'Smith'
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired'
jane.isMarried = true;

console.log(jane);
*/

// Lecture : Objects and methods
/*
var jane = {
    name: 'jane',
    dob: 1995
}
var mark = {
    name: 'Mark',
    dob: 1985
}
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family: [jane, mark],
    calculateAge : function(){
        return 2018 - this.yearOfBirth;
    }
};

console.log(john);
console.log(john.family)
console.log(john.calculateAge())

var age = john.calculateAge();
john.age = age;
console.log(john)

// let make it more shorter...
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family: [jane, mark],
    calculateAge : function(){
        this.age = 2018 - this.yearOfBirth;
    }
};
john.calculateAge()
console.log(john)

var mike = {
    name: 'mike',
    yearOfBirth: 1965,
    calculateAge : function(){
        this.age = 2018 - this.yearOfBirth;
    }
};
mike.calculateAge()
console.log(mike)
*/


// /////////////////////////////////////////
// Lecture : Loops

//for loop
// while loop
// break; continue;


///////////////////////////////
// Lecture : Coding challenges 2 

function printArray(arr){
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
}

var birthYear = [1999, 1994, 2005, 2001, 2012, 1971 ,1962]
console.log("birthyear array")
printArray(birthYear);

var age = []

for(var i = 0; i<birthYear.length; i++){
    age[i] = 2018 - birthYear[i];
}
console.log("age array")
printArray(age)


// check for full age
for(var i = 0; i<age.length; i++){
    if(age[i] >= 18){
        console.log("full age > 18 : "+age[i]);
    }
}


var outValue = function printFullAge(birthyear){
    var fullAgeCheck = []

    for(var i = 0; i<birthYear.length; i++){
        fullAgeCheck[i] = (2018 - birthYear[i]) > 18 ? true : false
    }

    return fullAgeCheck
}

console.log(outValue(birthYear));














