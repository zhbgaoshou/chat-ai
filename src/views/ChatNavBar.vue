<script setup>
import { ref } from "vue";

let showPopup = ref(false);

function onClickList() {
  showPopup.value = true;
}
const value = ref('');

</script>

<template>
  <van-nav-bar title="您还没有创建">
    <template #right>
      <van-icon name="plus" size="18" />
    </template>

    <template #left>
      <van-icon name="wap-nav" size="18" @click="onClickList" />
    </template>
  </van-nav-bar>

  <van-popup v-model:show="showPopup" position="right" round
    style="width: 60%; height: 100vh;background-color: #F2F3F5;overflow-y: scroll;">

    <h5 style="margin: 5px;color: #999;">历史会话</h5>


      <van-search v-model="value" placeholder="请输入搜索关键词" />



    <van-cell :title="`会话${i}`" icon="comment-o" :clickable="false" is-link v-for="i in 3 ">
      <template #right-icon>
        <van-icon name="edit" style="margin: 0 10px;" size="20" />
        <van-icon name="delete-o" size="20" />
      </template>
    </van-cell>

  </van-popup>
</template>

<style scoped lang="scss"></style>
