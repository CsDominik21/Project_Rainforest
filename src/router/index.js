import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import Quiz from "../pages/Quiz.vue";
import TopDonators from "../pages/TopDonators.vue";
import Animals from "../pages/Animals.vue";
import Plants from "../pages/Plants.vue";

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/csapatunk',
        component: Team
    },
    {
        path: '/quiz',
        component: Quiz
    },
    {
        path: '/top-donators',
        component: TopDonators
    },
    {
        path: '/animals',
        component: Animals
    },
    {
        path: '/plants',
        component: Plants
    }
];

const router = createRouter({
    history: createWebHistory(), routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        else {
            return { 
                top: 0, 
                behavior: 'smooth' 
            };
        }
    }
});

export default router;