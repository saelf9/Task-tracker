<template>
  <div class="app-container">
    <Home />
  </div>
</template>

<script>
import Home from "@/components/home.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Home }
});
</script>

<style scoped>
.app-container {
  background-color: #f9f0f5; /* Soft light pink background */
  font-family: 'Comic Sans MS', cursive, sans-serif;
  padding: 250px;
  margin-top: -50px;
}
/* Global Body Background */
body, html {
  background-color: #f9c9d6; /* Light pink background for the entire page */
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  height: 100%; /* Ensure the background covers the whole page */
}

</style>
