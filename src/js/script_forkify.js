import Search from './models/Search'
import { elements, renderLoader, hideLoader } from './views/base'
import * as searchView from './views/SearchView'
import Recipe from './models/Recipe';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import List from './models/List';
import { Likes } from './models/Likes';

/**
 * Global state of the app
 * Search object
 * Current recipe object
 * shopping list obj
 * liked recipes
 */
const state = {}
window.state = state;
/**
 * SEARCH Controller 
 */
const controlSearch = async () => {
    // 1. get the entered query from view.
    const query = searchView.searchInput();
    // const query = 'pizza' /* this was for tesing purpose */

    //2. get new search object and add to state.
    state.search = new Search(query);

    // 3. Prepare UI for result.
    searchView.clearSearchInput();
    searchView.clearResult();
    renderLoader(elements.searchResultPanel);
    // 4. Search for recipes
    await state.search.getResult();

    // 5. Render result on UI.
    hideLoader();
    searchView.displayResult(state.search.result);
    // console.log(state.search.result);


}


document.querySelector('.search').addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
})

// window.addEventListener('load', controlSearch); /** this was for testing on load event */

elements.searchResPages.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goTOPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResult();
        searchView.displayResult(state.search.result, goTOPage);
    }
})

/** 
 * RECIPE Controller 
 */

const recipeController = async () => {
    const rec = new Recipe(47746);
    await rec.getRecipe();
    console.log(rec.recipe);
}

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) searchView.highlightSelected(id);
        // Create new recipe object
        state.recipe = new Recipe(id);

        window.r = state.recipe; // this was for testing purpose.
        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            // console.log(state.recipe);
            hideLoader();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
        }
        catch (err) {
            console.log(err);
            alert("Error procession recipe data");
        }
    }

}

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);

['load', 'hashchange'].forEach(event => { window.addEventListener(event, controlRecipe) });


/** 
 * LIST Controller 
 */


const controlList = () => {

    // create a new list if this is not list yet
    if (!state.list) state.list = new List();

    //add each ingredient to the list.
    state.recipe.ingredients.forEach(ele => {
        const item = state.list.addItem(ele.count, ele.unit, ele.ingredient);
        listView.renderitem(item);
    })

}

// handle delete and update list item events
elements.shoppingList.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // handle the delete button.
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        // delete the state
        state.list.deleteItem(id);

        //delete from UI
        listView.deleteitem(id);
    } else if (e.target.matches('.shopping__count--value, .shopping__count--value *')) {
        const val = parseFloat(e.target.value, 10);
        // console.log(e.target.value +' : ' + val);
        state.list.updateCount(id, val);
    }
})


/** 
 * LIKES Controller 
 */


const controlLikes =() => {

    // add the likes to state if not available
    if(!state.likes) state.likes = new Likes();
    const currentID = state.recipe.recipe_id;
    // user NOT yet liked the recipe
    if(!state.likes.isLiked(currentID)){
        
        // add the recipe details to likes
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.publisher,
            state.recipe.image_url
        )

        // toggle the the recipe love button
        likesView.toggleLikeBtn(true);

        // add the likes into the UI list
        likesView.renderLike(newLike);
        // console.log(state.likes)

    // user liked the recipe already
    }else{
        // remove the recipe details from likes
        state.likes.deleteLike(currentID);

        // toggle the the recipe love button
        likesView.toggleLikeBtn(false);

        // remove the likes from the UI list
        likesView.deleteLike(currentID);
        // console.log(state.likes)
    }

    likesView.toggleLikeMenu(state.likes.getLikes());
}

// on load for likes
window.addEventListener('load', ()=>{
    state.likes = new Likes();

    // restore the likes.
    state.likes.readStorage();

    // toogle like button menu
    likesView.toggleLikeMenu(state.likes.getLikes());

    // Render the existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});

// handling the recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingIngredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn-add, .recipe__btn--add *')) {
        // add ingredient to shopping list
        controlList();
    }else if (e.target.matches('.recipe__love, .recipe__love *')) {
        //Like controller 
        controlLikes();
    }

    // console.log(state.recipe)
})










































// console.log('you are in script_forkify.js')
/*
Notes: - 
npm is a simple command line interface that allow us to do package management for differnt 
tasks like task automation, automatic pause reloading or compliting javascript to es5 compatiable etc 

Babel - (ES6/ESNext----->ES5)in order to convert cutting edge js library like ES6,7,8 which together are simply called ES next back to ES5, so all 
browser capable to understand our code.

Webpack (ES6----->bundle) - in oder to make our code more modular and easier to maintain, writing a different part of our app into
a different files. 
By implementing Modules we can get in ES6, but the problem is right now browser doesnot support this functionality yet so we have to 
bundle these module together into a single file using something called a module bundler. Most popular is called WebPack.

WebPack can do more apart from moduler bundling.
------------------------------------------------------------------------------

package.json - which is basically a file which contains information about the project for npm 
to create it just go to project folder and type - "npm init" 

it will ask some question  
package name : {default it will take project folder name}
version: 
description: 
entrypoint: {default index.js}
.
.
.
.
many more...
---------------------------------------------------------------------------------------
installing webpack - npm install webpack --save-dev
--save-dev option means webpack development dependencies of our project

node-module - folder where our all packages will go

*/