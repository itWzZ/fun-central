<template>
  <div class="h-full w-full">
    <button @click="handleClick">editor</button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const handleClick = () => {
  router.push('/editor')
}
</script>

<style scoped lang="scss">

</style>