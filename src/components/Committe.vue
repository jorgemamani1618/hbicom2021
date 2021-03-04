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

    <div id="tabs" class="container">
  
      <div class="tabs">
          <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Organizing Committe</a>
          <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Technical Committe</a>
      </div>

      <div class="content">
          <div v-if="activetab === 1" class="tabcontent">
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
          </div>


          <div v-if="activetab === 2" class="tabcontent">
            <div class="container-committe-list">
              
              <h1 class="title-white">Technical Committe</h1>
              
              <ul class="committe-list">
                
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Jose Amaya Palacios</h3>
                  <span class="text-names">Universidad de Santander - Colombia</span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Robertto Kenji Hiramatsu </h3>
                  <span class="text-names">Universidade Federal de Pernambuco - Brasil</span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Miguel Gonzales Mendoza  </h3>
                  <span class="text-names">Tecnologico de Monterrey - Mexico</span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Sergio Takeo Kofuji  </h3>
                  <span class="text-names">Escola Politecnica da Universidade de São Paulo - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. João Neto </h3>
                  <span class="text-names">Universidade Federal do Reconcavo da Bahia - Brasil </span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Augusto Neto  </h3>
                  <span class="text-names">Universidade Federal de Natal - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Joel Rodrigues  </h3>
                  <span class="text-names">Universidade Federal do Piau - Brasil</span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Jorge R. Beingolea </h3>
                  <span class="text-names">Escola Politecnica da Universidade de São Paulo - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Marcelo Texeira  </h3>
                  <span class="text-names">Escola Politecnica da Universidade de São Paulo - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Rodrigo Alvaro Brandão </h3>
                  <span class="text-names">Universidade Estadual de Campinas - Brasil</span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Hiro Goto </h3>
                  <span class="text-names">Universidade de São Paulo - Brasil</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Daniel Gustavo Goroso  </h3>
                  <span class="text-names">Universidade de Mogi das Cruzes - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Silvia Martini Rodrigues  </h3>
                  <span class="text-names">Universidade de Mogi das Cruzes - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Katia Mugnol  </h3>
                  <span class="text-names">Universidade de Mogi das Cruzes - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Alessandro Silva  </h3>
                  <span class="text-names">Universidade de Mogi das Cruzes - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Simone Siqueira da Fonseca  </h3>
                  <span class="text-names">Universidade de Mogi das Cruzes - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Marcia Bissaco  </h3>
                  <span class="text-names">Universidade de Mogi das Cruzes - Brasil</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr.  Terigi Scardovelli </h3>
                  <span class="text-names">Universidade de Mogi das Cruzes - Brasil</span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Hugo Daniel Hernandez  </h3>
                  <span class="text-names">Universidade Federal de Minas Gerais - Brasil</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Edison Cobo  </h3>
                  <span class="text-names">Universidad de Antioquia – Medellin - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Natalia Gaviria  </h3>
                  <span class="text-names">Universidad de Antioquia – Medellin - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Gustavo  Patiño  </h3>
                  <span class="text-names">Universidad de Antioquia – Medellin - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Ana Maria Cardenas  </h3>
                  <span class="text-names">Universidad de Antioquia – Medellin - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Natalia Gaviria  </h3>
                  <span class="text-names">Universidad de Antioquia – Medellin - Colombia</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Monica Vallejo  </h3>
                  <span class="text-names">Universidad Nacional de Colombia - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Verónica Botero  </h3>
                  <span class="text-names">Universidad Nacional de Colombia - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Freddy Bolaños  Martinez </h3>
                  <span class="text-names">Universidad Nacional de Colombia - Colombia</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Jairo Jose Espiniza  </h3>
                  <span class="text-names">Universidad Nacional de Colombia - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Leonardo Betancourt </h3>
                  <span class="text-names">Universidad Pontificia Bolivariana - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Roberto Hincapié </h3>
                  <span class="text-names">Universidad Pontificia Bolivariana - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo"> Dr. Xavier Rubio Loyola</h3>
                  <span class="text-names">Cinvestav - Mexico</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Monica Huerta  </h3>
                  <span class="text-names">Universidad Salesiana - Ecuador</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Eduardo T. Ueda </h3>
                  <span class="text-names">Instituto de Pesquisas Tecnologicas – IPT - Brasil</span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Eduardo L. Machado </h3>
                  <span class="text-names">Instituto de Pesquisas Tecnologicas – IPT - Brasil</span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Juliana Cardoso </h3>
                  <span class="text-names">Instituto de Pesquisas Tecnologicas – IPT - Brasil</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Anderson Silva </h3>
                  <span class="text-names">Instituto de Pesquisas Tecnologicas – IPT - Brasil</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dra. Trilce Estrada </h3>
                  <span class="text-names">University New Mexico </span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Diogo Oliveira  </h3>
                  <span class="text-names">Florida State University - EEUU</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Jorge Gómes Sanz </h3>
                  <span class="text-names">Universidad Complutense de Madrid – España</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. André Luis Meneses</h3>
                  <span class="text-names">Universidade Federal de Sergipe - Brasil</span>
                </li>

                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. José Perez Alcazar </h3>
                  <span class="text-names">Universidade de São Paulo - Brasil</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Esteban Tuesta  </h3>
                  <span class="text-names">Universidade de São Paulo - Brasil</span>
                </li>


                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Edwin Montoya</h3>
                  <span class="text-names">Universidad EAFIT - Colombia</span>
                </li>
                <li class="committe-item">
                  <h3 class="committe-cargo">Dr. Luis Hernandez  Callejo </h3>
                  <span class="text-names">Universidad Vallodolid - España</span>
                </li>


              </ul>
            </div>
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
import { Tabs, Tab } from '@crow1796/vue-bulma-tabs'
export default {
  name: "committe",
  data() {
    return {
      activetab: 1,
      isActive: false,
      msg: "Welcome to Committe",
    };
  },
  components: {
    Partners,
    Banner,
    Tabs,
    Tab
  },
  mounted() {
    this.isActive = this.selected;
  }
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


.tabs{
  text-align: left;
  width: 800px;
  margin: 0 auto;
  
}
.tabs h1{
  color: #007FE5;
}
.nav-tabs{
  display: flex;
  justify-content: space-between;
}
.nav-item{
  background-color: #f1a943;
  transition: all 150ms;
  cursor: pointer;
  height: 80px;
  width: 31.5%;
  display: flex;
  justify-content: center;
  align-items: initial;
  flex-direction: column;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;


}
.nav-item:active{
  background-color: rebeccapurple;
  color: rgb(255, 0, 0);
}

.tab-content{
  background-color: rgb(158, 158, 158);
  padding: 40px;
}

.for-example h2 {
  margin-top: 0;
  color: rgb(255, 0, 221);
}

.container {  
    max-width: auto; 
    min-width: auto;
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    color:#007fe5;
}

.tabs {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px; 
}

.tabs ul {
    list-style-type: none;
    margin-left: 20px;
}

.tabs a{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}
.tabs a:last-child { 
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color: #007fe5;
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1
}
}
</style>

