import { defineStore } from "pinia";

export const useCocktailStore = defineStore("CocktailStore", {
    state: () => {
        return {

            arrayCocktails: [],
            arrayIngredients: [],
            arrayMeasures: []

        }
    },
    actions: {
        async getCocktails( cocktailName ){
           
            if ( cocktailName == '' ) {
                
                var res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
                var results = await res.json()
                this.arrayCocktails = await results.drinks
                
            }
            else{
                var res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName)
                var results = await res.json()
                this.arrayCocktails = await results.drinks
            }
        },

        async getCocktailId( cocktailId ) {

            var res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId)
            var results = await res.json()
            this.arrayCocktails = await results.drinks
            objects.filter(obj => obj.value !== null)
            this.arrayIngredients = await results.drinks
            this.arrayMeasures = await results.drinks

        }
    }
})