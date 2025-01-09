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
  padding: 20px;
}
</style>
