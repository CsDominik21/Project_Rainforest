<script setup>
const teamMembers = [
  {
    name: 'Csöllei Dominik',
    role: 'Projekt menedzser',
    email: 'csollei.dominik.2021i@bankitatabanya.hu',
    phone: '+36 30 123 4312'
  },
  {
    name: 'Balogh Máté',
    role: 'Fullstack fejlesztő',
    email: 'balogh.mate.2021i@bankitatabanya.hu',
    phone: '+36 30 456 7890'
  }
];
</script>

<template>
  <div class="team-page">
    <section class="hero">
      <div class="hero__overlay"></div>
      <div class="container">
        <h1 class="hero__title">Csapatunk</h1>
        <p class="hero__subtitle">
          Hiszünk a közös munkában és az innovációban. Csapatunkat a szenvedély
          és a szakértelem hajtja, hogy mindig a legjobb megoldásokat nyújtsuk.
        </p>
      </div>
    </section>

    <section class="team">
      <div class="container">
        <h2 class="team__title">Több mint egy csapat</h2>
        <p class="team__description">
          Ismerj meg minket! Minden tagunk egyedi tapasztalatot és szakértelmet hoz.
        </p>

        <div class="team__grid">
          <article v-for="(member, index) in teamMembers" :key="index" class="member-card">
            <div class="member-card__image">
              <img src="../assets/Bmate.png" :alt="member.name" v-if="index == 1"/>
              <img src="../assets/Csdomi.png" :alt="member.name" v-else/>
            </div>
            <h3 class="member-card__name">{{ member.name }}</h3>
            <p class="member-card__role">{{ member.role }}</p>
            
            <div class="member-card__divider"></div>
            
            <div class="member-card__contact">
              <div class="contact-item">
                <i class="bi bi-envelope-fill"></i>
                <a :href="`mailto:${member.email}`">{{ member.email }}</a>
              </div>
              <div class="contact-item">
                <i class="bi bi-telephone-fill"></i>
                <a :href="`tel:${member.phone}`">{{ member.phone }}</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop) center/cover;
  position: relative;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(36, 53, 36, 0.85);
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero__title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #90ba92 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  max-width: 650px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
}

.team {
  background: linear-gradient(180deg, #1a251a 0%, #243524 100%);
  padding: 6rem 2rem;
}

.team__title {
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
}

.team__description {
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  max-width: 680px;
  margin: 0 auto 4rem;
  line-height: 1.8;
  text-align: center;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
}


.member-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 3rem 2.5rem;
  border-radius: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(144, 186, 146, 0.2);
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(144, 186, 146, 0.4);
}

.member-card__image {
  width: 140px;
  height: 140px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(144, 186, 146, 0.3);
  background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
  transition: transform 0.3s ease;
}

.member-card:hover .member-card__image {
  transform: scale(1.1);
}

.member-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-card__name {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.member-card:hover .member-card__name {
  color: #90ba92;
}

.member-card__role {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.5rem;
}

.member-card__divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(144, 186, 146, 0.3), transparent);
  margin: 1.5rem 0;
}

.member-card__contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.95rem;
}

.contact-item i {
  font-size: 1.1rem;
  color: #90ba92;
}

.contact-item a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item:hover a {
  color: #90ba92;
}


@media (max-width: 768px) {
  .team {
    padding: 4rem 1rem;
  }
  
  .team__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .member-card {
    padding: 2.5rem 2rem;
  }
  
  .hero {
    min-height: 50vh;
  }
}
</style>