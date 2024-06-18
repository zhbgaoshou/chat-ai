<script setup>
import { ref } from "vue";

let show = ref(false);

function onClicUser() {
  show.value = true;
}

const offset = ref({ x: 10, y: window.innerHeight - 500 });

</script>

<template>
  <van-floating-bubble axis="xy"  v-model:offset="offset" :gap="10">
    <div @click="onClicUser" class="user-info">
      未登录
      <!-- <van-image round width="100%" height="100%" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" /> -->
    </div>
  </van-floating-bubble>
  <van-popup v-model:show="show" position="left" round style="width: 60%; height: 100vh">内容</van-popup>
</template>

<style scoped lang="scss">
.user-info {
  display: flex;
  align-items: center;
}
</style>
