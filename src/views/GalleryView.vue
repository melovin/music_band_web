<template>
    <h1>Galerie</h1>
    <lightgallery
    :settings="{ speed: 500, plugins: plugins }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
  >
    <a
        v-for="ph in this.photos"
      data-lg-size="1406-1390"
      class="gallery-item"
      data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
      data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
    >
      <img
        class="img-responsive"
        :src="ph.acf.imageorvideo"
      />
    </a>
    <a
      data-lg-size="1406-1390"
      class="gallery-item"
      data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
      data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
    >
      <img
        class="img-responsive"
        src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
      />
    </a>
    <a
      class="gallery-item"
      data-video='{"source": [{"src":"https://www.lightgalleryjs.com/videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
      data-poster=""
      data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
    >
      <img
        width="200"
        class="img-responsive"
        src="https://www.lightgalleryjs.com/images/demo/html5-video-poster.jpg"
      />
    </a>
  </lightgallery>
  <cta :pages="this.ctapages"></cta>
</template>
<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import cta from '@/components/cta.vue';
import getPhotos from '@/Repo/GalleryRepo'

export default {
  name: 'App',
  components: {
    Lightgallery,
    cta
  },
  data: () => ({
    plugins: [lgZoom, lgVideo],
    ctapages: [
            {
                "title": "O nás",
                "url": "/about"
            },
            {
                "title": "Kontakt",
                "url": "/contact"
            }
        ],
    photos: [],
  }),
  created()
  {
    this.photos = this.GetPhotosGallery()
  },
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
    async GetPhotosGallery()
    {
        this.photos = await getPhotos();
        console.log('chjo')
    }
  },
};
</script>
<style scoped>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
body {
  margin: 0;
}
.gallery-item {
  margin: 5px;
}
img{
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: cover;
    border-bottom: #FFD132 solid 1px;
    border-right: #FFD132 1px solid;
}
.lightgallery-vue{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
}
h1{
    text-transform: uppercase;
    color: #FFD132;
    font-weight: 300;
    font-size: 4rem;
    text-align: center;
}

h1::before{
    content: 'Galerie';
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
    
    margin-top: 5rem;
  }
  .content{
    justify-content: center;
    margin-bottom: 5rem;
}
</style>