<template>
  <div class="home-topics">
    <!-- prueba -->
    <div class="container-img-topics">
       <img src="../assets/img/Tracks-imagen.png" alt="" class="img-tracks" />
    </div>
    <div class="container-text">
      <h1 class="titulo-white">Tracks</h1>
      <div class="container-parrafo-topics">
        <p class="parrafo-center">
          The HBICOM Conference intends to present and discuss current issues in
          the health sector, such as:
        </p>
      </div>
      <div class="container-columns">
        <div class="box-column amarillo">
          <img src="../assets/logos/icon-track2.svg" alt="" class="img-topic" />
          <div>
            <h3 class="title-column amarillo">Digital <br />Public Health</h3>
            <div class="container-amarillo">
              <router-link to="/CallForPapers/#topics" class="link-amarillo"
                >View more</router-link
              >
            </div>
          </div>
        </div>
        <div class="box-column azul">
          <img src="../assets/logos/icon-track3.svg" alt="" class="img-topic" />
          <h3 class="title-column azul">Medical & <br />Health Informatics</h3>
        </div>
<!-- 
        <div class="box-column rojo">
          <img src="../assets/logos/icon-track4.svg" alt="" class="img-topic" />
          <h3 class="title-column verde">Biomedical <br />Instrumentation</h3>
        </div> -->
      </div>
      <br/>
      <div class=container-link>
       <router-link to="/CallForPapers" class="link-primary">See topics detail</router-link>
       </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "home-topics",
  data() {
    return {
      msg: "Welcome to Home-Topics",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/stylesmain.css";

.titulo-white {
  color: var(--black);
  font-size: var(--sizeTitles);
  width:100%;
}
.home-topics {
  background-color: var(--white-gray);
  display: flex;
  margin: 4vh 0;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  flex-direction: column;
}
.container-img-topics{
 
 margin-right: 5vw;

}

.img-tracks{
  /* height: 50vh; */
  width:90vw;
}
.container-parrafo-topics {
 
  margin: 3vh 0;
  color: var(--black);
}

.container-text{
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.parrafo-center {
  font-size: var(--sizeParrafo)
}

.container-columns {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
 
  padding: 1rem 0;
}

.box-column {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 0;
  margin: 1rem 0;
}
.amarillo {
  color: var(--secondary1);
}
.azul {
  color: var(--secondary2);
}
.verde {
  color: var(--primary);
}

.img-topic {
  width: 30%;
}

.title-column {
  padding: 0;
  margin: 0 1rem 0 0;
  font-weight: 500;
  font-size: 1.4rem;
}
.container-amarillo {
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  width: 70%;
  text-align: right;
  display: none;
}

.link-amarillo {
  background-color: var(--secondary1);
  border-radius: 20px;
  color: white;
  padding: 0.5rem 0.5rem;
  text-decoration: none;
}

.container-link{
  text-align: center;
  width: 100%;
  margin:2vh 0;
}
@media only screen and (min-width: 600px) {

.home-topics{
  flex-direction: row;
}
.titulo-white{
  text-align: left;;
}

  .container-columns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
     
    padding: 3rem 0;
  }
  .box-column {
    margin: 0 1rem;
    width: 30%;
    padding: 0;
    height: 8rem;
    display: flex;
    flex-direction: column;
  }

  .title-column {
    text-align: center;
  }
  .parrafo-center{
    text-align: left;
  }

  .img-topic{
    width: 10vw;
  }

.img-tracks{
  height: 50vh;
  width:auto;
}
.container-text{
  width:35vw;
}

.container-link{
  text-align: left;
}

}
</style>
