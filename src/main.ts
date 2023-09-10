import './registerServiceWorker';
import 'es6-shim';
import 'reflect-metadata';
import App from './App.vue';
import { createApp } from 'vue';
import moment from 'moment';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';
import { VueDraggableNext } from 'vue-draggable-next';

moment.locale('pt-BR');

const app = createApp(App);

app.use(Quasar, quasarUserOptions);
app.use(router);
app.use(VueApexCharts);

app.component('draggable', VueDraggableNext);

app.mount('#app');
