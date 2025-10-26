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

const allRole = ref([]);
const allToDo = ref([]);
const allOrganism = ref([]);
const allRainforest = ref([]);
const selectedWildlife = ref(null);
const selectedForest = ref(null);

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
    for (var i = 0; wildlife.length > i; i++) {
        allOrganism.value.push(new Organism(wildlife[i].id, wildlife[i].name, wildlife[i].image, wildlife[i].count, wildlife[i].description));
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
        <div class="hero__overlay"></div>
        <div class="container">
            <h1 class="hero__title animate-float-up p-2">Esőőrség</h1>
            <p class="hero__subtitle animate-float-up">
                Védd meg a Föld tüdejét, csatlakozz az esőerdők őrzőihez! Együtt megállíthatjuk az erdőirtást, óvhatjuk
                a természet kincseit, és biztosíthatjuk a jövő nemzedékeinek a zöldebb bolygót.
            </p>
            <button class="hero__cta animate-float-up">
                <span>Kezdjük el</span>
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </section>

    <section class="roles">
        <div class="container">
            <header class="roles__header">
                <h2 class="roles__title animate-float-up">Az esőerdők szerepe</h2>
                <p class="roles__description animate-float-up">
                    Az esőerdők a Föld egyik legfontosabb ökoszisztémái, amelyek kulcsszerepet játszanak a globális
                    éghajlat szabályozásában, az oxigéntermelésben és a szén-dioxid megkötésében. Emellett számos
                    élőlény otthonai, valamint rengeteg gyógyszeralapanyag és nyersanyag forrásai. Az esőerdők megőrzése
                    létfontosságú az emberiség és a bolygó jövője szempontjából.
                </p>
            </header>

            <div class="roles__grid">
                <article v-for="(role, index) in allRole" :key="index" class="role-card animate-fade-scale"
                    :style="{ animationDelay: role.getDelay() }">
                    <div class="role-card__icon">
                        <i :class="role.getIcon()" aria-hidden="true"></i>
                    </div>
                    <h3 class="role-card__title">{{ role.getTitle() }}</h3>
                    <p class="role-card__text">{{ role.getDesc() }}</p>
                </article>
            </div>
        </div>
    </section>

    <section class="map-section">
        <div class="map-section__bg"></div>
        <div class="container">
            <h2 class="map-section__title">Világ esőerdői</h2>

            <div class="map-container">
                <img src="../assets/world_map.svg" alt="World Map"
                    class="world-map" />

                <div v-for="rainforest in allRainforest" :key="rainforest.getId()" class="forest-marker"
                    :style="{ left: rainforest.getLeft(), top: rainforest.getTop() }"
                    @click="selectedForest = selectedForest?.getId() === rainforest.getId() ? null : rainforest">
                    <div class="marker-dot" :class="{ active: selectedForest?.getId() === rainforest.getId() }"></div>
                    <div class="marker-pulse"></div>
                </div>

                <Transition name="fade-slide">
                    <div v-if="selectedForest" class="forest-info" :key="selectedForest.getId()">
                        <button class="forest-info__close" @click.stop="selectedForest = null">
                            <i class="bi bi-x-lg"></i>
                        </button>
                        <div class="forest-info__image">
                            <img :src="selectedForest.getImage()" :alt="selectedForest.getName()">
                        </div>
                        <div class="forest-info__content">
                            <span class="forest-info__region">{{ selectedForest.getRegion() }}</span>
                            <h3 class="forest-info__name">{{ selectedForest.getName() }}</h3>
                            <p class="forest-info__text">{{ selectedForest.getInfo() }}</p>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </section>

    <section class="wildlife-section">
        <div class="container">
            <h2 class="wildlife-section__title">Élővilág</h2>
            <p class="wildlife-section__description">
                Az esőerdők élővilága páratlanul gazdag: milliónyi növény és állatfaj otthona. Sajnos ez a gazdag
                élővilág egyre nagyobb veszélyben van. Az erdőirtás, az élőhelyek pusztulása és a
                klímaváltozás miatt rengeteg faj a kihalás szélére sodródott. Az esőerdők védelme így nemcsak a
                természet szépségének megőrzését jelenti, hanem a Föld biológiai egyensúlyának fenntartását is.
            </p>

            <div class="wildlife-grid">
                <article v-for="organism in allOrganism" :key="organism.getId()" class="wildlife-card"
                    @click="selectedWildlife = organism">
                    <div class="wildlife-card__image">
                        <img :src="organism.getImage()" :alt="organism.getName()">
                        <div class="wildlife-card__overlay">
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                    <div class="wildlife-card__content">
                        <h3 class="wildlife-card__name">{{ organism.getName() }}</h3>
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
                            <span class="modal-stat-label">Hátralevő egyedek:</span>
                            <span class="modal-stat-value">{{ selectedWildlife.getCount() }}</span>
                        </div>
                        <button class="modal-button" @click="selectedWildlife = null">
                            Tudj meg többet
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </section>

    <section class="cta-section">
        <div class="cta-section__bg"></div>
        <div class="container">
            <div class="cta-content">
                <h2 class="cta-content__title">Teszteld a tudásod</h2>
                <p class="cta-content__text">
                    Próbáld ki, mennyit tudsz az esőerdőkről és élővilágukról! Kvízekkel, feladatokkal és érdekességekkel ellenőrizheted a tudásodat, miközben új információkat is elsajátítasz.
                </p>
                <button class="cta-content__button">
                    <span>Tovább</span>
                    <i class="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    </section>

    <section class="roles">
        <div class="container">
            <header class="roles__header">
                <h2 class="roles__title animate-float-up">Mit tudsz tenni?</h2>
                <p class="roles__description animate-float-up">
                    Az esőerdők védelme mindannyiunk felelőssége. Minden apró lépés számít, a tudatos döntésektől kezdve
                    a közösségi összefogásig. Támogasd a természetet, és legyél része a változásnak, amely megőrzi
                    bolygónk zöld szívét!
                </p>
            </header>

            <div class="roles__grid">
                <article v-for="(todo, index) in allToDo" :key="index" class="role-card animate-fade-scale"
                    :style="{ animationDelay: todo.getDelay() }">
                    <div class="role-card__icon">
                        <i :class="todo.getIcon()" aria-hidden="true"></i>
                    </div>
                    <h3 class="role-card__title">{{ todo.getTitle() }}</h3>
                    <p class="role-card__text">{{ todo.getDesc() }}</p>
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

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }
}

