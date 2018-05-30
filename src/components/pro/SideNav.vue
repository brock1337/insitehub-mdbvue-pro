<template>
  <div>
    <transition :name="slideSide">
      <div :is="tag" :class="className" v-if="isThere || OpenedFromOutside">
        <ul class="custom-scrollbar list-unstyled">
          <li v-if="logo">
            <div :class="wrpClasses" @click="wave">
              <a :href="href">
                <img :src="logo" :class="lgClasses"/>
              </a>
            </div>
          </li>
          <slot></slot>
        </ul>
      </div>
    </transition>
    <div v-if="OpenedFromOutside" @click="handleOverlayClick" id="sidenav-overlay"></div>
  </div>
</template>

<script>
import classNames from 'classnames';
import waves from '../../mixins/waves';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    fixed: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean
    },
    logo: {
      type: String
    },
    logoClasses: {
      type: String
    },
    href: {
      type: String,
      default: '#'
    },
    breakWidth: {
      type: Number,
      default: 770
    },
    OpenedFromOutside: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    waves: {
      type: Boolean,
      default: false
    },
    darkWaves: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isThere: false,
      className: classNames(
        'side-nav',
        this.fixed && 'fixed',
        this.right && 'right-aligned',
        this.color
      ),
      lgClasses: classNames(
        'img-fluid',
        'flex-center',
        'd-block',
        this.logoClasses
      ),
      wrpClasses: classNames(
        'logo-wrapper',
        this.waves ? 'ripple-parent' : ''
      ),
    };
  },
  computed: {
    slideSide() {
      if (this.right) {
        return "slideRight";
      }
      return "slideLeft";
    }
  },
  methods: {
    updatePredicate() {
      if (!this.hidden) {
        this.isThere = window.innerWidth > this.breakWidth;
      }
    },
    handleOverlayClick() {
      this.$emit("update:OpenedFromOutside", !this.OpenedFromOutside);
    }
  },
  mounted() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updatePredicate);
  },
  mixins: [waves]
};
</script>

<style scoped>
.side-nav {
  transform: translate(0);
}
.slideLeft-enter, .slideLeft-leave-to {
  transform: translate(-100%);
  opacity: 0;
}
.slideLeft-enter-to, .slideLeft-leave {
  opacity: 1;
}
.slideLeft-leave-active, .slideLeft-enter-active {
  transition: 300ms;
}

.slideRight-enter, .slideRight-leave-to {
  transform: translate(100%);
  opacity: 0;
}
.slideRight-enter-to, .slideRight-leave {
  opacity: 1;
}
.slideRight-leave-active, .slideRight-enter-active {
  transition: 300ms;
}


</style>
