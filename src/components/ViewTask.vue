<template>
  <div class="view-task">
    <div class="task-container">
      <textarea
          v-model="taskName"
          class="task-input"
          placeholder="What’s your task?">{{ task.name }}</textarea>
      <div class="button-container">
        <button @click="updateTask" class="btn btn-primary">Update</button>
        <button @click="deleteTask" class="btn btn-danger">Delete</button>
      </div>
    </div>
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
    },
    async updateTask() {
      try {
        await api.updateTask(this.task.id, this.taskName, this.userId);
        this.$emit("updateTask");
      } catch (error) {
        console.error("Error updating task:", error);
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

.task-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.btn {
  width: 48%;
  padding: 12px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background-color: #ff78a7; /* Soft pink button */
  color: white;
}

.btn-primary:hover {
  background-color: #ff4d94; /* Darker pink on hover */
}

.btn-danger {
  background-color: #ffb3c1; /* Light pinkish red button */
  color: white;
}

.btn-danger:hover {
  background-color: #ff66a3; /* Darker pinkish red on hover */
}

@media (max-width: 600px) {
  .view-task {
    margin: 20px;
    padding: 15px;
  }
  .btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
