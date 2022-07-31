<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatRoom />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import NewChatRoom from '../components/NewChatRoom.vue';
import ChatWindow from '../components/ChatWindow.vue';
export default {
  components: { Navbar, NewChatRoom, ChatWindow },
};
</script>

<style></style>
