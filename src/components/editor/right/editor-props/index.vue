<template>
  <div style="height: 76vh">
    <div class="flex space-y-6 flex-wrap">
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14  font-semibold">标题：</span>
        <a-input :maxlength="30" class="w-56 h-9 " @change="changeTitle" :disabled="!activeElement" :value="activeElement?.title"/>
      </div>
      <div class="flex flex-wrap text-sm pl-1">
        <div><span class="font-semibold ">左：</span>
          <a-input-number @change="changeElementStyle('x',$event)" :min="0" :max="1300" :disabled="!activeElement" :value="activeElement?.style?.x"
                          id="inputNumber"/>
        </div>
        <div class="ml-10"><span class="font-semibold">上：</span>
          <a-input-number @change="changeElementStyle('y',$event)" :min="0" :max="700" :disabled="!activeElement" :value='activeElement?.style?.y'
                          id="inputNumber"/>
        </div>
        <div class="mt-6"><span class="font-semibold">宽：</span>
          <a-input-number @change="changeElementStyle('width',$event)" :min="0" :disabled="!activeElement" :value="activeElement?.style?.width"
                          id="inputNumber"/>
        </div>
        <div class="ml-10 mt-6"><span class="font-semibold">高：</span>
          <a-input-number @change="changeElementStyle('height',$event)" :min="0" :disabled="!activeElement" :value="activeElement?.style?.height"
                          id="inputNumber"/>
        </div>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14 font-semibold">Ipad：</span>
        <a-input :maxlength="30" :value="activeElement? activeElement?.ipadCode : ''" :disabled="true" class="w-56 h-9 "/>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm  text-left w-14  font-semibold">设备：</span>
        <a-select
            ref="select"
            :value="activeElement?.name"
            :disabled="!activeElement"
            style="width: 224px"
            @change="handleChangeName()"
        >
          <a-select-option v-for="(item,index) in list" :key="index" :value="item.label"/>
        </a-select>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14 font-semibold">名称：</span>
        <a-select
            ref="select"
            v-model:value="equipmentName"
            :disabled="!activeElement"
            style="width: 224px"
            @change="handleChangeCode"
        >
          <a-select-option v-for="(item,index) in equipmentNameData ?? []" :key="index" :value="item.name">{{ item.name }}</a-select-option>
        </a-select>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14  font-semibold">指令：</span>
        <a-input :disabled="!activeElement" @change="handleChangeIptCode" :value="activeElement? activeElement?.code :''" :maxlength="30"
                 class="w-56 h-9"/>
      </div>
      <div class="flex justify-center items-center "><span class="text-sm text-left w-14  font-semibold">控制ip：</span>
        <a-input :disabled="!activeElement" :value="activeElement?.ip" @change="handleChangeIp" :maxlength="30" class="w-56 h-9 "/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onBeforeMount, ref, watch} from "vue";
import {useProductStore} from "@/store/editor";
import {sendMessage} from '@/server'
import {list} from '@/components/components-list'

const data = ref<any>(null)
onBeforeMount(async () => {
  data.value = await sendMessage('host')
})

const store = useProductStore()
const activeElement = computed(() => {
  return store.getActiveElement
})

const equipmentNameData = ref<any>([])
const equipmentName = ref('')
watch(activeElement, () => {
  if (activeElement.value) {
    setTimeout(() => {
      const item = list.find((item) => {
        return item.label === activeElement.value?.name
      })
      equipmentNameData.value = data.value[item?.value ?? ''] ?? []
      equipmentName.value = equipmentNameData.value[0]?.name ?? ''
      if (!activeElement.value?.code) {
        store.actSetCurrentElementProps({code: equipmentNameData.value[0].code})
      }
    })
  } else {
    equipmentName.value = ''
  }
}, {immediate: true})
const changeTitle = (e: any) => {
  store.actSetCurrentElementProps({title: e.target.value})
}
const changeElementStyle = (label: string, e: number) => {
  store.actSetCurrentElementStyle({label, e})
}
const handleChangeName = (e: string) => {
  const item = list.find((item) => {
    return item.label === e
  })
  equipmentNameData.value = data.value[item?.value ?? '']
  equipmentName.value = equipmentNameData.value[0]?.name ?? ''
  store.actSetCurrentElementProps({name: e})
  store.actSetCurrentElementProps({code: equipmentNameData.value[0]?.code ?? ''})
}
const handleChangeCode = (e: string) => {
  const code = equipmentNameData.value.find((item: any) => {
    return item.name === e
  })
  store.actSetCurrentElementProps({code: code.code})
}
const handleChangeIptCode = (e: any) => {
  store.actSetCurrentElementProps({code: e.target.value})
}
const handleChangeIp = (e: any) => {
  store.actSetCurrentElementProps({ip: e.target.value})
}
</script>


<style scoped lang="scss">
:deep(.ant-select-selection-item) {
  text-align: start;
}
</style>