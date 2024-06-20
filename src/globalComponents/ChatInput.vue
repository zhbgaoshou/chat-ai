<script setup>
import { ref, computed } from "vue";
import config from "@/config";

const emit = defineEmits(["onSend"]);

const mode = defineModel();
const value = ref("");

const fileIconArray = computed(() => {
  const array = config.inputIcons;
  if (mode.value === "ChatGPT 3.5") {
    return [];
  }
  return array;
});

function setSend() {
  value.value && emit("onSend", value.value);
  value.value = "";
}

/**长按麦克风 */
function handleStart(item) {
  console.log((item.name = "hello"));
}

function handleEnd(item) {
  console.log(item);
}
</script>

<template>
  <div class="input">
    <!-- 文件选择 -->
    <div class="select-file">
      <van-icon
        :name="icon"
        v-for="icon in fileIconArray"
        size="24"
        style="margin: 0 10px; margin-right: 0"
      />
    </div>
    <div class="in">
      <van-field
        @keyup.enter="setSend"
        v-model.trim="value"
        clearable
        placeholder="请输入..."
        style="border: 1px solid #dedee0; border-radius: 1000px"
      >
        <template #right-icon>
          <div
            class="mc"
            v-longpress="{ start: handleStart, end: handleEnd, params: {} }"
          >
            <div class="mark"></div>
          </div>
        </template>
      </van-field>
    </div>
    <div class="send" @click="setSend">
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
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.in {
  flex: 1;
  margin: 0 10px;
  margin-right: 0;

  .mc {
    position: relative;
    width: 24px;
    height: 24px;
    background-image: url("@/assets/images/mc.svg");

    .mark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10000;
      opacity: 0;
    }
  }
}

.send {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
