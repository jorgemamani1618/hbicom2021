<template>
  <div class="banner_body">
    <div class="banner">
      <div class="banner-capa2">
        <div class="texto_banner">
          <div class="Title">
            <h1 class="t1">
              Call for Papers <br />
     
            </h1>
          </div>
          <div class="fecha_lugar">
            <p>
       Organizing Committee is inviting the submission of original, unpublished,and high-quality research papers.
            </p>
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
  background-image: url("../assets/img/portada-cfp.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
}
.texto_banner {
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

h1 {
  text-align: left;
  font-size: 1.5rem;
}

.fecha_lugar {
  margin-top: 1rem;
  text-align: center;
  color: var(--white);
 
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
    height: 40vh;
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
    justify-content: center;
    margin-left: 10%;
  }

  .t1 {
    text-align: left;
    font-size: 7vh;
    line-height: 7.8vh;
    color: white;
  }
  .fecha_lugar {
    text-align: left;
    
    font-size:var(--sizeParrafo)
  }
}
</style>

