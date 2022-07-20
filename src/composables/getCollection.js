import { collection, onSnapshot } from "firebase/firestore";
import { ref } from "vue";
import { firestore } from "../firebase/config";


export const getCollection = (collectionName) => {
  const documents = ref([])
  const error = ref (null)

  const collectionRef = collection(firestore, collectionName);

  onSnapshot(collection, (snap) => {
    console.log(snap);
   }, err => { 
    error.value = err.message
  });

  return { documents, error }
}