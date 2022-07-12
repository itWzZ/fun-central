<template>
  <div class="overflow-hidden w-full h-full relative" ref="Editor" @drop="handleDrop" @dragover="handleDragOver">
    <Shape v-for="(item,index) in elementList" :key="item.id" :element="item" :isActive="item.id===store.activeState.active_element_id" >
      <component
          is="f-button"
          class="element-style"
          :style="item.style"
          :name="item.name"
          :isActive="item.id===store.activeState.active_element_id"
      />
    </Shape>

  </div>
</template>

<script setup lang="ts">
import Shape from '@/components/editor/core/main/shape.vue'
import {list} from '@/components/components-list'
import {Element} from '@/store/editor/state/element'
import {useProductStore} from "@/store/editor";
import {computed, ref} from "vue";

const store = useProductStore()
const Editor = ref(null)
const handleDrop = (e: any) => {
  e.preventDefault()
  e.stopPropagation()
  const component = list[e.dataTransfer.getData('index')]
  const rectInfo = (Editor.value as any).getBoundingClientRect()
  store.actAddElement(new Element({
    commandType: component.label, name: component.label, style: {x: e.clientX - rectInfo.x, y: e.clientY - rectInfo.y, width: 200, height: 100}
  }))
}
const handleDragOver = (e: any) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'
}
const elementList = computed(() => {
  return store.getActivePage?.children
})


</script>

<style scoped lang="scss">
</style>