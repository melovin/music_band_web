<template lang="cs">
    <div class="content">
        <router-link class="text" :to="pages[0].url">{{pages[0].title}} →</router-link>
        <router-link :to="pages[1].url"><div class="btn">{{pages[1].title}}</div></router-link>
    </div>
</template>

<script>

    export default {
        props:[
            'pages'
        ],
        data(){
            return{
            }
        }             
    }
</script>
<style scoped>
.content{
    display: flex;
    align-items: center;
    margin-top: 2rem;
    text-align: center;
}
.btn{
    background-color: #FFD132;
    border-radius: 30px;
    border: none;
    padding: 0.6rem;
    width: 7rem;
    color: black;
    text-align: center;
    flex: 1;
    margin-left: 24px;
}
.btn:hover{
    background-color: #d4a704;
}
a{
    text-decoration: none;
    color: white;
    font-size: 16px;
    width: 6rem;
    padding: 0.6rem;
}
.text{
    display: flex;
    padding-left: 0;
    color: white;
}
a:visited{
    color: white;
    text-decoration: none;
}
span{
    color: black !important;
    margin-left: 2rem;
}
span a:visited{
    color: black !important;
}
a:hover, a:active{
    color: #d4a704;
}
@media screen and (max-width: 400px) {
    .btn{
        margin-left: 0;
    }
  }
</style>