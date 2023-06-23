<template lang="en">
    <div>
        <nav>
            <div class="logo_img">
                <img height="64px" src="../assets/logo2.png" />
                <h1 class="logo">The Shoop Shoop Q</h1>
            </div>
          <ul class="nav-links">
            <li v-for="(page,index) in this.pages"><router-link :to="page.url">{{page.title}}</router-link></li>
          </ul>
          <div class="burger" @click="this.navSlide()">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </nav>
    </div>
</template>

<script>
import getPages from '@/Repo/PageRepo'
    export default {
        props:[

            ],
        data(){
            return{
                pages: this.NavGetPages(),
            }
        },
        methods: {
            navSlide() {
                const burger = document.querySelector('.burger');
                const nav = document.querySelector('.nav-links');
                const navLinks = document.querySelectorAll('.nav-links li');

                //burger.addEventListener('click', () => {
                    nav.classList.toggle('nav-active');

                    navLinks.forEach((link, index)=>{
                        if (link.style.animation) {
                            link.style.animation = ''
                        }else{
                            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                        }
                    });
                    burger.classList.toggle('toggle');
                //});  
            },
            async NavGetPages()
            {
                this.pages = await getPages();
            }

        },
        created(){
            //this.navSlide();

        }
    }
</script>
<style scoped>
.router-link-active{
    color: #FFD132 !important;
}
.logo_img h1{
    color: #FFD132;
    font-weight: 400;
}
.logo_img img{
    height:20vh;
    max-height: 120px;
}
.logo_img{
    display: flex;
    align-items: baseline;
    flex: 2;
    gap: 10px;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    min-height: 10vh;
    /*background-color: #181818;*/
    font-family: 'Libre Baskerville', serif;
    font-family: 'Poppins', sans-serif;
    border-radius: 0px 0px 55px 55px;
    width: 100%;
    position: sticky;
    z-index: 10;
    margin-bottom: 5rem;
    padding-top: 15px;
}

.logo {
    color: rgb(247, 247, 247);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 40px;
    font-family: 'Libre Baskerville', serif;
    font-family: 'Poppins', sans-serif;
}

.nav-links {
    display: flex;
    justify-content: space-between;
    width: 30%;
    flex: 1;
    margin-bottom: -20px;
}

.nav-links li {
    list-style: none;
}

.nav-links a {
    color: rgb(247, 247, 247);
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 17px;
}

.burger {
    display: none;
    cursor: pointer;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: rgb(247, 247, 247);
    margin: 5px;
    transition: all 0.3s ease;
}
a.active{
    color: #FFD132;
}
/*screen

@media screen and (max-width:2000px) {
    .nav-links {
        width: 50%;
    }
}

@media screen and (max-width:768px) {
    body {
        overflow-x: hidden;
    }
    .nav-links {
        position: absolute;
        right: 0px;
        height: 92vh;
        top: 10vh;
        background-color: #181818;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        transform: translateX(100%);
        transition: transform 0.5s ease-in;
        border-radius: 50px;
        z-index: 5;
    }
    .nav-links li {
        flex: 1;
        margin-top: 5rem;
    }
    .burger {
        display: block;
    }
}

.nav-active {
    transform: translateX(0%);
}

.spotlight_graphs::-webkit-scrollbar {
    background-color: transparent;
}

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}

.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
    opacity: 0;
}

.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}
*/
</style>