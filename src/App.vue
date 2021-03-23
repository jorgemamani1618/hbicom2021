<template>
  <div class="app" id="app">
    <HeaderComponent/>


        <NavBar/>
    <!-- <transition name="fade"> -->
    <router-view />
    <!-- </transition> -->
    <FooterComponent />
  </div>
</template>


<script>
 
import HeaderComponent from "./components/Header";
import Banner from "./components/BannerPortada";
import NavBar from "./components/NavbarResponsive";
import FooterComponent from "./components/Footer";

 
 
export default {
  name: "App",
  components: {
    NavBar,
    Banner,
    HeaderComponent,
    FooterComponent,  
 
  },
};
</script>


<style lang="scss">

.app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
}
  .separador{
  height: 0.2rem;
  background-color: #2a3b47;
  width: 100%;}
 /* Trasiciones*/
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}

/* ---------------------------------*/
/* Estilos Geerales*/
/* ---------------------------------*/
h1,
h2,
h3,
h4,
p,
img {
  margin: 0;
}

ul {
  list-style-type: none;
}
</style>
