<template>
    <main lang="cs">
        <div class="intro">
          <h1>the shoop shoop q</h1>
          <h2>Pětičlenné uskupení mladých hudebníků, hrající funky a jazzový repertoár</h2>
          <cta :pages="this.ctapages"></cta>
        </div>
        <img src="../assets/hp_foto.svg" alt="foto kapely">
      </main>
</template>
<script>
import Cta from "../components/cta.vue"
export default {
    props:[
        'activePage', 'pages'
        ],
    components: {
      Cta
    },
    data()
    {
      return{
        ctapages: [
          {
            "title": "O nás",
            "url": "/about"
          },
          {
            "title": "Kontakt",
            "url": "/contact"
          }
        ]
      }
    }
}
</script>
<style scoped>
main{
    display: flex;
    align-items: center;
  }
  .intro{
    flex: 1;
    position: relative;
    max-width: 80%;
    margin-top: -10rem;
    
  }
  main h1{
   text-transform: uppercase;
   color: #FFD132;
   font-weight: 300;
   font-size: 4rem;
  }
  main img{
    flex: 1;
    width: 100%;
    max-width: 1000px;
    height: auto;
   }
   main h1::before{
    content: 'THE shoop shoop Q';
    text-transform: uppercase;
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 1px #FFD132;
    margin-left: 5px;
    margin-top: -5px;
   }
   main h2{
    color: white;
    font-weight: 100;
    letter-spacing: 3px;
    line-height: 3rem;
    width: 40rem;
    text-size-adjust: auto;
   }
</style>