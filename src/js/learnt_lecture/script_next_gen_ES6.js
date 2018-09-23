console.log('You are in script_next_gen_ES6.js')

/*
http://es6-features.org/#Constants, https://webapplog.com/es6/

 variable declaration with let and const
 blocks and IIFEs
 Strings
 Arrow function
 Destructuring
 Arrays
 The Spread Operator
 Rest and Default Parameters
 Maps
 Classes and subClasses

 Promises
 Navite Modules..

*/


// Lecture : let and const
/* 
Notes:  var's are funcitonal scoped where as let's & const are block scoped


*/
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);
// ES6
function driversLicence6(passedTest) {
    
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);
var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
*/



//////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Blocks and IIFEs

/*
// ES6
{
    let a = 10;
    const b = 20;
    var c = 3;
}

console.log(c) // this is functional scoped
console.log(a + b); // they are block scoped not functional scoped

//ES5
(function(){
    var c =30;
})();
console.log(c);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Strings in ES6
// template literals - with back ticks  eg. -> `My name is ${this.name}. My job is ${this.job}`

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}
// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/


///////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrow functions

/*
const years = [1989, 1975, 1992, 1962];

//ES5
var ages5 = years.map(function(curr){
    return 2018 - curr;
})
console.log(ages5);

// ES6

let ages6 = years.map(curr => 2018-curr);
console.log(ages6);


ages6 = years.map((curr, index)=> `Current age at ${index} : ${2018 - curr}` );
console.log(ages6);

ages6 = years.map((curr, index) =>{
    const now = new Date();
    const year = now.getFullYear();
    return `Current age at ${index} : ${year - curr}`
})
console.log(ages6);

*/


///////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrow functions: Lexical "this" keyword

/*
//ES5:
var box5 = {
    color: 'green',
    position: 1,
    clickMe : function (){
        self= this;
        document.querySelector('.green').addEventListener('click', function(){
            console.log('coming in')
            var msg = 'Selcted box color is ' + self.color + ' and position is : ' + self.position + '.';
            alert(msg);
        });
    }
}

// box5.clickMe();

                // or
var box55 = {
    color: 'green',
    position: 1,
    clickMe : function (){
        document.querySelector('.green').addEventListener('click', function(){
            console.log('coming in')
            var msg = 'Selcted box color is ' + this.color + ' and position is : ' + this.position + '.';
            alert(msg);
        }.bind(this));
    }
}

// box55.clickMe();

// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe : function (){
        document.querySelector('.green').addEventListener('click', ()=>{
            var msg = 'Selcted box color is ' + this.color + ' and position is : ' + this.position + '.';
            alert(msg);
        });
    }
}

box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe : ()=>{
        document.querySelector('.green').addEventListener('click', ()=>{
            var msg = 'Selcted box color is ' + this.color + ' and position is : ' + this.position + '.';
            alert(msg);
        });
    }
}

// box66.clickMe(); // this will not work here bcz it it wrapper arount the global this object 

var Person = function(name){
    this.name = name;
}

// ES5
Person.prototype.friendlyFun5 = function(freinds){
    var arr = freinds.map(function(cur){
        return this.name + ' is friend with ' + cur;
    }.bind(this));
    console.log(arr);
}

var freinds = ['Sachin', 'Nakul', 'Mohit'];

new Person('Ankur').friendlyFun5(freinds);

// ES6
Person.prototype.friendlyFun6 = function (freinds){

    var arr = freinds.map(curr => {
        return `${this.name} having friendship with ${curr}`;
    })
    console.log(arr);
}

new Person('Ankur').friendlyFun6(freinds);
*/


/////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Destructuring
// Note : - Destructuring gives us the very convinent way to extract data from data structure like an object or an array.

