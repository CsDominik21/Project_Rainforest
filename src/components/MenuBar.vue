<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a href="../index.html"><img src="../src/assets/logo_ver2.png" alt="STW logo" title="Mentsd meg az esőerdőket!"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../index.html">Főoldal</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Állatok</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Növények</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Interaktív térkép</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kvíz</a>
            </li>
            <li class="nav-item">
              <a class="nav-link donate" href="#">Támogass minket</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<style scoped>
header{
  background-image: url(assets/hero-bg.jpeg);
}

.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 10px 25px;
}

.navbar-brand {
  font-size: 30px;
  font-weight: 600;
  color: #043216;
  margin-left: 20px;
}

.navbar-brand:hover {
  color: #043216;
}

.navbar-toggler {
  background: transparent;
}

.navbar-nav {
  gap: 10px;
}

.nav-link {
  font-size: 20px;
  font-weight: 500;
  color: #043216;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #206024 !important;
}

.navbar img {
  height: 40px;
  width: auto;
}

nav{
  width: 80%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .navbar-nav {
    padding-top: 15px;
  }

  .nav-link {
    padding: 10px 15px;
  }
}
</style>