<template lang="cs">
    <div class="content">
        <router-link :to="pages[0].url">{{pages[0].title}} -></router-link>
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
                pages: this.pages
            }
        }             
    }
</script>
<style scoped>
.content{
    display: flex;
    align-items: center;
    margin-top: 2rem;
}
.btn{
    background-color: #FFD132;
    border-radius: 30px;
    border: none;
    padding: 0.6rem;
    width: 7rem;
    color: black;
    text-align: center;
    margin-left: 2rem;
}
a{
    text-decoration: none;
    font-size: 16px;
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
</style>