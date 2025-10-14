<script>
</script>



<template>
    <div class="footer bg-black zold py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12 pb-5">
            <h2 class="zold fw-bold">Hogy mindig képben legyél</h2>
            <h3 class="zold fw-bold display-5">Iratkozz fel a hírlevelünkre!</h3>
            <button class="btn btn-green rounded-pill px-4 py-2 mt-3">Feliratkozás!</button>
          </div>
  
          <div class="col-md-3 col-sm-6 offset-md-2">
            <h5 class="zold fw-bold">Oldalak</h5>
            <ul class="list-unstyled footer-list">
              <li><a href="#" class="zold">Élővilág</a></li>
              <li><a href="#" class="zold">Kvíz</a></li>
              <li><a href="#" class="zold">Csapatunk</a></li>
              <li><a href="#" class="zold">Támogatóink</a></li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6">
            <h5 class="zold fw-bold">Contact</h5>
            <ul class="list-unstyled footer-list">
              <li><a href="#" class="zold"><i class="bi bi-envelope"></i> esoorseg@erdok.hu</a></li>
              <li><a href="#" class="zold"><i class="bi bi-phone"></i> +36 30 223 5059</a></li>
              <li><a href="#" class="zold"><i class="bi bi-house"></i>Tatabánya, Réti u. 1-5, 2800</a></li>
              <li><a href="#" class="zold"><i class="bi bi-linkedin"></i>Linkedin</a></li>
            </ul>
          </div>
        </div>

        <div class="row justify-content-end mt-4">
          <div class="col-auto">
            <a href="#" class="zold me-3"><i class="bi bi-facebook"></i></a>
            <a href="#" class="zold me-3"><i class="bi bi-whatsapp"></i></a>
            <a href="#" class="zold me-3"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="zold"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .bg-black {
    background-color: #000000;
  }
  
  .zold {
    color: #00ff00;
  }
  
  .btn-green {
    background-color: #00ff00;
    color: #000000;
    border: none;
  }
  
  .btn-green:hover {
    background-color: #00cc00;
    color: #000000;
  }
  
  a.zold:hover {
    color: #00cc00;
    text-decoration: none;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .container{
    max-width: 60%;
  }
  a{
    text-decoration: none;
    margin: 10px !important;
  }
  .footer-list li a {
    display: inline-flex;
    align-items: center;
    white-space: nowrap; 
}

  
  
  </style>