import { createApp } from "vue";
import store from "./store";
import router from './router';
import App from "./App.vue"
import 'ant-design-vue/dist/antd.css';


const app = createApp(App);
// 挂载store
app.use(store);
app.use(router);
// 挂载实例
app.mount("#app");
