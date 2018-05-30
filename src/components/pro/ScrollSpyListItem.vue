<template>
  <li :is="tag" class="nav-item">
    <a :class="[className, {'active': active}]" href="#" role="tab">
      <slot></slot>
    </a>
  </li>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
        'nav-link '
      )
    };
  },
};
</script>

<style scoped>
</style>
