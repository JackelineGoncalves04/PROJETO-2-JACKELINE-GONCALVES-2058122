
<template>
    <section class="container presquisa-section">
        <div class="img-pesquisa-container">
            <img class="img-pesquisa" src="../assets/imG/cocktelfondo5.jpg">

            <div class="barra_pesquisa">
                <input type="search" name="" id="" placeholder="Name Cocktail..." class="barra ps-3" v-model="searchName" @keyup.enter="cocktailStore.getCocktails(searchName)">
                <button type="submit" class="botao-pesquisa" @click="cocktailStore.getCocktails(searchName)"><img src="../assets/img/lupa.png"></button>
            </div>
        
        </div>
    </section>

    <section class="container presquisa-galery">

            <h3 class="tittle-gallery"> OUR DRINKS </h3>
       
        <div class="galery">
            <div class="card-galery d-flex flex-column align-items-center p-3 border  border-3" v-for="cocktail in cocktailStore.arrayCocktails" :key="cocktail.idDrink" @click="currentCocktail(cocktail.idDrink)">
                <img :src="cocktail.strDrinkThumb" class="img-card h-100 w-100"/>
                <p class="pt-3 fs-5 fw-bold"> {{ cocktail.strDrink }} </p>
            </div>
           
            
        </div>
        
    </section>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCocktailStore } from '../stores/CocktailStore';
import { onMounted, ref } from 'vue';

const router = useRouter();
const cocktailStore = useCocktailStore();
const searchName = ref('');

onMounted(() => {
    cocktailStore.getCocktails(searchName.value);
})

const currentCocktail = (id) =>{
    router.push('/cocktail/' + id)
}

</script>



