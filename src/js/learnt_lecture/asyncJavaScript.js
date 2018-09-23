console.log("You are in asyncJavaScript.js ....")

/* 
// this is synchronous call
        const second = ()=>{
            console.log("Hey there... you are in Second");
        }


        const first = ()=>{
            console.log("Hey there... you are in first");
            second();
            console.log('The end of functions...')
        }
        


        //this is async call
       const second = ()=>{
        setTimeout(()=>{
            console.log('Hey there... this is an asynchronous call');
        }, 2000)
    }

    const first = ()=>{
        console.log("Hey there... you are in first");
        second();
        console.log('The end of functions...')
    }
    first();

    // Allow asynchronous functions to run in the background
    // we pass in the call backs that run onces the function has finished it works
    // Moving on immediately : Non-blocking.

    */

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Async javascript with callback

/*
function recipe(){
    setTimeout(()=>{
        const ids = [121,212, 143, 163, 253];
        console.log(ids);
        CallParitcularRecipe(ids[3]);
    }, 1500);    
}

function CallParitcularRecipe(id){
    setTimeout((id)=>{
        const recipeDetails = {
            name : 'Tomato pasta recipei',
            type: 'fast food',
        };
        console.log(`${id} id is of recipe ${recipeDetails.name} with type ${recipeDetails.type}`)
        updateRecipe(recipeDetails, id)
    }, 2000, id)
}

function updateRecipe(recipeDetails, id){

    setTimeout((recipeDetails, id)=>{
        console.log('Updating the reciepe details...');
        recipeDetails.name = 'Italian Pizza cracks';
        console.log(`${id} id is of recipe ${recipeDetails.name} with type ${recipeDetails.type}`)
    }, 2500, recipeDetails, id)

}


recipe();
*/


// or    //
// this is the callback hell in the javascript...
/*
function recipe(){
    setTimeout(()=>{
        const ids = [121,212, 143, 163, 253];
        console.log(ids);

        setTimeout((id)=>{
            const recipeDetails = {
                name : 'Tomato pasta recipei',
                type: 'fast food',
            };
            console.log(`${id} id is of recipe ${recipeDetails.name} with type ${recipeDetails.type}`)
            
            setTimeout((recipeDetails, id)=>{
                console.log('Updating the reciepe details...');
                recipeDetails.name = 'Italian Pizza cracks';
                console.log(`${id} id is of recipe ${recipeDetails.name} with type ${recipeDetails.type}`)
            }, 2500, recipeDetails, ids[3]);
    
        }, 2000, ids[3]);

    }, 1500);    
}
recipe();

*/




////////////////////////////////////////////////////////////////////////////////////
// Lecture: Promise
/*
Notes : - https://javascript.info/promise-basics
Object that keep track about whether a certain async event has happened already or not...
Determines what happens after the event happened. -- Async event means - timer finishing event,  or data coming back from ajax call.
Implements the concept of a future value that we are expecting 

*/
/*
// these are the producer of the Promise 
const recpIDs = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([121,212, 143, 163, 253]);
        // reject(new Error('not working'));
    }, 1500);
});


const getReciepe = recpId => {
    return new Promise((resolve, reject)=>{
        setTimeout((id)=>{
            const recipeDetails = {
                respId: id,
                name : 'Tomato pasta recipei',
                type: 'fast food',
            };
            resolve(recipeDetails);
        }, 2500, recpId);
    });
}

const updateRecipe = (recipeDetails, id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout((recDetails, recpid)=>{
            recDetails.name = 'Virgin Mojito';
            recDetails.type = 'refreshment drink';
            resolve(recDetails);

        }, 2000, recipeDetails, id);
    })
}

// this is the promise consumers
recpIDs.then(ids=>{
    console.log(ids[2]);
    return getReciepe(ids[2]);
})
.then(recipe => { console.log(`${recipe.respId} id is of recipe ${recipe.name} with type ${recipe.type}`); 
  // console.log(recipe);
  return updateRecipe(recipe, recipe.id);
})
.then(updateRecipe => console.log(`Updated ${updateRecipe.respId} id is of recipe ${updateRecipe.name} with type ${updateRecipe.type}`))
.catch(error =>{ console.error(error)});
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: async await 
/* async wait was designed for us to comsume promises and not to produce them.
Notes - 1. There’s a special syntax to work with promises in a more comfort fashion, called “async/await”. It’s surprisingly easy to understand and use.
2. async keyword. It can be placed before function. The word “async” before a function means one simple thing: a function always returns a promise. If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value
3. So, async ensures that the function returns a promise, wraps non-promises in it. Simple enough, right? But not only that. There’s another keyword await that works only inside async functions, and it’s pretty cool.
4. The keyword await makes JavaScript wait until that promise settles and returns its result
5. we can have one or more wait method inside a async method.
https://javascript.info/async-await

*/

