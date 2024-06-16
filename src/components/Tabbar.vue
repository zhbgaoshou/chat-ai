<script setup>
import { ref } from "vue";
import { navRoutes } from "@/router";

const active = ref("chat");
</script>

<template>
  <van-tabbar v-model="active" route :border="false">
    <van-tabbar-item
      v-for="nav in navRoutes"
      :to="nav.path"
      :name="nav.name"
      :icon="nav.meta.icon"
      >{{ nav.meta.title }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<style scoped lang="scss"></style>
