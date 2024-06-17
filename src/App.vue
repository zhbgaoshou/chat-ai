<script setup>
import Tabbar from "./components/Tabbar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <main class="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
  <div id="input"></div>
  <Tabbar></Tabbar>
</template>

<style scoped>
.main {
  flex: 1;
}
</style>