/*
// these are the producer of the Promise 
const recpIDs = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([121,212, 143, 163, 253]);
        // reject(new Error('not working'));
    }, 1500);
});


const getReciepe = recpId => {
    return new Promise((resolve, reject)=>{
        setTimeout((id)=>{
            const recipeDetails = {
                respId: id,
                name : 'Tomato pasta recipei',
                type: 'fast food',
            };
            resolve(recipeDetails);
        }, 2500, recpId);
    });
}

const updateRecipe = (recipeDetails, id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout((recDetails, recpid)=>{
            recDetails.name = 'Virgin Mojito';
            recDetails.type = 'refreshment drink';
            resolve(recDetails);

        }, 2000, recipeDetails, id);
    })
}


async function getRecipesAW(){

    const IDs = await recpIDs;
    console.log(IDs);
    const recipe = await getReciepe(IDs[3]);
    console.log(recipe);

    const updRcpe = await updateRecipe(recipe, IDs[3]);
    console.log(updRcpe);

    return recipe;
}


// const recp = getRecipesAW(); console.log(recp); // this will give error her bcz function getrecipesAW runs in backgroup and it will automatically come to get recp which is still waiting to complete.
// how to solve this problem - async always automatically return the Promice object so if we return a value from the async fucntion using the return keyword then the Promice will be automatically the result with the return value.



getRecipesAW().then(result => console.log(`${result.name} is the best recipe ever`));

*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: making ajax call with fetch and Promise.
// https://www.metaweather.com/api/

/*
Notes:
No 'Access-Control-Allow-Origin' header error ->  the reason for this is so called same origin policy in javascript which basically prevent us for making 
ajax request to a domain difference then our own domain.  Right now we dont have any domain here we simply opening the java script file and domain that we requesting the 
resourece is from metaweather.com api. Because of this same origin policy we cannot able to access the resourece.

In order to actually allow to developers to make request to different domains something called "cross origin resource sharing" or "cors" was developed.

if developers of the api on different server and requesting the api's then they need to implement "cors" on their server. 

so this is kind of a problem but we can acutally still fortunately solve this, so what develops usually do is to proxy or to channel request through their own server like doing
the ajax request on our own server where the same original policy doesn't exist and then sent the data to the browser. That is just a work around to that problem.

*/

// in this case we call through a proxy - crossorigin.me
/*
const restApiCall = function(url){
    fetch(url)
    .then( response => response.json())
    .then(res => { console.log(`Response coming in with the value of user: ${res.userId} and title: ${res.title}`)})
    .catch(error => console.log(error));
}

let url = `https://jsonplaceholder.typicode.com/posts/2`
restApiCall(url);

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Ajax call with fetch and async & await.......

const restApiCall = async function(url){
    try{
        const res = await fetch(url)
        const data = await res.json();
        console.log(`Response coming in with the value of user: ${data.userId} and title: ${data.title}`)
        return data
    }
    catch(error){
        alert(error);
    }
    
}

let url = `https://jsonplaceholder.typicode.com/posts/2`;
restApiCall(url).then(data => console.log(data));
























    