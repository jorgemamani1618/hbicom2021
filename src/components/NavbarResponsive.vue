
<template>
  <div class="navbar-body">
    <div class="menu-mobile-container">
      <img
        v-on:click="show = !show"
        class="menu-icon-img"
        src="../assets/logos/menu-icon.svg"
      />
      <!-- <button class="menu-button" v-on:click="show = !show">Mostrar </button> -->
    </div>
    <transition name="slide-fade">
      <div v-if="show" class="navbar-cont">
        <div class="nav">
          <div v-on:click="nav_to('Home')" class="container-nav-item">
            <!-- <img class="icon-menu" src="../assets/icons/icon-nav-home.svg" /> -->
         <p> Home</p>
          </div>
          <div v-on:click="nav_to('CallForPapers')" class="container-nav-item">
            <!-- <img class="icon-menu" src="../assets/icons/icon-nav-cfp.svg" /> -->
          <p> Call for Papers</p>
          </div>
          <div v-on:click="nav_to('KeynoteSpeakers')" class="container-nav-item" >
            <!-- <img class="icon-menu" src="../assets/icons/icon-nav-speakers.svg" /> -->
        <p> Keynote Speakers</p>
          </div>
          <div v-on:click="nav_to('Program')" class="container-nav-item">
            <!-- <img class="icon-menu" src="../assets/icons/icon-nav-program.svg" /> -->
         <p>Program</p>
          </div>
          <div v-on:click="nav_to('Committe')" class="container-nav-item">
            <!-- <img class="icon-menu" src="../assets/icons/icon-nav-committe.svg" /> -->
          <p> Committe</p>
          </div>
          <div v-on:click="nav_to('Accomodation')" class="container-nav-item">
            <!-- <img class="icon-menu" src="../assets/icons/icon-nav-accomodation.svg" /> -->
         <p> Accomodation</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  props: {
    msg: String,
  },
  data() {
    return {
      message: "navbar-cont",
      counter: 0,
      view_port:0,
      show: 1,
      w: 0,
    };
  },
  methods: {
    saludar: function (event) {
      // `this` dentro de los métodos apunta a la instancia de Vue
      // alert('Hola Jorge')
      //  this.estado_menu=!this.estado_menu

      this.estado_menu = !this.estado_menu;
      if (this.estado_menu == true) {
        this.message = "navbar-escondido";
      } else {
        this.message = "navbar-cont";
      }
    },
    nav_to: function (nav_link) {
      if(this.view_port==false){
      this.show = false;}
      this.$router.push({ name: nav_link });
    },
  },
  created: function () {
    this.w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (this.w < 600) {
      this.show = false;
      this.view_port=false;
    } else {
      this.show = true;
      this.view_port=true;
    }
  },
};
</script>

<style scoped lang="scss">
@import "../styles/stylesmain.css";

.menu-mobile-container {
  position: absolute;
  top: 0;
  right: 0;
}

 

.menu-icon-img {
  height: 2rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
}
.navbar-cont {
  background-color: var(--secondary1);
    // background-color: var(--white);
  display: flex;
  width: min-content;
  justify-content: flex-end;
  right: 0;
  position: absolute;
  top: 4.2rem;
}
.nav {
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: min-content;

  a,p {
    display: inline-block;
    font-weight: bold;
    position: relative;
    text-decoration: none;
    text-align: left;
    color: var(--white);
    font-weight: 500;
    padding: 0.6rem;
    font-size: 1rem;
    white-space: nowrap ;
    // &.router-link-exact-active {
    //   background-color: #ed9738;
    // }
  }
  // a:hover {
  //   background-color: #ed9738;
  // }
}

.container-nav-item {
  display: flex;
  // background-color: var(--secondary1);
  text-decoration: none;
  text-align: center;
  color: white;
  font-weight: 500;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  margin: 0 0 1px 0;

}

.container-nav-item:hover {
   background-color: #ed9738;

  cursor: pointer;
}

.icon-menu {
  width: 2rem;
}

@media only screen and (min-width: 600px) {
  // .menu-mobile-container {
  //   display: none;
  // }
  .navbar-body {
    position: absolute;
    top:5rem;
    right:2rem;
    display: flex;
    flex-direction: row;
  }
  .navbar-cont {
    height: 3rem;
    position: relative;
    top: 0;
    width: 100%;
    background-color:transparent;
  }
  .menu-icon-img {
    display: none;
  }
  .navbar {
    display: flex;
    justify-content: center;
    margin-top: 0;
  }

  .nav {
    flex-direction: row;
    // background-color:red;
    width: 100%;
    a,p {
      font-weight: 500;
      padding: 0.5rem;
      font-size: 1.2rem;
      width: min-content;
      text-align: center;
    }
  }


.container-nav-item {
  display: flex;
  // background-color: transparent;
  padding: 0 1rem;
  font-size: 1rem;
  width: auto;
  justify-content: center;
  align-items: center;
  margin:0;
}
}









/* TRANSICION*/

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>