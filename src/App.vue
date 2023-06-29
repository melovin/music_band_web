<template>
    <navbar />
    <router-view />
</template>
<script>
import Navbar from "./components/navbar.vue";
  export default{
    components: {
      Navbar
    }
  }
  
</script>
<style>
html, body{
  min-height: 100%;
}
body{
 margin: 0;
 padding: 0;
 background-color: #1A1A1A;
 font-family: 'Poppins', sans-serif;
 width: 90%;
 margin-left: auto;
 margin-right: auto;
 background-image: url("../src/assets/notes_gray2.svg");
}
#app{
  min-height: 100%;
}
</style>
