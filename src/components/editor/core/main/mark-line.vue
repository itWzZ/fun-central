<template>
  <div class="v-line" v-for="item in vLines" :style="{left:`${item.left}px`}"></div>
  <div class="h-line" v-for="item in hLines" :style="{top:`${item.top}px`}"></div>
</template>

<script setup lang="ts">
import {computed, inject, reactive} from "vue";
import {useProductStore} from "@/store/editor";

const store = useProductStore()
const bus = inject<any>('bus')

bus.on('move', (flag: boolean) => {
  calcVHLine(flag)
})
bus.on('unMove', () => {
  clearVLine()
  clearHLine()
})
const referElements = computed(() => {
  return store.getActivePage.children.filter((el: any) => {
    return el.id !== store.activeState.active_element_id
  })
})
const editingElement = computed(() => {
  return store.getActiveElement
})
let vLines = reactive<any[]>([])
let hLines = reactive<any[]>([])
const drawVLine = (newLeft: number) => {
  vLines.splice(0, vLines.length, {left: newLeft})
}
const drawHLine = (newTop: number) => {
  hLines.splice(0, hLines.length, {top: newTop})
}

const clearVLine = () => {
  vLines.splice(0)
}
const clearHLine = () => {
  hLines.splice(0)
}

const calcVHLine = (isPointMove: boolean) => {
  clearVLine()
  clearHLine()
  let referElementsXCoords: number[] = []
  let referElementsYCoords: number[] = []
  // 拿到未被选中的元素的位置大小信息
  referElements.value?.forEach((el: any) => {
    const width: any = el.style.width
    const left: any = el.style.x
    const height: any = el.style.height
    const top: any = el.style.y
    // 这是未被选中的元素盒子的上边的三个基点位置
    referElementsXCoords = [
      ...referElementsXCoords,
      left,
      left + width / 2,
      left + width,
    ]

    // 这是未被选中的元素盒子的左边的三个基点位置
    referElementsYCoords = [
      ...referElementsYCoords,
      top,
      top + height / 2,
      top + height,
    ]
  })
  // e代表 editingElement
  const eleft: any = editingElement.value?.style?.x
  const etop: any = editingElement.value?.style?.y
  const ewidth: any = editingElement.value?.style?.width
  const eheight: any = editingElement.value?.style?.height
  //  拿到选中元素盒子的上边的三个基点的位置
  const exCoords = [eleft + ewidth, eleft + ewidth / 2, eleft]
  //  拿到选中元素盒子的左边的三个基点的位置
  const eyCoords = [etop + eheight, etop + eheight / 2, etop]
  let hasVLine = false
  let hasHLine = false
  exCoords.forEach((eX) => {
    referElementsXCoords.forEach((referX) => {
      let offset = referX - eX //选中元素三个基点与未选中元素三个基点偏移距离
      if (Math.abs(offset) <= 3) {
        if (isPointMove) {
          setElementPosition({width: ewidth + offset})
        } else {
          setElementPosition({x: eleft + offset})
        }
        drawVLine(referX)
        hasVLine = true
      }
    })
  })
  eyCoords.forEach((eY) => {
    referElementsYCoords.forEach((referY) => {
      let offset = referY - eY
      if (Math.abs(offset) <= 3) {
        if (isPointMove) {
          setElementPosition({height: eheight + offset})
        } else {
          setElementPosition({y: etop + offset})
        }
        drawHLine(referY)
        hasHLine = true
      }
    })
  })
  if (!hasVLine) {
    clearVLine()
  }
  if (!hasHLine) {
    clearHLine()
  }
}
const setElementPosition = (data: any) => {
  store.actSetElementStyle(data)
}
</script>

<style scoped lang="scss">
.v-line {
  position: absolute;
  height: 100%;
  width: 0.0625rem;
  top: 0;
  background-color: #94f5ff;
}

.h-line {
  position: absolute;
  height: 0.0625rem;
  width: 100%;
  left: 0;
  background-color: #94f5ff;
}
</style>