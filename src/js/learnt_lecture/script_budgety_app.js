console.log("you are in the script_budgety_app");

// var data = {"message": "Successful"};

var data = {message : {"family":"SUCCESSFUL","statusCode":202,"reasonPhrase":"Accepted"}}

///////////////////////////////////////////////////////////////////////////
// test
/* if(data && data.message && data.message.family){
    console.log('data is define')
    console.log(data.message);
}

if (data && data.message && data.message.family) {
    console.log(data.message.family)
  } else if (data && data.message) {
    console.log(data.message)
  } else if (data && data.msg) {
    console.log(data.msg)
  }
*/

//////////////////////////////////////////////////////////////////////////////////////////////
// create module architecture and provide private and public functionality with seperation of concern
/*
var budgetController = (function () {

    var val = 25;

    var add = function (x) {
        // console.log("In display");
        return val + x;
    }

    return {
        publicDisplay: function (x) {
            // console.log(add(x));
            return add(x);
        },
    }

})();

var UIController = (function () {

    // dosome codding here;

})();


var controller = (function (budgetCtrl, uiCtrl) {
    // do some codding here

    var z = budgetCtrl.publicDisplay(5);

    return {
        publicController : function(){
            console.log(z);
        }
    }
    
})(budgetController, UIController);

*/


///////////////////////////////////////////////////////////////////
// how to set up event listner for key press events
// how to use event object....

/*
// BUDGET CONTROLLER
var budgetController = (function () {


})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var ctrlAddItem = function () {
        console.log('in ctrlAddItem')
        // to do 
        // 1. get the value from the text fields
        // 2. add the item to the budget controller
        // 3. add the item to the UI.
        // 4. calculate the budget
        // 5 . display the budget on UI.
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
            ctrlAddItem();
        }
    });



})(budgetController, UIController);

// keycodes url - keycodes.atjayjo.com
*/



///////////////////////////////////////////////////////////////////////////////////////////
// get input data from the fields

/*
// BUDGET CONTROLLER
var budgetController = (function () {

})();

// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        btn: '.add__btn'
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        domStrings : function(){
            return DOMstrings;
        }
    }


})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var DOM = uiCtrl.domStrings();

    var ctrlAddItem = function () {
        console.log('in ctrlAddItem')
        // to do 
        // 1. get the value from the text fields
        var input = uiCtrl.inputParam();
        console.log(input);
        // 2. add the item to the budget controller
        // 3. add the item to the UI.
        // 4. calculate the budget
        // 5 . display the budget on UI.
    }

    document.querySelector(DOM.btn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
            ctrlAddItem();
        }
    });

})(budgetController, UIController);
*/


///////////////////////////////////////////////////////////////////////////////////////////////////
// How and why to create a initialization function.

/*
// BUDGET CONTROLLER
var budgetController = (function () {

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        btn: '.add__btn'
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        domStrings: function () {
            return DOMstrings;
        }
    }


})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {


    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();
        
        document.querySelector(DOM.btn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function () {
        console.log('in ctrlAddItem')
        // to do 
        // 1. get the value from the text fields
        var input = uiCtrl.inputParam();
        console.log(input);
        // 2. add the item to the budget controller
        // 3. add the item to the UI.
        // 4. calculate the budget
        // 5 . display the budget on UI.
    }

    return{
        initializeApp : function(){
            console.log("Initializing the budget App");
            return setUpEventListners();
        }
    }

})(budgetController, UIController);


controller.initializeApp();
*/


//////////////////////////////////////////////////////////////////////////////////////////////////
// create incom and expense function constructor.
// how to chose function constructor that meet our application need.
// how to set a proper data structure for our budget control.
/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = discription;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = discription;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        }
    };

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        btn: '.add__btn'
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        domStrings: function () {
            return DOMstrings;
        }
    }


})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {


    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.btn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function () {
        console.log('in ctrlAddItem')
        // to do 
        // 1. get the value from the text fields
        var input = uiCtrl.inputParam();
        console.log(input);
        // 2. add the item to the budget controller
        // 3. add the item to the UI.
        // 4. calculate the budget
        // 5 . display the budget on UI.
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            return setUpEventListners();
        }
    }

})(budgetController, UIController);


controller.initializeApp();
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
// add a new item to our budget controller 
// how to avoid conflit in our data structure
// how and why to pass out data from one to another controller.

