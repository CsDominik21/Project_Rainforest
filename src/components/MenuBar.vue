<script setup>
import DonationModal from './DonationModal.vue';
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const showModal = ref(false);

const handleDonationSubmit = (donationData) => {
  console.log('Sikeres támogatás:', donationData);
  showModal.value = false;
  router.push('/top-donators')
};

const openModal = () => {
  showModal.value = true;
};

const isActive = (path) => {
  return route.path === path;
};

const isWildlifeActive = computed(() => {
  return route.path === '/animals' || route.path === '/plants';
});
</script>

<template>
  <nav class="navbar navbar-expand-xl bg-body-tertiary">
    <div class="container-fluid">
      <div>
        <a><router-link to="/" title="Index"><img src="../assets/logo.png" alt="Esőőrség logo" title="Mentsd meg az esőerdőket!"></router-link></a>
      </div>
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" title="Index">
                <a class="nav-link" :class="{ active: isActive('/') }" aria-current="page">
                  <i class="bi bi-house-fill"></i> Főoldal
                </a>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" :class="{ active: isWildlifeActive }">
                <i class="bi bi-leaf-fill"></i> Élővilág
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/animals" title="Animals">
                    <a class="nav-link" :class="{ active: isActive('/animals') }">Állatok</a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/plants" title="Plants">
                    <a class="nav-link" :class="{ active: isActive('/plants') }">Növények</a>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/quiz" title="Quiz">
                <a class="nav-link" :class="{ active: isActive('/quiz') }">
                  <i class="bi bi-card-checklist"></i> Kvíz
                </a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/team" title="Team">
                <a class="nav-link" :class="{ active: isActive('/team') }">
                  <i class="bi bi-people-fill"></i> Csapatunk
                </a>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="openModal">Támogass minket</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <DonationModal 
    v-if="showModal" 
    @close="showModal = false"
    @submit="handleDonationSubmit"
  />
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");

a{
  text-decoration: none !important;
}

.navbar {
  background-color: rgba(36, 53, 36, 0.9) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 0px 25px;
  position: fixed;
  z-index: 1100;
}

.nav-item:hover::after,
.navbar,
.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  width: 100%;
}

.navbar,
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::before,
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::after {
  top: 0;
}

.navbar-toggler {
  border: none;
  padding: 8px;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler-icon {
  background-image: none;
  width: 25px;
  height: 2px;
}

.navbar-toggler-icon,
.nav-item {
  position: relative;
}

.navbar-toggler-icon,
.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  background-color: #fff;
  transition: all 0.3s ease;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: '';
  height: 100%;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after,
.nav-item:nth-child(-n+4)::after {
  left: 0;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after,
.nav-item:nth-child(-n+4)::after {
  position: absolute;
}

.navbar-toggler-icon::before {
  top: -7px;
}

.navbar-toggler-icon::after {
  top: 7px;
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  background-color: transparent;
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::before {
  transform: rotate(45deg);
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::after {
  transform: rotate(-45deg);
}

.nav-item:nth-child(-n+4)::after {
  content: "";
  bottom: 0;
  width: 0%;
  height: 3px;
  background-color: #90ba92;
  transition: width 0.3s;
}

.nav-item:hover::after {
  width: 100%;
}

.navbar-toggler {
  background: transparent;
}

.navbar-nav {
  gap: 10px;
}

.dropdown-menu .nav-link {
  text-transform: none;
  font-size: 13px;
  font-weight: 400;
  margin: 5px 5px;
}

.dropdown-menu .nav-link:hover {
  color: #cabba2 !important;
}

.dropdown-menu li:nth-of-type(1) {
  border-bottom: 1px solid #493e2b !important;
}

.dropdown-menu {
  padding: 0px;
}

.nav-link {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  transition: color 0.3s ease;
  margin: 25px 5px 20px 5px;
}

.nav-link:hover,
.nav-link.active {
  color: #90ba92 !important;
}

.navbar img {
  height: 60px;
  width: auto;
  margin: 14px 5px 14px 0px;
}

.container-fluid {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
}

.nav-item.dropdown .dropdown-menu {
  display: block;
  opacity: 0;
  visibility: hidden;
  transition: opacity 200ms ease, transform 200ms ease, visibility 200ms ease;
}

.nav-item.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}

.dropdown-menu {
  background-color: #25221a;
  border-radius: 0;
  margin-top: 3px !important;
}

.navbar-nav .nav-item:nth-of-type(5) {
  background-color: #ecb338;
  border-bottom: 5px solid #8c6e16;
}

.navbar-nav .nav-item:nth-of-type(5) .nav-link {
  color: #685617;
}

.navbar-nav .nav-item:nth-of-type(5) .nav-link:hover {
  color: #fff !important;
}

.nav-item {
  cursor: pointer;
}

@media (max-width: 1199px) {
  .nav-item.dropdown .dropdown-menu {
    opacity: 1 !important;
    visibility: visible !important;
    background-color: #1a251a;
  }

  #navbarSupportedContent {
    transition: transform 0.2s ease-in-out;
    width: 100%;
    position: fixed;
    top: 88px;
    right: 0;
    bottom: 0;
    background-color: #243524;
    padding: 10px 20px;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  }

  #navbarSupportedContent:not(.show) {
    transform: translateX(100%);
    visibility: hidden;
  }

  #navbarSupportedContent.show {
    transform: translateX(0);
    visibility: visible;
  }

  .nav-link {
    padding: 10px;
    margin: 10px 5px;
  }

  .nav-link, .navbar-nav .nav-item:nth-of-type(5){
    text-align: center;
  }

  .navbar-nav .nav-item:nth-of-type(5) {
    margin-top: 15px;
    border-radius: 5px;
  }

  .nav-item:nth-child(-n+4)::after {
    content: none;
  }
}

@media (min-width: 1200px) and (max-width: 1484px) {
  .container-fluid div {
    margin: 0 auto;
  }
  .navbar img {
    display: none;
  }
}

@media (max-width: 470px) {
  .navbar img {
    height: 38px;
    margin: 25px 5px 25px 0px;
  }
}
</style>