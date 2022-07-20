<template>
  <form @submit.prevent="handleSubmit" action="">
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from"vue";
import { useLogin } from "../composables/useLogin"
export default {
    setup(props, context){
      const email = ref("");
      const password = ref("");

      const handleSubmit = async () => {
        const user = await useLogin(email.value, password.value)
        if(user) {
          context.emit("login")
        }

      }
      return{ email, password, handleSubmit }
    }
}
</script>

<style>

</style>