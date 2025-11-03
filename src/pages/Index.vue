<script setup>
import ContactForm from '../components/ContactForm.vue';
import { ref } from 'vue';
import Role from '../classes/Role.js';
import { roles } from '../datas/forestRoles.js';
import ToDo from '../classes/ToDo.js';
import { toDos } from '../datas/forestToDos.js';
import Organism from '../classes/Organism.js';
import { wildlife } from '../datas/forestWildlife.js';
import Rainforest from '../classes/Rainforest.js';
import { rainforests } from '../datas/rainforests.js';
import { scrollToSection } from '../utils/scrollToSection.js';

const allRole = ref([]);
const allToDo = ref([]);
const allOrganism = ref([]);
const allRainforest = ref([]);
const selectedWildlife = ref(null);
const selectedForest = ref(null);
const organismCount = 6;

const scrollToRoles = () => {
    scrollToSection('.roles');
}

const loadRoles = () => {
    for (var i = 0; roles.length > i; i++) {
        allRole.value.push(new Role(roles[i].icon, roles[i].title, roles[i].description, roles[i].delay));
    }
}

const loadToDos = () => {
    for (var i = 0; toDos.length > i; i++) {
        allToDo.value.push(new ToDo(toDos[i].icon, toDos[i].title, toDos[i].description, toDos[i].delay));
    }
}

const loadWildlife = () => {
    for (var i = 0; organismCount > i; i++) {
        allOrganism.value.push(new Organism(wildlife[i].id, wildlife[i].name, wildlife[i].image, wildlife[i].location, wildlife[i].description, wildlife[i].type));
    }
}

const loadRainforest = () => {
    for (var i = 0; rainforests.length > i; i++) {
        allRainforest.value.push(new Rainforest(rainforests[i].id, rainforests[i].name, rainforests[i].left, rainforests[i].top, rainforests[i].image, rainforests[i].info, rainforests[i].region));
    }
}

loadRoles();
loadToDos();
loadWildlife();
loadRainforest();
</script>

