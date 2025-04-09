<template>
  <div class="table-container">
    <table class="med-table">
      <thead>
        <tr>
          <th>Denomination</th>
          <th>Forme Pharmaceutique</th>
          <th>Photo</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="med in medicaments" :key="med.id">
          <td>{{ med.denomination }}</td>
          <td>{{ med.formepharmaceutique || "N/A" }}</td>
          <td>
            <img
              v-if="med.photo"
              :src="getPhotoUrl(med.photo)"
              class="med-image"
              alt="Medication"
            />
            <span v-else>📷 No Image</span>
          </td>
          <td>
            <button @click="decreaseQuantity(med)" :disabled="med.qte <= 1">
              ➖
            </button>
            {{ med.qte }}
            <button @click="increaseQuantity(med)">➕</button>
          </td>
          <td>
            <button @click="editMedication(med)" class="edit-btn">
              ✨ Edit
            </button>
            <button @click="deleteMedication(med.id)" class="delete-btn">
              🗑️ Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps([
  "medicaments",
  "editMedication",
  "deleteMedication",
]);
const emit = defineEmits(["increaseQuantity", "decreaseQuantity"]);

// Construct the full image URL
const getPhotoUrl = (photoName) => {
  return photoName.startsWith("data:image")
    ? photoName
    : `https://apipharmacie.pecatte.fr/images/${photoName}`;
};

// Increase quantity
const increaseQuantity = (med) => {
  emit("increaseQuantity", med.id);
};

// Decrease quantity
const decreaseQuantity = (med) => {
  if (med.qte > 1) {
    emit("decreaseQuantity", med.id);
  }
};
</script>

<style scoped>
/* Container for overall layout */
.table-container {
  max-width: 90%;
  margin: 30px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Helvetica Neue", Arial, sans-serif;
}

/* Table styles */
.med-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #f7fff7;
}

.med-table thead {
  background-color: #d0f0c0; /* Pastel green */
}

.med-table th,
.med-table td {
  border: 1px solid #b9e2a6; /* Soft green border */
  padding: 15px;
  text-align: left;
}

.med-table th {
  font-weight: bold;
  color: #2c3e50;
  font-size: 16px;
}

.med-table tbody tr {
  transition: background-color 0.3s ease;
}

.med-table tbody tr:nth-child(even) {
  background-color: #e8f5e9; /* Light pastel green for even rows */
}

.med-table tbody tr:hover {
  background-color: #c8e6c9; /* Slightly darker green on hover */
}

.med-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
}

/* Button default styling */
button {
  margin: 0 5px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s;
}

/* Disabled button styling */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Increase/Decrease button hover effect */
button:hover:not(:disabled) {
  transform: translateY(-2px);
}

/* Edit button styling */
.edit-btn {
  background-color: #fff9c4; /* Pastel yellow */
  color: #555;
}

.edit-btn:hover:not(:disabled) {
  background-color: #fff176; /* Slightly darker pastel yellow */
}

/* Delete button styling */
.delete-btn {
  background-color: #ffcdd2; /* Pastel red */
  color: #555;
}

.delete-btn:hover:not(:disabled) {
  background-color: #e57373; /* Slightly darker pastel red */
}
</style>
