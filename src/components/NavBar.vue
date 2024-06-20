<script setup>
import { ref } from "vue";

let show = ref(false);

function onClicUser() {
  show.value = true;
}

const offset = ref({ x: -1, y: window.innerHeight - 500 });

</script>

<template>
  <van-floating-bubble axis="y" v-model:offset="offset" :gap="10">
    <div @click="onClicUser" class="user">
      未登录
      <!-- <van-image round width="100%" height="100%" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" /> -->
    </div>
  </van-floating-bubble>
  <van-popup v-model:show="show" position="left" round style="width: 60%; height: 100vh;background-color: #F2F3F5;">

    <div class="user-info">
      <van-image round width="60px" height="60px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <h6>XiaoYan</h6>

    </div>




    <van-cell-group inset style="margin-top: 20px;">
      <van-cell title="Tokens" icon="points" is-link />
      <van-cell title="推广" icon="volume-o" is-link />
      <van-cell title="公众号" icon="chat-o" is-link />
      <van-cell title="反馈" icon="records-o" is-link />

    </van-cell-group>

    <van-cell-group inset style="margin-top: 20px;">

      <van-cell title="退出登录" icon="revoke" is-link />

    </van-cell-group>
  </van-popup>
</template>

<style scoped lang="scss">
.user {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
}
</style>
