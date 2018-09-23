console.log("you are in the script_advanceJS.js");

/*
Notes : 
1. Every js object has a prototype property, which make inheritance possible in js.
2. The prototype property of an object is where we put method and properties that we want other objects to inherit.
3. The constructor's prototype property is NOT the prototype of constructor itself, its the prototype of ALL instances that are
    created through it.
4. When a certain method(or property) is called, the search starts in the object itself, and if it cannot be found, the search
    moves on to the object's prototype. This continues unitl the method is found: prototype chain...

*/

/*
// Function constructor
// it is a pattern for like writing a blue print

// before : writing object like this
var old_john = {
    name: 'John',
    yearOfBirth: 1988,
    job: 'Teacher'
}

// another advance way of writing object 
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2018 - this.yearOfBirth; 
    }
}

// var john = new Person('John', 1989, 'Professor');
// console.log(john);

// console.log(john.calculateAge())


// Person.prototype.lastName = 'Smith';

// var mary = new Person('Mary', 1993, 'Techei');
// console.log(mary);
// console.log(mary.calculateAge());


Person.prototype.lname = 'Smith';

Person.prototype.fullName = function(){
    return this.name + ' ' + this.lname;
}

var john = new Person('john', 1998, 'Driver')
console.log(john)
console.log(john.fullName());


function Car(color, weight, height){
    this.color=color;
    this.weight = weight;
    this.height = height;
}


Car.prototype.runs = function(){
    console.log('Car runs on petrol');
};

var maruti = new Car('red', 150, 120);

console.log(maruti);
maruti.runs();

*/


///////////////////////////////////////
// Object.create();

/*
var personProto = {
    calculateAge: function(){
        return 2018 - this.yearOfBirth;
    }
};


var john =  Object.create(personProto);
console.log(john);

//this is not the good way to fill up the properties.
john.name = 'John';
john.yearOfBirth = '1988';
john.job = 'Engineer';

console.log(john);
console.log(john.calculateAge());

// another standared way to pass the properties.
var mary = Object.create(personProto, {
    name:{value:'Mary'},
    yearOfBirth:{value:'1976'},
    job:{value:'Designer'}
});

console.log(mary);
console.log(mary.calculateAge());


// difference between object.create and constructor function pattern is
//object.create deals in object that inherits directly from the prototype one we passed into the first argument.
// while constructor funtion - to newly created object inherits from the function constructor prototype property


// one of the biggest benifit of object.create is that it allows us to implement really complex inheritence structures in an easier
// way than function constructor becuase it allow us to directly specify which object should be a prototype.

*/


/////////////////////////////////////////////////////////////////////////
// primitives vs object
/*
//primities  - numbers , string , boolean, undefined, null only.

//variable containing primitives actually hold the data inside of the variable itself
// on object its very different variables associated with objects do not actually contain the object, but instead they contain
// REFERENCE to the place in memory where the object sits/stored.
// variable declared as a object doesnot have a real copy of Object, it is points to that object.



var a=20;
var b=a;
a=30;

console.log(a +':'+b);


var obj1 = {
    name:'Object 1',
    age: 36
}

var obj2 = obj1;

obj2.age=55;
obj1.age=43;
console.log(obj1.age +' : ' + obj2.age)

//fucntion
function changeValue(a, b){
    a = 29;
    b.age = 99;
}
console.log(a +':' +obj1.age);
changeValue(a, obj1);

console.log(a +':' +obj1.age);

*/


/////////////////////////////////////////////////////////////////////////////////
// First class function : passing function as argument.

/*
var years = [1989, 1975, 2007, 1962, 1999];

function arrayCalculation(arr, fn) {
    var retArray = [];

    for (var i = 0; i < arr.length; i++) {
        retArray.push(fn(arr[i]));
    }
    return retArray;
}

function ageCalucation(year) {
    return 2018 - year;
}

function isvalidVoter(age) {
    return age >= 18 ? true : false;
}

var ages = arrayCalculation(years, ageCalucation);

var validVoters = arrayCalculation(ages, isvalidVoter);

console.log(ages);
console.log(validVoters);


var heartBeatValue = function(age){
    if(age>25){
        return .625 * age;
    }else{
        return -1;
    }
}


var healthRates = arrayCalculation(ages, heartBeatValue);
console.log(healthRates);
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// Function returning functions

/*
var interviewQuestion = function(job){
    if(job==='teacher'){
        return function(name){
            console.log(name + ': what subject do you teach ???');
        }
    }else if(job ==='designer'){
        return function(name){
            console.log("what do know about the UX and UI .. " + name);
        }
    }else{
        return function(name){
            console.log("What is you profession Mr./Mrs - "+ name);
        }
    }
}



var ques1 = interviewQuestion('teacher');
ques1("Sachin");
var ques2 = interviewQuestion('Engineer');
ques2("Nitin")
var ques3 = interviewQuestion('designer');
ques3('Ruby')
var ques4 = interviewQuestion('teacher');
ques4('vipin')

interviewQuestion('actor')('Ruchi');

*/


