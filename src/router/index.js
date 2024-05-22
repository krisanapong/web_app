import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import Login from '@/views/pages/auth/Login.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home_login',
            component: AppLayout
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

export default router;
