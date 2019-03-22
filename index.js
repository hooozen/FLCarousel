import Vue from 'vue';
import App from './app.vue';

new Vue({
  data: {
    message: 'Hello Vue!'
  },
  render: h => h(App),
}).$mount('#app');
