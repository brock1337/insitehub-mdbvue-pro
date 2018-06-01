<template>
  <container>
    <row>
    
    </row>
  </container>
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
    name: 'GameCategories',
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
    methods: {
      selectCategory (category) {
        console.log('[GAME] category: ', category);
      }
    }
  };
</script>

<style scoped>

</style>
