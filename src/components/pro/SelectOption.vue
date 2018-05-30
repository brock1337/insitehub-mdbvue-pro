<template>
  <li :data-multiple="multiple" :class="className">
    <input v-if="multiple" :data-multiple="multiple" type="checkbox" />
    <label v-if="multiple" :data-multiple="multiple" :data-value="value"></label>
    <img v-if="icon" :src="icon" :data-value="value" :alt="alt" class="rounded-circle" />
    <span :data-multiple="multiple" class="filtrable" :data-value="value">
      <slot></slot>
    </span>
  </li>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    },
    icon: {
      type: String
    },
    alt: {
      type: String,
      default: "Option icon"
    }
  },
  data() {
    return {
      name: 'SelectOption',
      className: classNames(
        this.disabled ? 'disabled' : ''
      )
    };
  },

};
</script>

<style scoped>
label {
  float: left;
  margin-left: 10px;
  margin-top: 6px;
  margin-bottom: 0;
}
</style>
