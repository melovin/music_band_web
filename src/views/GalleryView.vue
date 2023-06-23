<template lang="cs">
    <main>
        <h1>Galerie</h1>
        <gallerytest></gallerytest>
    </main>
</template>
<script>
import gallerytest from '@/components/gallerytest.vue';
export default {
components:{
    gallerytest
}
}
</script>
<style scoped>
main{
    display: block;
}
main h1{
    text-transform: uppercase;
    color: #FFD132;
    font-weight: 300;
    font-size: 4rem;
    display: flex;
    justify-content: center;
}
main h1::before{
    content: 'Galerie';
    text-transform: uppercase;
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 1px #FFD132;
    margin-left: 5px;
    margin-top: -5px;
}
</style>