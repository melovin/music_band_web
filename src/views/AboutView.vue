<template>
    <main lang="cs">
      <div class="intro">
        <h1>O nás</h1>
        <h2>Jsme pětičlenné uskupení mladých hudebníků, hrající funky a jazzový repertoár. Vše to začalo již v roce 2019...
          Setkáte se u nás s nástroji...
          Hrajeme na různých typech akcí...
          Hrajeme na různých typech akcí...
          Hrajeme na různých typech akcí...
          Hrajeme na různých typech akcí...
        </h2>
        <cta :pages="this.ctapages"></cta>
      </div>
      <img src="../assets/hp_foto.svg" alt="foto kapely">
    </main>
    <div>
      <h2 id="members">Členové</h2>
    </div>
    <div class="members">
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="cards">
        <div v-for="(member, index) in members" class="m">
          <member  :member="members[index]" :even="index % 2 == 0"></member>
        </div>
      </div>
      <div class="ctaBottom">
        <cta :pages="ctapagesbottom"></cta>
      </div>
    </div>
</template>
<script>
import Cta from "../components/cta.vue"
import getMembers from "@/Repo/MemberRepo";
import Member from "@/components/member.vue";
export default {
    props:[
        'activePage', 'pages'
        ],
    components: {
      Cta,
      Member
    },
    data()
    {
      return{
        members: this.NavGetMembers(),
        ctapages: [
          {
            "title": "Aktuality",
            "url": "/news"
          },
          {
            "title": "Kontakt",
            "url": "/contact"
          }
        ],
        ctapagesbottom: [
          {
            "title": "Galerie",
            "url": "/gallery"
          },
          {
            "title": "Kontakt",
            "url": "/contact"
          }
        ]
      }
    },
    methods:{
      async NavGetMembers()
      {
          this.members = await getMembers();
      }
    }
}
</script>
<style scoped>
.members{
  position: relative;
  overflow: hidden;
}
.ctaBottom{
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}
.cards{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5rem;
}
.cards .m:nth-child(even)
{
  margin-left: auto;
}
.cards .m:nth-child(odd)
{
  margin-right: auto;
  flex-direction: row-reverse;
}
#members{
  color: #ffd132;
  text-align: center;
  font-weight: 200;
  text-transform: uppercase;
  font-size: 2rem;
  margin-top: 100px;
  letter-spacing: 2px;
}

main{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.intro{
  flex: 1;
  position: relative;
  margin-top: -10rem;
  max-width: 650px;
  width: 50vw;
  
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
  content: 'o nás';
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
  letter-spacing: 1px;
  line-height: 2.5rem;
  text-size-adjust: auto;
 }

 .lines
{
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  z-index: -5;
}
.line
{
  position: absolute;
  width: 1px;
  height: 110%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  z-index: -5;
}
.line::after
{
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
    animation: drop 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    z-index: -5;
}
.line:nth-child(1){
    margin-left: -25%
}
.line:nth-child(1)::after{
    animation-delay: 2s
}

.line:nth-child(3)
{
    margin-left: 25%
}
.line:nth-child(3)::after
{
    animation-delay: 2.5s
}     
@keyframes drop
{
    0%
    {
        top: -50%
    }
    100%
    {
        top: 110%
    }

}
@media screen and (max-width: 1800px) {
  .cards{
    gap: 50px;
  }
}
@media screen and (max-width: 1600px) {
  .info{
    max-width: 300px;
  }
  main img{
    max-width: 500px;
  }
  main{
    padding-top: 100px;
   }
}
@media screen and (max-width: 1400px) {
  .cards .m:nth-child(even)
  {
    margin-left: 0;
  }
  .cards .m:nth-child(odd)
  {
    margin-right: 0;
  }
  .cards{
    align-items: center;
  }
  main{
    flex-direction: column;
  }
  main img{
    display: none;
  }
}
</style>