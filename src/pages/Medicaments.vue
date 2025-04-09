<template>
  <div class="medicaments-page">
    <MedicationForm
      :medicament="medicament"
      :isEditing="isEditing"
      :saveMedication="saveMedication"
      :handleFileUpload="handleFileUpload"
    />
    <!-- Search component inserted here -->
    <MedicationSearch @search="onSearch" />
    <!-- Pass the filtered list to the table -->
    <MedicationTable
      :medicaments="filteredMedicaments"
      :editMedication="editMedication"
      :deleteMedication="deleteMedication"
      @increaseQuantity="increaseMedicationQuantity"
      @decreaseQuantity="decreaseMedicationQuantity"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMedicaments } from "../composables/useMedicament";
import MedicationForm from "../components/MedicationForm.vue";
import MedicationTable from "../components/MedicationTable.vue";
import MedicationSearch from "../components/MedicationSearch.vue";

const {
  medicaments,
  medicament,
  isEditing,
  saveMedication,
  handleFileUpload,
  editMedication,
  deleteMedication,
  increaseMedicationQuantity,
  decreaseMedicationQuantity,
} = useMedicaments();

// Local state for the search query
const searchQuery = ref("");

// Update search query when event is emitted
const onSearch = (query) => {
  searchQuery.value = query;
};

// Computed filtered list based on search query
const filteredMedicaments = computed(() => {
  if (!searchQuery.value) {
    return medicaments.value;
  }
  return medicaments.value.filter(
    (med) =>
      med.denomination
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      (med.formepharmaceutique &&
        med.formepharmaceutique
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()))
  );
});
</script>

<style scoped>
.medicaments-page {
  padding: 20px;
  text-align: center;
}
</style>
