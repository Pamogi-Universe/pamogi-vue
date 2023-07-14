import { createApp } from 'vue';

import {Quasar, Notify} from "quasar"
import quasarIconSet from "quasar/icon-set/mdi-v7"
import '@quasar/extras/mdi-v7/mdi-v7.css'
import 'quasar/src/css/index.sass';

import {createPinia} from "pinia"

const pinia = createPinia();



import App from './App.vue'

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

const app = createApp(App);

app.use(Quasar,{
    plugins:{
        Notify
    },
    iconSet:quasarIconSet
});
app.use(pinia);
import {router} from "@/router";
app.use(router);

app.mount('#app')
