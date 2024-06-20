<script setup>
import { ref, watch } from "vue";

import bus from "@/bus";
import config from "@/config";


/** 弹出框 */
let show = ref(false);
function onClick() {
  show.value = true;
}

/** 模型选择 */
const selectValue = ref([config.defaultMode]);
const columns = [
  { text: "ChatGPT 4", value: "ChatGPT 4" },
  { text: "ChatGPT 4o", value: "ChatGPT 4o" },
  { text: "ChatGPT 3.5", value: "ChatGPT 3.5" },
];
const onCancel = () => (show.value = false);

/**通信数据 */
watch(selectValue, (newSelectValue) => {
  bus.emit("setModeValue", newSelectValue[0]);
});


defineExpose({
  onClick
})
</script>

<template>
  <van-popup v-model:show="show" round position="bottom">
    <van-picker
      v-model="selectValue"
      cancel-button-text=" "
      title="选择模型"
      :columns="columns"
      :swipe-duration="300"
      @confirm="onCancel"
    />
  </van-popup>
</template>

<style scoped lang="scss">
.folating {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
