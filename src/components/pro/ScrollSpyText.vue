<template>
  <div :is="tag" :class="className">
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  data() {
    return {
      className: classNames(
        'scrollspy-example z-depth-1'
      )
    };
  },
};
</script>

<style scoped>
</style>
