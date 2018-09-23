import { elements } from './base'

export const searchInput = () => elements.inputQuery.value;

export const clearSearchInput = () => {
    elements.inputQuery.value = ''
}

export const clearResult = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

export const highlightSelected = id =>{
    // this is to remove if any or multiselected highlighted...
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });

    document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
};

/*
eg - 'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
*/

export const limitRecipeTitle = (title, limit = 15) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        // return the result
        return `${newTitle.join(' ')}...`
    }
    return title;
}
const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>`

    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

//type: 'prev' or 'next'
const createButton = (page, type) => {
    return `
        <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
            <svg class="search__icon">
                <use href="images/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
        </button>
    `
}
const renderButton = (page, totalResult, resPerPage) => {
    const pages = Math.ceil(totalResult / resPerPage)
    let button;
    if (page === 1 && pages > 1) {
        // show the next button.
        button = createButton(page, 'next')
    } else if (page === pages && pages > 1) {
        // show the previous button
        button = createButton(page, 'prev')
    } else if (page < pages) {
        // show the prev and next button
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
}

export const displayResult = (recipes, page = 1, resPerPage = 10) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(renderRecipe);

    renderButton(page, recipes.length, resPerPage);
};