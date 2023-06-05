<template>
  <main lang="cs">
    <div class="intro">
      <h1>O nás</h1>
      <h2>Jsme pětičlenné uskupení mladých hudebníků, hrající funky a jazzový repertoár. Vše to začalo již v roce 2019...
        Setkáte se u nás s nástroji...
        Hrajeme na různých typech akcí...</h2>
      <cta :pages="this.ctapages"></cta>
    </div>
    <img src="../assets/hp_foto.svg" alt="foto kapely">
  </main>
  <div>
    <h2 id="members">Členové</h2>
  </div>
  <div class="cards">
    <div v-for="(member, index) in members" class="m">
      <member  :member="members[index]" :even="index % 2 == 0"></member>
    </div>
  </div>
  <div class="ctaBottom">
    <cta :pages="ctapagesbottom"></cta>
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
<style >
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
  color: #FFD132;
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
  letter-spacing: 3px;
  line-height: 3rem;
  width: 40rem;
  text-size-adjust: auto;
 }
</style>