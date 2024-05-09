import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

Vue.config.productionTip = false;

// Register Vue Toastification plugin
Vue.use(Toast, {
    // Optional: Customize the toast options (e.g., position, timeout)
    position: 'top-right', // Set the toast position (e.g., 'top-right')
    timeout: 3000, // Set the toast duration in milliseconds
    // Other options can be customized here
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