/*
//ES5
var johnArr5 = ['John', 32, 'Teacher'];
var name5 = johnArr5[0];
var age5 = johnArr5[1];

//ES6
const [name , age, job, retirement] = johnArr5;
console.log(`${name} ${age} ${job} ${retirement}`);


obj = {
    firstName: 'Nitin',
    lastName: 'Singh',
}
let {firstName, lastName}  = obj;
console.log(firstName);
console.log(lastName);

const {firstName: fname, lastName: lname}  = obj;
console.log(fname);
console.log(lname);



let [ age1, retirement1] = (function (year){
    var age = new Date().getFullYear() - year;
    return [age, 60 - age];
})(1989);
console.log(age1);
console.log(retirement1);
*/

/////////////////////////////////////////////////////////////////////
// Lecture : arrays in ES6

/*
const boxes = document.querySelectorAll('.box');
//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//ES5
for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
    
}
//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}
//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);
//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/




////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Spread operator - it is a very convinent way to expand element of an Array in places like argument and function calls

/*
function addAges (a, b, c, d){
    return a+b+c+d;
}

var sum1 = addAges(19,28,13,46);
console.log(sum1);

var ages = [19,28,13,46];

//ES5
var sum2 = addAges.apply(null, ages);
console.log(sum2);

// ES6
var sum3 = addAges(...ages);
console.log(sum3);

// this is also use to joining arrays.

var monikaFamily = ['Rishi','kusum','baby', 'ruchi'];
var nitinFamily = ['gajju', 'poonam', 'vipin'];

var fullFamily = [...monikaFamily, ...nitinFamily];
console.log(fullFamily);

var fullFamily = [...monikaFamily, 'Nitin', 'ruby', ...nitinFamily];
console.log(fullFamily);


// play with the text element on index page.... do the text color red
var heading = document.querySelector('p');

var boxList = Array.from(document.querySelectorAll('.box'));

var itemList = [heading, ...boxList];

itemList.forEach(cur => cur.style.color='purple');
*/



////////////////////////////////////////////////////////////////////////////////////////////////
//Lecture : Rest Parameters - allow us to pass us arbitary number of arguments into a function and used this argument in that function. 
// looks similar but exactly opposite to spread operator
// identification - spread used in the function call but rest parameter uses in the funcion declaration. 

/*
//ES5
var isFullAge5 = function(){
    console.log(arguments);
    var years = Array.prototype.slice.call(arguments);

    years.forEach(function (ele) {
        console.log( (new Date().getFullYear() - ele) > 21);
    });
}

// isFullAge5(1995, 2003, 1975, 1999, 1962);

//ES6
const isFullAge6 = function(...years){
    console.log(years);
    years.forEach(ele => {
        console.log( (new Date().getFullYear() - ele) > 21);
    });
}

isFullAge6(1995, 2003, 1975, 1999, 1962);



//ES5
var isFullAge5 = function(limit){
    console.log(arguments);
    var years = Array.prototype.slice.call(arguments,1);

    years.forEach(function (ele) {
        console.log( (new Date().getFullYear() - ele) > limit);
    });
}

// isFullAge5(21, 1995, 2003, 1975, 1999, 1962);

//ES6
const isFullAge6 = function(limit, ...years){
    console.log(years);
    years.forEach(ele => {
        console.log( (new Date().getFullYear() - ele) > limit);
    });
}

isFullAge6(22, 1995, 2003, 1975, 1999, 1962);

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Default parameters


/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/




//////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Maps - The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value
/*
const question = new Map();

question.set('question', 'What is the latest version of the javascript in market ??');
question.set(1, 'ES6');
question.set(2, 'ES7');
question.set(3, 'ES8');
question.set(4, 'ES5');
question.set('answer',3);
question.set(true, 'Correct Answer :D');
question.set(false, 'Wrong Answer ! Try again...');

// console.log(question.size);
// console.log(question);
console.log(question.get('question'));
// question.set('question', 'Which one is your favrouite language ??');


if(question.has(4)){
    // console.log(`Answer contains option : ${question.get(4)}`)
    // question.delete(4);
}
// question.clear();

// question.forEach((value, key)=>console.log(`key: ${key} :: value: ${value}`);

for(let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`key: ${key} :: value: ${value}`);
    }
}

const ans = parseInt(prompt("Enter the your choice of answer ..."));

console.log(question.get(ans === question.get('answer')));

// console.log(question);
*/
////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Classes - make it easier to implement inheritence and to create objects on blueprints