<template>
    <section class="hero">
        <div class="hero_overlay"></div>
        <div class="container">
            <h1 class="hero_title animate-float-up p-2">Esőőrség</h1>
            <p class="hero_subtitle animate-float-up">
                Védd meg a Föld tüdejét, csatlakozz az esőerdők őrzőihez! Együtt megállíthatjuk az erdőirtást, óvhatjuk
                a természet kincseit, és biztosíthatjuk a jövő nemzedékeinek a zöldebb bolygót.
            </p>
            <button class="hero_cta animate-float-up" @click="scrollToRoles">
                <span>Kezdjük el</span>
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </section>

    <section class="roles">
        <div class="container">
            <div class="roles_header">
                <h2 class="roles_title animate-float-up">Az esőerdők szerepe</h2>
                <p class="roles_description animate-float-up">
                    Az esőerdők a Föld egyik legfontosabb ökoszisztémái, amelyek kulcsszerepet játszanak a globális
                    éghajlat szabályozásában, az oxigéntermelésben és a szén-dioxid megkötésében. Emellett számos
                    élőlény otthonai, valamint rengeteg gyógyszeralapanyag és nyersanyag forrásai. Az esőerdők megőrzése
                    létfontosságú az emberiség és a bolygó jövője szempontjából.
                </p>
            </div>

            <div class="roles_grid">
                <article v-for="(role, index) in allRole" :key="index" class="role-card animate-fade-scale"
                    :style="{ animationDelay: role.getDelay() }">
                    <div class="role-card_icon">
                        <i :class="role.getIcon()" aria-hidden="true"></i>
                    </div>
                    <h3 class="role-card_title">{{ role.getTitle() }}</h3>
                    <p class="role-card_text">{{ role.getDesc() }}</p>
                </article>
            </div>
        </div>
    </section>

    <section class="map-section">
        <div class="map-section_bg"></div>
        <div class="container">
            <h2 class="map-section_title">Világ esőerdői</h2>

            <div class="map-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Simple_world_map.svg" alt="World Map"
                    class="world-map" />

                <div v-for="rainforest in allRainforest" :key="rainforest.getId()" class="forest-marker"
                    :style="{ left: rainforest.getLeft(), top: rainforest.getTop() }"
                    @click="selectedForest = selectedForest?.getId() === rainforest.getId() ? null : rainforest">
                    <div class="marker-dot" :class="{ active: selectedForest?.getId() === rainforest.getId() }"></div>
                    <div class="marker-pulse"></div>
                </div>

                <Transition name="fade-slide">
                    <div v-if="selectedForest" class="forest-info" :key="selectedForest.getId()">
                        <button class="forest-info_close" @click.stop="selectedForest = null">
                            <i class="bi bi-x-lg"></i>
                        </button>
                        <div class="forest-info_image">
                            <img :src="selectedForest.getImage()" :alt="selectedForest.getName()">
                        </div>
                        <div class="forest-info_content">
                            <span class="forest-info_region">{{ selectedForest.getRegion() }}</span>
                            <h3 class="forest-info_name">{{ selectedForest.getName() }}</h3>
                            <p class="forest-info_text">{{ selectedForest.getInfo() }}</p>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </section>

    <section class="wildlife-section">
        <div class="container">
            <h2 class="wildlife-section_title">Élővilág</h2>
            <p class="wildlife-section_description">
                Az esőerdők élővilága páratlanul gazdag, milliónyi növény és állatfaj otthona. Sajnos ez a gazdag
                élővilág egyre nagyobb veszélyben van. Az erdőirtás, az élőhelyek pusztulása és a klímaváltozás miatt
                rengeteg faj a kihalás szélére sodródott. Az esőerdők védelme így nemcsak a természet szépségének
                megőrzését jelenti, hanem a Föld biológiai egyensúlyának fenntartását is.
            </p>

            <div class="wildlife-grid">
                <article v-for="organism in allOrganism" :key="organism.getId()" class="wildlife-card"
                    @click="selectedWildlife = organism">
                    <div class="wildlife-card_image">
                        <img :src="organism.getImage()" :alt="organism.getName()">
                        <div class="wildlife-card_overlay">
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                    <div class="wildlife-card_content">
                        <h3 class="wildlife-card_name">{{ organism.getName() }}</h3>
                    </div>
                </article>
            </div>
        </div>

        <Transition name="modal-fade">
            <div v-if="selectedWildlife" class="modal-backdrop" @click="selectedWildlife = null">
                <div class="modal-content" @click.stop>
                    <button class="modal-close" @click="selectedWildlife = null">
                        <i class="bi bi-x-lg"></i>
                    </button>
                    <div class="modal-image">
                        <img :src="selectedWildlife.getImage()" :alt="selectedWildlife.getName()">
                    </div>
                    <div class="modal-body">
                        <h3 class="modal-title">{{ selectedWildlife.getName() }}</h3>
                        <p class="modal-description">{{ selectedWildlife.getDesc() }}</p>
                        <div class="modal-stats">
                            <div>
                                <span class="modal-stat-label">Származási hely:</span>
                            </div>
                            <div>
                                <span class="modal-stat-value">{{ selectedWildlife.getLocation() }}</span>
                            </div>
                        </div>
                        <div v-if="selectedWildlife.getType() == 'animal'">
                            <router-link to="/animals" title="Animals"><button class="modal-button"
                                    @click="selectedWildlife = null">
                                    Több állat megtekintése
                                </button></router-link>
                        </div>
                        <div v-else>
                            <router-link to="/plants" title="Plants"><button class="modal-button"
                                    @click="selectedWildlife = null">
                                    Több növény megtekintése
                                </button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </section>

    <section class="cta-section">
        <div class="cta-section_bg"></div>
        <div class="container">
            <div class="cta-content">
                <h2 class="cta-content_title">Teszteld a tudásod</h2>
                <p class="cta-content_text">
                    Próbáld ki, mennyit tudsz az esőerdőkről és élővilágukról! Kvízekkel ellenőrizheted a tudásodat,
                    miközben új információkat is elsajátítasz.
                </p>
                <router-link to="/quiz" title="Quiz"><button class="cta-content_button">
                        <span>Tovább</span>
                        <i class="bi bi-arrow-right"></i>
                    </button></router-link>
            </div>
        </div>
    </section>

    <section class="roles">
        <div class="container">
            <div class="roles_header">
                <h2 class="roles_title animate-float-up">Mit tudsz tenni?</h2>
                <p class="roles_description animate-float-up">
                    Az esőerdők védelme mindannyiunk felelőssége. Minden apró lépés számít, a tudatos döntésektől kezdve
                    a közösségi összefogásig. Támogasd a természetet, és legyél része a változásnak, amely megőrzi
                    bolygónk zöld szívét!
                </p>
            </div>

            <div class="roles_grid">
                <article v-for="(todo, index) in allToDo" :key="index" class="role-card animate-fade-scale"
                    :style="{ animationDelay: todo.getDelay() }">
                    <div class="role-card_icon">
                        <i :class="todo.getIcon()" aria-hidden="true"></i>
                    </div>
                    <h3 class="role-card_title">{{ todo.getTitle() }}</h3>
                    <p class="role-card_text">{{ todo.getDesc() }}</p>
                </article>
            </div>
        </div>
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

