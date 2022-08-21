import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/adminlte.min.css";
import "./assets/plugins/fontawesome-free/css/all.min.css";

import "./assets/plugins/jquery/jquery.min.js";
import "./assets/plugins/bootstrap/js/bootstrap.bundle.js";
import "./assets/js/adminlte.min.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
