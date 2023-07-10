import { createApp } from 'vue';

import {Quasar, Notify} from "quasar"
import quasarIconSet from "quasar/icon-set/mdi-v7"
import '@quasar/extras/mdi-v7/mdi-v7.css'
import 'quasar/src/css/index.sass';

import {router} from "@/router";

import App from './App.vue'

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

import {createPinia} from "pinia"

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(Quasar,{
    plugins:{
        Notify
    },
    iconSet:quasarIconSet
});
app.use(pinia);

app.mount('#app')
