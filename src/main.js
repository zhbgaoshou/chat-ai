import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/index.scss";

import ChatInput from "./globalComponents/ChatInput.vue";
import ChatFrame from "./globalComponents/ChatFrame.vue";

import { longpressDirective } from "@/directives";
import router from "@/router";
import { createPinia } from "pinia";

// 预览组件以及样式
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
// VuePress主题以及样式（这里也可以选择github主题）
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
// Prism
import Prism from "prismjs";
// 代码高亮
import "prismjs/components/prism-json";

// emoji
import createEmojiPlugin from "@kangc/v-md-editor/lib/plugins/emoji/index";
import "@kangc/v-md-editor/lib/plugins/emoji/emoji.css";
// 显示代码行数
import createLineNumbertPlugin from "@kangc/v-md-editor/lib/plugins/line-number/index";

// 快速复制代码
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";
// 选择使用主题
VMdPreview.use(githubTheme, {
  Prism,
});
VMdPreview.use(createEmojiPlugin());
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createLineNumbertPlugin());

VMdPreview.use(createCopyCodePlugin());

const app = createApp(App);

app.directive("longpress", longpressDirective);

app.component("ChatInput", ChatInput);
app.component("ChatFrame", ChatFrame);

app.use(router).use(createPinia()).use(VMdPreview);
app.mount("#app");
