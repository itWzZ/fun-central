import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { start, close} from '@/utils/nporgress'
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
        path: '/preview',
        name: 'Preview',
        meta: {
            title: '预览',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/preview.vue')
    },
    {
        path: '/editor',
        name: 'Editor',
        meta: {
            title: '编辑器',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/editor/index.vue')
    },
    {
        path: '/',
        redirect: '/login'
    },
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