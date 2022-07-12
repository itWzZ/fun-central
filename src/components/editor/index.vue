<template>
  <a-config-provider :locale="zhCN">
    <a-layout class="h-screen">
      <a-layout-header style="background-color: #3a3839;height: 80px"><Title/></a-layout-header>
      <a-layout>
        <a-layout-content class="bg-gray-100">
          <Core/>
        </a-layout-content>
        <a-layout-sider width="400px" class="bg-gray-100">
          <Right/>
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">
import Core from "@/components/editor/core/index.vue"
import Title from "@/components/editor/title/index.vue"
import Right from "@/components/editor/right/index.vue"
import zhCN from 'ant-design-vue/es/locale/zh_CN';


</script>

<style scoped lang="scss">

</style>