<template lang="cs">
    <div class="content">
        <vue-picture-swipe :items="items"></vue-picture-swipe>  
        <div class="bottom">
            <h2>Video-ukázky</h2>
            <div class="videos">
                <video loop controls v-for="vids in videos">
                    <source :src="vids.src" type="video/mp4">
                </video>   
            </div> 
        </div>
    </div>
</template>
<script>
import VuePictureSwipe from 'vue3-picture-swipe';
export default {
    components:{
    'vue-picture-swipe': VuePictureSwipe
    },
    name: 'galerieee',
    data(){
        return{
            items: [],
            videos: [],
            change: false
        }
    },
    mounted(){
        this.getImages()
        this.getVideos()
    },
    methods:{
        async getImages(){
            const res = await fetch('http://localhost:8081/wordpress/wp-json/acf/v3/gallery');
            const data = await res.json();
            this.items = data.map(x => ({src: x.acf.imageorvideo.url, thumbnail: x.acf.imageorvideo.url, w: x.acf.imageorvideo.width, h: x.acf.imageorvideo.height}))
        },
        async getVideos(){
            const res = await fetch('http://localhost:8081/wordpress/wp-json/acf/v3/videos');
            const data = await res.json();
            this.videos = data.map(x => ({src: x.acf.url, desc: x.acf.video_desc}))
        }
    }
}
</script>
<style>
.opened{
    height: auto;
    width: auto;
    object-fit: contain;
}
.gallery-thumbnail img{
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin: 2rem;
    border-right: #FFD132 solid 3px;
    border-bottom: #FFD132 solid 3px;
    transition: transform .2s;
}
.gallery-thumbnail img:hover, video:hover {
    transform: scale(1.1);
}
.my-gallery, .videos{
    display: flex;
    flex-wrap: wrap;
}
video{
    margin: 2rem;
    border-bottom: #FFD132 solid 3px;
    border-right: #FFD132 solid 3px;
    height: 300px;
    width: 300px;
    object-fit: cover;
    transition: transform .2s;
}
video:fullscreen{
    object-fit: contain;
}
.content h2{
    text-transform: uppercase;
    color: #FFD132;
    font-weight: 300;
    font-size: 4rem;
    display: flex;
    justify-content: center;
}
.content h2::before{
    content: 'Video-ukázky';
    text-transform: uppercase;
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 1px #FFD132;
    margin-left: 5px;
    margin-top: -5px;
}
.bottom{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>