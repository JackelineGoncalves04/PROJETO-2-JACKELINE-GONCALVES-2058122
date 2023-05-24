import { defineStore } from "pinia";


export const useNavbar = defineStore('NavBarStore',{
    state: ()=> {
        return {
            routes:  [
                    {
                        nome: 'HOME',
                        path: '/'
                    },
                    {
                        nome: 'MENU',
                        path: '/pesquisa'
                    },
                    {
                        nome: 'COMMENTS',
                        path: '/comments'
                    },
                
                ],

                carro_path: '/carro'
        }
    }
});

