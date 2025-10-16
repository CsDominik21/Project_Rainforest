<script setup>

</script>
<template>
    <section class="hero d-flex align-items-center justify-content-center text-center text-light">
        <div class="container">
            <h1 class="display-3 fw-bold mb-3">
                Esőőrség
            </h1>
            <p class="lead mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur enim a, dolor ut inventore voluptas tempore, dolores vitae dolorum culpa est nostrum ipsa minima harum modi aut. Cumque, ab maxime.
            </p>
            <button class="btn btn-primary btn-lg">
                Kezdjük el
            </button>
        </div>
    </section>
</template>

<style scoped>
.hero {
    min-height: 1000px;
    background: linear-gradient(rgba(0, 0, 0, 0.55)), url(../assets/hero-bg.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    color: #fff;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.2rem;
    }

    .hero p {
        font-size: 1rem;
    }
}
</style>
