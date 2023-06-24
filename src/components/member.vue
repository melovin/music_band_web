<template lang="cs">
    <div>
        <div class="card" :class="{even: !this.even}">
            <img :src="member.foto" :alt="member.name + ' ' + member.surname + 'fotografie'" />
            <div class="desc">
                <h3>{{member.name + ' ' + member.surname}}</h3>
                <p>{{member.about}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'member', 'even'
    ],
    data()
    {
        return{
        }
    },
    computed:{
        //isEven: this.index % 2 == 0
    },
    created() {
        //console.log(this.isEven, index);
    },
}
</script>
<style scoped>
.desc{
    margin-left: 30px;
    margin-right: 30px;
    width: 450px;
    line-height: 2rem;
    font-size: 18px;
}
h3{
    color: #FFD132;
    text-transform:capitalize;
    font-weight: 100;
    letter-spacing: 3px;
    font-size: 30px;
}
p{
    color: white;
}
.card{
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    gap: 50px;
    border-radius: 10px;
    background-color: #1A1A1A;
    transition: transform .2s;
}
.card:hover{
    transform: scale(1.1);
}
.card img{
    flex: 1;
    height: 300px;
    width: auto;
    border-radius: 10px;
}
.decs{
    flex: 2;
}
.even{
    flex-direction: row-reverse;
}
</style>