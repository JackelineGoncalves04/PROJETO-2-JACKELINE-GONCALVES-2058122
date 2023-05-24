import { defineStore } from "pinia";
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export const useAuthStore = defineStore("AuthStore", {
    state: () => {
        return {
            erro: '',
            user: null
        }
    },
    actions: {

       async AddAccount( Email, Password) {
            
            try{
                await createUserWithEmailAndPassword( auth, Email, Password)
                
                const registerModal = document.querySelector('#reservationmodal')
                const modal = bootstrap.Modal.getInstance(registerModal)
                modal.hide()

                this.erro = ''

                // console.log(userCredentials)
            }
            catch (error) {
                // console.log(error.code)

                if (error.code === 'auth/weak-password'){
                    this.erro = 'At least 6 characters';
                }
                else if (error.code === 'auth/invalid-email'){
                    this.erro = 'Invalid email';
                }
                else if (error.code == 'auth/email-already-in-use'){
                    this.erro = 'Account already exist'
                }
                else alert('Somenthing went wrong')
            }
            
        },

        async LogIn(email, password){

            try{

                await signInWithEmailAndPassword(auth, email, password)
                
                const LogInModal = document.querySelector('#reservationmodal2')   //con document accedo al html y con el query selecciona el tag que contiene el id 
                const modal = bootstrap.Modal.getInstance(LogInModal)    //crea una instancia del modal para llamar los metodos de bootstrap   
                modal.hide()
                this.erro = ''
                
            }
            catch(error){
                // console.log(error.code);

                if (error.code == 'auth/user-not-found'){
                    this.erro = "User not found"
                }
                else if (error.code == 'auth/wrong-password'){
                    this.erro = "Wrong password"
                }
                else alert('Somenthing went wrong')
            }
        },

        async verifyStatus(){
            onAuthStateChanged(auth, async(dados)=> {     // funcion que verifica si hay un usuario logeado. la vareable user guarda los datos de la persona logeada 
                this.user = dados;
                console.log(this.user);
            })
        },

        LogOut(){
            signOut(auth);
        }


    }
})