<template>
  <div class="demo">
    <fl-carousel type="card" height="300px" visible-layer="3" card-width="300px" :autoplay="false">
      <fl-carousel-item v-for="item in 10" :key="item">
        <h3>{{ item }}</h3>
      </fl-carousel-item>
    </fl-carousel>
  </div>
</template>

<script>
  import FlCarousel from '../carousel/src/main.vue';
  import FlCarouselItem from '../carousel/src/item.vue';

  export default {
    components: {
      FlCarousel,
      FlCarouselItem,
    }
  }
</script>


<style>
  .demo .fl-carousel__item:nth-child(2n) {
    background: #99a9bf;
  }
  .demo .fl-carousel__item:nth-child(2n+1) {
    background: #d3dce6;
  }
  h3 {
    line-height: 300px;
    color: #fff;
    font-size: 60px;
    text-align: center;
  }
</style>


