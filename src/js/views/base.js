

export const elements = {
    inputQuery: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list'),
    searchResultPanel: document.querySelector('.results'),    
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shoppingList: document.querySelector('.shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list')
}

const elementString = {
    loader: 'loader'
}

export const renderLoader = parentElement =>{

    const loader = `
        <div class="${elementString.loader}">
            <svg>
                <use href='images/icons.svg#icon-cw'></use>
            </svg>
        </div>
    `;

    parentElement.insertAdjacentHTML('afterbegin', loader);
}

export const hideLoader = () =>{
    const loader = document.querySelector(`.${elementString.loader}`);
    if(loader){
        loader.parentElement.removeChild(loader);
    }
}