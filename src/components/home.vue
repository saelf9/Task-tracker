<template>
  <div class="home"> <!-- Added the home class here -->
    <CreateTask :userId="userId" :addTask="addTask" />
    <h1 class="title">Tasks</h1> <!-- Added the title class -->
    <div class="task-list"> <!-- Added task-list class here -->
      <ViewTask
          v-for="task of tasks"
          :key="task.id"
          :task="task"
          :userId="userId"
          @updateTask="onUpdateTask"
          class="task-item"/>
    </div>
  </div>
</template>

<script>
import * as api from "@/assets/API.js";
import CreateTask from "@/components/CreateTask.vue";
import ViewTask from "@/components/ViewTask.vue";

export default {
  name: "Home",
  components: {CreateTask, ViewTask},
  data() {
    return {
      tasks: [],
      userId: ""
    };
  },
  async created() {
    try {
      this.userId = await api.createUser();
      this.tasks = await api.getTasks(this.userId);
    } catch (error) {
      console.error("Error initializing data:", error);
      // Handle error
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
    async onUpdateTask() {
      try {
        this.tasks = await api.getTasks(this.userId);
      } catch (error) {
        console.error("Error updating tasks:", error);
        // Handle error
      }
    }
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
  background-color: #fce4ec; /* Light pastel pink for task item background */
  padding: 15px;
  border-radius: 10px; /* Rounded corners for task items */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.task-item p {
  color: #e91e63; /* Cute pink color for task text */
  font-size: 18px;
  font-family: 'Lobster', cursive; /* Playful font */
  margin: 0;
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
