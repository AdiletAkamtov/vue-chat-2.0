<template>
  <div class="chat-window">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="documents.length" class="messages" :ref="($elem) => (messagesBlock = $elem)">
      <div
        v-for="doc in formattedDocuments"
        :key="doc.id"
        class="single"
        :class="{ me: doc.authorId === user.uid }"
      >
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
    <div v-else>There is no messages yet, be the first one!</div>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from '@vue/runtime-core';
import { getCollection } from '../composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
import { getUser } from '../composables/getUser';

export default {
  setup() {
    const { documents, error } = getCollection('messages');
    const { user } = getUser();
    const messagesBlock = ref(null);

    const formattedDocuments = computed(() => {
      if (documents.value.length) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });
    onUpdated(() => {
      messagesBlock.value.scrollTop = messagesBlock.value.scrollHeight;
    });
    return { documents, error, formattedDocuments, user, messagesBlock };
  },
};
</script>

<style>
.chat-window {
  background: #363636;
  padding: 30px 20px;
}
.created-at {
  display: block;
  color: rgb(222, 222, 222);
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: 700;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
  color:#fff;
}
.single {
  margin: 10px 0;
  max-width: 50%;
  background-color:  #b844d6;
  padding: 10px;
  border-radius: 12px;
  width: max-content;
}
.me {
  background: #6c297d;
  margin-left: auto;
}
</style>
