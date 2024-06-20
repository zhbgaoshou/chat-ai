<script setup>
import { ref, reactive } from "vue";

import ChatSelectModel from "./ChatSelectModel.vue";
import ChatNavBar from "./ChatNavBar.vue";
import ChatContent from "./ChatContent.vue";
import config from "@/config";

const params = reactive({
  role: "user",
  content: "",
  model: config.defaultMode,
});

/** 模型 */
let showSelectorMode = ref(false);
function getMode(modeValue) {
  params.model = modeValue;
}

/** 发送 */
function send(sendValue) {
  params.content = sendValue;

  console.log(params);
}
</script>

<template>
  <div class="chat">
    <van-tag
      class="tag"
      size="large"
      plain
      color="#1989FA"
      round
      @click="showSelectorMode = true"
      >选择模型：{{ params.model || "未选择" }}</van-tag
    >
    <ChatNavBar></ChatNavBar>

    <!-- start -->
    <ChatContent></ChatContent>

    <ChatInput @on-send="send" v-model="params.model"></ChatInput>
    <!-- end -->
  </div>
  <ChatSelectModel
    @get-mode="getMode"
    v-model:showSelectorMode="showSelectorMode"
  ></ChatSelectModel>
</template>

<style scoped lang="scss">
.chat {
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .tag {
    position: absolute;
    background-color: rgba(225, 225, 225, 0.2);
    right: 10px;
    top: 56px;
    z-index: 99;
  }
}
</style>
