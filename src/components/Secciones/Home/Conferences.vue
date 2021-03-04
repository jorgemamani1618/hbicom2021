<template>
  <div class="body-conferences">
    <h1 class="title-seccion">Conferences</h1>
    <div class="container-conferences">
      <div>
        <p> </p>
      </div>
      <div class="container-texto">
        <h3 class="conferences-title">
          "New Ultrasound <br />Telediagnostic Systems for Low-Resource Areas"
        </h3>
        <p class="conferences-texto">
          Billions of people around the world lack access to diagnostic imaging.
          To address this issue, we piloted a comprehensive ultrasound
          telediagnostic system, which uses ultrasound volume sweep imaging
          (VSI) acquisitions capable of being performed by operators without
          prior traditional ultrasound training and new telemedicine software
          capable of sending imaging acquisitions asynchronously over low
          Internet bandwidth for remote interpretation.
        </p>
 
      </div>
      <div>
        <img
          src="../../../assets/img/conferences/Conferencias-01.png"
          alt=""
          class="img-conferences"
        />
      </div>
      <div>
        <p> </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body-conferences {
  margin: 5vh 0;
  display: flex;
  flex-direction: column;
}
.img-conferences {
  width: 85vw;
}
.container-conferences {
  display: flex;
  justify-content: space-around;
  margin: 5vh 0;
  align-items: center;
  flex-direction: column;
}

.container-texto {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
}

.conferences-title {
  text-align: center;
  color: var(--primary);
  font-size: 3vh;
  margin: 0 10vw;
}
.conferences-texto {
  text-align: justify;
  font-size: var(--sizeParrafo);
  width: 90vw;
  margin: 5vh 0;
}

.title-seccion {
  color: var(--black);
  font-size: vaR(--sizeTitles);
}

@media only screen and (min-width: 600px) {
  .body-conferences {
    margin: 5vh 0;
  }
  .img-conferences {
    height: 40vh;
    width: auto;
  }
  .container-conferences {
    flex-direction: row;
  }
  .container-texto {
    width: min-content;
    height: min-content;
  }
  .conferences-title {
    font-size: 3.2vh;
    text-align: left;

    margin: 0;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .conferences-texto {
    font-size: var(--sizeParrafo);
    width: 35vw;
  }
}
</style>