<template>
  <div class="body-turismo">
    <div class="container-titulo">
      <h1 class="titulo-turismo">Visit Arequipa!</h1>
    </div>
    <div class="turismo-container">
          <div class="container-img-topics">
       <img src="../../../assets/img/turismo.png" alt="" class="img-turismo" />
    </div>
      <div class="texto-turismo">
        <p class="parrafo-turismo">
          Arequipa is known as the “White City”, thanks to the use of white
          volcanic stone, predominant in the constructions of its wonderful
          historic center and dating from the viceregal and republican eras. In
          the year 2000, it was declared a World Heritage Site by UNESCO.
        </p>
              <div class=container-link>
      
         <a href="https://www.peru.travel/pe/destinos/arequipa" class="link-primary"  target="_blank"> More Information</a> 
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img-turismo{
  width:90vw;
  margin:5vh 0;
}

.body-turismo {
  margin: 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-titulo {
  background-color: var(--primary);
  color: var(--black);
  padding: 2vh 0;
  width: 100%;

}
.titulo-turismo{
    font-size:var(--sizeTitles);
}
.turismo-container {
  /* background-image: url("../../../assets/img/turismo.png"); */
  background-repeat: no-repeat;
  background-size: contain;
  height: min-content;
  display: flex;
  justify-content: flex-end;
  width: 80vw;
  align-items: center;
  flex-direction: column;
}

.texto-turismo {
  width: 90vw;
  height: min-content;
  text-align: left;
  margin:5vh 0;
}

.parrafo-turismo{
  font-size:var(--sizeParrafo);
  text-align:justify;
  }
.container-link{
  margin:5vh 0;
}

  @media only screen and (min-width: 600px) {

 .turismo-container{
   flex-direction: row;
   align-items:flex-start;

    
 }

.img-turismo{
  width:45vw;
}
.texto-turismo{
  width:35vw;
  padding:5vh 0;
}

  }
</style>