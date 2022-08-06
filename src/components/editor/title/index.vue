<template>
  <div class="h-full text-sm flex justify-start items-center pl-10">
    <div class="flex items-center title-box">
      <div class="flex items-center title-box cursor-pointer" @click="handleGotoProduct">
        <svg  t="1657011633371" class="icon  " viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="2233" width="32" height="32">
          <path
              d="M969.6 502.4l-118.4-112-323.2-300.8c-9.6-9.6-22.4-9.6-32 0l-313.6 297.6c-3.2 3.2-6.4 6.4-9.6 9.6l-118.4 112c-9.6 9.6-9.6 22.4 0 32s22.4 9.6 32 0l83.2-80 0 393.6c0 48 41.6 89.6 92.8 89.6l83.2 0c38.4 0 70.4-28.8 70.4-67.2l0-217.6 99.2 0 99.2 0 0 217.6c0 35.2 32 67.2 70.4 67.2l83.2 0c51.2 0 92.8-38.4 92.8-89.6l0-396.8 80 73.6c9.6 9.6 22.4 9.6 32 0C979.2 524.8 979.2 512 969.6 502.4zM809.6 857.6c0 25.6-19.2 44.8-44.8 44.8l-83.2 0c-12.8 0-22.4-9.6-22.4-22.4L659.2 640c0-12.8-9.6-22.4-22.4-22.4l-121.6 0-121.6 0c-12.8 0-22.4 9.6-22.4 22.4l0 240c0 12.8-9.6 22.4-22.4 22.4l-83.2 0c-25.6 0-44.8-19.2-44.8-44.8l0-438.4 294.4-281.6 294.4 281.6L809.6 857.6z"
              p-id="2234" fill="#ffffff"></path>
        </svg>
        <div class="mx-4 w-1 h-7 border-r border-gray-400"></div>
        <span class="block w-28 text-gray-100 text-sm text-left">回到首页</span>
      </div>
      <div class="flex items-center title-box cursor-pointer" @click="handleGotoPreview">
        <svg t="1659337094396" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2580" width="32"
             height="32">
          <path d="M512 736a224 224 0 1 1 0-448 224 224 0 0 1 0 448z m0-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z" p-id="2581"
                fill="#ffffff"></path>
          <path
              d="M512 864C323.232 864 154.144 751.264 5.44 529.856a32 32 0 0 1 0-35.712C154.144 272.704 323.2 160 512 160c188.768 0 357.856 112.736 506.56 334.144a32 32 0 0 1 0 35.712C869.856 751.296 700.8 864 512 864z m0-64c159.84 0 306.72-94.784 441.248-288C818.72 318.784 671.84 224 512 224c-159.84 0-306.72 94.784-441.248 288 134.528 193.216 281.408 288 441.248 288z"
              p-id="2582" fill="#ffffff"></path>
        </svg>
        <div class="mx-4 w-1 h-7 border-r border-gray-400"></div>
        <span class="block w-26 text-sm text-gray-100  text-left">预览</span>
      </div>
    </div>
    <div class="text-2xl text-white font-semibold" style="width: 53vw"><span>{{ store.product.title }}</span></div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {useProductStore} from "@/store/editor";
import {computed} from "vue";

const router = useRouter()
const handleGotoProduct = () => {
  router.push('/login')
}
const handleGotoPreview=() => {
  router.push('/preview')
}
const store = useProductStore()
const product = computed(() => {
  return store.product
})

</script>

<style scoped lang="scss">
</style>