/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        }
    };

    return {
        addItem : function(type, desc, val){
            var newItem, ID;


            // generating the ID.
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            }else{
                ID = 0;
            }
            
            // creating the new item
            if(type ==='exp'){
                newItem = new Expense(ID, desc, val);
            }else{
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },

        testingDisplay: function(){
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        btn: '.add__btn'
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        domStrings: function () {
            return DOMstrings;
        }
    }


})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {


    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.btn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function () {
        var input, addInput;

        
        // 1. get the value from the text fields
        input = uiCtrl.inputParam();
        
        // 2. add the item to the budget controller
        addInput = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testingDisplay();

        // 3. add the item to the UI.
        // 4. calculate the budget
        // 5 . display the budget on UI.
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            return setUpEventListners();
        }
    }

})(budgetController, UIController);


controller.initializeApp();
*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Adding a new item to UI
// technique for adding big chucks of HTML into DOM
// How to replace part of string.
// how to do DOM manupulation using the insertAdjectHTML method.

/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        }
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;


            // generating the ID.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // creating the new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },

        testingDisplay: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list'
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        domStrings: function () {
            return DOMstrings;
        },
        displayItem: function (obj, type) {
            var html, newHtml, element;
            // Create the HTML string with the palceholder text
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            }else{
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__percentage">21%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'

            }
            // replace the place holders with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            console.log(newHtml);
        
            // insert the html into DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   - this is for reference

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        
        }
    }

    

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {


    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function () {
        var input, addInput;


        // 1. get the value from the text fields
        input = uiCtrl.inputParam();

        // 2. add the item to the budget controller
        addInput = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testingDisplay();

        // 3. add the item to the UI.
        uiCtrl.displayItem(addInput, input.type);

        // 4. calculate the budget
        // 5 . display the budget on UI.
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            return setUpEventListners();
        }
    }

})(budgetController, UIController);


controller.initializeApp();
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// clearing our input fields
// how to clear html fields
// how to use querySelectorAll
// how to convert list into an array
// better way to loop over on array : for each
/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        }
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;


            // generating the ID.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // creating the new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },

        testingDisplay: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list'
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        domStrings: function () {
            return DOMstrings;
        },
        displayItem: function (obj, type) {
            var html, newHtml, element;
            // Create the HTML string with the palceholder text
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            }else{
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__percentage">21%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'

            }
            // replace the place holders with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            console.log(newHtml);
        
            // insert the html into DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   - this is for reference

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields : function(){
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescritpion+','+DOMstrings.inputValue); // this one will return list for element.

            // conver the fields list into arrays
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(element => {
                element.value ="";
            });

            fieldsArr[0].focus();
        }
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function () {
        var input, addInput;


        // 1. get the value from the text fields
        input = uiCtrl.inputParam();

        // 2. add the item to the budget controller
        addInput = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testingDisplay();

        // 3. add the item to the UI.
        uiCtrl.displayItem(addInput, input.type);

        //4. clear the fields
        uiCtrl.clearFields();

        // 4. calculate the budget
        // 5 . display the budget on UI.
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            return setUpEventListners();
        }
    }

})(budgetController, UIController);
controller.initializeApp();
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Update budget : controller
// How to convert input field from string to number...
// how to prevent the false input ...
/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        }
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;


            // generating the ID.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // creating the new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },

        testingDisplay: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list'
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        domStrings: function () {
            return DOMstrings;
        },
        displayItem: function (obj, type) {
            var html, newHtml, element;
            // Create the HTML string with the palceholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            } else {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__percentage">21%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'

            }
            // replace the place holders with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the html into DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   - this is for reference

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescritpion + ',' + DOMstrings.inputValue); // this one will return list for element.

            // conver the fields list into arrays
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(element => {
                element.value = "";
            });

            fieldsArr[0].focus();
        }
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });
    }

    var updateBudget = function () {
        //1. calculate the budget

        //2. return the budget

        //3. display the budger on the UI

    }

    var ctrlAddItem = function () {
        var input, addInput;


        // 1. get the value from the text fields
        input = uiCtrl.inputParam();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to the budget controller
            addInput = budgetCtrl.addItem(input.type, input.description, input.value);
            budgetCtrl.testingDisplay();

            // 3. add the item to the UI.
            uiCtrl.displayItem(addInput, input.type);

            //4. clear the fields
            uiCtrl.clearFields();

            updateBudget();
        }
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            return setUpEventListners();
        }
    }

})(budgetController, UIController);
controller.initializeApp();
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Updating the Budget: budget Controller
    // How and why to write simple, reusable with only one purpose
    // how to sum all element of an array using for each method.
// Updating the budget : UI controller... 
    // Practice DOM manipulation by updating the budget and total values

