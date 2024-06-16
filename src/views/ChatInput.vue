<script setup>
import {ref} from 'vue'

const value = ref('')
</script>

<template>
  <div class="input">
    <div class="select-file">文件选择</div>
    <div class="in">
        输入框
    </div>
    <div class="send">发送</div>
  </div>
</template>

<style scoped lang="scss">
.input{
    display: flex;
    justify-content: space-between;
}

.in{
    flex: 1;
}
</style>
