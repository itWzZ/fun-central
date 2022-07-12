import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { start, close} from '@/utils.ts/nporgress'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/editor/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((pre, next) => {
    start()
})

router.afterEach(() => {
    close()
})
export default router;