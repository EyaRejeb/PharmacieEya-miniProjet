<template>
  <header class="hero">
    <div class="container">
      <h1>Welcome to CHL PharmaVue</h1>
      <p>Manage your pharmacy with ease and efficiency.</p>
      <RouterLink to="/medicaments" class="btn">View Medicaments</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* Fix header hiding behind navbar */
.hero {
  background: linear-gradient(90deg, #a8e6cf, #dcedc1);
  color: #2a6041;
  text-align: center;
  padding: 50px 20px 50px 20px;
  margin-top: 80px; /* Ensures header is below navbar */
}

/* Center content */
.container {
  max-width: 800px;
  margin: auto;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background: white;
  color: #2a6041;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background: #537a5a;
  color: white;
}
</style>
