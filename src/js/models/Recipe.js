import { getRequest } from "./api-requests";
import { key, api } from "../config";

export default class Recipe{
    constructor(recpId){
        this.recpId = recpId;
    }

    async getRecipe(){
        const url = `${api}get?${key}&rId=${this.recpId}`;
        await getRequest(url).then(data =>{
            //this.recipe = data.recipe;
            this.title = data.recipe.title;
            this.publisher = data.recipe.publisher
            this.source_url = data.recipe.source_url
            this.image_url = data.recipe.image_url
            this.recipe_id = data.recipe.recipe_id
            this.ingredients = data.recipe.ingredients
        })
    }

    calcTime() {
        // Assuming that we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients(){
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitsShort, 'g', 'kg'];
        const newIngredients = this.ingredients.map(el =>{
            //1. uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, index)=>{
                ingredient = ingredient.replace(unit, units[index]);
            })

            //2. Remove parenthese
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ')
            
            //3. parse ingredents into count, units and ingredents
            const arrIng = ingredient.split(' ');

            // find the unit index in the arrIng.
            const unitIndex = arrIng.findIndex(ele => unitsShort.includes(ele))
            
            let objIng; 
            if(unitIndex === -1){
                objIng = {
                    count: 1,
                    units: '',
                    ingredient
                }
            }else if(unitIndex > -1){
                // There is a unit
                // Ex. 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5
                // Ex. 4 cups, arrCount is [4]
                const arrCount = arrIng.slice(0, unitIndex);

                let count;
                if(arrCount.length ===1){
                    count = eval(arrCount[0].replace('-','+'));
                }else{
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }
                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                };
            } else if(parseInt(arrIng[0], 10) ){
                // There is NO unit, but 1st element is number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' '),
                };
            }


            return objIng;
        });

        this.ingredients = newIngredients;
        return this.ingredients;
    }

    updateServings(type){

        const newServings = type ==='dec' ? this.servings-1 : this.servings+1;

        this.ingredients.forEach(ing => {
            ing.count *= (newServings/this.servings)           
        });

        this.servings = newServings;

    }
}