<script setup>
import config from "../config";
</script>

<template>
  <div class="chat-content">
    <ChatFrameAI :image="config.defaultAiFaceImage"></ChatFrameAI>
  </div>
</template>

<style scoped lang="scss">
.chat-content {
  height: 100%;
  padding: 10px;
  font-size: 14px;
}
</style>
