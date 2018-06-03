<template>
  <container>
    
    <row>
      <column>
        <btn @click.native="createGame" color="secondary" rounded>
          Start Game
        </btn>
      </column>
    </row>
  
    <row>
      <column>
        <btn @click.native="createChallenge" rounded>
          New Challenge
        </btn>
      </column>
    </row>
    
  </container>
</template>

<script>
  import Btn from '../components/Button';
  import Container from '../components/Container';
  import Column from '../components/Col';
  import Row from '../components/Row';
  
  export default {
    name: 'AppDashboard',
    components: {
      Btn,
      Column,
      Container,
      Row
    },
    methods: {
      createGame () {
        console.log('Creating new Game...');
        
        // TODO: Determine what data must be acquired & saved prior to navigating to choose category
        // TODO: Can this data persistence wait till a later step and be populated from Vuex?
        
        this.$router.push({ path: '/game/channels' });
      },
      createChallenge () {
        console.log('Creating new Challenge...');
  
        // TODO: Determine what data must be acquired & saved prior to navigating to choose opponent
        
        //this.$router.push({ path: '/' });
      }
    }
  };
</script>

<style scoped>

</style>
