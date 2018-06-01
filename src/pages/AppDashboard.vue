<template>
  <container>
    
    <row>
      <column>
        <btn @click.native="startNewGame" color="secondary" rounded>
          Start Game
        </btn>
      </column>
    </row>
  
    <row>
      <column>
        <btn @click.native="startNewChallenge" rounded>
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
      startNewGame () {
        console.log('New Game');
        
        // TODO: Determine what data must be acquired & saved prior to navigating to choose category
        
        //this.$router.push({ path: '/' });
      },
      startNewChallenge () {
        console.log('New Challenge');
  
        // TODO: Determine what data must be acquired & saved prior to navigating to choose opponent
        
        //this.$router.push({ path: '/' });
      }
    }
  };
</script>

<style scoped>

</style>
