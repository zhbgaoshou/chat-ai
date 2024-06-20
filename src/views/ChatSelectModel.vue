<script setup>
import { ref } from "vue";
import config from "@/config";

const emit = defineEmits(["get-mode"]);
const show = defineModel("showSelectorMode", { default: false });

/** 模型选择 */
const selectValue = ref(config.defaultMode);
const columns = config.modeList;

function selectValueHandle(mode) {
  emit("get-mode", mode);
  selectValue.value = mode;
}
</script>

<template>
  <van-popup v-model:show="show" round position="bottom" class="select">
    <div
      @click="selectValueHandle(mode.value)"
      class="select-itme"
      :class="{ active: selectValue === mode.value }"
      v-for="mode in columns"
      :key="mode.value"
    >
      <van-icon
        name="certificate"
        class="icon"
        size="18"
        v-show="selectValue === mode.value"
      />
      <h6>{{ mode.text }}</h6>
      <span>描述</span>
      <span>费用</span>
    </div>
  </van-popup>
</template>

<style scoped lang="scss">
.select {
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f2f3f5;

  &-itme {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 45%;
    margin: 5px;
    border-radius: 20px;
    background-color: #fff;
    padding: 10px;

    .icon {
      position: absolute;
      top: 5px;
      right: 5px;
      color: #1989fa;
    }

    h6 {
      text-align: center;
    }
  }
}

.active {
  border: 1px solid #1989fa;
}
</style>
