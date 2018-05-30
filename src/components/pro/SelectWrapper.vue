<template>
  <div :is="tag" :class="className" :data-multiple="this.multiple">
    <span :class="caretClass">▼</span>
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
    },
    color: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      name: 'SelectWrapper',
      className: classNames(
        'select-wrapper',
        this.color ? 'colorful-select dropdown-' + this.color : ''
      ),
      caretClass: classNames(
        'caret',
        this.disabled ? 'disabled' : ''
      )
    };
  },

};
</script>

<style scoped>

</style>
