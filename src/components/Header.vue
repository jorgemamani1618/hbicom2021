<template>
  <div class="header">
    <div class="logos">
      <img class="logo-hbicom" src="../assets/logos/logo-hbicom-3.svg" />
      <!-- <img class= "logo" src="../assets/logos/logo-ieee-embs.svg" /> -->
   
    </div>
    <div class="widgets">
  
 
      <img class="logo-unsa" src="../assets/logos/logo-unsa.svg" />
      <img class="logo-unsa" src="../assets/logos/logo-unsa-investiga.svg" />
     
      <!--  Timer Component  -->
      <!-- <div class="timer-container">
        <Timer
          starttime="Feb 22, 2021 23:59:59"
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
      </div> -->
      <!--  End! Timer Component  -->
    </div>
  </div>
</template>

<script>
import Timer from "@/components/CountDownTimer";
export default {
  name: "headercomponent",
  data() {
    return {
      msg: "Welcome to Header",
    };
  },
  components: {
    Timer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: white;
  height: 3rem;
  display: flex;
  margin: 0;
  justify-content: flex-start;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
}

.logo {
  width: 150px;
}
.logo-hbicom {
  width: 150px;
  padding-left: 1rem;
  
}
.logo-unsa,
.text-deadline,
.timer-container {
  display: none;
}

@media only screen and (min-width: 600px) {
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 4rem;
  }

  .logo {
    width: auto;
    height: 4rem;
    padding: 0 2rem;
  }
  .logo-hbicom, .logo-unsa {
    width: 10rem;
    padding: 0 1rem 0 2rem;
  }
  .logo-unsa,
  .text-deadline,
  .timer-container {
    display: block;
  }
  .logos,
  .widgets {
    display: flex;
    justify-content: flex-start;
 align-items: center;
  }
  .logos {
    width: min-content;
    margin-left: 2rem;
  }
  .parrafo-deadline{
    text-align: right;
    margin-right: 1rem;
  }
  .timer-container{
    margin-right: 2rem;
  }
}
</style>
