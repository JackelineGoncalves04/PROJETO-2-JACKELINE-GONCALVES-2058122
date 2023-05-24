

<template>
  <header v-if="$route.name !== 'error'" class="">
        <div class="logo-container">

            <img class="logo-header" src="./assets/img/coctel (2).png" /> 
            
            <div class="tittle-header-container">
                <p class="tittle-header"> Cocktail bar </p> 
            </div> 

        </div>

        <div class="navegacion-header">
           <nav class="links">

                <li v-for="item in Nav_barStore.routes">
                    <RouterLink class="nav-link button-link"
                     :to="item.path"> {{ item.nome }} 
                    </RouterLink>
                </li>
               
                <li>
                    <RouterLink class="nav-link" :to="Nav_barStore.carro_path"> 
                      <img class="logo_carro" src="./assets/img/carro-de-la-carretilla.png" />
                    </RouterLink>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="background-color: rgb(255, 0, 191); border: transparent;">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li v-if="authStore.user == null"><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#reservationmodal" type="button">Register</a></li>
                            <li v-if="authStore.user == null"><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#reservationmodal2" type="button">Login</a></li>
                            <li v-if="authStore.user != null"><a class="dropdown-item" @click="logout">Logout</a></li>
                        </ul>
                    </div>
                </li>

            </nav>
        </div>
    </header>
  <RouterView class="container" />
  <footer v-if="$route.name !== 'error'" class="">
            <div class="footer-container">

                        <div class="footer-text">

                            <h5>Contact Us</h5>
                            <p>123 Main Street
                            <br> Anytown, USA 12345 <br>
                            Phone: (555) 555-5555<br>
                            Email: info@cocktailbar.com</p>

                        </div>

        
                   
                    <div class="logo-footer-container">

                        <img class="logo-footer" src="./assets/img/coctel (2).png" /> 

                        <div class="footer-logos-container">
                            <img class="footer-logo"  src="./assets/img/whatsapp.png">
                            <img class="footer-logo"  src="./assets/img/facebook.png">
                            <img class="footer-logo"  src="./assets/img/gorjeo.png">
                        </div>
            
                    </div>

                        <div class="footer-text">

                            <h5> Services </h5>
                               <p> Cocktail Classes <br>
                                Private Events<br>
                                Catering Services<br>
                                Bartender Training
                               </p>
                        </div>

            </div>

        </footer>

        <div class="modal fade" tabindex="-1" role="dialog" id="reservationmodal2">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title subtitle-modal fw-bolder">Login</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" arialabel="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="login">
                        <div class="form-group py-3">
                            <label class="subtitle-modal">Email:</label>
                            <input type="email" v-model="email" class="form-control" placeholder="example@gmail.com" required>
                        </div>
                        <div class="form-group py-3">
                            <label class="subtitle-modal">Password:</label>
                            <input type="password" v-model="password" class="form-control" placeholder="*******" required>
                        </div>
                        <div class="d-flex justify-content-end gap-3 align-items-center">
                            <p class="me-1">{{ erro }}</p>
                            <button type="button" class="botao botao-modal-1" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="botao botoao-modal-2">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>

        
        <div class="modal fade" tabindex="-1" role="dialog" id="reservationmodal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title subtitle-modal fw-bolder">Sign In</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" arialabel="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="register">
                        <div class="form-group py-3">
                            <label class="subtitle-modal">Email:</label>
                            <input type="email" v-model="email" class="form-control" placeholder="example@gmail.com" required>
                        </div>
                        <div class="form-group py-3">
                            <label class="subtitle-modal">Password:</label>
                            <input type="password" v-model="password" class="form-control" placeholder="*******" required>
                        </div>
                        <div class="d-flex justify-content-end gap-3 align-items-center">
                            <p class="me-1">{{ erro }}</p>
                            <button type="button" class="botao botao-modal-1" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" class="botao botoao-modal-2">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useNavbar } from '../src/stores/Nav_bar'
import { useAuthStore } from './stores/authStore';
import { ref, watch, onMounted } from 'vue'

onMounted(()=> {
    authStore.verifyStatus();
})

const Nav_barStore = useNavbar();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const erro = ref(authStore.erro);

watch(() => authStore.erro, (newErro) => {
  erro.value = newErro;
});

const register = async ()=>{
    authStore.AddAccount(email.value, password.value);
    email.value = '';
    password.value = '';
}

const login = async () => {
    authStore.LogIn(email.value, password.value);
    email.value = '';
    password.value = '';
}

const logout = () => {
    authStore.LogOut();
}





</script>

