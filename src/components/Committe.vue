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

    <nav class="tabs">
      <button class="tabs__item" @click="show=true" v-bind:class="{tabs__item_active :show}">Organizing Committe</button>
      <!-- active tab -->
      <button class="tabs__item" @click="show=false" v-bind:class="{tabs__item_active :!show}">Technical Committe</button>

      <div class="tabs__active-line"></div>
    </nav>
    <div class="container-committe-list" v-if="show">
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
    <div class="container-committe-list" v-if="!show">
      <h1 class="title-white">Technical Committe</h1>
      <div class="container-technical-committe-list">
        <div>
          <ul class="committe-list">
            <p class="p-technical-committe">
              Dr. Jose Amaya Palacios – Universidad de Santander - Colombia<br />
              Dr. Robertto Kenji Hiramatsu – Universidade Federal de Pernambuco
              - Brasil<br />
              Dr. Miguel Gonzales Mendoza – Tecnologico de Monterrey - Mexico<br />
              Dr. Sergio Takeo Kofuji – Escola Politecnica da Universidade de
              São Paulo - Brasil<br />
              Dr. João Neto – Universidade Federal do Reconcavo da Bahia -
              Brasil<br />
              Dr. Augusto Neto – Universidade Federal de Natal - Brasil<br />
              Dr. Joel Rodrigues – Universidade Federal do Piau - Brasil<br />
              Dr. Jorge R. Beingolea – Escola Politecnica da Universidade de São
              Paulo - Brasil<br />
              Dr. Marcelo Texeira – Escola Politecnica da Universidade de São
              Paulo - Brasil<br />
              Dr. Rodrigo Alvaro Brandão – Universidade Estadual de Campinas -
              Brasil<br />
              Dra. Hiro Goto – Universidade de São Paulo - Brasil<br />
              Dr. Daniel Gustavo Goroso – Universidade de Mogi das Cruzes -
              Brasil<br />
              Dra. Silvia Martini Rodrigues - Universidade de Mogi das Cruzes -
              Brasil<br />
              Dra. Katia Mugnol - Universidade de Mogi das Cruzes - Brasil<br />
              Dr. Alessandro Silva - Universidade de Mogi das Cruzes - Brasil<br />
              Dra. Simone Siqueira da Fonseca - Universidade de Mogi das Cruzes
              - Brasil<br />
              Dra. Marcia Bissaco - Universidade de Mogi das Cruzes - Brasil<br />
              Dr. Terigi Scardovelli - Universidade de Mogi das Cruzes -
              Brasil<br />
              Dr. Hugo Daniel Hernandez – Universidade Federal de Minas Gerais -
              Brasil<br />
              Dr. Edison Cobo – Universidad de Antioquia – Medellin -
              Colombia<br />
              Dra. Natalia Gaviria – Universidad de Antioquia – Medellin -
              Colombia<br />
            </p>
          </ul>
        </div>
        <div>
          <ul class="committe-list">
            <p class="p-technical-committe">
              Dr. Gustavo Patiño – Universidad de Antioquia – Medellin -
              Colombia <br />
              Dra. Ana Maria Cardenas – Universidad de Antioquia – Medellin -
              Colombia <br />
              Dra. Natalia Gaviria – Universidad de Antioquia – Medellin -
              Colombia <br />
              Dra. Monica Vallejo – Universidad Nacional de Colombia - Colombia
              <br />
              Dra. Verónica Botero – Universidad Nacional de Colombia - Colombia
              <br />
              Dr. Freddy Bolaños Martinez – Universidad Nacional de Colombia -
              Colombia<br />
              Dr. Jairo Jose Espiniza – Universidad Nacional de Colombia -
              Colombia<br />
              Dr. Leonardo Betancourt – Universidad Pontificia Bolivariana -
              Colombia<br />
              Dr. Roberto Hincapié – Universidad Pontificia Bolivariana -
              Colombia<br />
              Dr. Xavier Rubio Loyola – Cinvestav - Mexico<br />
              Dra. Monica Huerta – Universidad Salesiana - Ecuador<br />
              Dr. Eduardo T. Ueda – Instituto de Pesquisas Tecnologicas – IPT -
              Brasil<br />
              Dr. Eduardo L. Machado – Instituto de Pesquisas Tecnologicas – IPT
              - Brasil<br />
              Dra. Juliana Cardoso – Instituto de Pesquisas Tecnologicas – IPT -
              Brasil<br />
              Dr. Anderson Silva – Instituto de Pesquisas Tecnologicas – IPT -
              Brasil<br />
              Dra. Trilce Estrada – University New Mexico<br />
              Dr. Diogo Oliveira – Florida State University - EEUU<br />
              Dr. Jorge Gómes Sanz – Universidad Complutense de Madrid –
              España<br />
              Dr. André Luis Meneses – Universidade Federal de Sergipe -
              Brasil<br />
              Dr. José Perez Alcazar - Universidade de São Paulo - Brasil<br />
              Dr. Esteban Tuesta - Universidade de São Paulo - Brasil<br />
            </p>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-partners">
      <Partners />
    </div>
  </div>
</template>

<script>
import Partners from "../components/Partners";
import Banner from "../components/PortadaCommitte";
import Tabs from "vue-tabs-with-active-line";

export default {
  name: "committe",

  components: {
    Partners,
    Banner,
    Tabs,
  },

  data: () => ({
    msg: "Welcome to Committe",
    show: true,
    tabs: [
      { title: "Tab 1", value: "tab1" },
      { title: "Tab 2", value: "tab2" },
      { title: "Tab 3", value: "tab3" },
    ],
    currentTab: "tab1",
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
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
  padding: 2rem 0;
  background-color: var(--white);
  margin: 0 0;
  display: flex;
  flex-direction: column;
}
.committe-list {
  padding: 0;
}

.committe-item,
.technical-item {
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
.container-partners {
  background-color: var(--white-gray);
}

/* Tabulador Estilos */
.tabs {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 1rem 10vw;
}

.tabs__item {
  display: inline-block;
  margin: 0 5px;
  padding: 10px;
  padding-bottom: 8px;
  font-size: 16px;
  letter-spacing: 0.8px;
  color: gray;
  text-decoration: none;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s;
}

.tabs__item_active {
  color: var(--primary);
   border-bottom: 2px solid var(--primary);
}

.tabs__item:hover {
  border-bottom: 2px solid var(--primary);
  color: var(--secondary);
}

.tabs__item:focus {
  outline: none;
  border-bottom: 2px solid var(--primary);
  color: var(--primary);
}


.tabs__item:first-child {
  margin-left: 0;
}

.tabs__item:last-child {
  margin-right: 0;
}

.tabs__active-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: var(--primary);
  transition: transform 0.4s ease, width 0.4s ease;
}
.p-technical-committe {
  line-height: 2rem;
  margin:0 0 0 1rem;
  text-align: left;
}
  .container-technical-committe-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  
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

  .container-committe-list {
    align-items: flex-start;
    padding: 0 10vw;
  }
  .committe-list {
    text-align: left;
  }
  .committe-cargo {
    padding: 0;
    margin: 2vh 0;
  }

  .container-technical-committe-list {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  .p-technical-committe {
  line-height: 2rem;
  margin:0 0 0 1rem;
  
}
}
</style>

