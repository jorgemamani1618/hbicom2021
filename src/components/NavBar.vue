<template>
  <div class="navbar">
            <nav>
                 <a href='#Home'>Home</a> 
                 <a href='#'>Committe</a> 
                 <a href='#'>Call For Papers</a> 
                 <a href='#'>Keynote Speakers</a> 
                 <a href='#'>Program</a> 
                 <a href='#'>Committe</a> 
            </nav>
 
 
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
 background-color:#f1a943;
  height: 3rem;
  display: flex;
  margin:0;
  justify-content: center;
  
}

nav {
 	margin:0;
	position: relative;
 	justify-content:center;
	display:flex;
}

nav a {
  line-height: 2.7rem;
	height: 100%;
	font-size: 1rem;
	display: inline-block;
	position: relative;
 	text-decoration: none;
  text-align: center;
	color: white;
	cursor: pointer;
	padding-right:1rem;
  padding-left:1rem;
  font-weight: 500;
}
 
nav a:hover{
	background-color:#ed9738;
}

 
</style>
