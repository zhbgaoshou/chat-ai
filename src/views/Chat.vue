<script setup>
import ChatSelectModel from "./ChatSelectModel.vue";
import ChatNavBar from "./ChatNavBar.vue";
import bus from "@/bus";
import { ref } from "vue";
import config from "@/config";

let mode = ref(config.defaultMode);
console.log(bus);
bus.on("setModeValue", function (value) {
  console.log(value);
  mode.value = value;
});
</script>

<template>
  <div class="chat-input">
    <ChatNavBar></ChatNavBar>
    <div class="chat">
      <van-tag class="tag" plain round
        >当前模型：{{ mode || "未选择" }}</van-tag
      >
    </div>
    <ChatInput> </ChatInput>
  </div>
  <ChatSelectModel></ChatSelectModel>
</template>

<style scoped lang="scss">
.chat-input {
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
