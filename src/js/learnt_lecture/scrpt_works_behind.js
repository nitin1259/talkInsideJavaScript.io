console.log("in scrpt_works_behind.js")

/////////////////////////////////////////////////////////////
//Lecture : Hoisting

/*
//function hoisting

calculateAge(10)

function calculateAge(yearOfBirth){
    console.log(2018-yearOfBirth);
}

// Note : hoisting is not possible in function expression case
// eg.

// retirement(30); this will not work...
var retirement = function(age){
    console.log(60-age);
}

retirement(30);


// variable hoisting exaple


var name = "Baggins";

(function () {
    console.log("Original name was " + name); // Outputs: "Original name was undefined" because of hoisting invidual excution context

    var name = "Underhill";

    console.log("New name is " + name);// Outputs: "New name is Underhill"
})();

var name = "Baggins";

(function () {
    
    console.log("Original name was " + name); // Outputs: "Original name was Baggins"

    var name2 = "Underhill";

    console.log("New name is " + name2); // Outputs: "New name is Underhill"
})();
*/


//////////////////////////////////////////////////
//Lecture: Scoping
/*
var a ='Hi'
first()
function first(){
    var b = 'Hey'
    second()    
    function second(){
        var c = 'Hello'
        console.log(a+':'+b+':'+c)
    }

}
//example to show the differne of scope chaining is diffent from execution stack
var a ='Hi'
first()
function first(){
    var b = 'Hey'
    second()    
    function second(){
        var c = 'Hello'
        third()
    }

}

function third(){
    var d = "welcome"
    //console.log(a+b+c+d);
    console.log(a+":"+d)
}
*/

/////////////////////////////////////////////////////////////////
// Lecture : "this" keywork

console.log(this);

calculateAge(1989)

function calculateAge(yearOfBirth){
    console.log(2018 - yearOfBirth)
    console.log(this);
}


var john = {
    name: 'John',
    yearOfBirth: 1989,
    calculateAge: function(){
        console.log(this)
        console.log(2018-this.yearOfBirth)

        function innerFunc(){
            console.log(this)
        }
        innerFunc()
    }

}

john.calculateAge();


var mike ={
    name: 'Mike',
    yearOfBirth: 1984,
    profession: 'Teacher'
}


mike.calculateAge = john.calculateAge  // this is function borrowing example

mike.calculateAge();














