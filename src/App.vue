<script setup>
import Tabbar from "./components/Tabbar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <Tabbar></Tabbar>
</template>

