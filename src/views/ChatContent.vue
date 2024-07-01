<script setup>
import { ref } from "vue";

const props = defineProps(["source"]);

console.log(props.source);
</script>

<template>
  <div class="chat-content">
    <ChatFrame
      role="assistant"
      :source="props.source || ''"
      :time="new Date().toLocaleString()"
    ></ChatFrame>
  </div>
</template>

<style scoped lang="scss">
.chat-content {
  overflow-y: scroll;
  padding: 10px;
  font-size: 14px;
  height: 100%;
  margin-bottom: 20px;
}
</style>
