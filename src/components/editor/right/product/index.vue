<template>
  <div style="height: 76vh">
    <div class="flex space-y-8 flex-wrap">
      <div class="flex justify-center items-center "><span class="text-sm w-28 font-semibold">项目名称：</span>
        <a-input :value="product.title" :maxlength="30" @change="handelProjectName" class="w-56 h-9 " placeholder="请输入项目名称"/>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm w-28 font-semibold">本机IP：</span>
        <a-input :value="product.ipServer" :maxlength="20" @change="handleProjectIp" class="w-56 h-9" placeholder="请输入本机IP"/>
      </div>
      <div class="flex justify-center items-center"><span class="text-sm w-28 font-semibold">本机端口：</span>
        <a-input :value="product.webPort" :maxlength="20" @change="handleProjectWebPort" class="w-56 h-9 " placeholder="请输入本机端口"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useProductStore} from "@/store/editor";
import {computed} from "vue";

const store = useProductStore()
const product = computed(() => {
  return store.product
})
const handelProjectName = (e: any) => {
  store.actSetProduct({title: e.target.value})
}
const handleProjectIp = (e: any) => {
  store.actSetProduct({ipServer: e.target.value})
}
const handleProjectWebPort = (e: any) => {
  store.actSetProduct({webPort: e.target.value})
}
</script>

<style scoped lang="scss">

</style>