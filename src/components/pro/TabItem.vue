<template>
  <li :is="tag" :class="className">
    <a :class="[aClass, {'active': active}]" href="#" role="tab">
      <fa v-if="icon" :icon="icon" />
      <slot></slot>
    </a>
  </li>
</template>

<script>
import classNames from 'classnames';
import Fa from '../Fa.vue';

export default {
  components: {
    Fa
  },
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        'nav-item'
      ),
      aClass: classNames(
        'nav-link'
      )
    };
  }
};
</script>

<style scoped>
</style>
