import { defineStore } from "pinia";
import { onSnapshot, collection, doc, setDoc, QuerySnapshot } from "firebase/firestore";
import { db } from '@/firebase'

export const useCommentsStore = defineStore("CommentsStore", {
  state: () => {
    return {
      arrayComments: [], 
      buttonClicked: false,
    };
  },
  actions: {
    async addApontamento(name, Cocktail, newApontamento) {
     
        let id = new Date().getTime().toString();

        await setDoc(doc(db, 'Comments', 'id' + id ), {
          name: name,
          Cocktail: `"${Cocktail}"` ,
          Comment: newApontamento
        })
        // this.arrayComments.push(
        //   {
        //     id,
        //     name: name,
        //     Cocktail: `"${Cocktail}"` ,
        //     Comment: newApontamento
        //   }
        // )
     
      
    },
    async getComments() {
      onSnapshot(collection(db, 'Comments'), (QuerySnapshot) => {
        let Comments = [];
        QuerySnapshot.forEach((doc) => {
          let comment = {
            id: doc.id,
            name: doc.data().name,
            Cocktail:  doc.data().Cocktail,
            Comment:  doc.data().Comment
          }
          Comments.push(comment);
        })
        this.arrayComments = Comments;
      })
      

    },
  
    handleClick() {
      this.buttonClicked = true;
    },
    
    
  }
});
