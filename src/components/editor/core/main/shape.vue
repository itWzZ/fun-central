<template>
  <div class="shape absolute select-none" :style="getStyle(props.element.style,props.isActive)" :data-bind="props.isActive"
       @mousedown="handleMouseDownShape">
    <div class="shape-point" v-for="item in (props.isActive ? pointList :[])" :key="item" :style="getPointStyle(item)">
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {useProductStore} from "@/store/editor";
import {StyleProps} from "@/store/editor/state/product";

const props = defineProps(['element', 'isActive'])
const store = useProductStore()
const getStyle = (style: StyleProps, isActive: boolean) => {
  return {
    top: `${style.y}px`,
    left: `${style.x}px`,
    width: `${style.width}px`,
    height: `${style.height}px`,
    'z-index': `${isActive ? 10 : 1}`
  }
}
const handleMouseDownShape = (e: any) => {
  e.stopPropagation()
  store.actSetCurrentElement(props.element.id)
  const pos = {...props.element.style}
  const startX = e.clientX
  const startY = e.clientY
  const startLeft = Number(pos.x)
  const startTop = Number(pos.y)
  const move = (e: any) => {
    const curX = e.clientX
    const curY = e.clientY
    pos.y = curY - startY + startTop
    pos.x = curX - startX + startLeft
    store.actSetElementStyle(pos)
  }
  const up = () => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', up)
  }
  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', up)
}
const pointList = ['t', 'r', 'b', 'l', 'lt', 'rt', 'lb', 'rb']
const pointCursorList = {
  b: 's-resize',
  l: 'w-resize',
  lb: 'sw-resize',
  lt: 'nw-resize',
  r: 'e-resize',
  rb: 'se-resize',
  rt: 'ne-resize',
  t: 'n-resize'
}
const getPointStyle = (point: string) => {
  const {width, height} = props.element.style
  const hasT = /t/.test(point)
  const hasB = /b/.test(point)
  const hasL = /l/.test(point)
  const hasR = /r/.test(point)
  let newLeft = 0
  let newTop = 0

  // 四个角的点
  if (point.length === 2) {
    newLeft = hasL ? 0 : width
    newTop = hasT ? 0 : height
  } else {
    // 上下两点的点，宽度居中
    if (hasT || hasB) {
      newLeft = width / 2
      newTop = hasT ? 0 : height
    }

    // 左右两边的点，高度居中
    if (hasL || hasR) {
      newLeft = hasL ? 0 : width
      newTop = Math.floor(height / 2)
    }
  }

  const style = {
    marginLeft: '-4px',
    marginTop: '-4px',
    left: `${newLeft}px`,
    top: `${newTop}px`,
    cursor: (pointCursorList as any)[point],
  }

  return style
}

</script>

<style scoped lang="scss">
.shape-point {
  position: absolute;
  background: #fff;
  border: 1px solid #59c7f9;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 1;
}

</style>