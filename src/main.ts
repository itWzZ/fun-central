import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import store from './store'
import router from '@/router'
import FunButton from "@/components/components-list/Fbutton.vue";
import EventBus from '@/utils/event-bus'
import '@/style/tailwind-base.css'
import "ant-design-vue/dist/antd.css";
import "@/style/tailwind.css"
import "@/style/index.css"
const app = createApp(App)
const bus =new EventBus()
app.provide('bus',bus)
app.use(Antd)
app.use(store)
app.use(router)
app.component('f-button',FunButton)
app.mount('#app');
