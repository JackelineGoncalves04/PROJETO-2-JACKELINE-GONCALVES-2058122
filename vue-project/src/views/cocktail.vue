<template>


<section class="CocktailIndividual">
      <div class="CocktailContainer" v-for="cocktail in cocktailStore.arrayCocktails">
        
          <div class="Indv-container">

              <img class="img-individual" :src=" cocktail.strDrinkThumb"/>

              <div class="AddtoCar">
                  <button class="btnCount" @click="cocktailIndividualStore.decreaseCounter()">-</button>
                  <span class="counter"> {{ cocktailIndividualStore.count }}</span>
                  <button  class="btnCount" @click="cocktailIndividualStore.increaseCounter()">+</button>
              </div>
              <div class="amount-text fw-bold" v-if="cocktailIndividualStore.count === 0 && cocktailIndividualStore.buttonClicked">
                    *Add an amount*
              </div>
          </div>

          <div class="IndivicualText">
            <h3> {{ cocktail.strDrink }}</h3>
            <h4> Description: </h4>
            <p> {{ cocktail.strInstructions }}</p>
            <div class="card-ingredients">
            <h4> Ingredientes: </h4>
            <p v-for="i in 15" :key="i">
               {{ cocktail['strIngredient' + i] }}  {{ cocktail['strMeasure' + i] }}
            </p>
           </div>
            <div class="ShopCar">
              <button class="img-btn d-flex pt-2" @click="AddToCar" data-bs-toggle="modal" data-bs-target="#shoppingCar" type="button" v-if="authStore.user != null">
                <p class="fw-bolder pe-2 ">Add to car</p>
                <img class="logo-carro-compras" src="../assets/img/carro-de-la-carretilla (1).png">
              </button>
            </div>
          </div>
      </div>
    </section> 

    <div class="modal fade" tabindex="-1" role="dialog" id="shoppingCar" v-if="cocktailIndividualStore.count > 0"> 
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title subtitle-modal fw-bolder w-100 text-center">Shopping Car</h5>
                      <button type="button" class="close" data-bs-dismiss="modal" arialabel="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <section class="h-100 h-custom" style="background-color: rgb(23, 22, 33); " >
                    <div class="container py-5 h-100">
                      <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                          <div class="card">
                            <div class="card-body p-4" style="background-color: rgb(23, 22, 33) ">

                              <div class="row text-light">

                                <div class="">
                                  <h5 class="mb-3"><a href="#!" class="text-body" ><i
                                        class="fas fa-long-arrow-alt-left me-2 fw-bold" > </i> Continue shopping </a></h5>
                                  <hr>

                                  <div class="d-flex justify-content-between align-items-center mb-4">
                                    <div>
                                      <p class="mb-1" style="color: #9e9b9b">Shopping cart</p>
                                      <p class="mb-0" style="color: #9e9b9b">You have 4 items in your cart</p>
                                    </div>
                                  </div>

                                  <div class="card mb-3" v-for="cocktail in ShoppingStore.arrayShopping" v-if="ShoppingStore.arrayShopping.length != 0"> 
                                    <div class="card-body">
                                      <div class="d-flex justify-content-between">
                                        <div class="d-flex flex-row align-items-center">
                                          <div>
                                            <img
                                              :src="cocktail.CocktailImg"
                                              class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                                          </div>
                                          <div class="ms-3" >
                                            <h5>{{ cocktail.CocktailName }}</h5>
                                          </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center">
                                          <div style="width: 50px;">
                                            <h5 class="fw-normal mb-0">{{ cocktail.Quantity }}</h5>
                                          </div>
                                          <div style="width: 80px;">
                                            <h5 class="mb-0">{{ cocktail.Price }}$</h5>
                                          </div>
                                          <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div v-else class="text-light"> Card Empty </div>
                                </div>
                                <div class="col-lg-5">

                                  <!-- <div class="card bg-primary text-white rounded-3">
                                    <div class="card-body " style="background-color: rgb(79, 57, 125)" >
                                      <div class="d-flex justify-content-between align-items-center mb-4">
                                        <h5 class="mb-0">Card details</h5>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                          class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                                      </div>

                                      <p class="small mb-2">Card type</p>
                                      <a href="#!" type="submit" class="text-white"><i
                                          class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                      <a href="#!" type="submit" class="text-white"><i
                                          class="fab fa-cc-visa fa-2x me-2"></i></a>
                                      <a href="#!" type="submit" class="text-white"><i
                                          class="fab fa-cc-amex fa-2x me-2"></i></a>
                                      <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>

                                      <form class="mt-4">
                                        <div class="form-outline form-white mb-4">
                                          <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                            placeholder="Cardholder's Name" />
                                          <label class="form-label" for="typeName">Cardholder's Name</label>
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                          <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                            placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                                          <label class="form-label" for="typeText">Card Number</label>
                                        </div>

                                        <div class="row mb-4">
                                          <div class="col-md-6">
                                            <div class="form-outline form-white">
                                              <input type="text" id="typeExp" class="form-control form-control-lg"
                                                placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                                              <label class="form-label" for="typeExp">Expiration</label>
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <div class="form-outline form-white">
                                              <input type="password" id="typeText" class="form-control form-control-lg"
                                                placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                              <label class="form-label" for="typeText">Cvv</label>
                                            </div>
                                          </div>
                                        </div>

                                      </form>

                                      <hr class="my-4">

                                      <div class="d-flex justify-content-between">
                                        <p class="mb-2">Subtotal</p>
                                        <p class="mb-2">$4798.00</p>
                                      </div>

                                      <div class="d-flex justify-content-between">
                                        <p class="mb-2">Shipping</p>
                                        <p class="mb-2">$20.00</p>
                                      </div>

                                      <div class="d-flex justify-content-between mb-4">
                                        <p class="mb-2">Total(Incl. taxes)</p>
                                        <p class="mb-2">$4818.00</p>
                                      </div>

                                      <button type="button" class="btn btn-info btn-block btn-lg">
                                        <div class="d-flex justify-content-between">
                                          <span>$4818.00</span>
                                          <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                                        </div>
                                      </button>

                                    </div>
                                  </div> . -->

                                </div>

                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
              </div>
          </div>
      </div>

    <!-- <section class="CocktailIndividual">
      <div class="CocktailContainer" v-for="cocktail in cocktailStore.arrayCocktails">
        
          <div class="Indv-container">
              <h3> {{ cocktail.strDrink }}</h3>
              <img class="img-individual" :src=" cocktail.strDrinkThumb"/>

              <div class="AddtoCar">
                  <button class="btnCount" @click="cocktailIndividualStore.decreaseCounter()">-</button>
                  <span class="counter"> {{ cocktailIndividualStore.count }}</span>
                  <button  class="btnCount" @click="cocktailIndividualStore.increaseCounter()">+</button>
              </div>
          </div>

          <div class="IndivicualText">
            <h4> Ingredientes: </h4>
            <h4> Description: </h4>
            <p> {{ cocktail.strInstructions }}</p>
            <div class="ShopCar">
              <button class="img-btn" @click="handleClick">
                <img class="logo-carro" src="../assets/img/carro-de-la-carretilla.png">
              </button>
            </div>
          </div>
      </div>
    </section> -->
