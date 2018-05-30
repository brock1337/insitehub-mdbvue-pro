<template>
  <container class="mt-5">
    <h4 class="pb-2">Cascading cards</h4>
    <row>
      <column sm="4">
        <card cascade wide>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body class="text-center">
            <card-title><strong>Alice Mayer</strong></card-title>
            <h5 class="indigo-text"><strong>Photographer</strong></h5>
            <card-text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</card-text>
            <a class="icons-sm li-ic"><fa icon="linkedin" /></a>
            <a class="icons-sm tw-ic"><fa icon="twitter" /></a>
            <a class="icons-sm fb-ic"><fa icon="facebook" /></a>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card cascade narrow>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body>
            <h5 class="pink-text"><fa icon="cutlery" /> Culinary</h5>
            <card-title>Cheat day inspirations</card-title>
            <card-text>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</card-text>
            <btn color="unique">Button</btn>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card cascade>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body class="text-center">
            <card-title><strong>Billy Cullen</strong></card-title>
            <h5>Web developer</h5>
            <card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.</card-text>
            <btn tag="a" floating small class="btn-fb"><fa icon="facebook" /></btn>
            <btn tag="a" floating small class="btn-tw"><fa icon="twitter" /></btn>
            <btn tag="a" floating small class="btn-dribbble"><fa icon="dribbble" /></btn>
          </card-body>
        </card>
      </column>
    </row>
    <h4 class="pt-5 pb-2">Cascading panels</h4>
    <row>
      <column sm="4">
        <card cascade narrow>
          <view-wrapper gradient="purple">
            <h2 class="h2-responsive">Mattonit</h2>
            <p>The Boar</p>
            <btn tag="a" floating transparent small><fa icon="facebook" /></btn>
            <btn tag="a" floating transparent small><fa icon="twitter" /></btn>
            <btn tag="a" floating transparent small><fa icon="google-plus" /></btn>
          </view-wrapper>
          <card-body class="text-center">
            <card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commod</card-text>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card cascade narrow>
          <view-wrapper gradient="peach">
            <h2 class="h2-responsive">Title of the news</h2>
            <p><fa icon="calendar" /> 26.07.2017</p>
          </view-wrapper>
          <card-body class="text-center">
            <card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.</card-text>
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
            <card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.</card-text>
            <hr/>
            <a class="icons-sm li-ic"><fa icon="linkedin" /></a>
            <a class="icons-sm tw-ic"><fa icon="twitter" /></a>
            <a class="icons-sm fb-ic"><fa icon="facebook" /></a>
            <a class="icons-sm email-ic"><fa icon="envelope" /></a>
          </card-body>
        </card>
      </column>
    </row>
    <h4 class="pt-5 pb-2">Reversed cascade</h4>
    <row>
      <card cascade wide reverse>
        <view-wrapper hover>
          <card-img src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap"></card-img>
          <md-mask waves overlay="white-slight"></md-mask>
        </view-wrapper>
        <card-body class="text-center">
          <card-title><strong>My adventure</strong></card-title>
          <h5 class="indigo-text"><strong>Photography</strong></h5>
          <card-text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</card-text>
          <a class="icons-sm li-ic"><fa icon="linkedin" /></a>
          <a class="icons-sm tw-ic"><fa icon="twitter" /></a>
          <a class="icons-sm fb-ic"><fa icon="facebook" /></a>
        </card-body>
      </card>
    </row>
    <h4 class="pt-5 pb-2">Action button & footer</h4>
    <row>
      <column sm="4">
        <card>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <btn tag="a" floating action class="ml-auto mr-4 mdb-color lighten-3"><fa icon="chevron-right" class="pl-1" /></btn>
          <card-body>
            <card-title>Card title</card-title>
            <hr/>
            <p class="font-small grey-dark-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
    <h4 class="pt-5 pb-2">Flat buttons</h4>
    <row>
      <column sm="4">
        <card>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body>
            <card-title>Light version</card-title>
            <a class="activator p-3 mr-2"><fa icon="share-alt" /></a>
            <hr/>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <a class="link-text"><h5>Read more <fa icon="chevron-right" class="pl-1" /></h5></a>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card dark>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body color="elegant" class="white-text">
            <card-title>Dark version</card-title>
            <a class="activator p-3 mr-2"><fa icon="share-alt" /></a>
            <hr class="hr-light"/>
            <p class="font-small mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="d-flex justify-content-end"><h5>Read more <fa icon="chevron-right" class="pl-2" /></h5></a>
          </card-body>
        </card>
      </column>
    </row>
    <h4 class="pt-5 pb-2">Testimonial card</h4>
    <row>
      <column sm="4">
        <card testimonial>
          <card-up color="indigo" class="lighten-1"></card-up>
          <card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle"></card-avatar>
          <card-body>
            <card-title>Anna Doe</card-title>
            <hr/>
            <p><fa icon="quote-left" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card testimonial>
          <card-up gradient="aqua" class="lighten-1"></card-up>
          <card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" class="rounded-circle"></card-avatar>
          <card-body>
            <card-title>Martha Smith</card-title>
            <hr/>
            <p><fa icon="quote-left" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
          </card-body>
        </card>
      </column>
    </row>
    <h4 class="pt-5 pb-2">Image overlay</h4>
    <row>
      <column sm="6">
        <card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text"><fa icon="pie-chart" /> Marketing</h5>
              <card-title tag="h3" class="pt-2"><strong>This is card title</strong></card-title>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                  Odit sed qui, dolorum!.</p>
              <btn color="pink"><fa icon="clone left" /> View project</btn>
            </div>
          </div>
        </card>
      </column>
      <column sm="6">
        <card class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')">
          <div class="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
            <div>
              <h5 class="orange-text"><fa icon="desktop" /> Software</h5>
              <card-title tag="h3" class="pt-2"><strong>This is card title</strong></card-title>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                  Odit sed qui, dolorum!.</p>
              <btn color="deep-orange"><fa icon="clone left" /> View project</btn>
            </div>
          </div>
        </card>
      </column>
    </row>
    <h4 class="pt-5 pb-2">Card groups</h4>
    <row>
      <card-group>
        <card>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body>
            <card-title>Card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <btn color="primary">Read more</btn>
          </card-body>
        </card>
        <card>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body>
            <card-title>Card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <btn color="primary">Read more</btn>
          </card-body>
        </card>
        <card>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body>
            <card-title>Card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <btn color="primary">Read more</btn>
          </card-body>
        </card>
      </card-group>
    </row>
    <h4 class="pt-5 pb-2">Card decks</h4>
    <row>
      <card-deck>
        <card>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body>
            <card-title>Card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <btn color="primary">Read more</btn>
          </card-body>
        </card>
        <card>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body>
            <card-title>Card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <btn color="primary">Read more</btn>
          </card-body>
        </card>
        <card>
          <view-wrapper hover>
            <card-img src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap"></card-img>
            <md-mask flex-center waves overlay="white-slight"></md-mask>
          </view-wrapper>
          <card-body>
            <card-title>Card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <btn color="primary">Read more</btn>
          </card-body>
        </card>
      </card-deck>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, Card, CardImg, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardUp, CardAvatar, CardGroup, CardDeck, Btn, ViewWrapper, MdMask, Fa } from 'mdbvue';

export default {
  name: 'CardProPage',
  components: {
    Container,
    Row,
    Column,
    Card,
    CardImg,
    CardHeader,
    CardBody, 
    CardTitle, 
    CardText,
    CardFooter,
    CardUp,
    CardAvatar,
    CardGroup, 
    CardDeck,
    Btn,
    ViewWrapper,
    MdMask,
    Fa
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
