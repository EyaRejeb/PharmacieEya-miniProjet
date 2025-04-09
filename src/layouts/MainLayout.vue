<template>
  <div class="layout">
    <NavBar />

    <!-- Show Header only on Home Page -->
    <Header v-if="$route.path === '/'" />

    <main class="content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

const route = useRoute();
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding-top: 80px;
}
</style>
