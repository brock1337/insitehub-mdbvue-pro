<template>
  <ul :is="tag" :class="className">
    <slot></slot>
  </ul>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    color: {
      type: String,
      default: 'default'
    },
    pills: {
      type: Boolean
    },
    classicTabs: {
      type: Boolean
    },
    tabs: {
      type: Boolean
    },
    vertical: {
      type: Boolean
    },
    justify: {
      type: Boolean
    }
  },
  data() {
    return {
      className: classNames(
        'nav',
        this.justify && 'nav-justified',
        this.tabs && 'nav-tabs',
        this.pills && 'md-pills',
        this.classicTabs && 'classic-tabs',
        this.vertical ? 'flex-column' : '',
        this.pills && this.color ? 'pills-'+this.color : false,
        (this.tabs || this.classicTabs) && this.color ? 'tabs-'+this.color  : false
        // this.className ? this.className : false
      )
    };
  },

};
</script>

<style scoped>
</style>
