<template lang="cs">
    <div>
        <div class="card" :class="{even: !this.even}">
            <img :src="member.photo" :alt="member.name + ' ' + member.surname + 'fotografie'" />
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
            member: this.member,
            even: this.even
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
}
img{
    flex: 1;
    height: 300px;
    width: auto;
}
.decs{
    flex: 2;
}
.even{
    flex-direction: row-reverse;
}
</style>