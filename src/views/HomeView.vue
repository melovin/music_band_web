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
    max-height: 700px;
    max-width: 746px;
    height: 52vh;
    width: 52vw;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 20px 17px;
    border-top: #FFD132 solid 1px;
    border-left: #FFD132 solid 1px;
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
    letter-spacing: 2px;
    line-height: 3rem;
    width: 40rem;
    text-size-adjust: auto;
   }
</style>