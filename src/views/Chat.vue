<script setup>
import { ref, onUnmounted } from "vue";

import ChatSelectModel from "./ChatSelectModel.vue";
import ChatNavBar from "./ChatNavBar.vue";
import ChatContent from "./ChatContent.vue";
import bus from "@/bus";
import config from "@/config";

/** 模型 */
let mode = ref(config.defaultMode);
bus.on("setModeValue", function (value) {
  mode.value = value;
});

/** 解绑 */
onUnmounted(() => {
  bus.off("setModeValue");
});
</script>

<template>
  <div class="chat">
    <van-tag class="tag" plain>当前模型：{{ mode || "未选择" }}</van-tag>
    <ChatNavBar></ChatNavBar>

    <!-- start -->
    <ChatContent></ChatContent>

    <ChatInput></ChatInput>
    <!-- end -->
  </div>
  <ChatSelectModel></ChatSelectModel>
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
    z-index: 99
  }

}
</style>
