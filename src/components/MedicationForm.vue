<template>
  <div class="form-container">
    <h2>{{ isEditing ? "Edit Medication" : "Add Medication" }}</h2>

    <form @submit.prevent="saveMedication" class="med-form">
      <input
        v-model="medicament.denomination"
        placeholder="Denomination"
        required
      />
      <input
        v-model="medicament.formepharmaceutique"
        placeholder="Forme Pharmaceutique"
      />
      <input
        v-model="medicament.qte"
        type="number"
        placeholder="Quantity"
        min="1"
      />
      <input type="file" @change="handleFileUpload" />
      <button type="submit">{{ isEditing ? "Update" : "Add" }}</button>
    </form>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["medicament", "isEditing", "saveMedication", "handleFileUpload"]);
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 20px;
}

.med-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px;
  background: linear-gradient(90deg, #a8e6cf, #dcedc1);
  border: none;
  color: #2a6041;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #537a5a;
  color: white;
}
</style>
