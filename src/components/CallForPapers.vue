<template>
  <div class="cfp_body">
         <Banner />
    <div class="container-main-lateral">
      <div class="main">
         <div class="text">
          <div class="title">
            <h2 class="main-title">
              Important Deadlines!
            </h2>
          </div>
          <div class="Parrafo">
            <p class="parrafo-main">
              Paper Submission Deadline:
              <span class="p_bold">11 July 2021 </span><br />
              Notification of Acceptance:<span class="p_bold">
              08 August 2021</span>
              <br />
              Final Paper Submission Deadline:
              <span class="p_bold">16 August 2021</span>
            </p>
            <!-- <button class="button_cfp" type="button">Author Guidelines!</button> -->
            <a href="#section-author-guidelines" class="button-primary">
              Author Guidelines!</a>
          </div>
        </div>
      </div>
      
      <div class="lateral">
        <h2 class="title-lateral">REGISTRATION FEE FOR AUTHORS</h2>
        <p> ( in US Dollars )</p>
        <!-- <h4 class="h4_amarillo">IMPORTANT INFORMATION</h4> -->
        <p class="parrafo-lateral">
          Professionals: <span class="p_bold"> 150 USD </span><br />
          Undergraduate and graduate students: <span class="p_bold"> 120 USD </span>
  
          <span class="p_bold"> </span>
        </p>
        <a
          href="https://easychair.org/"
          class="button-primary"
          role="button"
          target="_blank"
          >Go to EasyChair!</a>
      </div>
    </div>
    <section id="topics"/>
    <Topics />
    <section id="section-author-guidelines"/>
    <Submission />
  </div>
</template>

<script>
import Topics from "../components/TopicsCFP2";
import Submission from "../components/AboutSubmission2";
import Banner from "../components/PortadaCFP";
export default {
  name: "callforpapers",
  components: {
    Topics,
    Submission,
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
  margin:3vh;
}

/*----------------*/
/* Seccion Main---*/
/*----------------*/

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
 
  color: var(--black);
  width: 100%;
  font-size: 1.5rem;
}
.celeste {
  color: #00c6f3;
}

.main-title {
  text-align: center;
}

.parrafo-main {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  line-height: 2rem;
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
.title-lateral{
  color:var(--black);
}
.h4_amarillo {
  color: var(--secondary1);
}
.parrafo-lateral {
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 2rem;
 
  font-size: 1.2rem;
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
  color: var(--primary);
  border-color: var(--primary);
  cursor: pointer;
  transition-duration: 0.5s;
  text-decoration: none;
}

.button_cfp:hover {
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}

/* Para escritorio */
@media only screen and (min-width: 600px) {
  .container-main-lateral {
    display: flex;
    flex-direction: row;
    align-items: default;
    justify-content: default;
  }

  .main {
    width: 60%;
    flex-direction: row;
  }

  .text {
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
  }
 

  .lateral {
    width: 40%;
    padding:4rem 0;
 
   
  }

}
</style>