<template>
    <navbar></navbar>
    <router-view :activePage="0"/>

</template>
<script>
// <router-link to="/about">About</router-link>
  import Navbar from "./components/navbar.vue";
  import Cta from "./components/cta.vue"
  export default{
    components: {
      Navbar,
      Cta
    },
    data()
    {
      return{
        
      }
      
    }
  }
  
</script>
<style>
body{
 margin: 0;
 padding: 0;
 background-color: #1A1A1A;
 font-family: 'Libre Baskerville', serif;
 font-family: 'Poppins', sans-serif;
 width: 90%;
 margin-left: auto;
 margin-right: auto;
}

</style>
