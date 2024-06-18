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
    <ChatNavBar></ChatNavBar>
    <!-- start -->
    <div class="chat">
      <van-tag class="tag" plain>当前模型：{{ mode || "未选择" }}</van-tag>
      <ChatContent></ChatContent>
      <!-- end -->
    </div>
    <ChatInput></ChatInput>
  </div>
  <ChatSelectModel></ChatSelectModel>
</template>

<style scoped lang="scss">
.chat {
  display: flex;
  flex-direction: column;
  height: 100%;

  .chat {
    position: relative;
    flex: 1;

    .tag {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