/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotals = function (type) {
        var sum = 0;
        data.allItems[type].forEach(element => {
            sum += element.value;
        });
        return sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1,
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;


            // generating the ID.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // creating the new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },
        calculateBudget: function () {
            var totalIncome, totalExpenses,
                //1. calculate the expense and income
                totalIncome = calculateTotals('inc');
            totalExpenses = calculateTotals('exp');

            // 2. update the totals and budgets in data structure
            data.totals.exp = totalExpenses;
            data.totals.inc = totalIncome;
            data.budget = totalIncome - totalExpenses;

            //3. calulate the percentages
            if (totalIncome > 0) {
                data.percentage = Math.round((totalExpenses / totalIncome) * 100);
            } else {
                data.percentage = -1;
            }

        },
        getBudget: function () {
            return {
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                budget: data.budget,
                percentage: data.percentage,
            }
        },
        testingDisplay: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list',
        totalBudget: '.budget__value',
        incomeBudget: '.budget__income--value',
        expenseBudget: '.budget__expenses--value',
        percentageBudget: '.budget__expenses--percentage',
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        domStrings: function () {
            return DOMstrings;
        },
        displayItem: function (obj, type) {
            var html, newHtml, element;
            // Create the HTML string with the palceholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            } else {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__percentage">21%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            }
            // replace the place holders with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the html into DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   - this is for reference

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        displayBudget: function (obj) {
            document.querySelector(DOMstrings.totalBudget).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeBudget).textContent = obj.totalIncome;
            document.querySelector(DOMstrings.expenseBudget).textContent = obj.totalExpenses;
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageBudget).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageBudget).textContent = '---';
            }

        },

        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescritpion + ',' + DOMstrings.inputValue); // this one will return list for element.

            // conver the fields list into arrays
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(element => {
                element.value = "";
            });

            fieldsArr[0].focus();
        }
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });
    }

    var updateBudget = function () {
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budgetObj = budgetCtrl.getBudget();

        //3. display the budger on the UI
        uiCtrl.displayBudget(budgetObj);

    }

    var ctrlAddItem = function () {
        var input, addInput;


        // 1. get the value from the text fields
        input = uiCtrl.inputParam();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to the budget controller
            addInput = budgetCtrl.addItem(input.type, input.description, input.value);
            // budgetCtrl.testingDisplay();  // this is only for testing purpose

            // 3. add the item to the UI.
            uiCtrl.displayItem(addInput, input.type);

            //4. clear the fields
            uiCtrl.clearFields();

            updateBudget();
        }
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            uiCtrl.displayBudget(
                {
                    totalIncome: 0,
                    totalExpenses: 0,
                    budget: 0,
                    percentage: -1,
                }
            )
            return setUpEventListners();
        }
    }

})(budgetController, UIController);
controller.initializeApp();
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Project planning and Architecture... 
// to do list
// 1. delete functionality- 
    //add event handler for delete
    // delete the item form our data structure 
    // delete the item to the UI
    // Recalculate the budget
    // update the UI. 


/* event delegation - 
     event-bubbling - means when an event is fired or triggered on some DOM element eg. on clicking of button then the 
     exact same event is also triggred on all of the parent elements. Again the event is first fired on the button 
     and then it also be fired on all the parent element  

     --use case of event delegation 
        1. when we have an element with lots of child element that we are interested in ...  
            in this case instead of adding an event handler to all of these child elements we simply 
            add to the parent element and then determine on which child element event was fired. 
        2. When we want an event handler attached to an element that is not yet in the DOM when our page is loaded.
*/


/* Learnings 
    1. How to use event delegation in practice...
    2. how to use IDS in html to connect the UI with the data model.
    3. how to use the parent node property for DOM travering.

    
*/

/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotals = function (type) {
        var sum = 0;
        data.allItems[type].forEach(element => {
            sum += element.value;
        });
        return sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1,
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;


            // generating the ID.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // creating the new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },
        calculateBudget: function () {
            var totalIncome, totalExpenses,
            //1. calculate the expense and income
            totalIncome = calculateTotals('inc');
            totalExpenses = calculateTotals('exp');

            // 2. update the totals and budgets in data structure
            data.totals.exp = totalExpenses;
            data.totals.inc = totalIncome;
            data.budget = totalIncome - totalExpenses;

            //3. calulate the percentages
            if (totalIncome > 0) {
                data.percentage = Math.round((totalExpenses / totalIncome) * 100);
            } else {
                data.percentage = -1;
            }

        },
        getBudget: function () {
            return {
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                budget: data.budget,
                percentage: data.percentage,
            }
        },
        testingDisplay: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list',
        totalBudget: '.budget__value',
        incomeBudget: '.budget__income--value',
        expenseBudget: '.budget__expenses--value',
        percentageBudget: '.budget__expenses--percentage',
        container: '.container',
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        domStrings: function () {
            return DOMstrings;
        },
        displayItem: function (obj, type) {
            var html, newHtml, element;
            // Create the HTML string with the palceholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            } else {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="exp-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__percentage">21%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            }
            // replace the place holders with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the html into DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   - this is for reference

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        displayBudget: function (obj) {
            document.querySelector(DOMstrings.totalBudget).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeBudget).textContent = obj.totalIncome;
            document.querySelector(DOMstrings.expenseBudget).textContent = obj.totalExpenses;
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageBudget).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageBudget).textContent = '---';
            }

        },

        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescritpion + ',' + DOMstrings.inputValue); // this one will return list for element.

            // conver the fields list into arrays
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(element => {
                element.value = "";
            });

            fieldsArr[0].focus();
        }
    }

})();


// APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }

    var updateBudget = function () {
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budgetObj = budgetCtrl.getBudget();

        //3. display the budger on the UI
        uiCtrl.displayBudget(budgetObj);

    }

    var ctrlAddItem = function () {
        var input, addInput;


        // 1. get the value from the text fields
        input = uiCtrl.inputParam();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to the budget controller
            addInput = budgetCtrl.addItem(input.type, input.description, input.value);
            // budgetCtrl.testingDisplay();  // this is only for testing purpose

            // 3. add the item to the UI.
            uiCtrl.displayItem(addInput, input.type);

            //4. clear the fields
            uiCtrl.clearFields();

            updateBudget();
        }
    }

    var ctrlDeleteItem = function (event){
        var itemID, splitID, type, id;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if(itemID){

            splitID = itemID.split('-');
            console.log(splitID);
            type = splitID[0];
            id = splitID[1];

            // 1. delete the item from the data structure
            budgetCtrl.deleteItemFromBudget();

            // 2. delete the item from the UI 

            // 3. recalculate the budget & show to UI

        }
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            uiCtrl.displayBudget(
                {
                    totalIncome: 0,
                    totalExpenses: 0,
                    budget: 0,
                    percentage: -1,
                }
            )
            return setUpEventListners();
        }
    }

})(budgetController, UIController);
controller.initializeApp();

*/

//////////////////////////////////////////////////////////////////////////
// 1. another method to loop over an array....
// 2. remove element from an array using splice method.

/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotals = function (type) {
        var sum = 0;
        data.allItems[type].forEach(element => {
            sum += element.value;
        });
        return sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1,
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;


            // generating the ID.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // creating the new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },
        deleteItem: function(type, id){
            var ids, indexOfDeleteItem;
            // id = 6
            // data.allItems[type][id]; -- this we cannot done as id can't be match with index
            // eg  ids = [1 2 4 6 8]
            // we need to find out the index first and then delete the item from the array.

            // first way to do 

            ids = data.allItems[type].map(function(current){
                return current.id;
            })

            indexOfDeleteItem = ids.indexOf(id);

            if(indexOfDeleteItem !== -1){
                data.allItems[type].splice(indexOfDeleteItem,1);
            }


        },
        calculateBudget: function () {
            var totalIncome, totalExpenses,
            //1. calculate the expense and income
            totalIncome = calculateTotals('inc');
            totalExpenses = calculateTotals('exp');

            // 2. update the totals and budgets in data structure
            data.totals.exp = totalExpenses;
            data.totals.inc = totalIncome;
            data.budget = totalIncome - totalExpenses;

            //3. calulate the percentages
            if (totalIncome > 0) {
                data.percentage = Math.round((totalExpenses / totalIncome) * 100);
            } else {
                data.percentage = -1;
            }

        },
        getBudget: function () {
            return {
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                budget: data.budget,
                percentage: data.percentage,
            }
        },
        testingDisplay: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list',
        totalBudget: '.budget__value',
        incomeBudget: '.budget__income--value',
        expenseBudget: '.budget__expenses--value',
        percentageBudget: '.budget__expenses--percentage',
        container: '.container',
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        domStrings: function () {
            return DOMstrings;
        },
        displayItem: function (obj, type) {
            var html, newHtml, element;
            // Create the HTML string with the palceholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            } else {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="exp-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__percentage">21%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            }
            // replace the place holders with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the html into DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   - this is for reference

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        displayBudget: function (obj) {
            document.querySelector(DOMstrings.totalBudget).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeBudget).textContent = obj.totalIncome;
            document.querySelector(DOMstrings.expenseBudget).textContent = obj.totalExpenses;
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageBudget).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageBudget).textContent = '---';
            }

        },

        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescritpion + ',' + DOMstrings.inputValue); // this one will return list for element.

            // conver the fields list into arrays
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(element => {
                element.value = "";
            });

            fieldsArr[0].focus();
        }
    }

})();


// APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }

    var updateBudget = function () {
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budgetObj = budgetCtrl.getBudget();

        //3. display the budger on the UI
        uiCtrl.displayBudget(budgetObj);

    }

    var ctrlAddItem = function () {
        var input, addInput;


        // 1. get the value from the text fields
        input = uiCtrl.inputParam();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to the budget controller
            addInput = budgetCtrl.addItem(input.type, input.description, input.value);
            // budgetCtrl.testingDisplay();  // this is only for testing purpose

            // 3. add the item to the UI.
            uiCtrl.displayItem(addInput, input.type);

            //4. clear the fields
            uiCtrl.clearFields();

            updateBudget();
        }
    }

    var ctrlDeleteItem = function (event){
        var itemID, splitID, type, id;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if(itemID){

            splitID = itemID.split('-');
            //  console.log(splitID);
            type = splitID[0];
            id = parseInt(splitID[1]);

            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, id);

            // 2. delete the item from the UI 

            // 3. recalculate the budget & show to UI

        }
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            uiCtrl.displayBudget(
                {
                    totalIncome: 0,
                    totalExpenses: 0,
                    budget: 0,
                    percentage: -1,
                }
            )
            return setUpEventListners();
        }
    }

})(budgetController, UIController);
controller.initializeApp();
*/


////////////////////////////////////////////////////////////////////////////////
// delete item from the UI.
// https://blog.garstasio.com/you-dont-need-jquery/dom-manipulation/
// More DOM manupulation - how to remove an element from DOM
/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotals = function (type) {
        var sum = 0;
        data.allItems[type].forEach(element => {
            sum += element.value;
        });
        return sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1,
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;


            // generating the ID.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // creating the new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },
        deleteItem: function(type, id){
            var ids, indexOfDeleteItem;
            // id = 6
            // data.allItems[type][id]; -- this we cannot done as id can't be match with index
            // eg  ids = [1 2 4 6 8]
            // we need to find out the index first and then delete the item from the array.

            // first way to do 

            ids = data.allItems[type].map(function(current){
                return current.id;
            })

            indexOfDeleteItem = ids.indexOf(id);

            if(indexOfDeleteItem !== -1){
                data.allItems[type].splice(indexOfDeleteItem,1);
            }


        },
        calculateBudget: function () {
            var totalIncome, totalExpenses,
            //1. calculate the expense and income
            totalIncome = calculateTotals('inc');
            totalExpenses = calculateTotals('exp');

            // 2. update the totals and budgets in data structure
            data.totals.exp = totalExpenses;
            data.totals.inc = totalIncome;
            data.budget = totalIncome - totalExpenses;

            //3. calulate the percentages
            if (totalIncome > 0) {
                data.percentage = Math.round((totalExpenses / totalIncome) * 100);
            } else {
                data.percentage = -1;
            }

        },
        getBudget: function () {
            return {
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                budget: data.budget,
                percentage: data.percentage,
            }
        },
        testingDisplay: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list',
        totalBudget: '.budget__value',
        incomeBudget: '.budget__income--value',
        expenseBudget: '.budget__expenses--value',
        percentageBudget: '.budget__expenses--percentage',
        container: '.container',
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        domStrings: function () {
            return DOMstrings;
        },
        displayItem: function (obj, type) {
            var html, newHtml, element;
            // Create the HTML string with the palceholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            } else {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="exp-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__percentage">21%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            }
            // replace the place holders with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the html into DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   - this is for reference

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        displayBudget: function (obj) {
            document.querySelector(DOMstrings.totalBudget).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeBudget).textContent = obj.totalIncome;
            document.querySelector(DOMstrings.expenseBudget).textContent = obj.totalExpenses;
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageBudget).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageBudget).textContent = '---';
            }

        },

        deleteItemList: function(deleteItemList){

            var ele = document.getElementById(deleteItemList);
            ele.parentNode.removeChild(ele);
        },

        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescritpion + ',' + DOMstrings.inputValue); // this one will return list for element.

            // conver the fields list into arrays
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(element => {
                element.value = "";
            });

            fieldsArr[0].focus();
        }
    }

})();


// APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }

    var updateBudget = function () {
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budgetObj = budgetCtrl.getBudget();

        //3. display the budger on the UI
        uiCtrl.displayBudget(budgetObj);

    }

    var ctrlAddItem = function () {
        var input, addInput;


        // 1. get the value from the text fields
        input = uiCtrl.inputParam();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to the budget controller
            addInput = budgetCtrl.addItem(input.type, input.description, input.value);
            // budgetCtrl.testingDisplay();  // this is only for testing purpose

            // 3. add the item to the UI.
            uiCtrl.displayItem(addInput, input.type);

            //4. clear the fields
            uiCtrl.clearFields();

            updateBudget();
        }
    }

    var ctrlDeleteItem = function (event){
        var itemID, splitID, type, id;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if(itemID){

            splitID = itemID.split('-');
            //  console.log(splitID);
            type = splitID[0];
            id = parseInt(splitID[1]);

            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, id);

            // 2. delete the item from the UI 
            uiCtrl.deleteItemList(itemID);
            // 3. recalculate the budget & show to UI
            updateBudget();

        }
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            uiCtrl.displayBudget(
                {
                    totalIncome: 0,
                    totalExpenses: 0,
                    budget: 0,
                    percentage: -1,
                }
            )
            return setUpEventListners();
        }
    }

})(budgetController, UIController);
controller.initializeApp();
*/


// Architecture part - 3
/*
    to do list
    1. calculate percentages...
    2. update them in user interface.
    3. display current month and year 
    4. number formatting 
    5. improve  input fields ux
*/
//////////////////////////////////////////////////////////////////////////////////

/*
// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentages = function(totalIncome){
        if(totalIncome> 0){
            this.percentage = Math.round((this.value/totalIncome) * 100)
        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotals = function (type) {
        var sum = 0;
        data.allItems[type].forEach(element => {
            sum += element.value;
        });
        return sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1,
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;


            // generating the ID.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // creating the new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },
        deleteItem: function(type, id){
            var ids, indexOfDeleteItem;
            // id = 6
            // data.allItems[type][id]; -- this we cannot done as id can't be match with index
            // eg  ids = [1 2 4 6 8]
            // we need to find out the index first and then delete the item from the array.

            // first way to do 

            ids = data.allItems[type].map(function(current){
                return current.id;
            })

            indexOfDeleteItem = ids.indexOf(id);

            if(indexOfDeleteItem !== -1){
                data.allItems[type].splice(indexOfDeleteItem,1);
            }


        },
        calculateBudget: function () {
            var totalIncome, totalExpenses,
            //1. calculate the expense and income
            totalIncome = calculateTotals('inc');
            totalExpenses = calculateTotals('exp');

            // 2. update the totals and budgets in data structure
            data.totals.exp = totalExpenses;
            data.totals.inc = totalIncome;
            data.budget = totalIncome - totalExpenses;

            //3. calulate the percentages
            if (totalIncome > 0) {
                data.percentage = Math.round((totalExpenses / totalIncome) * 100);
            } else {
                data.percentage = -1;
            }

        },
        updatePercentages: function(){

            var expenses = data.allItems.exp;
            expenses.forEach(current =>{
                current.calcPercentages(data.totals.inc);
            })
        },

        getPercentages: function(){
            var expenses = data.allItems.exp;
            var percentages = expenses.map(current =>{
                return current.getPercentage();
            })
            return percentages;
        },

        getBudget: function () {
            return {
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                budget: data.budget,
                percentage: data.percentage,
            }
        },
        testingDisplay: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list',
        totalBudget: '.budget__value',
        incomeBudget: '.budget__income--value',
        expenseBudget: '.budget__expenses--value',
        percentageBudget: '.budget__expenses--percentage',
        container: '.container',
        itemPercentage: '.item__percentage'
    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        domStrings: function () {
            return DOMstrings;
        },
        displayItem: function (obj, type) {
            var html, newHtml, element;
            // Create the HTML string with the palceholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            } else {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="exp-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__percentage">21%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            }
            // replace the place holders with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the html into DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   - this is for reference

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        displayBudget: function (obj) {
            document.querySelector(DOMstrings.totalBudget).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeBudget).textContent = obj.totalIncome;
            document.querySelector(DOMstrings.expenseBudget).textContent = obj.totalExpenses;
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageBudget).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageBudget).textContent = '---';
            }

        },

        deleteItemList: function(deleteItemList){

            var ele = document.getElementById(deleteItemList);
            ele.parentNode.removeChild(ele);
        },

        displayPercentages: function(percentages){

            var fields = document.querySelectorAll(DOMstrings.itemPercentage);

            var nodeListForEach = function(list, callBack){
                for(var i =0; i < list.length; i++){
                    callBack(list[i], i);
                }
            }

            nodeListForEach(fields, function(current, index){
                // do stuff
                if(percentages[index] > 0){
                    current.textContent = percentages[index]+ '%';
                }else{
                    current.textContent = '---';
                }
                
            });
        },

        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescritpion + ',' + DOMstrings.inputValue); // this one will return list for element.

            // conver the fields list into arrays
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(element => {
                element.value = "";
            });

            fieldsArr[0].focus();
        }
    }

})();


// APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }

    var updateBudget = function () {
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budgetObj = budgetCtrl.getBudget();

        //3. display the budger on the UI
        uiCtrl.displayBudget(budgetObj);

    }

    var calculatePercentages = function (){

        // 1. calculate the percentages.
        budgetCtrl.updatePercentages();

        // 2. Read percentages from budget controller.
        var percentages = budgetCtrl.getPercentages();

        // 3. updated the percentages on UI.
        console.log(percentages);
        uiCtrl.displayPercentages(percentages);

    }

    var ctrlAddItem = function () {
        var input, addInput;


        // 1. get the value from the text fields
        input = uiCtrl.inputParam();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to the budget controller
            addInput = budgetCtrl.addItem(input.type, input.description, input.value);
            // budgetCtrl.testingDisplay();  // this is only for testing purpose

            // 3. add the item to the UI.
            uiCtrl.displayItem(addInput, input.type);

            //4. clear the fields
            uiCtrl.clearFields();

            // 5. Update the budget
            updateBudget();

            // 6. update the percentages
            calculatePercentages();
        }
    }

    var ctrlDeleteItem = function (event){
        var itemID, splitID, type, id;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if(itemID){

            splitID = itemID.split('-');
            //  console.log(splitID);
            type = splitID[0];
            id = parseInt(splitID[1]);

            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, id);

            // 2. delete the item from the UI 
            uiCtrl.deleteItemList(itemID);
            // 3. recalculate the budget & show to UI
            updateBudget();

            // 4. update the percentages
            calculatePercentages();

        }
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            uiCtrl.displayBudget(
                {
                    totalIncome: 0,
                    totalExpenses: 0,
                    budget: 0,
                    percentage: -1,
                }
            )
            return setUpEventListners();
        }
    }

})(budgetController, UIController);
controller.initializeApp();

*/




