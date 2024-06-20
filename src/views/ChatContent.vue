<script setup>
import { ref } from "vue";

const source = ref("13");
</script>

<template>
  <div class="chat-content">
    <ChatFrame
      role="assistant"
      :time="new Date().toLocaleString()"
      :source="source"
    ></ChatFrame>
  </div>
</template>

<style scoped lang="scss">
.chat-content {
  overflow-y: scroll;
  padding: 10px;
  font-size: 14px;
  height: 100%;
}
</style>
