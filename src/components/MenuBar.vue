<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div>
        <a href="../index.html"><img src="../assets/logo.png" alt="Esőőrség logo" title="Mentsd meg az esőerdőket!"></a>
      </div>
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" href="#">
              <a class="nav-link active" aria-current="page" href="../index.html"><i class="bi bi-house-fill"></i>
                Főoldal</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">
                <i class="bi bi-leaf-fill"></i> Élővilág
              </a>
              <ul class="dropdown-menu">
                <li><a class="nav-link" href="#">Állatok</a></li>
                <li><a class="nav-link" href="#">Növények</a></li>
              </ul>
            </li>
            <li class="nav-item" href="#">
              <a class="nav-link"><i class="bi bi-card-checklist"></i> Kvíz</a>
            </li>
            <li class="nav-item" href="#">
              <a class="nav-link"><i class="bi bi-people-fill"></i> Csapatunk</a>
            </li>
            <li class="nav-item" href="#">
              <a class="nav-link">Támogass minket</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");

.navbar {
  background-color: #243524 !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 0px 25px;
}

.nav-item:nth-child(-n+4)::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 3px;
  background-color: #90ba92;
  transition: width 0.3s 
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

.dropdown-menu .nav-link{
  text-transform: none;
  font-size: 13px;
  font-weight: 400;
  margin: 5px 5px;
}

.dropdown-menu .nav-link:hover{
  color: #cabba2 !important;
}

.dropdown-menu li:nth-of-type(1){
  border-bottom: 1px solid #493e2b !important;
}

.dropdown-menu{
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
.nav-link.active,
.nav-link .dropdown-toggle:active {
  color: #90ba92 !important;
}

.navbar img {
  height: 60px;
  width: auto;
}

.container-fluid {
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
}

.nav-item.dropdown .dropdown-menu {
  display: block;
  opacity: 0;
  visibility: hidden;
  transition: opacity 220ms ease, transform 220ms ease, visibility 220ms ease;
}

.nav-item.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}

.dropdown-menu{
  background-color: #25221a;
  border-radius: 0;
  margin-top: 3px !important;
}

.navbar-nav .nav-item:nth-of-type(5){
  background-color: #ecb338;
  border-bottom: 5px solid #8c6e16;
}

.navbar-nav .nav-item:nth-of-type(5) .nav-link{
  color: #685617;
}

.navbar-nav .nav-item:nth-of-type(5) .nav-link:hover{
  color: #ffffff !important;
}

.nav-item{
  cursor: pointer;
  position: relative;
}

@media (max-width: 768px) {
  .navbar-nav {
    padding-top: 15px;
  }

  .nav-link {
    padding: 10px 15px;
  }

  .nav-item.dropdown .dropdown-menu {
    display: none;
  }

  .nav-item.dropdown.show .dropdown-menu {
    display: block;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>