@keyframes fadeScale {
    from {
        opacity: 0;
        transform: scale(0.85) translateY(30px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.animate-float-up {
    opacity: 0;
    animation: floatUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-scale {
    opacity: 0;
    animation: fadeScale 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero{
    background: url(../assets/hero-bg.jpeg) center/cover fixed;
}

.roles {
    background: linear-gradient(180deg, #1a251a 0%, #243524 50%, #25221a 100%);
    padding: 128px 0;
}

.roles_header {
    text-align: center;
    margin-bottom: 80px;
    padding-inline: 16px;
}

.roles_title {
    font-size: clamp(36px, 5vw, 64px);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    letter-spacing: -0.03em;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.roles_description {
    font-size: clamp(16.8px, 2vw, 19.2px);
    color: rgba(255, 255, 255, 0.7);
    max-width: 1100px;
    margin-inline: auto;
    line-height: 1.8;
    font-weight: 300;
}

.roles_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    padding-inline: 16px;
    max-width: 1000px;
    margin-inline: auto;
}

.role-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    padding: 48px 30px;
    border-radius: 32px;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid rgba(144, 186, 146, 0.1);
    position: relative;
    overflow: hidden;
}

.role-card:hover {
    transform: translateY(-16px) scale(1.02);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(144, 186, 146, 0.3);
    box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(144, 186, 146, 0.2), 0 0 40px rgba(144, 186, 146, 0.2);
}

.role-card:hover::before,
.role-card:hover {
    opacity: 1;
}

.role-card_icon {
    width: 90px;
    height: 90px;
    margin: 0 auto 32px;
    background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px -8px rgba(144, 186, 146, 0.5), inset 0 -2px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    z-index: 1;
}

.role-card:hover .role-card_icon {
    transform: scale(1.15) rotate(-5deg);
    box-shadow: 0 15px 40px -8px rgba(144, 186, 146, 0.7), inset 0 -2px 8px rgba(0, 0, 0, 0.2);
}

.role-card_icon i {
    font-size: 36px;
    color: #243524;
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.role-card:hover .role-card_icon i {
    transform: scale(1.1);
}

.role-card_title {
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 18px;
    letter-spacing: -0.01em;
    transition: color 0.4s ease;
}

.role-card:hover .role-card_title {
    color: #90ba92;
}

.role-card_text {
    font-size: 16.8px;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.7;
    margin: 0;
    font-weight: 300;
    transition: color 0.4s ease;
}

.role-card:hover .role-card_text {
    color: rgba(255, 255, 255, 0.85);
}

.role-card:hover .role-card_text {
    color: rgba(255, 255, 255, 0.85);
}

.map-section {
    background: linear-gradient(180deg, #25221a 0%, #1a251a 100%);
    padding: 128px 0;
    position: relative;
    overflow: hidden;
}

.map-section_bg {
    position: absolute;
    inset: 0;
    background: url(../assets/map-bg.jpg) center/cover fixed;
    opacity: 0.08;
    filter: grayscale(100%);
}

.map-section .container {
    position: relative;
    z-index: 1;
}

.map-section_title {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 800;
    color: #ffffff;
    text-align: center;
    margin-bottom: 64px;
    letter-spacing: -0.02em;
}

.map-container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    aspect-ratio: 2/1;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 32px;
    padding: 32px;
    border: 1px solid rgba(144, 186, 146, 0.15);
}

.world-map {
    width: 100%;
    height: 100%;
    filter: brightness(0.7) contrast(1.2) drop-shadow(0 0 20px rgba(144, 186, 146, 0.15));
    opacity: 0.9;
}

.forest-marker {
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 2;
}

.marker-dot {
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 12px rgba(144, 186, 146, 0.6);
    transition: all 0.3s ease;
}

.marker-dot.active {
    transform: scale(1.3);
    box-shadow: 0 6px 20px rgba(144, 186, 146, 0.8);
    border-color: rgba(255, 255, 255, 0.6);
}

.forest-marker:hover .marker-dot {
    transform: scale(1.2);
    box-shadow: 0 5px 16px rgba(144, 186, 146, 0.7);
}

.marker-pulse {
    position: absolute;
    inset: -8px;
    border: 2px solid #90ba92;
    border-radius: 50%;
    animation: pulse 2s ease-out infinite;
    opacity: 0;
}

@keyframes pulse {
    0% {
        transform: scale(0.8);
        opacity: 1;
    }

    100% {
        transform: scale(2.5);
        opacity: 0;
    }
}

.forest-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(36, 53, 36, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    overflow: hidden;
    width: min(350px, 90vw);
    max-width: 400px;
    border: 1px solid rgba(144, 186, 146, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    z-index: 10;
}

.forest-info_close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transition: all 0.3s ease;
    z-index: 11;
}

.forest-info_close:hover {
    background: rgba(144, 186, 146, 0.3);
    transform: rotate(90deg);
}

.forest-info_image {
    width: 100%;
    height: clamp(150px, 40vw, 200px);
    overflow: hidden;
}

.forest-info_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.forest-info:hover .forest-info_image img {
    transform: scale(1.05);
}

.forest-info_content {
    padding: clamp(16px, 3vw, 24px);
}

.forest-info_region {
    display: inline-block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #90ba92;
    margin-bottom: 8px;
    font-weight: 600;
}

.forest-info_name {
    font-size: clamp(20px, 4vw, 24px);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 12px;
}

.forest-info_text {
    font-size: clamp(13.6px, 2.5vw, 15.2px);
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.6;
    margin: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translate(-50%, -45%);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translate(-50%, -55%);
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translate(-50%, -45%);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translate(-50%, -55%);
}

.wildlife-section {
    background: linear-gradient(180deg, #1a251a 0%, #243524 100%);
    padding: 128px 0;
}

.wildlife-section_title {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 800;
    color: #ffffff;
    text-align: center;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
}

.wildlife-section_description {
    font-size: clamp(16px, 2vw, 17.6px);
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    max-width: 1100px;
    margin: 0 auto 64px;
    line-height: 1.8;
    padding-inline: 16px;
}

.wildlife-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    padding-inline: 16px;
    max-width: 1200px;
    margin: 0 auto;
}

.wildlife-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(144, 186, 146, 0.1);
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.wildlife-card:hover {
    transform: translateY(-8px);
    border-color: rgba(144, 186, 146, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.wildlife-card_image {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
    background: rgba(144, 186, 146, 0.1);
}

.wildlife-card_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.wildlife-card:hover .wildlife-card_image img {
    transform: scale(1.1);
}

.wildlife-card_overlay {
    position: absolute;
    inset: 0;
    background: rgba(36, 53, 36, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.wildlife-card:hover .wildlife-card_overlay {
    opacity: 1;
}

.wildlife-card_overlay i {
    font-size: 40px;
    color: #90ba92;
}

.wildlife-card_content {
    padding: 24px;
}

.wildlife-card_name {
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    text-align: center;
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
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}

.modal-stats div{
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

.modal-button {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
    color: #243524;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.modal-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(144, 186, 146, 0.4);
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

.modal-fade-leave-to .modal-content {
    transform: scale(0.9) translateY(-20px);
}

.cta-section {
    min-height: 100vh;
    background: linear-gradient(180deg, #243524 0%, #1a251a 100%);
    padding: 160px 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.cta-section_bg {
    position: absolute;
    inset: 0;
    background: url(../assets/leaves-bg.jpg) center/cover fixed;
    opacity: 0.15;
    filter: grayscale(50%);
}

.cta-section .container {
    position: relative;
    z-index: 1;
}

.cta-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding-inline: 16px;
}

.cta-content_title {
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 24px;
    letter-spacing: -0.03em;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.cta-content_text {
    font-size: clamp(16.8px, 2vw, 20px);
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    margin-bottom: 40px;
    font-weight: 300;
}

.cta-content_button {
    padding: 20px 48px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 60px;
    background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
    color: #243524;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 12px 35px -8px rgba(144, 186, 146, 0.5);
    display: inline-flex;
    align-items: center;
    gap: 12px;
    position: relative;
    overflow: hidden;
}

.cta-content_button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #a8d4aa 0%, #90ba92 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.cta-content_button span,
.cta-content_button i {
    position: relative;
    z-index: 1;
}

.cta-content_button i {
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cta-content_button:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 45px -8px rgba(144, 186, 146, 0.6);
}

.cta-content_button:hover::before {
    opacity: 1;
}

.cta-content_button:hover i {
    transform: translateX(4px);
}

.cta-content_button:active {
    transform: translateY(-1px);
}

.cta-content_button:active {
    transform: translateY(-1px);
}

@media (max-width: 768px) {
    .roles {
        padding: 80px 0;
    }

    .roles_grid {
        gap: 32px;
        grid-template-columns: 1fr;
    }

    .role-card {
        padding: 40px 30px;
    }

    .role-card_title{
        font-size: 24px;
    }

    .map-section {
        padding: 80px 0;
    }

    .map-container {
        padding: 16px;
        border-radius: 16px;
    }

    .forest-info {
        width: min(320px, 85vw);
        border-radius: 16px;
    }

    .forest-info_close {
        width: 32px;
        height: 32px;
        font-size: 14px;
        top: 12px;
        right: 12px;
    }

    .forest-info_image {
        height: clamp(120px, 35vw, 150px);
    }

    .forest-info_content {
        padding: 16px;
    }

    .forest-info_region {
        font-size: 10.4px;
    }

    .forest-info_name {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .forest-info_text {
        font-size: 12.8px;
        line-height: 1.5;
    }

    .marker-dot {
        width: 14px;
        height: 14px;
    }

    .marker-dot.active {
        transform: scale(1.2);
    }

    .wildlife-section {
        padding: 80px 0;
    }

    .wildlife-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .cta-section {
        padding: 96px 0;
    }

    .modal-image {
        display: none;
    }

    .modal-title {
        text-align: center;
    }
}
</style>