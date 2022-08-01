import { ref } from 'vue';
import { collection, onSnapshot, query, orderBy } from '@firebase/firestore';
import { firestore } from './../firebase/config';

export const getCollection = (collectionName) => {
  const documents = ref([]);
  const error = ref(null);
  const collectionRef = query(collection(firestore, collectionName),orderBy("createdAt", 'asc'));
  onSnapshot(
    collectionRef,
    (snap) => {
      const result = snap.docs.map((message) => ({ ...message.data(), id: message.id }));
      documents.value = result;
    },
    (err) => {
      error.value = err.message;
    },
  );
  return { documents, error };
};
