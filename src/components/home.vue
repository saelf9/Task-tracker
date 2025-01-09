<template>
  <div class="home">
    <h1 class="title">Welcome to Your Task Manager</h1>
    <div class="task-container">
      <create-task :userId="userId" @taskCreated="loadTasks" />
      <div v-if="tasks.length" class="task-list">
        <div
            v-for="task in tasks"
            :key="task.id"
            class="task-item">
          <view-task :task="task" :userId="userId" @updateTask="loadTasks"/>
        </div>
      </div>
      <p v-else>No tasks to show!</p>
    </div>
  </div>
</template>

<script>
import CreateTask from "@/components/CreateTask.vue";
import ViewTask from "@/components/ViewTask.vue";
import * as api from "@/assets/API.js";

export default {
  name: "Home",
  components: {
    CreateTask,
    ViewTask
  },
  data() {
    return {
      userId: 1, // Sample user ID
      tasks: []
    };
  },
  methods: {
    async loadTasks() {
      try {
        const tasks = await api.getTasks(this.userId);
        this.tasks = tasks;
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    }
  },
  created() {
    this.loadTasks();
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

/* Home Container */
.home {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff0f6; /* Soft pink background */
  border-radius: 30px; /* Rounded corners for the entire container */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #ff69b4; /* Hot pink for the title */
  font-size: 36px;
  font-family: 'Lobster', cursive;
  margin-bottom: 40px;
}

.task-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  margin-bottom: 20px;
}

p {
  text-align: center;
  font-size: 18px;
  color: #ff80ab; /* Lighter pink text */
}

@media (max-width: 600px) {
  .home {
    margin: 20px;
    padding: 15px;
  }
}
</style>
