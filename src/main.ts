import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/message-box/style/css";

const app = createApp(App);
const pinia = createPinia();

app.config.errorHandler = (err, instance, info) => {
  console.error("[GlobalError]", err, { component: instance?.$options?.name, info });
};

window.addEventListener("unhandledrejection", (event) => {
  console.error("[UnhandledRejection]", event.reason);
});

router.onError((error) => {
  console.error("[RouterError]", error);
  if (error.message.includes("Failed to fetch dynamically imported module")) {
    window.location.reload();
  }
});

app.use(pinia);
app.use(router);
app.mount("#app");
