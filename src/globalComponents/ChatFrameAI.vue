<script setup>
import { ref } from "vue";

const markdown = ref("# hello world");
const props = defineProps(["image"]);
</script>

<template>
  <div>
    <van-image
      style="border: 2px solid #000"
      round
      fit="cover"
      width="40px"
      height="40px"
      :src="props.image"
    />
  </div>
</template>

<style scoped lang="scss"></style>