//////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture IIFE

/* this is older way if we have to run some function one time or for some privacy scope
function game(){
    var score  = Math.random()*10;
    console.log(score > 5);
}

game();
*/

/*
(function (){
    var score  = Math.random()*10;
    console.log(score > 5);
})();

// if we want to pass the argument to the iife function.
(function (luckyNumber){
    var score  = Math.random()*10;
    console.log(score > 5-luckyNumber);
})(3);

*/



/////////////////////////////////////////////////////////////////////////////
// Lecture: closures

// An inner function has always access to the variable and parameters of its outer function , even after outer function has returned.
// A closure is a function having access to the parent scope, even after the parent function has closed.
// A closure is the combination of a function and the lexical environment within which that function was declared.
// This environment consists of any local variables that were in-scope at the time the closure was created.
// Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.
// Consequently, you can use a closure anywhere that you might normally use an object with only a single method.
/*
function retirement (age){
    var msg = "years left for retirement";
    return function(yearOfBirth){
        var currentAge = 2018 -yearOfBirth;
        var yearLeft = age - currentAge;
        console.log(yearLeft +' ' + msg);
    }
}

var retirementInd = retirement(60);

retirementInd(1989);

var retirementUS =retirement(66);
retirementUS(1989);

// more on closures -  increase a counter privately and not with global scope;

var add = (function (){
    var counter=0;
    return function(){
        counter +=1;
        return counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

*/
// more on closures..... improvising interview questions
/*
function interviewQuestion(job){

    return function(name){
        if(job === 'teacher'){
            console.log('Hi '+ name + ' what subject do you teach ???')
        }else if(job ==='designer'){
            console.log('Hi '+ name + ' what do you know about the UX and UI ??????')
        }else if(job==='engineer'){
            console.log('Hi '+ name + ' Which one is you favourite programming langauge ???????????')
        }else{
            console.log('Hi '+ name + ' what is your profession dear ... ?')
        }
    }
}


// var quesTeacher = interviewQuestion('teacher');
// quesTeacher('Baby');

// var quesEngineer = interviewQuestion('engineer');
// quesEngineer('ruby');

// var quesAny = interviewQuestion('Anynomous');
// quesAny('Sachin');


interviewQuestion('teacher')('Ruchi');
*/


// one more exaple of closure
/*
function makeCounter(){
    var privateCounter  = 0;

    function changeBy(incremnetal){
        privateCounter += incremnetal;
    }

    return {
        increment : function(){
            changeBy(1);
        },
        decrement : function(){
            changeBy(-1);
        },
        value: function(){
            return privateCounter;
        }
    }

}

var counter = makeCounter();

counter.increment();
counter.increment();
console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
*/

/////////////////////////////////////////////////////////////////////
// Lecture: Bind, call and apply

// in a nutshell, these method allows us to call a function and set the this varaible manually.
// the call method allow us to set the this variable 

/*

var john = {
    name:'John',
    age: 26,
    job: 'teacher',
    presentation: function(behaviour, time){
        if(behaviour==='formal'){
            console.log('Hey! '+ time + ' this is '+ this.name +
            ' I am '+ this.age+' old. And I am a '+ this.job );
        }else{
            console.log('Hey! '+ time + ' this is '+ this.name +
            ' I am so funky... Age doesnt matter here.' );
        }
    }
}


john.presentation('formal', 'good morning');



var emily = {
    name:'Emily',
    age: 32,
    job: 'proffessor'
}

// this is function boworrowing and call method which is use to set this manually.
john.presentation.call(emily, 'casual', 'afternoon')


// there is similar method call apply method .... 
// the only difference is this one accept the argument as an array .... first is this argument and an array

john.presentation.apply(emily, ['formal', 'afternoon']);

// bind mehtod - it is very similar to call method. its also allow us to set this variable explicitly
// diff is bind doesnt immediately call the function but instead it generate the copy of the function. so that we can store it somewhere.
// this is extreamly used full to create function with pre-set arguments.

var johnFriendly = john.presentation.bind(john);
johnFriendly('formal', 'good night')


var johnFriendly2 = john.presentation.bind(john,'friendly');
johnFriendly2('good night');
johnFriendly2('after noon');
johnFriendly2('moring');


var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal("good afternoon");

// apply bind in out already did examples... passing function as argument.

var years = [1988,1999, 2006, 1985, 1972];

// var calcArr = fucntion(arr, fn){
//     var retArray = [];
//     for(var i = 0; arr.length; i++){
//         retArray.push(fn(arr[i]));
//     }
// };
console.log(years)
function arrayCalculation(arr, fn) {
    var retArray = [];

    for (var i = 0; i < arr.length; i++) {
        retArray.push(fn(arr[i]));
    }
    return retArray;
}

var calAge = function (year){
    return 2018-year;
}


var ages = arrayCalculation(years, calAge)
console.log(ages)


var isvalidVoter = function(limit, year){
    return year >=limit;
}

var checkValid = isvalidVoter.bind(this, 18);
// var isValid = arrayCalculation(ages, isvalidVoter.bind(this, 20));
var isValid = arrayCalculation(ages, checkValid);
console.log(isValid);

*/




