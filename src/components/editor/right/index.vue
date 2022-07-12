<template>
  <div class="py-10 px-4 h-full">
    <div class="h-full">
      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" tab="对象属性" force-render>Content of Tab Pane 2</a-tab-pane>
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
import {ref} from "vue";

const activeKey = ref('2')
</script>

<style scoped lang="scss">
:deep(.ant-tabs-tab) {
  padding: 12px 20px;
}
</style>