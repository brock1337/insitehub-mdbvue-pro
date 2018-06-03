<template>
  <container>
    <row>
      <!-- TODO: This is the generic style of resource I will want to use -->
      <column sm="4">
        <card cascade narrow>
          <view-wrapper gradient="peach">
            <h2 class="h2-responsive">Title of the news</h2>
            <p><fa icon="calendar" /> 26.07.2017</p>
          </view-wrapper>
          <card-body class="text-center">
            <card-text>
              Placeholder text for the component - CardText
            </card-text>
            <a class="orange-text mt-1 d-flex flex-row-reverse">
              <h5 class="p-2" waves>Read more <fa icon="chevron-right" /></h5>
            </a>
          </card-body>
        </card>
      </column>
  
      <column sm="4">
        <card cascade narrow>
          <view-wrapper gradient="blue">
            <h2 class="h2-responsive">Marta</h2>
            <p>Deserve for her own card</p>
          </view-wrapper>
          <card-body class="text-center">
            <card-text>
              Placeholder text for the component - CardText
            </card-text>
            <hr/>
            <a class="icons-sm li-ic"><fa icon="linkedin" /></a>
            <a class="icons-sm tw-ic"><fa icon="twitter" /></a>
            <a class="icons-sm fb-ic"><fa icon="facebook" /></a>
            <a class="icons-sm email-ic"><fa icon="envelope" /></a>
          </card-body>
        </card>
      </column>
    </row>
  </container>
</template>

<script>
  import Column from '../components/Col';
  import Container from '../components/Container';
  import Card from '../components/Card';
  import CardBody from '../components/CardBody';
  import CardText from '../components/CardText';
  import Fa from '../components/Fa';
  import Row from '../components/Row';
  import ViewWrapper from '../components/ViewWrapper';
  
  export default {
    name: 'ResourceItem',
    components: {
      Column,
      Container,
      Card,
      CardBody,
      CardText,
      Fa,
      Row,
      ViewWrapper
    }
  };
</script>

<style scoped>

</style>
