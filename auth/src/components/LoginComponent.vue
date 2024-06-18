<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebaseConfig";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
  
      const login = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          alert("User logged in successfully!");
        } catch (error) {
          alert(error.message);
        }
      };
  
      return { email, password, login };
    }
  };
  </script>
  