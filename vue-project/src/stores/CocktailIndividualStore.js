import { defineStore } from "pinia";

export const useCocktailIndividualStore = defineStore("CocktailIndividualStore", {
  state: () => {
    return {
    count: 0,
    buttonClicked: false
  }
  },
  actions: {
    increaseCounter() {
      this.count++;
    },
    decreaseCounter() {
      if (this.count > 0) {
        this.count--;
      }
    },
    handleClick() {
      this.buttonClicked = true;
    }
  },
  getters: {
    getCount() {
      return this.count;
    },
  },
});
