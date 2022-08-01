<template>
  <form>
    <textarea
      @keypress.prevent.enter="handleSubmit"
      placeholder="Пишите тут! не тупим господа!"
      v-model="message"
    ></textarea>
  </form>
</template>

<script>
import { Timestamp } from '@firebase/firestore';
import { ref } from 'vue';
import { getUser } from '../composables/getUser';
import { useCollection } from '../composables/useCollection';

export default {
  setup() {
    const message = ref('');
    const { user } = getUser();
    const { addDocument } = useCollection('messages');
    const handleSubmit = async () => {
      const newMessage = {
        name: user.value.displayName,
        message: message.value,
        createdAt: Timestamp.fromDate(new Date()),
        authorId: user.value.uid,
      };
      await addDocument(newMessage);
      message.value = '';
    };
    return { message, handleSubmit };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
  resize: vertical;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>
