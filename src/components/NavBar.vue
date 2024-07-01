<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

let show = ref(false);
let offset = ref({ x: -1, y: innerHeight - 200 });

function onClicUser() {
  show.value = true;
}

function goLogin() {
  show.value = false;
  router.push("/user");
}
</script>

<template>
  <van-floating-bubble v-model:offset="offset" axis="y" :gap="10">
    <div @click="onClicUser" class="user">
      <span>未登录</span>
      <!-- <van-image
        round
        fit="cover"
        width="48px"
        height="48px"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      /> -->
    </div>
  </van-floating-bubble>
  <van-popup
    v-model:show="show"
    position="left"
    round
    style="width: 60%; height: 100vh; background-color: #f2f3f5"
  >
    <div class="user-info">
      <!-- <van-image
        round
        width="60px"
        height="60px"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      /> -->
      <h6 @click="goLogin">未登录</h6>
    </div>

    <van-cell-group inset style="margin-top: 20px">
      <van-cell title="Tokens" icon="points" is-link />
      <van-cell title="推广" icon="volume-o" is-link />
      <van-cell title="公众号" icon="chat-o" is-link />
      <van-cell title="反馈" icon="records-o" is-link />
    </van-cell-group>

    <van-cell-group inset style="margin-top: 20px">
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
