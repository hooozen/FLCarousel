import Vue from 'vue';
import App from './app.vue';
import { Carousel, CarouselItem } from './dist/main.js';

new Vue({
  data: {
    message: 'Hello Vue!'
  },
  render: h => h(App),
}).$mount('#app');

Vue.install(Carousel, CarouselItem);
