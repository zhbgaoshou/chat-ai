<script setup>
import {useRoute} from 'vue-router'

const route = useRoute()
console.log(route);
</script>

<template>
  <van-nav-bar :title="route.meta.title">

    <template #right>
      <!-- <van-icon name="user-o" size="24" color="#000" /> -->
      <van-image
        round
        width="40"
        height="40"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </template>
  </van-nav-bar>
</template>

<style scoped lang="scss"></style>
