import FlCarouselItem from '../carousel/src/item.vue';

/* istanbul ignore next */
FlCarouselItem.install = function(Vue) {
  Vue.component(FlCarouselItem.name, FlCarouselItem);
};

export default FlCarouselItem;
