<template>

<section class="Comments-page">

    <h2 class="tittleComments"> What customers say</h2>

    <div class="CommentsContainer"  >
        
        <div class="Comments" v-for="comment in CommentsStore.arrayComments">
            <div class="PersonContainer">
                <img class="CommentsImg" src="../assets/img/anonimo.jpg"/>
                <h4 class="CommentsName"> {{  comment.name }} </h4>
            </div>
            <div class="TextContainer">
                <h5 class="cocktailName"> {{ comment.Cocktail }} </h5>
                <p class="CommentsText">   {{ comment.Comment }} </p>
            </div>
        </div>

    </div>

    
</section>

<section class="AddCommentContainer">

   <div class="AddComent-card" >
    <h3 class="review"> Write your review </h3>
        <div class="forms">
            <div class="input">
                <h5 class="inputtittle"> Name </h5>
                <input ref="nameRef" v-model="name" type="text" placeholder="Name..." class="ps-3 input-size">
            </div>
            <div class="select">
                <h5 class="selecttittle"> Cocktail </h5>
                <select name="" id="" class="text-color ps-4" v-model="cocktail">
                            
                            <option :value="cocktail.strDrink" v-for="cocktail in cocktailStore.arrayCocktails"> {{ cocktail.strDrink }}</option>
                            
                </select>
            </div>
        </div>

        <div class="input-description">
            <textarea v-model="newApontamento" name="description" id="" cols="50" rows="5" placeholder="Review..." class="ps-2 py-2"></textarea>
        </div>
        <div class="button-submit" v-if="authStore.user != null">
            <button class="botao1 " type="button" 
                @click="addApontamento"
                :disabled="!newApontamento">
            Submit
            </button>
            <p>{{ error }}</p>
        </div>
        <p class="fw-bolder text-light mt-3" v-else> Login to add a comment </p>
   </div>

</section>

    
</template>

<script setup>
import { useCommentsStore } from '../stores/CommentsStore';
import { onMounted, ref, computed } from 'vue';
import { useCocktailStore } from '../stores/CocktailStore';
import { useAuthStore } from '../stores/authStore';

onMounted(()=>{
    cocktailStore.getCocktails('');
    CommentsStore.getComments();
})

const authStore = useAuthStore();

const CommentsStore = useCommentsStore();
const cocktailStore = useCocktailStore();

const error = ref('');

const addApontamento = async () => {
    if (name.value !== '' && cocktail.value !== '' && newApontamento.value !== '') {

        await CommentsStore.addApontamento(name.value,cocktail.value,newApontamento.value)
        newApontamento.value='';
        name.value= '';
        cocktail.value='';

    } else error.value = 'Please fill in all the fields.';
}

const name = ref('');
const cocktail = ref('');
const newApontamento = ref('');

</script>