<template>
  <div style="height: 76vh">
    <!--    <div class="flex justify-start"><span class="text-base ">属性</span></div>-->
    <div class="flex space-y-6 flex-wrap">
      <div class="flex flex-wrap text-sm font-semibold">
        <div><span>左：</span>
          <a-input-number id="inputNumber" :min="1" :max="10"/>
        </div>
        <div class="ml-24"><span>上：</span>
          <a-input-number id="inputNumber" :min="1" :max="10"/>
        </div>
        <div class="mt-6"><span>宽：</span>
          <a-input-number id="inputNumber" :min="1" :max="10"/>
        </div>
        <div class="ml-24 mt-6"><span>高：</span>
          <a-input-number id="inputNumber" :min="1" :max="10"/>
        </div>

      </div>
      <div class="flex justify-center items-center "><span class="text-sm w-24 font-semibold">项目名称：</span>
        <a-input :maxlength="30" class="w-56 h-9 " placeholder="请输入项目名称"/>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm w-24 font-semibold">项目名称：</span>
        <a-input :maxlength="30" class="w-56 h-9 " placeholder="请输入项目名称"/>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm w-24 font-semibold">项目名称：</span>
        <a-input :maxlength="30" class="w-56 h-9 " placeholder="请输入项目名称"/>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm w-24 font-semibold">项目名称：</span>
        <a-input :maxlength="30" class="w-56 h-9 " placeholder="请输入项目名称"/>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, watch} from "vue";
import {useProductStore} from "@/store/editor";

const store = useProductStore()
const activeElement = computed(() => {
  return store.getActiveElement
})

watch(activeElement, () => {
  console.log(activeElement.value)
})
</script>


<style scoped lang="scss">

</style>