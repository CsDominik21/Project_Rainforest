<script setup>
import ContactForm from '../components/ContactForm.vue';
import { scrollToSection } from '../utils/scrollToSection';
import { teamMembers } from '../datas/team';
import Member from '../classes/Member';
import { ref } from 'vue';

const team = ref([]);

const loadMembers = () => {
    for (var i = 0; teamMembers.length > i; i++) {
        team.value.push(
            new Member(
                teamMembers[i].name, 
                teamMembers[i].role, 
                teamMembers[i].email, 
                teamMembers[i].phone,
                teamMembers[i].image
            )
        );
    }
}

const scrollToRoles = () => {
    scrollToSection('.team');
}

loadMembers();
</script>

<template>
    <section class="hero">
        <div class="hero_overlay"></div>
        <div class="container">
            <h1 class="hero_title animate-float-up p-2">Csapatunk</h1>
            <p class="hero_subtitle animate-float-up">
                Hiszünk a közös munkában és az innovációban. Csapatunkat a szenvedély
                és a szakértelem hajtja, hogy mindig a legjobb megoldásokat nyújtsuk.
            </p>
            <button class="hero_cta animate-float-up" @click="scrollToRoles">
                <span>Megtekintés</span>
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </section>

  <div class="team-page">
    <section class="team">
      <div class="container">
        <h2 class="team_title">Több mint egy csapat</h2>
        <p class="team_description">
          Ismerj meg minket! Minden tagunk egyedi tapasztalatot és szakértelmet hoz.
        </p>

        <div class="team_grid">
          <article v-for="(member, index) in team" :key="index" class="member-card">
            <div class="member-card_image">
              <img :src="member.getImage()" :alt="member.getName()"/>
            </div>
            <h3 class="member-card_name">{{ member.getName() }}</h3>
            <p class="member-card_role">{{ member.getRole() }}</p>
            
            <div class="member-card_divider"></div>
            
            <div class="member-card_contact">
              <div class="contact-item">
                <i class="bi bi-envelope-fill"></i>
                <a :href="`mailto:${member.getEmail()}`">{{ member.getEmail() }}</a>
              </div>
              <div class="contact-item">
                <i class="bi bi-telephone-fill"></i>
                <a :href="`tel:${member.getPhone()}`">{{ member.getPhone() }}</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
  <ContactForm />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.team-page {
  overflow-x: hidden;
  max-width: 100vw;
}

.hero{
    background: url(../assets/team.jpg) center/cover fixed;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  box-sizing: border-box;
}

.team {
  background: linear-gradient(180deg, #1a251a 0%, #243524 100%);
  padding: 96px 32px;
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}

.team_title {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
}

.team_description {
  font-size: clamp(17px, 2vw, 19px);
  color: rgba(255, 255, 255, 0.7);
  max-width: 680px;
  margin: 0 auto 64px;
  line-height: 1.8;
  text-align: center;
}

.team_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 350px) {
  .team_grid {
    grid-template-columns: 1fr;
  }
}

.member-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 48px 40px;
  border-radius: 24px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(144, 186, 146, 0.2);
  max-width: 100%;
  width: 100%;
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(144, 186, 146, 0.4);
}

.member-card_image {
  width: 140px;
  height: 140px;
  margin: 0 auto 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(144, 186, 146, 0.3);
  background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
  transition: transform 0.3s ease;
}

.member-card:hover .member-card_image {
  transform: scale(1.1);
}

.member-card_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-card_name {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  transition: color 0.3s ease;
}

.member-card:hover .member-card_name {
  color: #90ba92;
}

.member-card_role {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 24px;
}

.member-card_divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(144, 186, 146, 0.3), transparent);
  margin: 24px 0;
}

.member-card_contact {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  color: rgba(255, 255, 255, 0.65);
  font-size: 15px;
}

.contact-item i {
  font-size: 18px;
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
    padding: 64px 16px;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .team_grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .member-card {
    padding: 40px 32px;
  }
  
  .hero {
    min-height: 50vh;
  }
}

@media (max-width: 417px) {
  .team {
    padding: 48px 8px;
  }
  
  .container {
    padding: 0 8px;
  }
  
  .team_grid {
    gap: 20px;
    grid-template-columns: 1fr;
  }
  
  .member-card {
    padding: 28px 20px;
    max-width: 100%;
  }
  
  .member-card_image {
    width: 100px;
    height: 100px;
  }
  
  .member-card_name {
    font-size: 22px;
  }
  
  .member-card_role {
    font-size: 14px;
  }
  
  .contact-item {
    font-size: 13px;
    gap: 8px;
  }
  
  .contact-item i {
    font-size: 16px;
  }
  
  .hero {
    min-height: 40vh;
  }
}

@media (max-width: 350px) {
  .team {
    padding: 48px 8px;
  }
  
  .team_grid {
    gap: 20px;
    grid-template-columns: 1fr;
  }
  
  .member-card {
    padding: 24px 16px;
    max-width: 100%;
  }
  
  .member-card_image {
    width: 100px;
    height: 100px;
  }
  
  .member-card_name {
    font-size: 22px;
  }
  
  .member-card_role {
    font-size: 14px;
  }
  
  .contact-item {
    font-size: 13px;
    gap: 8px;
  }
  
  .contact-item i {
    font-size: 16px;
  }
  
  .hero {
    min-height: 40vh;
  }
  
  .container {
    padding: 0 12px;
  }
}
</style>