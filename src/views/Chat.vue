<script setup>
import ChatSelectModel from './ChatSelectModel.vue';
</script>

<template>
  <div class="chat"></div>
  <ChatSelectModel></ChatSelectModel>
  <Teleport to="#input">
    <ChatInput></ChatInput>
  </Teleport>
</template>

<style scoped lang="scss"></style>
