<script setup></script>

<template>
  <div class="chat-content">
    <ChatFrame role="assistant"></ChatFrame>
    <ChatFrame role="user" source="op"></ChatFrame>
    <ChatFrame role="assistant"></ChatFrame>
    <ChatFrame role="user"></ChatFrame>
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
