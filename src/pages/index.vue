<template>
  <div>
    index
    <button @click="handleClick">点击跳转</button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const handleClick = () => {
  router.push('/login')
}
</script>

<style scoped lang="scss">

</style>