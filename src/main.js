import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/index.scss";

import ChatInput from '@/views/ChatInput.vue'

import router from "@/router";

const app = createApp(App);

app.component('ChatInput',ChatInput)

app.use(router);
app.mount("#app");
