<template lang="cs">
    <div>
        <div class="ticket">
            <div class="ticketContent">
                <div class="content">
                    <h2>{{this.news.name}}</h2>
                    <p>{{this.news.desc}}</p>
                    <p class="date">Publikováno: {{this.news.date}}</p>
                </div>
                <img src="../assets/hp_foto.svg" />
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
            news: this.news
        }
    }
}
</script>
<style scoped>
.ticketContent{
    display: flex;
    justify-content: center;
    left: 50%;
    top: 50%;
}
img{
    height: 300px;
    width: auto;
    flex: 1;
    margin-left: -40rem;
    margin-top: 5rem;
}
.ticket{
    background-image: url('../assets/ticket.svg');
    background-position: center;
    width: 100%;
    height: 35rem;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
} 
h2{
    color: #FFD132;
    text-transform:capitalize;
    font-weight: 100;
    letter-spacing: 3px;
    font-size: 50px;
}
.content{
    margin-left: 200px;
    margin-top: 50px;
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
</style>