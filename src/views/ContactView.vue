<template lang="cs">
    <main>
        <div class="intro">
          <h1>The Shoop Shoop Q</h1>
          <div class="contact">
            <div class="unit">
                <img class="icon" src="../assets/contact_icons/tel.svg" />
                <a href="tel:+420722422217">+420 722 422 217</a>
            </div>
            <div class="unit">
                <img class="icon" src="../assets/contact_icons/mail.svg" />
                <a href="mailto:info@theshoopshoopq.com">info@theshoopshoopq.com</a>
            </div>
            <div class="unit">
                <img class="icon" src="../assets/contact_icons/ig.svg" />
                <a href="https://www.instagram.com/theshoopshoopq/">@theshoopshoopq</a>
            </div>
            <div class="unit">
                <img class="icon" src="../assets/contact_icons/fb.svg" />
                <a href="https://www.facebook.com/theshoopshoopQ/">The Shoop Shoop Q</a>
            </div>
            <div class="unit">
              <img class="icon" src="../assets/contact_icons/document.svg" />
              <p>Zapsáno v Praze...</p>
          </div>
          </div>
        </div>
        <img class="mainPh" src="../assets/hp_foto.svg" alt="foto kapely">
        <div class="saxophones">
          <img class="mobile" src="../assets/saxophone_gold.svg">
          <img class="mobile" src="../assets/saxophone_yellow.svg">
        </div>
      </main>
</template>
<script>
export default {

}
</script>
<style scoped>
.contact{
    margin-top: 5vh
}
a,p{
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
    margin-top: 10vh;
  }
  .intro{
    flex: 1;
    position: relative;
    width: 40vw;
    
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
   .mobile{
    display: none;
   }
   @media screen and (max-width: 1700px) {
    .intro{
      margin-top: 0;
      margin-right: 50px;
    }
    main .mainPh{
      max-width: 690px;
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
  
  @media screen and (max-width: 1440px) {
    .intro{
        margin-right: 50px;
    }
    main h1{
      font-size: 3rem;
    }
    main .mainPh{
      width: 37vw;
    }
  }
  @media screen and (max-width: 1400px) {
    .intro{
        margin-top: 0;
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    main{
      flex-direction: column;
    }
    main .mainPh{
      display: none;
    }
  }
  @media screen and (max-width: 960px) {

    main h1{
      font-size: 32px;
      
    }
    main h1::before{
      margin-left: 3px;
      margin-top: -3px;
     }
    .intro{
        margin-top: 0;
        width: 67vw;
        font-size: 0.7rem;
        margin-right: 0;

    }
    main h2{
      line-height: 2rem;
    }
    main{
      flex-direction: column;
    }
    main .mainPh{
      display: none;
    }
    main img{
      border: none;
      display: flex;
    }
    .mobile{
      display: block;
    }
    .saxophones{
      margin-top: 50px;
      display: flex;
      align-items: center;
    }
  }
  @media screen and (max-width: 500px) {
    .icon{
      height: 25px;
    }
    p{
      margin: 0;
    }
    a, p{
      margin-left: 5px;
      font-size: 16px;
      max-width: 160px;
    }
    .intro{
      display: flex;
      align-items: flex-start;
      margin-left: 60px;
    }
    img{
      height: 150px;
    }
  }
</style>