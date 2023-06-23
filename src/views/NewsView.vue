<template lang="cs">
    <div>
        <h1>Aktuality</h1>
        <div class="tickets" v-for="ticket in this.news">
            <ticket :news="ticket"></ticket>
        </div>
        <cta :pages="ctapages" class="ctaBottom"></cta>
    </div>
</template>
<script>
import ticket from '@/components/ticket.vue';
import getNews from "@/Repo/NewsRepo";
import cta from '@/components/cta.vue';
export default {
    components:{
        ticket,
        cta
    },
    methods:{
        async NavGetNews()
        {
            this.news = await getNews();
        }
    },
    data()
    {
        return{
            news: this.NavGetNews(),
            ctapages: [
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
    }
}
</script>
<style scoped>

h1{
    text-transform: uppercase;
    color: #FFD132;
    font-weight: 300;
    font-size: 4rem;
    text-align: center;
}
h1::before{
    content: 'Aktuality';
    text-transform: uppercase;
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 1px #FFD132;
    margin-left: 5px;
    margin-top: -5px;
}  
.ctaBottom{
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
  }

</style>