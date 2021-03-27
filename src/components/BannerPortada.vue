<template>
  <div class="banner_body">
    <div class="banner">
      <div class="banner-capa2">
        <div class="texto_banner">
          <div class="Title">
            <h1 class="t1">
              International Conference <br />
              on <span class="t2">e-Health</span> and <br />
              Biomedical Instrumentation
            </h1>
          </div>
          <div class="fecha_lugar">
            <h4 class="text_fecha">04-07 October, 2021</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      msg: "Welcome to Banner",
    };
  },
};
</script>

<style scoped>
@import "../styles/stylesmain.css";

.banner_body {
  background-image: radial-gradient(#009dc7, #0072c7);
  background-color: white;
  /* height: 60vh; */
  height: min-content;
}

.banner {
  height: 100%;
  background-image: url("../assets/img/background-portada2.png");
  background-size: contain;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.banner-capa2 {
  width: 100%;

  background-image: url("../assets/img/realidad-virtual.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100%;
}
.texto_banner {
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: left;
  font-size: 1.5rem;
}

.fecha_lugar {
  margin-top: 1rem;
  text-align: center;
  color: var(--gray);
  font-weight: bold;
}
.Title {
  margin: 5vh 0;
}

.text_fecha,
.text_lugar {
  color: var(--secondary);
  text-align: center;
  background-image: linear-gradient(90deg, #ffbb54, #e8a043);
  padding: 1vh 5vw;
  margin: 3vh 0;
  /* width: 25vw; */
}

.img_destacada {
  height: 0;
  width: 0;
  margin-left: 0%;
  background-size: cover;
  visibility: none;
}

.img-portada {
  width: 0;
  height: 0;
  visibility: none;
}

.t1 {
  color: var(--white);
  font-weight: bold;
  text-align: center;
  line-height: 2.5rem;
}
.t2 {
  color: var(--white);
  background: var(--primary);
  padding: 0 0.8rem;
}

@media only screen and (min-width: 600px) {
  .banner_body {
    height: 60vh;
  }

  .banner,
  .banner-capa2 {
    align-items: flex-end;
    justify-content: flex-start;
    height: 100%;
  }

  .img_destacada {
    height: min-content;
    width: 40%;
    visibility: visible;
  }
  .img-portada {
    min-width: 70%;
    height: 14rem;
    visibility: visible;
  }

  .texto_banner {
    width: 50%;
    height: 100%;
    justify-content: flex-end;
    margin-left: 7%;
 
  }
  .Title{
    margin:0;
  }

  .t1 {
    text-align: left;
    font-size: 7vh;
    line-height: 7.8vh;
    color: white;
  }
  .fecha_lugar {
    text-align: left;
    color: white;
    font-size: 5vh;
    margin:2vh 0 5vh 0;
  }
}
</style>
