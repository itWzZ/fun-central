<template>
  <div class="overflow-hidden w-full h-full relative main" ref="Editor" @click="handleClick" @mousedown="handleMouseDown" @drop="handleDrop"
       @dragover="handleDragOver"
       @contextmenu="handleOpenContextMenu">
    <Shape v-for="(item) in elementList" :key="item.id" :element="item" :isActive="item.id===store.activeState.active_element_id">
      <component
          is="f-button"
          class="element-style"
          :style="item.style"
          :name="item.name"
          :isActive="item.id===store.activeState.active_element_id"
      />
    </Shape>
    <ContextMenu :data="contextMenu" @closeContextMenu="closeContextMenu"/>
  </div>
</template>

<script setup lang="ts">
import Shape from '@/components/editor/core/main/shape.vue'
import ContextMenu from "@/components/editor/core/main/context-menu.vue"
import {list} from '@/components/components-list'
import {Element} from '@/store/editor/state/element'
import {useProductStore} from "@/store/editor";
import {computed, reactive, ref} from "vue";

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
const contextMenu = reactive({isShow: false, top: '', left: ''})
const handleOpenContextMenu = (e: any) => {
  e.preventDefault()
  e.stopPropagation()
  const dom = e.target
  let target = e.target
  let top = e.offsetY
  let left = e.offsetX
  while (!target?.className.includes('main')) {
    left += target?.offsetLeft
    top += target?.offsetTop
    target = target?.parentNode
  }
  if (dom?.className.includes('element')) {
    Object.assign(contextMenu, {isShow: true, top, left})
  }
}
const closeContextMenu = () => {
  contextMenu.isShow = false
}
const handleMouseDown = (e: any) => {
  if (!e.target.className.includes('menu')) {
    contextMenu.isShow = false
    store.activeState.active_element_id = '1'
  }
}
const handleClick = () => {
  if (contextMenu.isShow) {
    contextMenu.isShow = false
  }
}
</script>

<style scoped lang="scss">
</style>