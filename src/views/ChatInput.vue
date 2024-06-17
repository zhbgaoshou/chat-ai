<script setup>
import { ref, onUnmounted, computed } from "vue";
import bus from "@/bus";
import config from "@/config";

const value = ref("");
let mode = ref(config.defaultMode);

const fileIconArray = computed(() => {
  const array = ["photo", "description"];
  if (mode.value === "ChatGPT 3.5") {
    return [];
  }
  return array;
});

/** 通信 */
bus.on("setModeValue", function (value) {
  mode.value = value;
});

/** 解绑事件 */
onUnmounted(() => {
  bus.off("setModeValue");
});
</script>

<template>
  <div class="input">
    <!-- 文件选择 -->
    <div class="select-file">
      <van-icon
        :name="icon"
        v-for="icon in fileIconArray"
        size="26"
        style="margin: 0 10px; margin-right: 0"
      />
    </div>
    <div class="in">
      <van-field
        v-model="value"
        placeholder="请输入..."
        style="border: 1px solid #dedee0; border-radius: 1000px"
      />
    </div>
    <div class="send">
      <van-icon
        name="down"
        size="24"
        style="margin: 0 15px 0; transform: rotate(-90deg)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.input {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.in {
  flex: 1;
  margin: 0 10px;
  margin-right: 0;
}

.send {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
