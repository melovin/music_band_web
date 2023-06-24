<template lang="cs">
    <div>
        <div class="ticket pc">
            <div class="ticketContent">
                <div class="content1">
                    <h2>{{this.news.acf.name}}</h2>
                    <p>{{this.news.acf.desc}}</p>
                    <p class="date">Publikováno: {{this.news.acf.date}}</p>
                </div>
                <img :src="this.news.acf.foto" />
            </div>
        </div>
        <div class="ticket mobile">
            <div class="ticketContent">
                <div class="content1">
                    <h2>{{this.news.acf.name}}</h2>
                    <p>{{this.news.acf.desc}}</p>
                    <p class="date">Publikováno: {{this.news.acf.date}}</p>
                </div>
                <img :src="this.news.acf.foto" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'news'
    ],
    data()
    {
        return{
        }
    },
    created(){

    }
}
</script>
<style scoped>
.mobile{
    display: none;
}
.ticketContent{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 70vw;
    max-height: 533px;
    height: 45vh;
    margin-left: auto;
    margin-right: auto;
}
.ticketContent img{
    max-height: 300px;
    max-width: 370px;
    width: 50vw;
    height: 50vh;
    flex: 1;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-right: #FFD132 solid 2px;
    border-bottom: #FFD132 solid 2px;
}
.ticket{
    background-image: url('../assets/ticket.svg');
    background-position: center;
    width: 100%;
    max-height: 40rem;
    height: 45vh;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 50px;
} 
h2{
    color: #FFD132;
    text-transform:capitalize;
    font-weight: 100;
    letter-spacing: 3px;
    font-size: 50px;
}
.content1{
    flex: 1;
}
p{
    margin-left: 30px;
    margin-right: 30px;
    width: 450px;
    line-height: 2rem;
    font-size: 19px;
    color: white;
    margin-left: 0;
}
.date{
    color: #FFD132;
}
@media screen and (max-width: 1200px) {
    .mobile{
        display: block;
    }
    .pc{
        display: none;
    }
    .ticket {
        background: url('../assets/ticket_vertical.png');
        background-repeat: no-repeat;
        max-width: 500px;
      }
  }
</style>