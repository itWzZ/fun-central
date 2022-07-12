<script setup lang="ts">
</script>

<template>
 <div class="overflow-hidden">
   <router-view v-slot="{ Component, route }">
     <transition name="fade-slide" mode="out-in">
       <div :key="route.name" >
         <component :is="Component"></component>
       </div>
     </transition>
   </router-view>
 </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* router view transition fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


</style>