@keyframes glowPulse {

    0%,
    100% {
        opacity: 0.3;
        transform: scale(1);
    }

    50% {
        opacity: 0.6;
        transform: scale(1.1);
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

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    background: url(../assets/hero-bg.jpeg) center/cover fixed;
    position: relative;
    overflow: hidden;
}

.hero__overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, rgba(36, 53, 36, 0.7) 0%, rgba(36, 53, 36, 0.95) 100%);
    z-index: 1;
}

.hero .container {
    position: relative;
    z-index: 2;
}

.hero__title {
    font-size: clamp(2.5rem, 8vw, 7rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, #ffffff 0%, #90ba92 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 4px 12px rgba(144, 186, 146, 0.3));
}

.hero__subtitle {
    font-size: clamp(1.05rem, 2vw, 1.35rem);
    margin-bottom: 2.5rem;
    max-width: 900px;
    margin-inline: auto;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    font-weight: 300;
}

.hero__cta {
    padding: 1.125rem 2.75rem;
    font-size: 1.125rem;
    font-weight: 600;
    border: none;
    border-radius: 60px;
    background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
    color: #243524;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 12px 35px -8px rgba(144, 186, 146, 0.5), 0 0 0 0 rgba(144, 186, 146, 0.4);
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;
    overflow: hidden;
}

.hero__cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #a8d4aa 0%, #90ba92 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.hero__cta span,
.hero__cta i {
    position: relative;
    z-index: 1;
}

.hero__cta i {
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero__cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 45px -8px rgba(144, 186, 146, 0.6), 0 0 0 8px rgba(144, 186, 146, 0.15);
}

.hero__cta:hover::before {
    opacity: 1;
}

.hero__cta:hover i {
    transform: translateX(4px);
}

.hero__cta:active {
    transform: translateY(-1px);
}

.roles {
    background: linear-gradient(180deg, #1a251a 0%, #243524 50%, #25221a 100%);
    padding: 8rem 0;
}

.roles__header {
    text-align: center;
    margin-bottom: 5rem;
    padding-inline: 1rem;
}

.roles__title {
    font-size: clamp(2.25rem, 5vw, 4rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 1.25rem;
    letter-spacing: -0.03em;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.roles__description {
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    color: rgba(255, 255, 255, 0.7);
    max-width: 1100px;
    margin-inline: auto;
    line-height: 1.8;
    font-weight: 300;
}

.roles__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    padding-inline: 1rem;
    max-width: 1200px;
    margin-inline: auto;
}

.role-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    padding: 3rem 2.5rem;
    border-radius: 2rem;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid rgba(144, 186, 146, 0.1);
    position: relative;
    overflow: hidden;
}

.role-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 2rem;
    padding: 2px;
    background: linear-gradient(135deg, #90ba92 0%, transparent 50%, #90ba92 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.6s ease;
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

.role-card__icon {
    width: 90px;
    height: 90px;
    margin: 0 auto 2rem;
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

.role-card:hover .role-card__icon {
    transform: scale(1.15) rotate(-5deg);
    box-shadow: 0 15px 40px -8px rgba(144, 186, 146, 0.7), inset 0 -2px 8px rgba(0, 0, 0, 0.2);
}

.role-card__icon i {
    font-size: 2.25rem;
    color: #243524;
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.role-card:hover .role-card__icon i {
    transform: scale(1.1);
}

.role-card__title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1.125rem;
    letter-spacing: -0.01em;
    transition: color 0.4s ease;
}

.role-card:hover .role-card__title {
    color: #90ba92;
}

.role-card__text {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.7;
    margin: 0;
    font-weight: 300;
    transition: color 0.4s ease;
}

.role-card:hover .role-card__text {
    color: rgba(255, 255, 255, 0.85);
}

.role-card:hover .role-card__text {
    color: rgba(255, 255, 255, 0.85);
}

.map-section {
    background: linear-gradient(180deg, #25221a 0%, #1a251a 100%);
    padding: 8rem 0;
    position: relative;
    overflow: hidden;
}

.map-section__bg {
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

.map-section__title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #ffffff;
    text-align: center;
    margin-bottom: 4rem;
    letter-spacing: -0.02em;
}

.map-container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    aspect-ratio: 2/1;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 2rem;
    padding: 2rem;
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
    border-radius: 1.5rem;
    overflow: hidden;
    width: min(350px, 90vw);
    max-width: 400px;
    border: 1px solid rgba(144, 186, 146, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    z-index: 10;
}

.forest-info__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
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
    font-size: 1rem;
    transition: all 0.3s ease;
    z-index: 11;
}

.forest-info__close:hover {
    background: rgba(144, 186, 146, 0.3);
    transform: rotate(90deg);
}

.forest-info__image {
    width: 100%;
    height: clamp(150px, 40vw, 200px);
    overflow: hidden;
}

.forest-info__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.forest-info:hover .forest-info__image img {
    transform: scale(1.05);
}

.forest-info__content {
    padding: clamp(1rem, 3vw, 1.5rem);
}

.forest-info__region {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #90ba92;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.forest-info__name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.75rem;
}

.forest-info__text {
    font-size: 0.95rem;
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
    padding: 8rem 0;
}

.wildlife-section__title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #ffffff;
    text-align: center;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
}

.wildlife-section__description {
    font-size: clamp(1rem, 2vw, 1.1rem);
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    max-width: 1100px;
    margin: 0 auto 4rem;
    line-height: 1.8;
    padding-inline: 1rem;
}

.wildlife-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding-inline: 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.wildlife-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(144, 186, 146, 0.1);
    border-radius: 1.5rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.wildlife-card:hover {
    transform: translateY(-8px);
    border-color: rgba(144, 186, 146, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.wildlife-card__image {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
    background: rgba(144, 186, 146, 0.1);
}

.wildlife-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.wildlife-card:hover .wildlife-card__image img {
    transform: scale(1.1);
}

.wildlife-card__overlay {
    position: absolute;
    inset: 0;
    background: rgba(36, 53, 36, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.wildlife-card:hover .wildlife-card__overlay {
    opacity: 1;
}

.wildlife-card__overlay i {
    font-size: 2.5rem;
    color: #90ba92;
}

.wildlife-card__content {
    padding: 1.5rem;
}

.wildlife-card__name {
    font-size: 1.5rem;
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
    padding: 1rem;
}

.modal-content {
    background: rgba(36, 53, 36, 0.95);
    border: 1px solid rgba(144, 186, 146, 0.3);
    border-radius: 1.5rem;
    max-width: 500px;
    width: 100%;
    overflow: hidden;
    position: relative;
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
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
    font-size: 1.25rem;
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
    padding: 2rem;
}

.modal-title {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1rem;
}

.modal-description {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.modal-stats {
    background: rgba(144, 186, 146, 0.1);
    border: 1px solid rgba(144, 186, 146, 0.2);
    border-radius: 0.75rem;
    padding: 1rem 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-stat-label {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
}

.modal-stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #90ba92;
}

.modal-button {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
    color: #243524;
    border: none;
    border-radius: 0.75rem;
    font-size: 1rem;
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
    padding: 10rem 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.cta-section__bg {
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
    padding-inline: 1rem;
}

.cta-content__title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 1.5rem;
    letter-spacing: -0.03em;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.cta-content__text {
    font-size: clamp(1.05rem, 2vw, 1.25rem);
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    margin-bottom: 2.5rem;
    font-weight: 300;
}

.cta-content__button {
    padding: 1.25rem 3rem;
    font-size: 1.125rem;
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
    gap: 0.75rem;
    position: relative;
    overflow: hidden;
}

.cta-content__button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #a8d4aa 0%, #90ba92 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.cta-content__button span,
.cta-content__button i {
    position: relative;
    z-index: 1;
}

.cta-content__button i {
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cta-content__button:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 45px -8px rgba(144, 186, 146, 0.6);
}

.cta-content__button:hover::before {
    opacity: 1;
}

.cta-content__button:hover i {
    transform: translateX(4px);
}

.cta-content__button:active {
    transform: translateY(-1px);
}

.cta-content__button:active {
    transform: translateY(-1px);
}

@media (max-width: 768px) {
    .roles {
        padding: 5rem 0;
    }

    .roles__grid {
        gap: 2rem;
        grid-template-columns: 1fr;
    }

    .role-card {
        padding: 2.5rem 2rem;
    }

    .map-section {
        padding: 5rem 0;
    }

    .map-container {
        padding: 1rem;
    }

    .forest-info {
        width: 280px;
    }

    .wildlife-section {
        padding: 5rem 0;
    }

    .wildlife-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .cta-section {
        padding: 6rem 0;
    }
}
</style>