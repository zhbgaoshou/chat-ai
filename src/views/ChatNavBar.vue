<script setup>
import { ref } from "vue";

let showPopup = ref(false);

function onClickList() {
  showPopup.value = true;
}
</script>

<template>
  <van-nav-bar title="新会话">
    <template #right>
      <van-icon name="plus" size="18" />
    </template>

    <template #left>
      <van-icon name="wap-nav" size="18" @click="onClickList" />
    </template>
  </van-nav-bar>

  <van-popup
    v-model:show="showPopup"
    position="right"
    round
    style="width: 60%; height: 100vh"
    >内容</van-popup
  >
</template>

<style scoped lang="scss"></style>
