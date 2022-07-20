<template>
  <form action="">
    <textarea @keypress.prevent.enter="handleSubmit" 
    placeholder="Type a message and hit enter to send"
    v-model="message"
    ></textarea>
  </form>
</template>

<script>
import { Timestamp } from '@firebase/firestore';
import { ref } from "vue";
import { getUser } from "../composables/getUser"
import { useCollection } from "../composables/useCollection"

export default {
  setup(){
    const message = ref("");
    const { user } = getUser();
    const { addDocument } = useCollection("messages")

    const handleSubmit = async () => {
      const newMessage = {
        name: user.value.displayName,
        message: message.value,
        createAt: Timestamp.fromDate(new Date()),
      };
      await addDocument(newMessage)

      message.value = "";
    }

    return { message,handleSubmit };
  },

}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea{
    width: 100%;
    margin-left: 10px;
    margin-bottom: 6px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    resize: vertical;
    position: relative;
  }
  textarea::placeholder{
    position: absolute;
    top:5px;
    left: 5px;
  }

  .error{
    text-align: center;
    color: #ff2a58;
    font-size: 12px;
    padding: 10px 0;
  }
</style>>

