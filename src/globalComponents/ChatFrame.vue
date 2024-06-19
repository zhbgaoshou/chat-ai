<script setup>
import { computed } from "vue";

import config from "../config";


const props = defineProps(['role','source']);

const position = computed(() => {
  return props.role === 'user' ? 'flex-end' : 'flex-start'
})

const image = computed(() => {
  return props.role === 'assistant' ? config.defaultAiFaceImage : config.defaultUserFaceImage

})
</script>

<template>
  <div>
    <div style="display: flex;margin-bottom: 3px;width: 100%;" :style="{ 'justify-content': position }">
      <van-image style="border: 2px solid #000" round fit="cover" width="40px" height="40px" :src="image" />
    </div>
    <div class="content">
      <van-loading size="24px" vertical v-if="false">加载中...</van-loading>
      <div v-html="props.source || '无内容'"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid #e8e7e7;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
}
</style>