/*
//ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1989, 'teacher');
// john5.calculateAge();

//ES6
class Person{
    constructor(name, yearOfBirth, job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static helperFunction(){
        console.log('in helper function: ');
    }
}

Person.helperFunction();
const mike = new Person('Mike', 1995, 'Banker');
mike.calculateAge();

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Classes and subclasses

/*
// ES5 - inheritence...
var Person5 = function (name, yearOfBirth, job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGame, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGame = olympicGame;
    this.medals=medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.averageMedals= function(){
    console.log(this.medals - this.olympicGame)
}

var johnAthelete5 = new Athlete5('John', 1988, 'swimmer', 5, 12);
// johnAthelete5.calculateAge();
// johnAthelete5.averageMedals();

// ES6 inheritence...
class Person{
    constructor(name, yearOfBirth, job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete extends Person{
    constructor(name, yearOfBirth, job, olympicGame, medals){
        super(name, yearOfBirth, job);
        this.olympicGame=olympicGame;
        this.medals=medals;
    }

    averageMedals(){
        console.log(this.medals - this.olympicGame);
    }
}

var johnAthelete = new Athlete('John', 1988, 'swimmer', 5, 12);
johnAthelete.calculateAge();
johnAthelete.averageMedals();

*/

///////////////////////////////////////////////////////////////////////////////////////////////
// Coding challenge

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/


class Element{
    constructor(name, buildYear){
        this.name=name;
        this.buildYear=buildYear;
    }
}

class Park extends Element{
    constructor(name, buildYear, area, noOfTrees){
        super(name, buildYear);
        this.noOfTrees = noOfTrees;
        this.area= area;
    }

    densityOfPark(){
        const density = this.noOfTrees/this.area;
        console.log(`Tree density of the ${this.name} is ${density}`);
    }
}


class Street extends Element{
    constructor(name, buildYear, length, size=3){
        super(name, buildYear);
        this.length=length;
        this.size=size
    }

    clasifyStreet(){
        const classification= new Map();
        classification.set(1, 'Tiny');
        classification.set(2, 'Small');
        classification.set(3, 'Normal');
        classification.set(4, 'Big');
        classification.set(5, 'Huge');

        console.log(`${this.name}, build in the year ${this.buildYear} is a ${classification.get(this.size)} street.`)
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr){
    const sum = arr.reduce((prev, curr, index)=> prev + curr, 0);
    // console.log(sum)
    return [sum, sum/arr.length]
}

function reportPark(p){
    console.log('---------------------Park Reports------------------------')
    
    // density
    p.forEach(element => {
        element.densityOfPark();
    });

    // average number of trees
    const ages = p.map(el => new Date().getFullYear() - el.buildYear )
    const [treeSum, treeAvg] = calc(ages);
    console.log(`Average Age of each Town is park is ${treeAvg}`);

    // park name having more than 1000 trees
    const i = p.map(el=>el.noOfTrees).findIndex(el => el>1000 );
    console.log(`${p[i].name} is having tree more than 1000`);

}

function reportStreet(s){
    console.log('---------------------Streets Reports------------------------')
    // find the total and avg lenth of the streets
    const [ totalLen, avgLen] = calc(s.map(el => el.length));
    console.log(`Total length is ${totalLen} and avg length is ${avgLen}`)

    // classify Length
    s.forEach(el=>el.clasifyStreet());
}


reportPark(allParks);
reportStreet(allStreets);