/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
// code without copy

var Question = function(question, validAnswers, correctAnswer){
    this.question = question;
    this.validAnswers = validAnswers;
    this.correctAnswer = correctAnswer;
}


var ques1 = new Question('What is your favourite language ?', ['java','javascript'], 1);
var ques2 = new Question('What is your favourite IDE ?', ['VS Code','Sublime', 'eclipse'], 0);
var ques3 = new Question('What is name of the tutor of javascript ?', ['Nitn','Sachin', 'Jonas'], 2);
//console.log(ques1);


var quesArray = [ques1, ques2, ques3];

var randomNum = Math.floor(Math.random() *2) + 1;

var retQuest = showRandomQuestion(quesArray, randomNum);

var enterAnswer = prompt("Please type your answer here !!!");
if(enterAnswer && enterAnswer != null){
    if(checkCorrectAnswer(retQuest, enterAnswer)){
        console.log('Correct Answer ...!!!');
    }else{
        console.log('Wrong Answer... Correct is  '+ retQuest.correctAnswer);
    }
}

function showRandomQuestion(quesArray, randomNum){
    var questionObj = quesArray[randomNum];
    console.log(questionObj.question);
    // var ansArray = questionObj.validAnswers;
    for(var i = 0; i<questionObj.validAnswers.length;i++){
        console.log(i + ': '+ questionObj.validAnswers[i])
    }
    // console.log(questionObj.correctAnswer);
    return questionObj;
};

function checkCorrectAnswer(retQuest, enterAnswer){
    if(enterAnswer == retQuest.correctAnswer){
        return true;
    }else{
        return false;
    }
}
*/

/*
(function(){
    function Question(question, validAnswers, correctAnswer) {
        this.question = question;
        this.validAnswers = validAnswers;
        this.correctAnswer = correctAnswer;
    }

        Question.prototype.displayQuestion = function () {
            console.log(this.question);
            for (var i = 0; i < this.validAnswers.length; i++) {
                console.log(i + ': ' + this.validAnswers[i])
            }
        }


        Question.prototype.checkAnswer = function (ans) {
            if (ans === this.correctAnswer) {
                console.log('Correct Answer ...!!!');
            } else {
                console.log('Wrong Answer... Correct is  ' + this.correctAnswer);
            }
        }

        var q1 = new Question('Is JavaScript the coolest programming language in the world?',
            ['Yes', 'No'],
            0);
        var q2 = new Question('What is the name of this course\'s teacher?',
            ['John', 'Micheal', 'Jonas'],
            2);
        var q3 = new Question('What does best describe coding?',
            ['Boring', 'Hard', 'Fun', 'Tediuos'],
            2);

        var quesArray = [q1, q2, q3];

        var n = Math.floor(Math.random() * quesArray.length);

        quesArray[n].displayQuestion();

        var ans = prompt("Please select the correct answer ...!!!")
        quesArray[n].checkAnswer(ans);
    })();

*/



/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/




(function () {
    function Question(question, validAnswers, correctAnswer) {
        this.question = question;
        this.validAnswers = validAnswers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.validAnswers.length; i++) {
            console.log(i + ': ' + this.validAnswers[i])
        }
    }


    Question.prototype.checkAnswer = function (ans, callback) {
        var score;
        if (ans === this.correctAnswer) {
            console.log('Correct Answer ...!!!');
            score = callback(true);
        } else {
            console.log('Wrong Answer... Correct is  ' + this.correctAnswer);
            score = callback(false);
        }
        this.displayScore(score);
    }

    Question.prototype.displayScore = function(score){
        console.log("Total score count is: "+score);
        console.log("------------------------");

    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);
    var ques1 = new Question('What is your favourite language ?', ['java', 'javascript'], 1);
    var ques2 = new Question('What is your favourite IDE ?', ['VS Code', 'Sublime', 'eclipse'], 0);
    var ques3 = new Question('What is name of the tutor of javascript ?', ['Nitn', 'Sachin', 'Jonas'], 2);

    var quesArray = [q1, q2, q3, ques1, ques2, ques3];
    
    function scoreCalculation(){
        var score=0;
        return function(correct){
            if(correct){
                score++;
            }
            return score;
        }
    }
    
    var scoreCounter = scoreCalculation();
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * quesArray.length);

        quesArray[n].displayQuestion();

        var ans = prompt("Please select the correct answer ...!!!")

        if (ans !== 'exit') {
            quesArray[n].checkAnswer(parseInt(ans), scoreCounter);
            nextQuestion();

        }
    }

    nextQuestion();
})();













































