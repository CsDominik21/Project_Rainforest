<script setup></script>

<template>
  <div class="footer footer-bg py-4">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-4 col-sm-12 pb-5">
          <h2 class="fw-bold">Hogy mindig képben legyél</h2>
          <h3 class=" fw-bold display-6">Iratkozz fel a hírlevelünkre!</h3>
          <button class="btn btn-sub rounded-pill px-4 py-2 mt-3">
            Feliratkozás!
          </button>
        </div>

        <div class="col-md-3 col-sm-6 offset-md-2">
          <h5 class=" fw-bold">Oldalak</h5>
          <ul class="list-unstyled footer-list">
            <li class="footer__li"><a href="#" >Élővilág</a></li>
            <li class="footer__li"><router-link to="/quiz" title="Quiz"><a>Kvíz</a></router-link></li>
            <li class="footer__li"><router-link to="/csapatunk" title="Csapatunk"><a>Csapatunk</a></router-link></li>
            <li class="footer__li"><router-link to="/top-donators" title="TopDonators"><a aria-current="page">Támogatóink</a></router-link></li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6">
          <h5 class=" fw-bold">Contact</h5>
          <ul class="list-unstyled footer-list">
            <li>
              <a href="#"
                ><i class="bi bi-envelope"></i> support@esoorseg.hu</a
              >
            </li>
            <li>
              <a href="#" 
                ><i class="bi bi-phone"></i> +36 30 223 5059</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="bi bi-house"></i>Tatabánya, Réti u. 1-5, 2800</a
              >
            </li>
            <li>
              <a href="#" 
                ><i class="bi bi-linkedin"></i>Linkedin</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="row justify-content-end mt-4">
        <div class="col-auto">
          <a href="#" class=" me-3"><i class="bi bi-facebook"></i></a>
          <a href="#" class=" me-3"><i class="bi bi-whatsapp"></i></a>
          <a href="#" class=" me-3"><i class="bi bi-twitter-x"></i></a>
          <a href="#" ><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer__li{
  margin: 0px !important;
  padding: 0px !important;
}


.footer-bg {
  background-color: #243524;
}

a, h2, h3, h5, .btn-sub:hover {
  color: #fff;
}

.btn-sub {
  background-color: #ecb338;
  color: #685617;
  text-transform: uppercase;
  border: none;
  font-weight: 700;
}

.btn-sub:hover {
  text-transform: uppercase;
}

a:hover {
  color: #90ba92;
  text-decoration: none;
}
.footer {
  bottom: 0;
  left: 0;
  right: 0;
}
.container {
  max-width: 60%;
}
a {
  text-decoration: none;
  margin: 10px !important;
}
.footer-list li a {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}
</style>
