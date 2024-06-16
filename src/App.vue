<script setup>
import Tabbar from "./components/Tabbar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
  <Tabbar></Tabbar>
</template>

<style scoped></style>
