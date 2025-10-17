import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import Quiz from "../pages/Quiz.vue";
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
    }
];

const router = createRouter({
    history: createWebHistory(), routes
})

export default router;  