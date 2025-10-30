<script setup>
import { ref, computed } from 'vue';
import Organism from '../classes/Organism.js';
import { wildlife } from '../datas/forestWildlife.js';
import ContactForm from '../components/ContactForm.vue';
import { scrollToSection } from '../utils/scrollToSection.js';

const allAnimals = ref([]);
const selectedAnimal = ref(null);
const searchQuery = ref('');

const scrollToAnimalsSection = () => {
    scrollToSection('.animals-section');
}

const loadAnimals = () => {
    for (let i = 0; i < wildlife.length; i++) {
        if (wildlife[i].type === 'animal') {
            allAnimals.value.push(new Organism(wildlife[i].id, wildlife[i].name, wildlife[i].image, wildlife[i].location, wildlife[i].description, wildlife[i].type));
        }
    }
};

const filteredAnimals = computed(() => {
    if (!searchQuery.value) {
        return allAnimals.value;
    }
    const query = searchQuery.value.toLowerCase();
    return allAnimals.value.filter(animal =>
        animal.getName().toLowerCase().includes(query) ||
        animal.getLocation().toLowerCase().includes(query)
    );
});

loadAnimals();
</script>

<template>
    <section class="hero">
        <div class="hero_overlay"></div>
        <div class="container">
            <h1 class="hero_title animate-float-up p-2">Állatvilág</h1>
            <p class="hero_subtitle animate-float-up">
                Fedezd fel az esőerdők csodálatos állatvilágát! Az itt élő fajok sokszínűsége páratlan, minden egyes lény fontos szerepet játszik az ökoszisztéma egyensúlyában.
            </p>
            <button class="hero_cta animate-float-up" @click="scrollToAnimalsSection">
                <span>Kezdjük el</span>
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </section>

    <section class="animals-section">
        <div class="container">
            <div class="search-container">
                <div class="search-wrapper">
                    <i class="bi bi-search search-icon"></i>
                    <input v-model="searchQuery" type="text" class="search-input"
                        placeholder="Keresés név vagy származási hely alapján...">
                    <button v-if="searchQuery" @click="searchQuery = ''" class="search-clear">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <div class="search-results-count" v-if="searchQuery">
                    {{ filteredAnimals.length }} találat
                </div>
            </div>

            <div v-if="filteredAnimals.length === 0" class="no-results">
                <i class="bi bi-search"></i>
                <p>Nincs találat a keresésre</p>
            </div>

            <div v-else class="animals-grid">
                <article v-for="animal in filteredAnimals" :key="animal.getId()" class="animal-card"
                    @click="selectedAnimal = animal">
                    <div class="animal-card_image">
                        <img :src="animal.getImage()" :alt="animal.getName()">
                        <div class="animal-card_overlay">
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                    <div class="animal-card_content">
                        <h3 class="animal-card_name">{{ animal.getName() }}</h3>
                        <p class="animal-card_location">
                            <i class="bi bi-geo-alt-fill"></i>
                            {{ animal.getLocation() }}
                        </p>
                    </div>
                </article>
            </div>
        </div>

        <Transition name="modal-fade">
            <div v-if="selectedAnimal" class="modal-backdrop" @click="selectedAnimal = null">
                <div class="modal-content" @click.stop>
                    <button class="modal-close" @click="selectedAnimal = null">
                        <i class="bi bi-x-lg"></i>
                    </button>
                    <div class="modal-image">
                        <img :src="selectedAnimal.getImage()" :alt="selectedAnimal.getName()">
                    </div>
                    <div class="modal-body">
                        <h3 class="modal-title">{{ selectedAnimal.getName() }}</h3>
                        <p class="modal-description">{{ selectedAnimal.getDesc() }}</p>
                        <div class="modal-stats">
                            <div>
                                <span class="modal-stat-label">Származási hely:</span>
                            </div>
                            <div>
                                <span class="modal-stat-value">{{ selectedAnimal.getLocation() }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </section>

    <ContactForm />
</template>

<style scoped>
@keyframes floatUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-float-up {
    opacity: 0;
    animation: floatUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animals-section {
    background: linear-gradient(180deg, #1a251a 0%, #243524 50%, #25221a 100%);
    padding: 96px 0 128px;
    min-height: 100vh;
}

.hero{
    background: url(../assets/animals-bg.jpg) center/cover fixed;
}

.search-container {
    max-width: 800px;
    margin: 0 auto 64px;
    padding-inline: 16px;
}

.search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.search-icon {
    position: absolute;
    left: 24px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.4);
    pointer-events: none;
}

.search-input {
    width: 100%;
    padding: 20px 56px 20px 56px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(144, 186, 146, 0.2);
    border-radius: 60px;
    color: #ffffff;
    transition: all 0.3s ease;
}

.search-input::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.search-input:focus {
    outline: none;
    border-color: rgba(144, 186, 146, 0.5);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(144, 186, 146, 0.15);
}

.search-clear {
    position: absolute;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: rgba(144, 186, 146, 0.2);
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.search-clear:hover {
    background: rgba(144, 186, 146, 0.3);
    transform: rotate(90deg);
}

.search-results-count {
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
}

.no-results {
    text-align: center;
    padding: 80px 16px;
    color: rgba(255, 255, 255, 0.5);
}

.no-results i {
    font-size: 64px;
    margin-bottom: 24px;
    opacity: 0.3;
}

.no-results p {
    font-size: 20px;
    margin: 0;
}

.animals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 32px;
    padding-inline: 16px;
    max-width: 1400px;
    margin: 0 auto;
}

.animal-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(144, 186, 146, 0.1);
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.animal-card:hover {
    transform: translateY(-8px);
    border-color: rgba(144, 186, 146, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.animal-card_image {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
    background: rgba(144, 186, 146, 0.1);
}

.animal-card_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.animal-card:hover .animal-card_image img {
    transform: scale(1.1);
}

.animal-card_overlay {
    position: absolute;
    inset: 0;
    background: rgba(36, 53, 36, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.animal-card:hover .animal-card_overlay {
    opacity: 1;
}

.animal-card_overlay i {
    font-size: 40px;
    color: #90ba92;
}

.animal-card_content {
    padding: 24px;
}

.animal-card_name {
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 12px 0;
}

.animal-card_location {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.animal-card_location i {
    color: #90ba92;
}

.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 16px;
}

.modal-content {
    background: rgba(36, 53, 36, 0.95);
    border: 1px solid rgba(144, 186, 146, 0.3);
    border-radius: 24px;
    max-width: 600px;
    width: 100%;
    overflow: hidden;
    position: relative;
}

.modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: all 0.3s ease;
    z-index: 10;
}

.modal-close:hover {
    background: rgba(144, 186, 146, 0.3);
    transform: rotate(90deg);
}

.modal-image {
    width: 100%;
    height: 300px;
    overflow: hidden;
}

.modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal-body {
    padding: 32px;
}

.modal-title {
    font-size: 32px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
}

.modal-description {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.7;
    margin-bottom: 24px;
}

.modal-stats {
    background: rgba(144, 186, 146, 0.1);
    border: 1px solid rgba(144, 186, 146, 0.2);
    border-radius: 12px;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}

.modal-stats div {
    margin: 0 auto;
    text-align: center;
}

.modal-stat-label {
    font-size: 15.2px;
    color: rgba(255, 255, 255, 0.7);
    margin-right: 10px;
}

.modal-stat-value {
    font-size: 24px;
    font-weight: 700;
    color: #90ba92;
    margin-bottom: 2px;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: all 0.3s ease;
}

.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
    transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-from .modal-content {
    transform: scale(0.9) translateY(20px);
}

.modal-fade-leave-to .modal-content {
    transform: scale(0.9) translateY(-20px);
}

@media (max-width: 768px) {
    .hero {
        min-height: 60vh;
    }

    .animals-section {
        padding: 64px 0 96px;
    }

    .search-container {
        margin-bottom: 48px;
    }

    .animals-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .modal-image {
        height: 200px;
    }

    .modal-body {
        padding: 24px;
    }

    .modal-title {
        font-size: 24px;
    }

    .modal-description {
        font-size: 14px;
    }
}
</style>