<script setup>
import { ref } from "vue";

let show = ref(false);

function onClicUser() {
  show.value = true;
}
</script>

<template>
  <van-nav-bar>
    <template #left>
      <div @click="onClicUser" class="user-info">
        <!-- <van-icon name="user-o" size="24" color="#000" /> -->
        <van-image
          round
          width="30"
          height="30"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
    </template>
  </van-nav-bar>
  <van-popup
    v-model:show="show"
    position="left"
    round
    style="width: 60%; height: 100vh"
    >内容</van-popup
  >
</template>

<style scoped lang="scss">
.user-info {
  display: flex;
  align-items: center;
}
</style>
