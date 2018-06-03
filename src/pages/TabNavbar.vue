<template>
  <div>
  
    <tab classicTabs color="orange">
      <tab-item :active="classic2==1" @click.native.prevent="classic2 = 1">
        <fa icon="tachometer" size="2x"/><br/>
        Dashboard
      </tab-item>
      
      <tab-item :active="classic2==2" @click.native.prevent="classic2 = 2">
        <fa icon="book" size="2x"/><br/>
        Resources
      </tab-item>
      
      <tab-item :active="classic2==3" @click.native.prevent="classic2 = 3">
        <fa icon="trophy" size="2x"/><br/>
        Leaderboard
      </tab-item>
  
      <tab-item :active="classic2==4" @click.native.prevent="classic2 = 4">
        <fa icon="bell" size="2x"/><br/>
        Notifications
      </tab-item>
      
      <tab-item :active="classic2==5" @click.native.prevent="classic2 = 5">
        <fa icon="user" size="2x"/><br/>
        Profile
      </tab-item>
    </tab>
    
    <tab-content class="mb-5 card">
      <transition-group name="slide-toggle">
        <tab-pane key="show1" v-show="classic2==1">
          Dashboard
        </tab-pane>
        
        <tab-pane key="show2" v-show="classic2==2">
          Channel Resources
        </tab-pane>
        
        <tab-pane key="show3" v-show="classic2==3">
          Leaderboard
        </tab-pane>
        
        <tab-pane key="show4" v-show="classic2==4">
          Notification Center
        </tab-pane>
  
        <tab-pane key="show5" v-show="classic2==5">
          User Profile
        </tab-pane>
      </transition-group>
    </tab-content>
  </div>
</template>

<script>
  import Btn from '../components/Button';
  import Col from '../components/Col';
  import Container from "../components/Container";
  import Fa from '../components/Fa';
  import Row from '../components/Row';
  import Tab from '../components/pro/Tab';
  import TabContent from '../components/pro/TabContent';
  import TabItem from '../components/pro/TabItem';
  import TabPane from '../components/pro/TabPane';
  
  export default {
    name: 'TabNavbar',
    components: {
      Btn,
      Col,
      Container,
      Fa,
      Row,
      Tab,
      TabContent,
      TabItem,
      TabPane
    },
    data() {
      return {
        basic1: '1',
        basic2: '1',
        pills: '1',
        vertical: '1',
        basicOutside: '1',
        verticalWithin: '1',
        classic1: '1',
        classic2: '1'
      };
    }
  };
</script>

<style scoped>

</style>
