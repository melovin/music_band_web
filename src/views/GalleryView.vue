<template>
    <h1>Galerie</h1>
    <lightgallery
    :settings="{ speed: 500, plugins: plugins }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
  >
      <a
      class="gallery-item"
      :data-src="this.photos[0].acf.imageorvideo"
    >
      <img
        class="img-responsive"
        :src="this.photos[0].acf.imageorvideo"
      />
    </a>
    <a       
      v-for="ph in this.photos.slice(1)"
      class="gallery-item"
      :data-src="ph.acf?.imageorvideo"
      :data-sub-html="ph.acf.alt"
    >
      <img
        class="img-responsive"
        :src="ph.acf.imageorvideo"
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
    border-bottom: #FFD132 solid 2px;
    border-right: #FFD132 2px solid;
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