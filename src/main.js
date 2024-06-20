import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/index.scss";

import ChatInput from "./globalComponents/ChatInput.vue";
import ChatFrame from "./globalComponents/ChatFrame.vue";

import { longpressDirective } from "@/directives";
import router from "@/router";
import { createPinia } from "pinia";

const app = createApp(App);

app.directive("longpress", longpressDirective);

app.component("ChatInput", ChatInput);
app.component("ChatFrame", ChatFrame);

app.use(router).use(createPinia());
app.mount("#app");
