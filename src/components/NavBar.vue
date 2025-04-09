<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <RouterLink to="/" class="logo">PharmaVue</RouterLink>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/medicaments">Medicaments</RouterLink></li>
        <li><RouterLink to="/about">About Us</RouterLink></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="menu-btn">☰
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <ul v-if="menuOpen" class="mobile-menu">
      <li><RouterLink to="/" @click="toggleMenu">Home</RouterLink></li>
      <li><RouterLink to="/medicaments" @click="toggleMenu">Medicaments</RouterLink></li>
      <li><RouterLink to="/about" @click="toggleMenu">About Us</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
/* Navbar */
.navbar {
  background: linear-gradient(90deg, #a8e6cf, #dcedc1);
  padding: 15px 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

/* Navbar Content */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Logo */
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #2a6041;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.1);
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  font-size: 16px;
  color: #2a6041;
  transition: all 0.3s ease-in-out;
  padding: 5px 10px;
  border-radius: 5px;
}

.nav-links a:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Mobile Menu Button */
.menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 24px;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  background: white;
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 15px;
}

.mobile-menu li {
  list-style: none;
  padding: 10px 0;
}

.mobile-menu a {
  text-decoration: none;
  font-size: 18px;
  color: #2a6041;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .menu-btn {
    display: block;
  }
  
  .mobile-menu {
    display: flex;
  }
}
</style>
