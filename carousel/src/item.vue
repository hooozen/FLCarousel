<template>
  <div
    v-show="ready"
    class="fl-carousel__item"
    :class="{
      'is-active': active,
      'fl-carousel__item--card': $parent.type === 'card',
      'is-in-stage': inStage,
      'is-hover': hover,
      'is-animating': animating
    }"
    @click="handleItemClick"
    :style="{
      msTransform: `translateX(${ translate }px) scale(${ scale })`,
      webkitTransform: `translateX(${ translate }px) scale(${ scale })`,
      transform: `translateX(${ translate }px) scale(${ scale })`,
      width,
      zIndex
    }">
    <div
      v-if="$parent.type === 'card'"
      v-show="!active"
      class="fl-carousel__mask">
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import '../../style/carousel-item.css';

  export default {
    name: 'ElCarouselItem',

    props: {
      name: String,
      label: {
        type: [String, Number],
        default: ''
      }
    },

    data() {
      return {
        hover: false,
        translate: 0,
        scale: 1,
        active: false,
        ready: false,
        inStage: false,
        animating: false,
        layer: 0,
        width: 100,
        zIndex: 0
      };
    },

    methods: {
      processIndex(index, activeIndex, length) {
        const halfLenght = Math.floor(length / 2);
        if (activeIndex - index > halfLenght) {
          console.log(index, activeIndex);
          return index + length;
        } else if (index - activeIndex > halfLenght) {
          console.log(index, activeIndex);
          return index - length;
        }
        return index;
      },

      calculateTranslate(index, activeIndex, parentWidth) {
        const width = this.$el.offsetWidth;
        if (this.inStage) {
          const offset = (parentWidth - width) / 2;
          if (index === activeIndex) return (parentWidth - width) / 2;
          if (Math.abs(index - activeIndex) === this.totalLayer - 1) {
            const res = index > activeIndex ? parentWidth - width * (0.5 + this.scale / 2) : (this.scale - 1) / 2 * width;
            return res;
          }

          let i = index;
          let offsetFromMainCenter = 0;
          let leftWidth = (parentWidth - width) * 0.5;
          let offsetFromMainRightEdge = 0;
          while (i !== activeIndex) {
            offsetFromMainRightEdge += leftWidth / 3 * 2;
            offsetFromMainCenter = offsetFromMainRightEdge + (parentWidth - width * this.scale) / 2 - offset;
            leftWidth /= 3;
            index > activeIndex ? i-- : i++;
          }
          return index < activeIndex ? offset - offsetFromMainCenter : offset + offsetFromMainCenter;
        } else if (index > activeIndex) {
          return -(this.scale + 1) * width / 2 + parentWidth;
        } else {
          return (this.scale - 1) * width / 2;
        }
      },

      translateItem(index, activeIndex, oldIndex) {
        const parentWidth = this.$parent.$el.offsetWidth;
        const length = this.$parent.items.length;
        if (this.$parent.type !== 'card' && oldIndex !== undefined) {
          this.animating = index === activeIndex || index === oldIndex;
        }
        if (index !== activeIndex && length > 2 && this.$parent.loop) {
          index = this.processIndex(index, activeIndex, length);
          console.log(index);
        }
        if (this.$parent.type === 'card') {
          this.totalLayer = this.$parent.visibleLayer;
          this.inStage = Math.abs(index - activeIndex) < this.totalLayer;
          this.layer = this.totalLayer - Math.abs(index - activeIndex);
          this.scale = Math.pow(0.8, this.totalLayer - this.layer);
          this.width = this.$parent.cardWidth;;
          this.active = index === activeIndex;
          this.translate = this.calculateTranslate(index, activeIndex, parentWidth);
          this.zIndex = this.layer;
        } else {
          this.active = index === activeIndex;
          this.translate = parentWidth * (index - activeIndex);
          this.zIndex = 0;
        }
        this.ready = true;
      },

      handleItemClick() {
        const parent = this.$parent;
        if (parent && parent.type === 'card') {
          const index = parent.items.indexOf(this);
          parent.setActiveItem(index);
        }
      }
    },

    created() {
      this.$parent && this.$parent.updateItems();
    },

    destroyed() {
      this.$parent && this.$parent.updateItems();
    }
  };
</script>
