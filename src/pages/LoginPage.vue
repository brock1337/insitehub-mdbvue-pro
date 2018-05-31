<template>

</template>

<script>
  import Btn from '../components/Button';
  import Card from '../components/Card';
  import CardAvatar from '../components/CardAvatar';
  import CardBody from '../components/CardBody';
  import CardDeck from '../components/CardDeck';
  import CardHeader from '../components/CardHeader';
  import CardFooter from '../components/CardFooter';
  import CardGroup from '../components/CardGroup';
  import CardImg from '../components/CardImg';
  import CardTitle from '../components/CardTitle';
  import CardText from '../components/CardText';
  import CardUp from '../components/CardUp';
  import Column from '../components/Col';
  import Container from '../components/Container';
  import Fa from '../components/Fa';
  import MdInput from '../components/MdInput';
  import MdMask from '../components/Mdmask';
  import Row from '../components/Row';
  import ViewWrapper from '../components/ViewWrapper';
  
  export default {
    name: 'LoginPage',
    components: {
      Btn,
      Card,
      CardAvatar,
      CardBody,
      CardDeck,
      CardHeader,
      CardFooter,
      CardGroup,
      CardImg,
      CardTitle,
      CardText,
      CardUp,
      Column,
      Container,
      Fa,
      MdInput,
      MdMask,
      Row,
      ViewWrapper
    },
    data () {
      return {
        email: '',
        pwd: ''
      };
    },
    methods: {
      login () {
        const credentials = {
          email: this.email,
          pwd: this.pwd
        };
        
        console.log(credentials);
        
        // this.$store.dispatch('login', credentials);
      }
    }
  };
</script>
