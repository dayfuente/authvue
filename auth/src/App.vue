<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue';

export default {
  components: {
    Navbar
  }
};
</script>