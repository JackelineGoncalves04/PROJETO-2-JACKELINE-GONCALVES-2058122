import { defineStore } from "pinia";

export const useShoppingStore = defineStore("ShoppingStore", {
    state: () => {
        return {

            arrayShopping: []

        }
    },
    actions: {
        addShop( name, cant, img ) {
            if (cant > 0){
                this.arrayShopping.push(
                    {
                        CocktailName: name,
                        Quantity : cant ,
                        CocktailImg: img,
                        Price: Math.floor(Math.random() * (50 - 20)) + 20

                    }
                )}
        },

        calculateTotalPrice() {
            var totalPrice = 0;
      
            for (const cocktail of this.arrayShopping) {
              totalPrice += cocktail.Price;
            }
            return totalPrice.toFixed(2);
          }
        }
   
})