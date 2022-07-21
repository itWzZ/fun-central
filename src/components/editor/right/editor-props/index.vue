<template>
  <div style="height: 76vh">
    <div class="flex space-y-6 flex-wrap">
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14  font-semibold">标题：</span>
        <a-input :maxlength="30" class="w-56 h-9 " :disabled="!activeElement" :value="activeElement?.commandType" placeholder="标题"/>
      </div>
      <div class="flex flex-wrap text-sm pl-1">
        <div><span class="font-semibold ">左：</span>
          <a-input-number :disabled="!activeElement" :value="activeElement?.style?.x" id="inputNumber"/>
        </div>
        <div class="ml-10"><span class="font-semibold">上：</span>
          <a-input-number :disabled="!activeElement" :value='activeElement?.style?.y' id="inputNumber"/>
        </div>
        <div class="mt-6"><span class="font-semibold">宽：</span>
          <a-input-number :disabled="!activeElement" :value="activeElement?.style?.width" id="inputNumber"/>
        </div>
        <div class="ml-10 mt-6"><span class="font-semibold">高：</span>
          <a-input-number :disabled="!activeElement" :value="activeElement?.style?.height" id="inputNumber"/>
        </div>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14 font-semibold">Ipad：</span>
        <a-input :maxlength="30" :disabled="!activeElement" class="w-56 h-9 " placeholder="Ipad"/>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm  text-left w-14  font-semibold">设备：</span>
        <a-select
            ref="select"
            v-model:value="equipment"
            :disabled="!activeElement"
            style="width: 224px"
            @change="handleChange"
        >
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled">Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14   font-semibold">名称：</span>
        <a-select
            ref="select"
            v-model:value="equipment"
            :disabled="!activeElement"
            :options="optionData"
            style="width: 224px"
            @change="handleChange"
        >
        </a-select>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14  font-semibold">控制ip：</span>
        <a-input :disabled="!activeElement" :maxlength="30" class="w-56 h-9 " placeholder="控制ip"/>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14  font-semibold">指令：</span>
        <a-input :disabled="!activeElement" :maxlength="30" class="w-56 h-9 " placeholder="指令"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, reactive, ref} from "vue";
import {useProductStore} from "@/store/editor";
import {sendMessage} from '@/server'

const store = useProductStore()
const activeElement = computed(() => {
  return store.getActiveElement
})
const equipment = ref('')
const optionData = ref([{value: 1, label: 'a1'}, {value: 2, label: 'a2'}, {value: 3, label: 'a3'}])
const handleChange = (e: any) => {
  console.log(e)
}
const data = ref(null)
onMounted(async () => {
  const res = await sendMessage('host')
  console.log(res)
  data.value = res
})
</script>


<style scoped lang="scss">
:deep(.ant-select-selection-item) {
  text-align: start;
}
</style>