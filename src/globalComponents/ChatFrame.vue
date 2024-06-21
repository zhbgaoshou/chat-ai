<script setup>
import { computed } from "vue";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";

import config from "../config";

const props = defineProps(["role", "source", "time"]);

const isUser = computed(() => props.role === "user");
const position = computed(() => {
  return isUser.value ? "flex-end" : "flex-start";
});
const image = computed(() => {
  return isUser.value ? config.defaultUserFaceImage : config.defaultAiFaceImage;
});

/** markdown */
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      const copyHtml = `<div class="copy-html"><span>${lang}</span><span>复制</span></div>`;
      try {
        return `${copyHtml}<pre class="hljs"><code>${
          hljs.highlight(lang, str, true).value
        }</code></pre>`;
      } catch (__) {}
    }
    return `<pre class="hljs" ><code>
      ${md.utils.escapeHtml(str)}  </code></pre>`;
  },
});

const mdContent = computed(() => {
  return md.render(props.source);
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
    <div v-html="mdContent"></div>
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
  border-radius: 20px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
}

:deep(.hljs) {
  max-height: max-content;
  overflow: scroll;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
:deep(code) {
  font-family: "Ubuntu Mono";
}

:deep(.copy-html) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-radius: 10px 10px 0 0;
  width: 100%;
  color: #000000;
  background-color: #bababa;
}
</style>
