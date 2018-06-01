<template>
  <container class="mt5">
    <row>
      <column>
        <card cascade>
          <view-wrapper gradient="blue">
            <h2 class="h2-responsive">
              Log In
            </h2>
            <p>
              Enhance your skills...Then challenge your friends!
            </p>
          </view-wrapper>
          
          <card-body>
            <input v-model="email" type="email" label="Enter your email" icon-left icon="envelope" />
            <input v-model="pwd" type="password" label="Enter your password" icon-left icon="lock" />
            
            <card-title>
              <btn @click.native="login" icon-left icon="sign-in" gradient="peach" rounded>
                Log In
              </btn>
            </card-title>
            
            <h5>
              Log in using social media.
            </h5>
            <btn tag="a" floating small class="btn-fb"><fa icon="facebook" /></btn>
            <btn tag="a" floating small class="btn-tw"><fa icon="twitter" /></btn>
            <btn tag="a" floating small class="btn-li"><fa icon="linkedin" /></btn>
            <btn tag="a" floating small class="btn-go"><fa icon="google" /></btn>
            
            <card-text>
              Need an account?
              <router-link to="/signup" tag="a" outline="secondary" icon-right icon="arrow-right" rounded >
                Sign up
              </router-link>
            </card-text>
          </card-body>
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
        
        this.$store.dispatch('login', credentials);
      }
    }
  };
</script>
