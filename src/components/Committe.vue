<template>
  <div class="cfp_body">
    <Banner />
    <div class="container-main-lateral">
      <!-- <div class="main">
        <div class="text">
          <div class="title">
            <h2 class="main-title">The Committe</h2>
          </div>
          <div class="Parrafo">
            <p class="parrafo-main">
              HBICOM 2021 is organized by researchers and professors of
              <span class="text-cursiva">
                "Universidad Nacional de San Agustin de Arequipa"</span
              >
              and
              <span class="text-cursiva"
                >"Escuela Politécnica de la Universidad de São Paulo –
                EPUSP"</span
              >
            </p>
          </div>
        </div>
      </div> -->
      <!-- <div class="lateral">
        <h2>More Conferences And Projects</h2>
        <h4 class="h4_amarillo">IMPORTANT INFORMATION</h4>
        <p class="parrafo-lateral">
          This event and other research projects are posible thank to funded by
          "Universidad Nacional de San Agustin"
        </p>
        <a
          href="https://www.unsa.edu.pe/"
          class="button_cfp"
          role="button"
          target="_blank"
          >Go to University Site!</a
        >
      </div> -->
    </div>

    <div class="container-committe-list">
      <h1 class="title-white">Organizing Committe</h1>
      <ul class="committe-list">
        <li class="committe-item">
          <h3 class="committe-cargo">General Chair</h3>
          <span class="text-names">Msc. Jorge E. Rendulich Talavera</span>
        </li>
        <li class="committe-item">
          <h3 class="committe-cargo">Co-Chairs</h3>
          <span class="text-names">Msc. Juan G. Borja Murillo</span> <br />
          <span class="text-names">Dr. Sergio Takeo Kofuji</span>
        </li>

      <li class="committe-item">
          <h3 class="committe-cargo">Technical Program Chair</h3>
          <span class="text-names">Msc. Jorge L. Huarca Quispe</span>
        </li>

        <li class="committe-item">
          <h3 class="committe-cargo">Keynote & Publication Chair</h3>
          <span class="text-names">Dr. Jorge Beingolea Garay</span>
        </li>
 
        <li class="committe-item">
          <h3 class="committe-cargo">Finance Chair</h3>
          <span class="text-names">Msc. Milagros Zegarra Mejía</span>
        </li>
        <li class="committe-item">
          <h3 class="committe-cargo">Protocol Committe</h3>
          <span class="text-names">Msc. Renzo G. Bolivar Valdivia</span>
        </li>
        <li class="committe-item">
          <h3 class="committe-cargo">Information Dissemination Chair</h3>
          <span class="text-names"> Msc. Erasmo Sulla Espinoza</span>
        </li>
  
      </ul>
    </div>
    <div class="container-partners">
    <Partners />
    </div>
  </div>
</template>

<script>
import Partners from "../components/Partners";
import Banner from "../components/PortadaCommitte";
export default {
  name: "committe",
  data() {
    return {
      msg: "Welcome to Committe",
    };
  },
  components: {
    Partners,
    Banner,
  },
};
</script>

<style scoped>
@import "../styles/stylesmain.css";
.cfp_body {
  display: flex;
  flex-direction: column;
}

.container-main-lateral {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
}

.main {
  width: 90%;
  padding: 2rem 5% 2rem 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.logo-main-container {
  width: 30%;
}

.logo {
  width: 80%;
}

.text {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.title {
  color: var(--dark-primary);
  width: 100%;
}

.main-title {
  text-align: center;
  font-size: var(--sizeTitles);
}

.parrafo-main {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
.Parrafo {
  margin-bottom: 2rem;
}

/*----------------*/
/* Seccion Lateral*/
/*----------------*/

.lateral {
  background-color: var(--white-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 2rem 5% 2rem 5%;
}
.h4_amarillo {
  color: #f1a943;
}
.parrafo-lateral {
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.p_bold {
  font-weight: 600;
}

.button_cfp {
  background-color: transparent;
  border-style: solid;
  border-radius: 0;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  color: #2c3e50;
  border-color: #2c3e50;
  cursor: pointer;
  transition-duration: 0.4s;
  text-decoration: none;
}

.button_cfp:hover {
  background-color: #ed9738;
  border-color: #ed9738;
  color: white;
}

/* ---------------- */
.title-white {
  color: var(--black);
  font-size: var(--sizeTitles);
}

.container-committe-list {
  padding: 3rem 0;
  background-color: var(--white);
  margin: 5vh 0;
  display:flex;
  flex-direction: column;
}
.committe-list {
  padding: 0;
}

.committe-item {
  margin: 1.5rem 0;
}

.text-cursiva {
  font-style: oblique;
}
.committe-cargo {
  color: var(--secondary);
  margin: 0.5rem;
}

.text-names {
  color: var(--gray);
}
.container-partners{
  background-color: var(--white-gray);
}

@media only screen and (min-width: 600px) {
  .container-main-lateral {
    display: flex;
    flex-direction: row;
  }

  .main {
    width: 60%;
    flex-direction: row;
  }

  .text {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    width: 80%;
  }
  .parrafo-main {
    text-align: left;
  }

  .lateral {
    width: 40%;
    padding: 4rem 0;
  }

.container-committe-list{

  align-items: flex-start;
  padding:0 10vw ;
  
}
.committe-list{
  text-align: left;
}
.committe-cargo{
  padding:0;
  margin:2vh 0;
}

}
</style>

