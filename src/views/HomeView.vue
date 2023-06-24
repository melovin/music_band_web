<template>
    <main lang="cs">
        <div class="intro">
          <h1>the shoop shoop q</h1>
          <h2>Pětičlenné uskupení mladých hudebníků, hrající funky a jazzový repertoár, <br/> Potřebujete kapelu na svojí akci nebo oslavu? <br/> Neváhejte nás kontaktovat.</h2>
          <cta :pages="this.ctapages"></cta>
        </div>
        <img id="mainPh" src="../assets/hp_foto.svg" alt="foto kapely">
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
    margin-top: 15vh;
    justify-content: space-between;
  }
  .intro{
    flex: 1;
    position: relative;
    width: 40vw;
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
    max-width: 746px;
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
    text-size-adjust: auto;
   }
   @media screen and (max-width: 1700px) {
    .info{
      max-width: 300px;
    }
    main img{
      max-width: 600px;
    }
    main h1{
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 1400px) {
    .intro{
        margin-top: 0;
    }
    main{
      flex-direction: column;
    }
    main #mainPh{
      display: none;
    }
  }
</style>