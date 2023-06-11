import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
import VuePictureSwipe from 'vue3-picture-swipe';
import wait from "@meforma/vue-wait-for";

createApp(App).use(router).use(wait).component('vue-picture-swipe', VuePictureSwipe).mount('#app')
