<template>
    <div v-if="user">
      <h2>Profile</h2>
      <p>Email: {{ user.email }}</p>
      <p>Token: {{ token }}</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>Please login to see your profile.</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { auth } from "../firebaseConfig";
  import { signOut } from "firebase/auth";
  
  export default {
    setup() {
      const user = ref(null);
      const token = ref("");
  
      onMounted(() => {
        auth.onAuthStateChanged(async (u) => {
          user.value = u;
          if (u) {
            token.value = await u.getIdToken();
          }
        });
      });
  
      const logout = async () => {
        await signOut(auth);
      };
  
      return { user, token, logout };
    }
  };
  </script>
  