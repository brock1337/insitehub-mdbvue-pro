<template>
  <button @click="getChannelId">Get Channel ID</button>
</template>

<script>
  export default {
    name: 'QuestionPage',
    components: {},
    data () {
      return {
        channelId: this.$route.params.id
      };
    },
    methods: {
      getChannelId () {
        console.log('Question Page: Channel ID - ', this.$route.params.id);
      }
    }
  };
</script>

<style scoped>

</style>
