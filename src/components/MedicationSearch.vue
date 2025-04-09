<template>
  <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      @input="onSearch"
      placeholder="Search medications..."
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";

const searchQuery = ref("");
const emit = defineEmits(["search"]);

const onSearch = () => {
  emit("search", searchQuery.value);
};
</script>

<style scoped>
.search-container {
  margin: 20px auto;
  max-width: 600px;
}
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>
