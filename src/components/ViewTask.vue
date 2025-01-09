<template>
  <div class="view-task">
    <textarea
        v-model="taskName"
        class="task-input"
        placeholder="Edit your task">{{ task.name }}</textarea>
    <button @click="deleteTask" class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
import * as api from "@/assets/API.js";

export default {
  name: "ViewTask",
  props: ["task", "userId"],
  data() {
    return {
      taskName: ""
    };
  },
  methods: {
    async deleteTask() {
      try {
        await api.deleteTask(this.task.id, this.userId);
        this.$emit("updateTask");
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  },
  created() {
    this.taskName = this.task.name;
  }
};
</script>

<style scoped>
/* Page Background */
body {
  background-color: #f9c9d6; /* Light pink background for the entire page */
  font-family: 'Poppins', sans-serif; /* Cuter font for the whole page */
  margin: 0;
  padding: 0;
}

.view-task {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff0f6; /* Soft pink background */
  border-radius: 30px; /* Rounded corners for the entire container */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.task-input {
  width: 100%;
  height: 120px;
  padding: 15px;
  border-radius: 25px; /* Cloud-like rounded corners */
  border: 1px solid #f2c2d7; /* Light pink border */
  margin-bottom: 20px;
  font-size: 18px;
  font-family: 'Lobster', cursive; /* Cute, playful font */
  background-color: #fce4ec; /* Light pastel pink */
  resize: none;
  box-sizing: border-box;
  transition: all 0.3s ease;
  color: #e91e63; /* A cute pink color for the font */
}

.task-input::placeholder {
  color: #ff80ab; /* Lighter pink placeholder text */
}

.task-input:focus {
  border-color: #ff69b4; /* Hot pink on focus */
  background-color: #ffffff; /* White background when focused */
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
  color: white;
  transition: background-color 0.3s ease;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #c82333;
  box-shadow: 0 0 10px rgba(220, 53, 69, 0.5);
}
</style>
