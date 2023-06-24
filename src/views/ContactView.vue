<template lang="cs">
    <!-- <img id="bcgImg" src="../assets/notes_gray2.svg" /> -->
    <main>
        <div class="intro">
          <h1>The Shoop Shoop Q</h1>
          <div class="contact">
            <div class="unit">
                <img src="../assets/contact_icons/tel.svg" />
                <a href="tel:+420722422217">+420 722 422 217</a>
            </div>
            <div class="unit">
                <img src="../assets/contact_icons/mail.svg" />
                <a href="mailto:info@theshoopshoopq.com">info@theshoopshoopq.com</a>
            </div>
            <div class="unit">
                <img src="../assets/contact_icons/ig.svg" />
                <a href="https://www.instagram.com/theshoopshoopq/">@theshoopshoopq</a>
            </div>
            <div class="unit">
                <img src="../assets/contact_icons/fb.svg" />
                <a href="https://www.facebook.com/theshoopshoopQ/">The Shoop Shoop Q</a>
            </div>
          </div>
        </div>
        <img class="mainPh" src="../assets/hp_foto.svg" alt="foto kapely">
      </main>
</template>
<script>
import getContact from "@/Repo/ContactRepo";
export default {
     data()
    {
      return{
        contacts: [],
      }
    },
    created()
    {
        this.GetContact();
    },
    methods:{
      async GetContact()
      {
        this.contacts = await getContact();
        // const res = await fetch('http://localhost:8081/wordpress/wp-json/acf/v3/contact');
        // const data = await res.json();
        // console.log(data)
        // this.contacts = data.map(x => ({tel: x[0].acf.tel, mail: x[0].acf.mail, ig: x[0].acf.ig, fb: x[0].acf.fb}))
      }
    }
}
</script>
<style scoped>
.contact{
    margin-top: 5vh
}
a{
    color: #FFD132;
    text-decoration: none;
    margin-left: 40px;
    font-size: 20px;
}
a:hover{
    color: #d4a704;
}
.unit{
    margin-bottom: 10px;
}
.unit{
    display: flex;
    align-items: center;
}
main{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15vh;
  }
  .intro{
    flex: 1;
    position: relative;
    margin-top: -10rem;
    max-width: 700px;
    width: 50vw;
    
  }
  main h1{
   text-transform: uppercase;
   color: #FFD132;
   font-weight: 300;
   font-size: 4rem;
  }
  main .mainPh{
    flex: 1;
    max-width: 746px;
    width: 52vw;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 20px 17px;
    border-top: #FFD132 solid 1px;
    border-left: #FFD132 solid 1px;
   }
   main h1::before{
    content: 'The Shoop Shoop Q';
    text-transform: uppercase;
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 1px #FFD132;
    margin-left: 5px;
    margin-top: -5px;
   }
   main h2{
    color: white;
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 2.5rem;
    text-size-adjust: auto;
   }
   @media screen and (max-width: 1700px) {
    .info{
      max-width: 300px;
    }
    main .mainPh{
      max-width: 600px;
    }
    main h1{
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 1400px) {
    .intro{
        margin-top: 0;
    }
    main{
      flex-direction: column;
    }
    main .mainPh{
      display: none;
    }
  }
</style>