////////////////////////////////////////////////////////////////
// Architecture part - 3
/*
    to do list
    3. display current month and year 
    4. number formatting 
    5. improve  input fields ux
*/

// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentages = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100)
        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotals = function (type) {
        var sum = 0;
        data.allItems[type].forEach(element => {
            sum += element.value;
        });
        return sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1,
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;


            // generating the ID.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // creating the new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            // adding the newitem to data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },
        deleteItem: function (type, id) {
            var ids, indexOfDeleteItem;
            // id = 6
            // data.allItems[type][id]; -- this we cannot done as id can't be match with index
            // eg  ids = [1 2 4 6 8]
            // we need to find out the index first and then delete the item from the array.

            // first way to do 

            ids = data.allItems[type].map(function (current) {
                return current.id;
            })

            indexOfDeleteItem = ids.indexOf(id);

            if (indexOfDeleteItem !== -1) {
                data.allItems[type].splice(indexOfDeleteItem, 1);
            }


        },
        calculateBudget: function () {
            var totalIncome, totalExpenses,
                //1. calculate the expense and income
                totalIncome = calculateTotals('inc');
            totalExpenses = calculateTotals('exp');

            // 2. update the totals and budgets in data structure
            data.totals.exp = totalExpenses;
            data.totals.inc = totalIncome;
            data.budget = totalIncome - totalExpenses;

            //3. calulate the percentages
            if (totalIncome > 0) {
                data.percentage = Math.round((totalExpenses / totalIncome) * 100);
            } else {
                data.percentage = -1;
            }

        },
        updatePercentages: function () {

            var expenses = data.allItems.exp;
            expenses.forEach(current => {
                current.calcPercentages(data.totals.inc);
            })
        },

        getPercentages: function () {
            var expenses = data.allItems.exp;
            var percentages = expenses.map(current => {
                return current.getPercentage();
            })
            return percentages;
        },

        getBudget: function () {
            return {
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                budget: data.budget,
                percentage: data.percentage,
            }
        },
        testingDisplay: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER3
var UIController = (function () {
    // dosome codding here;
    var DOMstrings = {
        inputType: '.add__type',
        inputDescritpion: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list',
        totalBudget: '.budget__value',
        incomeBudget: '.budget__income--value',
        expenseBudget: '.budget__expenses--value',
        percentageBudget: '.budget__expenses--percentage',
        container: '.container',
        itemPercentage: '.item__percentage',
        monthTitle: '.budget__title--month',
    }

    var formatNumber = function (num, type) {
        var intSplit, int, decimal;
        /*
        format number to the 2 decimal
        place the coma after 3 digits
        put a + and - sign before number based on exp or inc
        */
        num = Math.abs(num);
        num = num.toFixed(2);
        intSplit = num.split('.');

        int = intSplit[0];

        decimal = intSplit[1];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + decimal;


    }

    return {
        inputParam: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescritpion).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        domStrings: function () {
            return DOMstrings;
        },
        displayItem: function (obj, type) {
            var html, newHtml, element;
            // Create the HTML string with the palceholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            } else {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="exp-%id%">'
                    + '<div class="item__description">%description%</div>'
                    + '<div class="right clearfix">'
                    + '<div class="item__value">%value%</div>'
                    + '<div class="item__percentage">21%</div>'
                    + '<div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            }
            // replace the place holders with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // insert the html into DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   - this is for reference

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        displayBudget: function (obj) {

            var type;
            type = obj.budget >= 0 ? 'inc' : 'exp';

            document.querySelector(DOMstrings.totalBudget).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeBudget).textContent = formatNumber(obj.totalIncome, 'inc');
            document.querySelector(DOMstrings.expenseBudget).textContent = formatNumber(obj.totalExpenses, 'exp');
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageBudget).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageBudget).textContent = '---';
            }

        },

        deleteItemList: function (deleteItemList) {

            var ele = document.getElementById(deleteItemList);
            ele.parentNode.removeChild(ele);
        },

        displayPercentages: function (percentages) {

            var fields = document.querySelectorAll(DOMstrings.itemPercentage);

            var nodeListForEach = function (list, callBack) {
                for (var i = 0; i < list.length; i++) {
                    callBack(list[i], i);
                }
            }

            nodeListForEach(fields, function (current, index) {
                // do stuff
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }

            });
        },

        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescritpion + ',' + DOMstrings.inputValue); // this one will return list for element.

            // conver the fields list into arrays
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(element => {
                element.value = "";
            });

            fieldsArr[0].focus();
        },

        displayMonthYear: function(){
            var now, months, month, year;

            now  = new Date();
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            month = now.getMonth();
            var year = now.getFullYear();

            document.querySelector(DOMstrings.monthTitle).textContent = months[month] + ' ' + year;

        },

        changedType: function(){

            var fields;
            fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescritpion + ',' +
                DOMstrings.inputValue

            );

            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
            var nodeListForEach = function (list, callBack){
                for(var i = 0; list.length;i++){
                    callBack(list[i], i);
                }
            };

            nodeListForEach(fields, function(cur){
                cur.classList.toggle('red-focus');
            });

            
        }
    }

})();


