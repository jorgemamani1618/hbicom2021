<template>
  <div class="home">
        <Banner />
        <div class="container-timer">
          <h3 class="timer-title"> Papers Submissions Deadline</h3>
          <Timer
          starttime="July 11, 2021 23:59:59"
          endtime="Nov 15, 2021 12:00:00"
          trans='{  
         "day":"Days",
         "hours":"Hours",
         "minutes":"Minuts",
         "seconds":"Seconds",
         "expired":"Event has been expired.",
         "running":"Till the end of event.",
         "upcoming":"Till start of event.",
         "status": {
            "expired":"Expired",
            "running":"Running",
            "upcoming":"Future"
           }}'
        ></Timer>
        </div>
    <div class="container-main-lateral">
      <div class="main">
        <div class="text">
          <div class="title">
            <h2 class="main-title">Welcome!</h2>
          </div>
          <div class="Parrafo">
            <p class="parrafo-main">
              The HBICOM is the international event created to promote the
              dissemination of knowledge and innovation in e-Heath (digital
              health) and Biomedical Engineering research and projects. <br />
              <br />
              Will be includes Conferences, Call For Papers, Workshops. Keynote
              Speakers are from Brasil, Ecuador, Colombia and Perú.
            </p>
          </div>
        </div>
      </div>
      <div class="lateral">
        <h2 class="lateral-title">CALL FOR PAPERS</h2>
        <h4 class="h4_amarillo">IMPORTANT DEADLINES</h4>
        <p class="parrafo-lateral">
          Paper Submission Deadline:
          <span class="p_bold">11 July 2021 </span><br />
          Notification of Acceptance:<span class="p_bold"> 08 August 2021</span>
          <br />

          Final Paper Submission Deadline:
          <span class="p_bold">16 August 2021</span>
        </p>
        <router-link to="/CallForPapers/#topics" class="button-primary"
          >Submit Now!</router-link
        >
      </div>
    </div>
    <TopicsHome />
    <Conferences />
       <Turismo/>
       <div class="partners-container">
    <Partners />
 </div>
  </div>
</template>

<script>
import Payment from "../components/Payment";
import Banner from "../components/BannerPortada";
import TopicsHome from "../components/Home_Topics";
import Partners from "../components/Partners";
import Conferences from "../components/Secciones/Home/Conferences";
import Turismo from "../components/Secciones/Home/Turismo";
import Timer from "@/components/CountDownTimer";

export default {
  name: "Home",
  components: {
    Payment,
    TopicsHome,
    Partners,
    Conferences,
    Turismo,
    Banner,
    Timer
  },
};
</script>

<style scoped>
@import "../styles/stylesmain.css";



.home {
  display: flex;
  flex-direction: column;
}

.container-timer{
 display:none; 
}
.container-main-lateral {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
 margin:2vh 0;
 
}

/*----------------*/
/* Seccion Welcome*/
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
  color: var(--dark-primary);
  width: 100%;
  font-size: 1.5rem;
}

.main-title {
  text-align: center;
}
.parrafo-main {
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: var(--dark-primary);
  font-size: var(--sizeParrafo);
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
  color: var(--black);
    font-size:var(--sizeParrafo);
}

.lateral-title {
  color: var(--primary);
  font-size:var(--sizeTitles);
}
.parrafo-lateral {
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.8rem;
  color: black;
  font-size: var(--sizeParrafo);
}

.p_bold {
  font-weight: 600;
}
.button_cfp {
  background-color: transparent;
  border-style: solid;
  border-radius: 0;
  font-size: var(--sizeParrafo);
  padding: 0.5rem 2rem;
  color: var(--dark-primary);
  border-color: var(--dark-primary);
  cursor: pointer;
  transition-duration: 0.4s;
  text-decoration: none;
}

.button_cfp:hover {
  background-color: var(--secondary1);
  border-color: var(--secondary1);
  color: var(--white);
}

.partners-container{
  background-color: var(--white-gray);
}

@media only screen and (min-width: 600px) {

.container-timer{
  width:25vw;
  height: min-content;
  background-color:var(--white);
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position:absolute;
  top:62vh;
  right: 5vw;
  box-shadow: 0px 5px 10px gray;
  padding:2vh 0;
   }

   .timer-title{
color:var(--primary);
 margin: 0 0 1vh 0;
   }

  .container-main-lateral {
    display: flex;
    flex-direction: row;
   margin:10vh 0;
    width: 100%;
    font-size: var(--sizeTitles);
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
    display: flex;
    flex-direction: column;
  }
  .parrafo-main {
    text-align: left;
    font-size:var(--sizeParrafo);
  }

  .lateral {
    width: 40%;
    padding: 3rem 0;
  }
}
</style>