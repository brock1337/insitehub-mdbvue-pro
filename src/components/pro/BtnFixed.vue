<template>
  <div :is="tag" :class="className" :style="[{'bottom' : bottom + 'px','right' : right + 'px'}]">
    <Btn tag="a" floating :size="size" :color="color">
      <fa :icon="icon"/>
    </Btn>
    <ul :class="ulClass">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import classNames from 'classnames';
import Btn from '../Button';
import Fa from '../Fa';

export default {
  components: {
    Btn,
    Fa
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String,
      default: "red"
    },
    size: {
      type: String
    },
    icon: {
      type: String,
      default: "pencil"
    },
    right: {
      type: Number
    },
    bottom: {
      type: Number
    }
  },
  data() {
    return {
      className: classNames(
        'fixed-action-btn'
      ),
      ulClass: classNames(
        'list-unstyled'
      )
    };
  }
};
</script>

<style scoped>
</style>
