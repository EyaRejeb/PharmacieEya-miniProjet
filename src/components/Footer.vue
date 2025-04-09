<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 CHL PharmaVue. All Rights Reserved.</p>
      <ul class="footer-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/medicaments">Medicaments</RouterLink></li>
        <li><RouterLink to="/about">About Us</RouterLink></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.footer {
  background: linear-gradient(90deg, #dcedc1, #a8e6cf);
  color: #2a6041;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  margin-top: auto; /* Ensures it stays at the bottom */
}
.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links li {
  list-style: none;
}

.footer-links a {
  text-decoration: none;
  color: #2a6041;
  transition: color 0.3s ease-in-out;
}

.footer-links a:hover {
  color: #537a5a;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .footer-links {
    margin-top: 10px;
  }
}
</style>
