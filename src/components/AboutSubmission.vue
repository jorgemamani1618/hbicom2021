<template>
  <div class="submission-body">
     <div class="container-text" id="content">
      <div class = "parrafo_container" id="content1">
      <h1 class="title-main"> About Submission </h1>
        <h2 class="title">Submission Format</h2>
        <p class="parrafo">
          – Papers must be written in English. Submissions should be original, 
          unpublished, limited to 6 double-column pages (including all images and references),
           and follow the standard IEEE double-column 
 
         <a href="https://www.ieee.org/conferences/publishing/templates.html" class="text-link"  target="_blank">  conference
          template.</a> <br/>

          – Only PDF files will be accepted.  <br/>
          – The submissions must uploaded on
          the 
          <a href="https://easychair.org/" class="text-link"  target="_blank">  conference
          website.</a>
            <br/>

          – Accepted and presented papers will be published in the HBICOM 2021
          Conference proceedings and submitted to IEEE Xplore and also to other
          Abstracting and Indexing (A&I) databases.<br/>

          – Further guidelines for paper preparation and submission are given in
          the Submission Guidelines tab of this page.<br/>

          – Accepted papers should meet the following guidelines:<br/>
          <ul>
          <li class="li-dot">Aiming to be indexed, papers must be accepted and presented in an oral
          session during the HBICOM 2021 Conference. </li>
         <li class="li-dot"> The official conference language is English; so, the conference
          presentations will be in English.</li>
          </ul>
        </p>
      </div>
      <div class="parrafo_container" id="content2">
              <h2 class="title">Submission Guidelines</h2>
        <p class="parrafo">
          –  All submissions should be written in English with a maximum paper length of six ( 6 ) printed pages ( 10-point font ) including figures 
         <a href="https://www.ieee.org/conferences/publishing/templates.html" class="text-link"  target="_blank">( template ).</a> <br/>


          – When preparing your manuscript, please pay also attention to the
          following:<br />
          <ul>
          <li class="li-dot">Only the maximum number of up 5 co-authors per article will be allowed.</li>
         <li class="li-dot"> If your paper has been prepared using Microsoft Word, please ensure
          that you have used the most current version which will help reduce
          word-to-pdf conversion issues such as embedded fonts, bookmarks,
          etc.</li>
         <li class="li-dot"> No page numbers and no headers/footers.</li>
          </ul>
          <span class ="text_bold">IMPORTANT NOTICE</span><br/>

          Papers are reviewed on the basis that they do not contain plagiarized
          material and not sent for a conference on the same time (double
          submission). These matters are taken very seriously and the IEEE HBICOM
          conference will take action against any author who has engaged in
          either practice.
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
  margin: 2rem 0;
  line-height: 2rem;
}
.title {
  margin: 1rem;
}
.parrafo {
  text-align: left;
  font-size:var(--sizeLongText);
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