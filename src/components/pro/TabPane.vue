<template>
  <div :is="tag" :class="className" role="tabpanel">
    <p>
      <slot></slot>
    </p>
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
        'tab-pane active collapse-item'
      )
    };
  },

};
</script>

<style scoped>
.collapse-item {
  overflow: hidden;
}
</style>
