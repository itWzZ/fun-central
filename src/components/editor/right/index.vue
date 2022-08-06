<template>
  <div class="py-10 px-4 h-full">
    <div class="h-full">
      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" tab="对象属性" force-render>
          <Editor/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="页面管理">
          <Nav/>
        </a-tab-pane>
        <a-tab-pane key="3" tab="全局设置">
          <Product/>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/editor/right/navigation-bar/index.vue"
import Product from '@/components/editor/right/product/index.vue'
import Editor from '@/components/editor/right/editor-props/index.vue'
import {inject, onUnmounted, ref} from "vue";

const activeKey = ref('2')
const bus = inject<any>('bus')
bus.on('changeProps', () => {
  activeKey.value = '1'
})
onUnmounted(() => {
  bus.off('changeProps')
})
</script>

<style scoped lang="scss">
:deep(.ant-tabs-tab) {
  padding: 0.75rem 1.65rem;
}
:deep(.ant-tabs-tab + .ant-tabs-tab){
  margin: auto;
}
</style>