<template>
  <container class="mt5">
    <row>
      <column>
        
        <card cascade>
          <view-wrapper gradient="blue">
            <h2 class="h2-responsive">
              Sign Up
            </h2>
            <p>
              Enhance your skills...Then challenge your friends!
            </p>
          </view-wrapper>
          
          <card-body>
            <input icon-left icon="envelope" v-model="email" type="email" label="Enter your email" />
            <input icon-left icon="lock" v-model="pwd" type="password" label="Enter your password" />
            
            <card-title>
              <btn @click.native="signup" icon-left icon="sign-in" gradient="peach" rounded>
                Sign Up
              </btn>
            </card-title>
            
            <h5>
              Sign up using social media.
            </h5>
            <btn tag="a" floating small class="btn-fb"><fa icon="facebook" /></btn>
            <btn tag="a" floating small class="btn-tw"><fa icon="twitter" /></btn>
            <btn tag="a" floating small class="btn-li"><fa icon="linkedin" /></btn>
            <btn tag="a" floating small class="btn-go"><fa icon="google" /></btn>
            
            <card-text>
              Already have an account?
              <router-link to="/login" tag="a" outline="secondary" icon-right icon="arrow-right" rounded >
                Log in
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
    name: 'SignupPage',
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
      signup () {
        const credentials = {
          email: this.email,
          pwd: this.pwd
        };
        
        console.log(credentials);
        
        this.$store.dispatch('signup', credentials);
      }
    }
  };
</script>
