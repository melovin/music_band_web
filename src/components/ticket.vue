<template lang="cs">
    <div id="wrapper">
        <div class="ticket pc">
            <div class="ticketContent">
                <div class="content1">
                    <h2>{{this.news.acf.name}}</h2>
                    <p>{{this.news.acf.desc}}</p>
                    <p class="date">Publikováno: {{this.news.acf.date}}</p>
                </div>
                <img class="eventPh" :src="this.news.acf.foto" />
            </div>
        </div>
        <div class="ticket mobile">
            <div class="ticketContent">
                <img class="mobile bcg" src="../assets/ticket_vertical.png" />
                <div class="content1">
                    <h2>{{this.news.acf.name}}</h2>
                    <p>{{this.news.acf.desc}}</p>
                    <p class="date">Publikováno: {{this.news.acf.date}}</p>
                </div>
                <img class="eventPh" :src="this.news.acf.foto" />
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
    width: 60%;
    max-height: 533px;
    height: 45vh;
    margin-left: auto;
    margin-right: auto;
}
.eventPh{
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
.mobile{
    display: none;
}
@media screen and (max-width: 1350px) {
    h2{
        font-size: 28px;
        max-width: 35vw;
    }
    p{
        font-size: 18px;
        margin-left: 0;
        margin-right: 0;
        max-width: 35vw;
    }
    #wrapper{
        width: 100%;
    }
    .bcg{
        position: absolute;
        z-index: -10;
        margin-left: auto;
        margin-right: auto;
        width: 132vw;
        height: 80vh;
    }
    .pc{
        display: none;
    }
    .mobile{
        display: block;
    }
    .ticket {
        background: none;
        background-repeat: no-repeat;
        margin-bottom: 50px;
        position: relative;
        width: 100%;
      }
      .ticketContent{
        flex-direction: column;
        margin-top: 250px;

      }
      .content1{
        text-align: center;
      }
  }
  @media screen and (max-width: 1350px) {
    .eventPh{
        width: 25vw;
    }
    h1{
        margin-bottom: -70px;
    }
  }
  @media screen and (max-width: 800px) {
    h2{
        font-size: 28px;
        max-width: 45vw;
    }
    p{
        font-size: 18px;
        margin-left: 0;
        margin-right: 0;
        max-width: 45vw;
    }
    .bcg{
        width: 200vw;
    }
    .eventPh{
        width: 30vh;
    }
  }
  @media screen and (max-width: 600px) {
    .eventPh{
        width: 20vh;
    }
  }
  @media screen and (max-width: 500px) {
    .bcg{
        width: 250vw;
    }
    p{
        max-width: 70vw;
    }
    h2{
        max-width: 50vw;
        margin-right: auto;
        margin-left: auto;
    }
  }  @media screen and (max-height:900px) {
    .eventPh{
        max-height: 238px;
        max-width: 307px;
    }
}
@media screen and (max-height:1080px) {
    h2{
        font-size: 35px;
    }
  }
</style>