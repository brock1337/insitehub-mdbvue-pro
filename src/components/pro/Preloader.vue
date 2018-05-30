<template>
  <div :is="tag" :class="wrapper">
    <div v-if="!multicolor" :class="spinner">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="gap-patch">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
    <div v-if="multicolor">
      <div :class="[spinner, color1 ? 'spinner-' + color1 : 'spinner-blue']">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
      <div :class="[spinner, color2 ? 'spinner-' + color2 : 'spinner-red']">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
      <div :class="[spinner, color3 ? 'spinner-' + color3 : 'spinner-yellow']">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
      <div :class="[spinner, color4 ? 'spinner-' + color4 : 'spinner-green']">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
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
    big: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    crazy: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "blue"
    },
    multicolor: {
      type: Boolean,
      default: false
    },
    color1: {
      type: String
    },
    color2: {
      type: String
    },
    color3: {
      type: String
    },
    color4: {
      type: String
    }
  },
  data() {
    return {
      wrapper: classNames(
        'preloader-wrapper active',
        this.big ? 'big' : '',
        this.small ? 'small' : '',
        this.crazy ? 'crazy' : ''
      ),
      spinner: classNames(
        'spinner-layer',
        this.multicolor ? '' : this.color ? 'spinner-' + this.color + '-only' : ''
      )
    };
  },
};
</script>

<style scoped>
</style>