</template>

<script setup>
import { useCocktailIndividualStore } from "../stores/CocktailIndividualStore";
import { useCocktailStore } from '../stores/CocktailStore';
import { useShoppingStore } from '../stores/ShopCarStore';
import { onMounted } from "vue";
import { useRoute } from 'vue-router'
import { useAuthStore } from '../stores/authStore';


const authStore = useAuthStore();
const ShoppingStore = useShoppingStore();
const cocktailStore = useCocktailStore();
const cocktailIndividualStore = useCocktailIndividualStore();
const route = useRoute();

onMounted(() => {
  cocktailStore.getCocktailId( route.params.id )  // busca el id que esta escrito en la url ( el route es lo mismo que el req )
})

const AddToCar = ()=> {
  let name, urlimg;
  
  for (let i = 0; i < cocktailStore.arrayCocktails.length; i++) {
    const objeto = cocktailStore.arrayCocktails[i];
    name = objeto.strDrink;
    urlimg = objeto.strDrinkThumb;
  }
  
  if (cocktailIndividualStore.count === 0) {
    cocktailIndividualStore.buttonClicked = true;
  } else {
    // Agregar al carrito solo si el contador no es cero
    ShoppingStore.addShop(name, cocktailIndividualStore.count, urlimg);
  }
};


cocktailIndividualStore.count = 0;




</script>