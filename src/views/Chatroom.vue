<template>
  <div class="container">
    <Navbar />
    <NewChatRoom />
  </div>

</template>

<script>
import Navbar from "../components/Navbar.vue"
import NewChatRoom from "../components/NewChatRoom.vue"
export default {
  components: { Navbar , NewChatRoom },
}
</script>

<style>

</style>