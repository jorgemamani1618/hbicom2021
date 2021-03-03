<template>
  <div class="submission-body">
     <div class="container-text" id="content">
      <div class = "parrafo_container" id="content1">
      <h1 class="title-main"> About Submission </h1>
        <h2 class="title">Guidelines</h2>
        <p class="parrafo">
          – All articles (for the CCIS series) must be in English and have a clear focus on computer science subjects applied to health.<br/>
          – Papers can be submitted in short paper format (6 to 8 pags in single-column format) and full paper format (12 to 15 pags in single-column format).<br/>
         <ul>
         <li class="li-dot">These page ranges take into account that the authors already use one of the official Springer templates for typesetting their papers. </li>
         <li class="li-dot"> The templates can be found at 
         <a href="https://www.springer.com/br/computer-science/lncs/conference-proceedings-guidelines" class="text-link"  target="_blank">  conference
          template</a> <span class="text_bold text_resalt">(Springer Template).</span></li>
          </ul>
        </p>
      </div>
      <div class="parrafo_container" id="content2">
        <h2 class="title">Review</h2>
        <p class="parrafo">
          –  Papers must present promising, innovative results.<br/>
          –  All submitted papers will be peer reviewed, with no less than 3 independent reviewers per paper.<br/>
          –  Anti-plagiarism software will be used to detect any unethical behavior in the submitted papers.<br/>
        </p>
      </div>
        <div class="parrafo_container" id="content3">
        <h2 class="title">Indexing</h2>
        <p class="parrafo">
          –  Proceedings will be submitted for indexing in Web of Science and Scopus.
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "topicsCFP",
};
</script>

<style scoped>
.title-main {
  color: var(--black);
  font-size: var(--sizeTitles);
}

.tab_clase {
  margin: 0 20%;
  padding: 0 10%;
}
.container-text {
  color: gray;
  padding: 3rem 10%;
}

.parrafo_container {
  margin: 2rem 2rem 2rem 0;

  line-height: 2rem;
}
.title {
  margin: 1rem;
  text-align: left;
}
.parrafo {
  text-align: left;
  font-size: var(--sizeLongText);
  padding: 0 0 0 2rem;
}

.text_bold {
  font-weight: bold;
}

.text-link {
  color: var(--primary);
  text-decoration: underline;
}

.li-dot {
  list-style-type: square;
}
</style>