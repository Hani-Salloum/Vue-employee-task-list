<template>
  <div class="bg-primary mb-5">
    <div class="container d-flex justify-content-between align-items-center">
        <h2 class="logo">Hani</h2>
        <nav
      class="   text-white navbar d-flex justify-content-end align-items-center"
    >
      <router-link class="my-link p-4  text-white text-decoration-none" :to="{name: 'ToDoList'}">Task List</router-link>
      <router-link class="my-link p-4  text-white text-decoration-none" to="/Add-Employee">Add Employee</router-link>
      <router-link class="my-link p-4  text-white text-decoration-none" to="/Assign-Task-Table">Assign Task</router-link>
    </nav>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.logo {
    color: white;
    font-style: italic;
}
.my-link {
    transition: .4s;
    border-radius: 4px;
}
.my-link:hover {
    background-color: rgba(13, 130, 253);
}
</style>
