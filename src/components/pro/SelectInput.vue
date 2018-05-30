<template>
  <input type="text" ref="selectInput" readOnly :value="text" :class="className" /> 
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    text: {
      type: [String, Array]
    }
  },
  data() {
    return {
      name: 'SelectInput',
      className: classNames(
        'select-dropdown'
      )
    };
  },

};
</script>

<style scoped>

</style>
