<script setup>
import { ref } from "vue";

const mode = ref("ChatGPT 4");
</script>

<template>
  <van-nav-bar title="ChatGPT 4">
    <template #left>
      <van-icon name="add-o" size="24" color="#000" />
    </template>

    <template #right>
      <!-- <van-icon name="user-o" size="24" color="#000" /> -->
      <van-image
        round
        width="40"
        height="40"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </template>

    <template #title>
      {{ mode }}
      <van-icon
        name="arrow-down"
        size="18"
        color="#000"
        style="transform: translateY(2px)"
      />
    </template>
  </van-nav-bar>
</template>

<style scoped lang="scss"></style>
