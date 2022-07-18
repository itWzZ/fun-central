<template>
  <div v-show="props.data.isShow " class="contextmenu" :style="{ top: props.data.top + 'px', left: props.data.left + 'px' }">
    <ul @mouseup="handleMouseUp">
      <li class="menu" @click.stop="deleteComponent">删除</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import {useProductStore} from "@/store/editor";

const props = defineProps(['data'])
const emit = defineEmits(['closeContextMenu'])
const store=useProductStore()
const handleMouseUp = () => {

}
const deleteComponent = () => {
  store.actContextMenuDeleteElement()
  emit('closeContextMenu')
}
</script>

<style scoped lang="scss">
.contextmenu {
  position: absolute;
  z-index: 1000;
  ul {
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-sizing: border-box;
    margin: 5px 0;
    padding: 1px 0;

    li {
      font-size: 14px;
      padding: 0 40px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #606266;
      height: 34px;
      line-height: 34px;
      box-sizing: border-box;
      cursor: pointer;

      &:hover {
        background-color: #ecf5ff;
      }
    }
  }
}
</style>