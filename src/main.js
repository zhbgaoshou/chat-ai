import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/index.scss";

import ChatInput from "./globalComponents/ChatInput.vue";
import ChatFrame from "./globalComponents/ChatFrame.vue";

import router from "@/router";

const app = createApp(App);

app.component("ChatInput", ChatInput);
app.component("ChatFrame", ChatFrame);


app.use(router);
app.mount("#app");
