<template>
  <div class="welcome continer">
    <h2>Welcome User</h2>

    <div v-if="showForm">

      <SignUpFrom @signup="handleEnterChat"/>
      <p>
        No account yet?
        <span  @click="showForm = false">Login</span> instead.
      </p>
    </div>

    <div v-else>
      <Login @login="handleEnterChat" />
      <p>
        No account yet?
        <span @click="showForm = true">Sign Up</span> instead.
      </p>
    </div>
  </div>
</template>

<script>
import SignUpFrom from "../components/SignUpForm.vue";
import Login from "../components/Login.vue";
import { ref } from "@vue/reactivity"
import { useRouter } from "vue-router"
export default {
  components: { SignUpFrom , Login } ,

  setup(){
    const showForm = ref(false);
    const router = useRouter();

    const handleEnterChat = () => {
      router.push("/chatroom")
    }
    return {showForm, handleEnterChat}
  }
}
</script>

<style>
.continer{
  width: 90%; 
  max-width: 960px; 
  margin: 80px auto;
  padding: 50px 0;
  border-radius: 20px; 
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1); 
  background: white; 
}
.welcome h2{
  font-size: 48px;
  display: flex;
  justify-content: center;
}
.welcome p{
  font-size: 18px;
  display: flex;
  justify-content: center;
}
.welcome form { 
  width: 300px; 
  margin: 20px auto; 
} 
.welcome label { 
  display: block; 
  margin: 20px 0 10px; 
} 
.welcome input { 
  width: 100%; 
  padding: 10px; 
  border-radius: 20px; 
  border: 1px solid #eee; 
  outline: none; 
  color: #999; 
  margin: 10px auto; 
} 
.welcome span { 
  font-weight: bold; 
  text-decoration: underline; 
  cursor: pointer;
  margin: 0 5px;
} 
.welcome button { 
  margin: 20px auto; 
}

</style>