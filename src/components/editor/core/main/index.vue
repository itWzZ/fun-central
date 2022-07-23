<template>
  <div class="overflow-hidden w-full h-full relative main" ref="Editor" @click="handleClick" @mousedown="handleMouseDown" @drop="handleDrop"
       @dragover="handleDragOver"
       @contextmenu="handleOpenContextMenu">
    <Shape v-for="(item) in elementList" :key="item.id" :element="item" :isActive="item.id===store.activeState.active_element_id">
      <component
          is="f-button"
          class="element-style"
          :style="item.style"
          :title="item.title"
          :isActive="item.id===store.activeState.active_element_id"
      />
    </Shape>
    <Line/>
    <ContextMenu :data="contextMenu" @closeContextMenu="closeContextMenu"/>
  </div>
</template>

<script setup lang="ts">
import Shape from '@/components/editor/core/main/shape.vue'
import Line from '@/components/editor/core/main/mark-line.vue'
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
    name: component.label,
    title: component.label,
    code:'',
    style: {x: e.clientX - rectInfo.x.toFixed() - 100, y: e.clientY - rectInfo.y - 50, width: 200, height: 100}
  }))
}
// 接收drag事件
const handleDragOver = (e: any) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'copy'
}
const elementList = computed(() => {
  return store.getActivePage?.children
})
const contextMenu = reactive({isShow: false, top: '', left: ''})
// 右键打开模板
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
// 关闭右键面板
const closeContextMenu = () => {
  contextMenu.isShow = false
}
// 点击空白区域关闭右键面板
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