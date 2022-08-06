<template>
  <a-config-provider :locale="zhCN">
    <a-layout class="h-screen">
      <a-layout-header style="background-color: #3a3839;height: 5rem"><Title/></a-layout-header>
      <a-layout>
        <a-layout-content class="bg-gray-100">
          <Core/>
        </a-layout-content>
        <a-layout-sider width="25rem" class="bg-gray-100">
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
import {useProductStore} from "@/store/editor";

const store = useProductStore()
const init = () => {
  store.initState({
    "id": 1,
    "title": "中控系统编辑页面",
    "ipServer": "127.0.0.1",
    "webPort": "5002",
    "postServer": 5000,
    "dmxIp": 5001,
    "children": [{
      "id": "123456789",
      "pluginType": "page",
      "title": "新页面",
      "style": {"x": 100, "y": 200, "width": 400, "height": 300},
      "children": []
    }]
  })
}

init()

</script>

<style scoped lang="scss">

</style>