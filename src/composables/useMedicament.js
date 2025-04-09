import { ref, onMounted } from "vue";
import axios from "axios";

const API_URL = "https://apipharmacie.pecatte.fr/api/27/medicaments";

export function useMedicaments() {
  const medicaments = ref([]);
  const medicament = ref({
    id: null,
    denomination: "",
    formepharmaceutique: "",
    photo: "",
    qte: 1,
  });
  const isEditing = ref(false);

  // Fetch medications
  const fetchMedicaments = async () => {
    try {
      const response = await axios.get(API_URL);
      medicaments.value = response.data;
    } catch (error) {
      console.error("Error fetching medications:", error);
    }
  };

  // Handle File Upload (Convert Image to Base64)
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      medicament.value.photo = reader.result;
    };
    reader.readAsDataURL(file);
  };

  // Add or Update Medication 
  const saveMedication = async () => {
    try {
      if (isEditing.value) {
        await axios.put(API_URL, medicament.value);
      } else {
        await axios.post(API_URL, medicament.value);
      }
      fetchMedicaments();
      resetForm();
    } catch (error) {
      console.error("Error saving medication:", error);
    }
  };

  // Edit Medication (original functionality)
  const editMedication = (med) => {
    medicament.value = { ...med };
    isEditing.value = true;
  };

  // Delete Medication
  const deleteMedication = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchMedicaments();
    } catch (error) {
      console.error("Error deleting medication:", error);
    }
  };

  // Increase Medication Quantity (+1)
  const increaseMedicationQuantity = async (id) => {
    try {
      const medToUpdate = medicaments.value.find((med) => med.id === id);
      if (!medToUpdate) {
        console.error("Medication not found");
        return;
      }
      const updatedMedicament = { ...medToUpdate, qte: medToUpdate.qte + 1 };
      await axios.put(`${API_URL}/${id}`, updatedMedicament);
      medToUpdate.qte += 1; 
    } catch (error) {
      console.error(
        "Error increasing quantity:",
        error.response ? error.response.data : error
      );
    }
  };

  // Decrease Medication Quantity (-1)
  const decreaseMedicationQuantity = async (id) => {
    try {
      const medToUpdate = medicaments.value.find((med) => med.id === id);
      if (!medToUpdate || medToUpdate.qte <= 1) {
        console.error("Medication not found or quantity too low");
        return;
      }
      const updatedMedicament = { ...medToUpdate, qte: medToUpdate.qte - 1 };
      await axios.put(`${API_URL}/${id}`, updatedMedicament);
      medToUpdate.qte -= 1; 
    } catch (error) {
      console.error(
        "Error decreasing quantity:",
        error.response ? error.response.data : error
      );
    }
  };

  // Reset Form
  const resetForm = () => {
    medicament.value = {
      id: null,
      denomination: "",
      formepharmaceutique: "",
      photo: "",
      qte: 1,
    };
    isEditing.value = false;
  };

  onMounted(fetchMedicaments);

  return {
    medicaments,
    medicament,
    isEditing,
    saveMedication,
    handleFileUpload,
    editMedication,
    deleteMedication,
    increaseMedicationQuantity,
    decreaseMedicationQuantity,
  };
}
