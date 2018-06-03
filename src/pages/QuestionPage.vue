<template>
  <container>
    <row>
      <column>
        
        <card>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          
          <btn tag="a" floating action class="ml-auto mr-4 mdb-color lighten-3"><fa icon="book" class="pl-1" /></btn>
          
          <card-body>
            <card-title>
              We could put the question here leaving above for some resource
            </card-title>
            <hr/>
            
            <ul class="list-unstyled list-inline font-small mt-3">
              <li class="list-inline-item pr-2"><fa icon="clock-o" class="pr-1" />05/10/2015</li>
              <hr />
              <li class="list-inline-item pr-2"><a href="#"><fa icon="comments-o" class="pr-1" />12</a></li>
              <hr />
              <li class="list-inline-item pr-2"><a href="#"><fa icon="facebook" class="pr-1" />21</a></li>
              <hr />
              <li class="list-inline-item"><a href="#"><fa icon="twitter" class="pr-1" />5</a></li>
            </ul>
          </card-body>
          
          <card-footer color="mdb-color" class="lighten-3 p-0 text-center">
            <ul class="list-unstyled list-inline font-small mt-3">
              <li class="list-inline-item pr-2 white-text"><fa icon="clock-o" class="pr-1" />05/10/2015</li>
              <li class="list-inline-item pr-2"><a href="#" class="white-text"><fa icon="comments-o" class="pr-1" />12</a></li>
              <li class="list-inline-item pr-2"><a href="#" class="white-text"><fa icon="facebook" class="pr-1" />21</a></li>
              <li class="list-inline-item"><a href="#" class="white-text"><fa icon="twitter" class="pr-1" />5</a></li>
            </ul>
          </card-footer>
        </card>
        
      </column>
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
    name: 'QuestionPage',
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
        channelId: this.$route.params.id
      };
    },
    methods: {
      getChannelId () {
        console.log('Question Page: Channel ID - ', this.channelId);
      }
    }
  };
</script>
