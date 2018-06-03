<template>
  <container>
    <h4 class="pt-5 pb-2">
      Select a category channel
    </h4>
    
    <row>
      <column v-for="channel in channels" :key="channel.id" sm="4">
        <card>
          <view-wrapper hover>
            <!-- Card Image -->
            <card-img :src="channel.avatar_url" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          
          <!-- Floating Action Button (FAB) -->
          <btn @click.native="selectChannel(channel.id, $event)" tag="a" floating action class="ml-auto mr-4 mdb-color lighten-3">
            <fa icon="chevron-right" class="pl-1" />
          </btn>
          
          <!-- Body -->
          <card-body>
            <card-title>
              {{ channel.name }}
            </card-title>
            <hr/>
            
            <p class="font-small grey-dark-text mb-0">
              {{ channel.description }}
            </p>
          </card-body>
          <!-- Footer -->
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
    name: 'ChannelList',
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
        channels: [
          {
            id: '1',
            name: 'Onboarding',
            description: 'Channel\'s short description.',
            avatar_url: 'https://mdbootstrap.com/img/Photos/Others/food.jpg'
          },
          {
            id: '2',
            name: 'Management',
            description: 'Channel\'s short description.',
            avatar_url: 'https://mdbootstrap.com/img/Photos/Others/food.jpg'
          },
          {
            id: '3',
            name: 'Sales and Marketing',
            description: 'Channel\'s short description.',
            avatar_url: 'https://mdbootstrap.com/img/Photos/Others/food.jpg'
          }
        ]
      };
    },
    methods: {
      selectChannel (category, event) {
        console.log('Selected Channel ID: ', category);
        
        this.$router.push({
          path: '/question/',
          params: category.id
        });
      }
    }
  };
</script>

<style scoped>

</style>
