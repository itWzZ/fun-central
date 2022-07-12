import {createPinia, PiniaPluginContext} from 'pinia'
import {toRaw} from "vue";

const store = createPinia()
// 持久化数据
const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
const piniaPlugin = (context: PiniaPluginContext) => {
    const {store} = context
    const data = getStorage(`${store.$id}`)
    store.$subscribe(() => {
        // console.log("store",store.$state)
        setStorage(`${store.$id}`, toRaw(store.$state))
    })
    return {...data}
}
// store.use(piniaPlugin)
export default store