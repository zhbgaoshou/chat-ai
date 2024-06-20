<script setup>
import { computed } from "vue";

import config from "../config";

const props = defineProps(["role", "source", "time"]);

const isUser = computed(() => props.role === "user");
const position = computed(() => {
  return isUser.value ? "flex-end" : "flex-start";
});
const image = computed(() => {
  return isUser.value ? config.defaultUserFaceImage : config.defaultAiFaceImage;
});
</script>

<template>
  <div class="top" :style="{ 'justify-content': position }">
    <span v-if="isUser" class="txt-time">{{ props.time }}</span>
    <van-image round fit="cover" width="40px" height="40px" :src="image" />
    <span v-if="!isUser" class="txt-time">{{ props.time }}</span>
  </div>
  <div class="content">
    <van-loading size="24px" vertical v-if="false">加载中...</van-loading>

    <v-md-preview :text="props.source || '无内容'"></v-md-preview>
  </div>
</template>

<style scoped lang="scss">
.top {
  display: flex;
  margin-bottom: 3px;
  width: 100%;

  .txt-time {
    color: #c8c9cc;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 5px;
  }
}
.content {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #e8e7e7;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
