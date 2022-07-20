import {addDoc, collection} from "firebase/firestore"
import { ref } from "vue"
import { firestore } from "../firebase/config"



export const useCollection = (collectionName) => {
  const error = ref(null)

  const addDocument = async (document) => {
    error.value = null

    try{
      const collectionRef = collection(firestore, collectionName)

      await addDoc(collectionRef, document)
    }catch (err) {
      error.value = err.message
    }
  }
  return { addDocument }
}