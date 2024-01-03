import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import i18n from "./i18n/index";
import "../index.css";

const app = createApp(App);

app.use(router);
app.use(i18n());

app.mount("#app");