// APP CONTROLLER
var controller = (function (budgetCtrl, uiCtrl) {

    var setUpEventListners = function () {
        var DOM = uiCtrl.domStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) { // event.which is support by older browser but keycode not
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', uiCtrl.changedType);
    }

    var updateBudget = function () {
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budgetObj = budgetCtrl.getBudget();

        //3. display the budger on the UI
        uiCtrl.displayBudget(budgetObj);

    }

    var calculatePercentages = function () {

        // 1. calculate the percentages.
        budgetCtrl.updatePercentages();

        // 2. Read percentages from budget controller.
        var percentages = budgetCtrl.getPercentages();

        // 3. updated the percentages on UI.
        console.log(percentages);
        uiCtrl.displayPercentages(percentages);

    }

    var ctrlAddItem = function () {
        var input, addInput;


        // 1. get the value from the text fields
        input = uiCtrl.inputParam();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to the budget controller
            addInput = budgetCtrl.addItem(input.type, input.description, input.value);
            // budgetCtrl.testingDisplay();  // this is only for testing purpose

            // 3. add the item to the UI.
            uiCtrl.displayItem(addInput, input.type);

            //4. clear the fields
            uiCtrl.clearFields();

            // 5. Update the budget
            updateBudget();

            // 6. update the percentages
            calculatePercentages();
        }
    }

    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, id;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if (itemID) {

            splitID = itemID.split('-');
            //  console.log(splitID);
            type = splitID[0];
            id = parseInt(splitID[1]);

            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, id);

            // 2. delete the item from the UI 
            uiCtrl.deleteItemList(itemID);
            // 3. recalculate the budget & show to UI
            updateBudget();

            // 4. update the percentages
            calculatePercentages();

        }
    }

    return {
        initializeApp: function () {
            console.log("Initializing the budget App");
            uiCtrl.displayMonthYear();
            uiCtrl.displayBudget(
                {
                    totalIncome: 0,
                    totalExpenses: 0,
                    budget: 0,
                    percentage: -1,
                }
            )
            return setUpEventListners();
        }
    }

})(budgetController, UIController);
controller.initializeApp();




