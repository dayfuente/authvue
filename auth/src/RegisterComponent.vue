<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebaseConfig";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
  
      const register = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          alert("User registered successfully!");
        } catch (error) {
          alert(error.message);
        }
      };
  
      return { email, password, register };
    }
  };
  </script>
  