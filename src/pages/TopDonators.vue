<script setup>
import { ref, onMounted, computed } from 'vue';
import ContactForm from '../components/ContactForm.vue';

const donations = ref([]);
const loading = ref(true);

const fetchDonations = async () => {
  loading.value = true;
  
  try {
    const response = await fetch('https://reeldev.hu/api/690c7805b352b794177734/donations');
    
    if (!response.ok) {
      donations.value = [];
      return;
    }
    
    const data = await response.json();
    donations.value = data.sort((a, b) => b.amount - a.amount);
  } catch (err) {
    console.error('Hiba a donations betöltése során:', err);
    donations.value = [];
  } finally {
    loading.value = false;
  }
};

const topDonators = computed(() => {
  return donations.value.slice(0, 10);
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getMedalIcon = (index) => {
  if (index === 0) return 'bi-trophy-fill';
  if (index === 1) return 'bi-award-fill';
  if (index === 2) return 'bi-star-fill';
  return '';
};

const getMedalColor = (index) => {
  if (index === 0) return '#ffd700';
  if (index === 1) return '#c0c0c0';
  if (index === 2) return '#cd7f32';
  return '#90ba92';
};

onMounted(() => {
  fetchDonations();
});
</script>

<template>
  <div class="donators-page">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="page-title p-3">Top Támogatók</h1>
        <p class="page-subtitle">
          Köszönjük minden támogatónknak, akik hozzájárulnak az esőerdők megóvásához!
        </p>
      </div>
    </div>

    <div class="container">
      <div v-if="loading" class="loading-container">
        <div class="spinner"></div>
        <p class="loading-text">Betöltés...</p>
      </div>

      <div v-else-if="topDonators.length === 0" class="empty-container">
        <i class="bi bi-inbox empty-icon"></i>
        <p class="empty-text">Még nem érkezett támogatás</p>
        <p class="empty-subtext">Legyél Te az első támogató!</p>
      </div>

      <div v-else class="donators-grid">
        <div
          v-for="(donation, index) in topDonators"
          :key="index"
          class="donator-card"
          :class="{ 'top-three': index < 3 }"
        >
          <div class="card-header">
            <div class="rank-badge" :style="{ backgroundColor: getMedalColor(index) }">
              <i v-if="getMedalIcon(index)" :class="getMedalIcon(index)" class="medal-icon"></i>
              <span v-else class="rank-number">{{ index + 1 }}</span>
            </div>
            <div class="donator-info">
              <h3 class="donator-name">
                {{ donation.firstName }} {{ donation.lastName }}
              </h3>
              <p class="donation-date">{{ formatDate(donation.date) }}</p>
            </div>
          </div>

          <div class="amount-section">
            <div class="amount-label">Támogatás összege</div>
            <div class="amount-value">{{ donation.amount.toLocaleString('hu-HU') }} Ft</div>
          </div>

          <div v-if="donation.message" class="message-section">
            <i class="bi bi-chat-quote message-icon"></i>
            <p class="message-text">{{ donation.message }}</p>
          </div>


        </div>
      </div>
    </div>
  </div>
  <ContactForm />
</template>

<style scoped>
.donators-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #1a251a 0%, #243524 50%, #25221a 100%);
}

.hero-section {
  position: relative;
  min-height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 32px;
  max-width: 800px;
}

.page-title {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 800;
  margin-top: 100px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #90ba92 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: clamp(18px, 2vw, 21px);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 16px;
}

.loading-container,
.empty-container {
  text-align: center;
  padding: 64px 32px;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 4px solid rgba(144, 186, 146, 0.2);
  border-top-color: #90ba92;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 24px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
}

.empty-icon {
  font-size: 64px;
  color: #90ba92;
  margin-bottom: 24px;
}

.empty-text {
  color: rgba(255, 255, 255, 0.85);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
}

.empty-subtext {
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
}

.donators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
  margin-top: -50px;
}

.donator-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 32px;
  border: 1px solid rgba(144, 186, 146, 0.2);
  transition: all 0.3s ease;
}

.donator-card:hover {
  transform: translateY(-8px);
  border-color: rgba(144, 186, 146, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.top-three {
  border: 2px solid rgba(144, 186, 146, 0.4);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.rank-badge {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  color: #1a251a;
  flex-shrink: 0;
}

.medal-icon {
  font-size: 28px;
}

.rank-number {
  font-size: 24px;
  font-weight: 800;
}

.donator-info {
  flex: 1;
}

.donator-name {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.donation-date {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.amount-section {
  background: rgba(144, 186, 146, 0.15);
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 24px;
}

.amount-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.amount-value {
  font-size: 32px;
  font-weight: 800;
  color: #90ba92;
}

.message-section {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 24px;
}

.message-icon {
  font-size: 20px;
  color: #90ba92;
  margin-bottom: 12px;
}

.message-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
}



@media (max-width: 768px) {
  .hero-section {
    min-height: 30vh;
  }

  .container {
    padding: 32px 16px;
  }

  .donators-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: -30px;
  }

  .donator-card {
    padding: 24px;
  }

  .rank-badge {
    width: 48px;
    height: 48px;
  }

  .amount-value {
    font-size: 28px;
  }
}
</style>