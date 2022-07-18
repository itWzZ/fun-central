<template>
  <button :style="getStyle(props.style)" class="f-button element" :class="{'active':props.isActive}">{{ props.name }}</button>
</template>

<script setup lang="ts">
import {StyleProps} from "@/store/editor/state/product";

const props = defineProps(['style', 'name', 'isActive'])
const getStyle = (style: StyleProps) => {
  return {
    // width: `${style.width}px`,
    // height: `${style.height}px`
    width: '100%',
    height: '100%'
  }
}
</script>
<style scoped lang="scss">
.active {
  border-color: #3a8ee6 !important;
  outline: 0;
}

.f-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  width: 100%;
  height: 100%;
  font-size: 14px;

  &:active {
    //color: #3a8ee6;
    //border-color: #3a8ee6;
    outline: 0;
  }

  &:hover {
    background-color: #ecf5ff;
    color: #3a8ee6;
  }
}
</style>