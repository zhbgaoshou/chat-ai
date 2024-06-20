<script setup>
import { ref, onUnmounted } from "vue";

import ChatSelectModel from "./ChatSelectModel.vue";
import ChatNavBar from "./ChatNavBar.vue";
import ChatContent from "./ChatContent.vue";
import bus from "@/bus";
import config from "@/config";
import { chat3 } from "@/api/chat";

/** 模型 */
let mode = ref(config.defaultMode);
bus.on("setModeValue", function (value) {
  mode.value = value;
});

/** send 回调 */
function sendHandle(value) {
  const eventSource = new EventSource(chat3);

  eventSource.onmessage = (event) => {
    console.log(event.data);
    if (event.data === "None") {
      eventSource.close();
    }
  };

  eventSource.onerror = (error) => {
    console.log(`error:`, error);
    eventSource.close();
  };
}

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

    <ChatInput @on-send="sendHandle"></ChatInput>
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
    z-index: 99;
  }
}
</style>
