<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['close', 'submit']);

const selectedAmount = ref(null);
const customAmount = ref('');
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const address = ref('');
const message = ref('');
const errors = ref({});

const predefinedAmounts = [1000, 2500, 5000];

const finalAmount = computed(() => {
  if (selectedAmount.value === 'custom') {
    return parseInt(customAmount.value) || 0;
  }
  return selectedAmount.value || 0;
});

const selectAmount = (amount) => {
  selectedAmount.value = amount;
  if (amount !== 'custom') {
    customAmount.value = '';
  }
};

const validateForm = () => {
  errors.value = {};
  
  if (!firstName.value.trim()) {
    errors.value.firstName = 'Vezetéknév megadása kötelező';
  }
  
  if (!lastName.value.trim()) {
    errors.value.lastName = 'Keresztnév megadása kötelező';
  }
  
  if (!email.value.trim()) {
    errors.value.email = 'Email megadása kötelező';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = 'Érvénytelen email formátum';
  }
  
  if (!phone.value.trim()) {
    errors.value.phone = 'Telefon megadása kötelező';
  }
  
  if (!address.value.trim()) {
    errors.value.address = 'Lakcím megadása kötelező';
  }
  
  if (finalAmount.value <= 0) {
    errors.value.amount = 'Kérjük válasszon összeget';
  }
  
  if (selectedAmount.value === 'custom' && !customAmount.value) {
    errors.value.customAmount = 'Kérjük adja meg az egyedi összeget';
  }
  
  return Object.keys(errors.value).length === 0;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  const donationData = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    address: address.value.trim(),
    message: message.value.trim(),
    amount: finalAmount.value,
    date: new Date().toISOString()
  };

  try {
    const response = await fetch('https://crudcrud.com/api/7e67d35aaab24a08990af046505df2a8/donations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationData)
    });

    if (response.ok) {
      emit('submit', donationData);
      resetForm();
    }
  } catch (error) {
    console.error('Hiba történt a donate küldése során:', error);
  }
};

const resetForm = () => {
  selectedAmount.value = null;
  customAmount.value = '';
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  phone.value = '';
  address.value = '';
  message.value = '';
  errors.value = {};
};

const closeModal = () => {
  resetForm();
  emit('close');
};
</script>

<template>
  <div class="modal-backdrop" @click.self="closeModal">
    <div class="modal-container">
      <div class="modal-header">
        <h2 class="modal-title">Támogatás</h2>
        <button class="close-button" @click="closeModal">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="modal-body">
        <div class="amount-section">
          <div class="amount-buttons">
            <button
              v-for="amount in predefinedAmounts"
              :key="amount"
              class="amount-button"
              :class="{ 'amount-selected': selectedAmount === amount }"
              @click="selectAmount(amount)"
            >
              {{ amount }} Ft
            </button>
            <button
              class="amount-button"
              :class="{ 'amount-selected': selectedAmount === 'custom' }"
              @click="selectAmount('custom')"
            >
              Egyedi
            </button>
          </div>
          
          <div v-if="selectedAmount === 'custom'" class="custom-amount-input">
            <input
              v-model="customAmount"
              type="number"
              placeholder="Adja meg az összeget"
              class="form-input"
              :class="{ 'input-error': errors.customAmount }"
            />
            <span v-if="errors.customAmount" class="error-message">{{ errors.customAmount }}</span>
          </div>
          
          <span v-if="errors.amount" class="error-message">{{ errors.amount }}</span>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Vezetéknév</label>
            <input
              v-model="firstName"
              type="text"
              class="form-input"
              :class="{ 'input-error': errors.firstName }"
              placeholder="Vezetéknév"
            />
            <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
          </div>

          <div class="form-group">
            <label class="form-label">Keresztnév</label>
            <input
              v-model="lastName"
              type="text"
              class="form-input"
              :class="{ 'input-error': errors.lastName }"
              placeholder="Keresztnév"
            />
            <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
          </div>

          <div class="form-group">
            <label class="form-label">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-input"
              :class="{ 'input-error': errors.email }"
              placeholder="pelda@email.com"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label class="form-label">Telefon</label>
            <input
              v-model="phone"
              type="tel"
              class="form-input"
              :class="{ 'input-error': errors.phone }"
              placeholder="+36 30 123 4567"
            />
            <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
          </div>

          <div class="form-group full-width">
            <label class="form-label">Lakcím</label>
            <input
              v-model="address"
              type="text"
              class="form-input"
              :class="{ 'input-error': errors.address }"
              placeholder="Város, utca, házszám"
            />
            <span v-if="errors.address" class="error-message">{{ errors.address }}</span>
          </div>

          <div class="form-group full-width">
            <label class="form-label">Üzenet</label>
            <textarea
              v-model="message"
              class="form-textarea"
              placeholder="Üzenet (opcionális)"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="submit-button" @click="handleSubmit">
          Küldés
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(144, 186, 146, 0.2);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 24px;
  border-bottom: 1px solid rgba(144, 186, 146, 0.2);
}

.modal-title {
  font-size: 28px;
  font-weight: 800;
  color: #90ba92;
  margin: 0;
}

.close-button {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-button:hover {
  color: #ffffff;
  transform: rotate(90deg);
}

.modal-body {
  padding: 32px;
}

.amount-section {
  margin-bottom: 32px;
}

.amount-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.amount-button {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(144, 186, 146, 0.2);
  padding: 16px 12px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.amount-button:hover {
  background: rgba(144, 186, 146, 0.15);
  border-color: rgba(144, 186, 146, 0.4);
}

.amount-selected {
  background: rgba(144, 186, 146, 0.25) !important;
  border: 2px solid #90ba92 !important;
}

.custom-amount-input {
  margin-top: 16px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(144, 186, 146, 0.2);
  border-radius: 12px;
  padding: 14px 16px;
  color: #ffffff;
  font-size: 15px;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: rgba(144, 186, 146, 0.5);
  background: rgba(255, 255, 255, 0.12);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-textarea {
  resize: vertical;
  font-family: inherit;
}

.input-error {
  border-color: #ba5a5a !important;
}

.error-message {
  color: #ff6b6b;
  font-size: 13px;
  margin-top: 6px;
  display: block;
}

.modal-footer {
  padding: 24px 32px 32px;
  border-top: 1px solid rgba(144, 186, 146, 0.2);
}

.submit-button {
  width: 100%;
  background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
  color: #ffffff;
  border: none;
  padding: 18px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(144, 186, 146, 0.3);
}

@media (max-width: 768px) {
  .modal-container {
    max-height: 95vh;
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 24px 20px;
  }

  .amount-buttons {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>