<template>
  <div class="partners-body">
    <div class="organizer-container">
      <p class="title-partners">This event is financed and funded by:</p>
      <div class="logos-array">
      <img class ="img-logo" src="../assets/logos/logo-unsa.svg" />
      <img class ="img-logo" src="../assets/logos/logo-unsa-investiga.svg" />
      </div>
    </div>
    <div class="sponsors-container">
      <p class="title-partners">Support:</p>
       <img class ="img-logo" src="../assets/logos/logo-ieee-embs.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "partners",
  data() {
    return {
      msg: "Welcome to Partners",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.partners-body {
 
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: space-evenly;
  align-items: top;
   padding-bottom: 3rem;
}
.logos-array{
  display:flex;
  flex-direction: column;
}

.img-logo{
  height: 5rem;
}
.title-partners{
  margin-bottom: 2rem;
  margin-top:2rem;
  font-size: 1.2rem;
}

@media only screen and (min-width: 600px) {
 
 .partners-body,.logos-array {
   flex-direction: row;
}
}

</style>
