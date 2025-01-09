<template>
  <div>
    <CreateTask :userId="userId" :addTask="addTask" />
    <h1>Tasks</h1>
    <ViewTask v-for="task of tasks" :key="task.id" :task="task" :userId="userId" @updateTask="onUpdateTask" />
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
