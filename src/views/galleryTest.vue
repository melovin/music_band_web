<template>
    <gallery galleryID="my-test-gallery" :images="images" />
    <!-- <img src="gallery/ch1.jpg" alt=""> -->
  </template>
  <script>
import gallery from '@/components/gallery'
import getPrepPhotos from '@/Repo/GalleryRepo'
  export default {
    name: 'App',
    components: {
        gallery
    },
    data() {
      return {
        images: [],
        images2: [
          {
            largeURL:
              'gallery/ch1.jpg',
            thumbnailURL:
              'gallery/ch1.jpg',
            width: 400,
            height: 1000,
          },
          {
            largeURL:
              'gallery/ch2.jpg',
            thumbnailURL:
              'gallery/ch2.jpg',
            width: 1669,
            height: 2500,
          },
          {
            largeURL:
              'gallery/ch3.jpg',
            thumbnailURL:
              'gallery/ch3.jpg',
            width: 2500,
            height: 1666,
          },
        ],
      };
    },
    methods:{
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
            console.log(result);
            this.images = result
        },
        load()
        {
            this.getImages();
        }
    },
    mounted(){
        this.load();
    }
  };
  </script>
<style scoped>

</style>
  