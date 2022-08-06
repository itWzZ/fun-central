<template>
  <div class="h-full py-10 flex justify-between items-center">
    <div class="h-full" style="width: 14vw" >
      <Navigation ></Navigation>
    </div>
    <div class="bg-white h-full rounded-xl" style="width: 65vw;height: 43vw">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/editor/core/navigation-bar/index.vue"
import Main from "@/components/editor/core/main/index.vue"
</script>

<style scoped lang="scss">


</style>