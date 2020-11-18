<template>
  <Layout :hideHeader="true" :disableScroll="true">

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
       
      <VacationCard
        img=""
        imgAlt=""
        eyebrow=""
        title=""
        pricing=""
        url=""
      />
      <img class="pt-5" src="/img/valuesheader2.png" alt="">
      <div class="center py-5">
      <h2 class="text-center">OUR PHILOSOPHY</h2>
      <p class="text-center py-1">The ThreeFold Foundation is not ThreeFold — rather, it is sparking a movement to bring the world <br> a truly peer-to-peer internet. We acknowledge and support the many people and organizations around the world <br>  who bring crucial support to the growth and adoption of the ThreeFold Grid.</p>
      </div>

      <div class="center py-10">
<h2 class="text-center pt-5">IF NOT US, WHO? IF NOT NOW, WHEN?</h2>
      <p class="text-center">While to date we have maintained more of a focal role in terms of funding, development, and promotion, for example, this has been more out of necessity than out of desire. We know that the success of the project depends on a distributed and decentralized ecosystem all working towards the same vision.
      <br>
      <br>
      We agree that the world needs some healing and that raising consciousness is the way forward. This happens on 3 levels: physical (climate, pollution), personal (spirituality) and digital. Our current internet is seriously broken, and it needs to be fixed.
       </p>

      </div>


      <div class="center py-10">
<h2 class="text-center">WHAT WE STAND FOR</h2>
      <p class="text-center">Any technology is only as good as the values on which it is created. Below are the three pillars that ThreeFold is built on:
    
       </p>

      </div>

      <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 text-center py-5 ">
  <div class=" p-2 text-center ">
    <img src="/img/equality.png" alt="">
    <h3 class="text-center">EQUALITY</h3>
    <p>Equality is the foundation for a fair world where everyone is given the opportunity to be  empowered and to achieve their full potential.</p>
    </div>
  <div class=" p-2 text-center ">
    <img src="/img/autonomy.png" alt="">
    <h3 class="text-center">AUTONOMY</h3>
    <p>Being empowered to learn, partake, dream  and succeed is fundamental to achieve peace and fulfillment of humankind's potential</p>
    </div>
  <div class="p-2 text-center ">
    <img src="/img/sustainable.png" alt="">
    <h3 class="text-center">SUSTAINABILITY</h3>
    <p>Sustainability ensures the future of life on  earth. It is about adopting the behavior and mindset to minimize our footprint.</p>
    </div>
</div>

<div class="center py-10">
<h2 class="text-center">INTERNET ACCESS | A HUMAN RIGHT</h2>
      <p class="text-center">n 2016, the United Nations officially declared Internet access to be a human right. The right to internet access aims to protect people’s freedom of expression and opinion, as well as other fundamentals such as access to knowledge and information. 
<br>
<br>
Yet as of today, about 48% of humanity remains unconnected to the Internet, creating huge inequalities in the access to information and knowledge. It is important that the right steps are taken to improve the relationship between governments and citizens and to uphold all human rights.
<br>
<br> 
To make the new internet accessible and equal to all, ThreeFold built an infrastructure that is affordable to all and collectively owned by the network peers. To ensure a fair and equal distribution of the internet to everyone, fully sponsored capacity will be deployed in remote regions of our world. 
    
       </p>

      </div>

<div class="center py-10">
<h2 class="text-center">DIGITAL SOVEREIGNTY | FOR EVERYONE</h2>
      <p class="text-center">The Internet evolved to become the world's largest database of information and knowledge, opening up exponential growth on personal, organizational and economic levels. Yet it is owned by large international companies that exploit users data. 
<br>
<br>
The current approach of many governments and countries is to cut the Internet into pieces by limiting its accessibility and enforcing regulations. We need an internet that protects our digital freedom and fair access to global information for everyone, everywhere.
<br>
<br>
The ThreeFold Grid is a peer-to-peer Internet - owned by its users. All the technology of this new Internet is open-source and the whole experience is built around the fundamentals of a peer-to-peer network. On the ThreeFold Grid, everyone owns their data and experiences - they are autonomous
<br>
<br>    
       </p>

      </div>

 <div class="center py-10">
<h2 class="text-center">A NEW INTERNET | FOR OUR PLANET</h2>
      <p class="text-center pb-5">The current internet consumes about 10% of global energy production. With the imminent boom of emerging technologies such as Blockchain, Internet of Things, Virtual Reality, Artificial Intelligence and 5G, the Internet’s energy consumption is expected to increase exponentially. 
<br>
<br>
The current industry solutions focus on increasing the use of renewable energies to power data centers. However this is not a viable solution as data centers consume enormous amounts of energy. Therefore, a new solution that can drastically reduce the global internet’s energy consumption is needed. 
<br>
<br>  
The ThreeFold Grid is the first true peer-to-peer Internet. It uses pioneering technologies that removes the need for centralized and power-hungry data centers, consumes 90% less energy, and uses 90% less international fiber network capacity. 
       </p>

      </div>     
      

      <vue-markdown>
      </vue-markdown>
    </div>
</Layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  metaInfo: {
    title: "About us"
  },

  components: {
    VueMarkdown
  }
};
</script>
<style scoped>

.hand{
  width:70%;
}

</style>


