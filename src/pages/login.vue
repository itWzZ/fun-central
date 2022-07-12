<template>
  <div class="h-full w-full">
    <button @click="handleClick">31231</button>
    login
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const handleClick = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">

</style>