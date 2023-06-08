<template>
    <div :id="galleryID">
      <a
        v-for="(image, key) in imagesData"
        :key="key"
        :href="image.largeURL"
        :data-pswp-width="image.width"
        :data-pswp-height="image.height"
        target="_blank"
        rel="noreferrer"
      >
        <img :src="image.thumbnailURL" alt="" />
      </a>
    </div>
  </template>
  
  <script>
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';
  
  export default {
    name: 'SimpleGallery',
    props: {
      galleryID: String,
      images: Array,
    },
    setup(props) {
      return {
        imagesData: null,
      };
    },
    mounted() {
        this.getImages();
      if (!this.lightbox) {
        this.lightbox = new PhotoSwipeLightbox({
          gallery: '#' + this.$props.galleryID,
          children: 'a',
          pswpModule: () => import('photoswipe'),
        });
        this.lightbox.init();
      }
    },
    unmounted() {
      if (this.lightbox) {
        this.lightbox.destroy();
        this.lightbox = null;
      }
    },
    methods: {
        async getImages(){
            let res = await fetch('http://localhost:8081/wordpress/wp-json/acf/v3/gallery');
            var data = await res.json();
            var result = [];
            data.forEach(element => {
                var img = new Image();
                img.src = element.acf.imageorvideo;
                img.onload = function() {
                    result.push({
                        largeURL: img.src,
                        thumbnailURL: img.src,
                        width: this.width,
                        height: this.height
                    });
                }  
            });
            this.imagesData = result
        }
    },
  };
  </script>
<style scoped>
img{
    height: 200px;
    width: auto;
}
</style>