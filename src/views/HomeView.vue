<template>
    <main lang="cs">
        <div class="intro">
          <h1>the shoop shoop q</h1>
          <h2>Pětičlenné uskupení mladých hudebníků, hrající funky a jazzový repertoár. <br/> Potřebujete kapelu na svojí akci nebo oslavu? <br/> Neváhejte nás kontaktovat.</h2>
          <cta :pages="this.ctapages"></cta>
        </div>
        <img class="pc" id="mainPh" src="../assets/hp_foto.svg" alt="foto kapely">
        <div class="saxophones">
          <img class="mobile" src="../assets/saxophone_gold.svg">
          <img class="mobile" src="../assets/saxophone_yellow.svg">
        </div>
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
    margin-top: 10vh;
    justify-content: space-between;
  }
  .intro{
    flex: 1;
    position: relative;
    width: 40vw;
    
  }
  main h1{
   text-transform: uppercase;
   color: #FFD132;
   font-weight: 300;
   font-size: 4rem;
  }
  main #mainPh{
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
    line-height: 3rem;
    text-size-adjust: auto;
   }
   .mobile{
    display: none;
   }
   @media screen and (max-width: 1700px) {
    .intro{
      margin-top: 0;
      margin-right: 50px;
    }
    main img{
      max-width: 600px;
    }
    main h1{
      font-size: 3.5rem;
    }
    main #mainPh{
      max-width: 690px;
    }
  }
  @media screen and (max-width: 1440px) {
    .intro{
        margin-right: 50px;
    }
    main h1{
      font-size: 3rem;
    }
    main #mainPh{
      width: 37vw;
    }
  }
  @media screen and (max-width: 1400px) {
    .intro{
        margin-top: 0;
        width: 80vw;
        display: flex;
        flex-direction: column;
    }
    main{
      flex-direction: column;
    }
    main #mainPh{
      display: none;
    }
  }
  @media screen and (max-width: 960px) {

    main h1{
      font-size: 32px;
      
    }
    main h1::before{
      margin-left: 3px;
      margin-top: -3px;
     }
    .intro{
        margin-top: 0;
        width: 67vw;
        font-size: 0.7rem;
        margin-right: 0;

    }
    main h2{
      line-height: 2rem;
      text-align: left;
    }
    main{
      flex-direction: column;
    }
    main #mainPh{
      display: none;
    }
    main img{
      border: none;
      display: flex;
    }
    .mobile{
      display: block;
    }
    .saxophones{
      margin-top: 50px;
      display: flex;
      align-items: center;
    }
  }
</style>