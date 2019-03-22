import Vue from 'vue';
import App from './app.vue';
import FL from '../dist/main.js';

Vue.use(FL.Carousel);
Vue.use(FL.CarouselItem);

new Vue({
  data: {
    message: 'Hello Vue!'
  },
  render: h => h(App),
}).$mount('#app');

