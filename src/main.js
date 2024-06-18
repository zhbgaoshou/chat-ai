import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/index.scss";

import ChatInput from "./globalComponents/ChatInput.vue";
import ChatFrameAI from "./globalComponents/ChatFrameAI.vue";
import ChatFrameUser from "./globalComponents/ChatFrameUser.vue";

import router from "@/router";

const app = createApp(App);

app.component("ChatInput", ChatInput);
app.component("ChatFrameAI", ChatFrameAI);
app.component("ChatFrameUser", ChatFrameUser);

app.use(router);
app.mount("#app");
