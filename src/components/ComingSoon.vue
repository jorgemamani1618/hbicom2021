<template>
  <div class="coming-body">
    <Banner/>
 <h1 class="titulo-coming">Coming Soon!</h1>
  </div>
</template>

<script>
import Banner from "../components/BannerPortada";
export default {
  name: "coming",
  data() {
    return {
      msg: "Welcome to Coming Soon",
    };
  },
  components:{
    Banner
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coming-body {
  background-color: white;
  height: min-content;
   
 
}
.titulo-coming{
  margin:5vh 0;
}
 
</style>