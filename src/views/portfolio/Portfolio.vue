<template>
  <div id="p-body" class="d-flex flex-column align-items-center">
    <header id="p-header" class="d-flex align-items-center">
      <router-link id="p-logo" class="hoverable" to="/">EELee</router-link>
        <router-link id="p-homeNav" class="p-nav-link hoverable" to="/">Home</router-link>
        <router-link id="p-appNav" class="p-nav-link hoverable" to="/app">App</router-link>
        <router-link id="p-donateNav" class="p-nav-link hoverable" to="/app">Donate</router-link>
        <router-link id="p-orderNav" class="p-nav-link hoverable" to="/order">Order Now!</router-link>
    </header>

    <section id="p-mainPage" class="">
      <div id="p-mainHeader" class="p-animated-bg">About EELee</div>
        <p id="p-mainPar" class="p-paragraph">
          EELee App Design is a full stack web app development group,
          mainly focused on designing frontend by modern JavaScript frameworks like Vue.js
        </p>
    </section>
    <section id="p-homePage" class="d-flex">
      <div
        id="p-homeFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center"
      >
          <p id="p-homeFirstPar" class="p-paragraph flex-grow-1">
            Two distinct responsive home pages for different screen sizes!
          </p>
        <div id="p-homeImgContainer" class="d-flex justify-content-center align-items-center">
          <div id="p-homeMdParentDiv" class="">
            <div id="p-homeMdDiv" class="reflection"></div>
          </div>
          <div id="p-homeLgParentDiv" class="">
            <div id="p-homeLgDiv" class="reflection"></div>
          </div>
        </div>
        <p id="p-homeSecondPar" class="p-paragraph flex-grow-1">
          They both have artistic designs along with animated elements. <br />
          Two samples for clients who are interested in this type of user
          interface design...
        </p>
      </div>
      <div id="p-homeHeader" class="p-animated-bg">Home&nbsp;Page</div>
    </section>
    <section id="p-appPage" class="d-flex">
      <div id="p-appHeader" class="p-animated-bg">App&nbsp;Sample</div>
      <div
        id="p-appFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center"
      >
        <div id="p-appTxtImgContainer" class="d-flex justify-content-between">
          <p id="p-appFirstPar" class="p-paragraph flex-grow-1">
            This is the classic "MineSweeper" game... But, it has a modern
            design and everything is customizable! <br><br>
            You can change everything from game-specific numbers, to colors and
            fonts of every element, without disturbing the game play... <br><br>
            It's really nice! Give it a try :)
          </p>
          <div id="p-appImageContainer" class="">
            <div id="p-appImgDiv" class="reflection d-inline-block"></div>
          </div>
        </div>
        <p id="p-appSecondPar" class="p-paragraph flex-grow-1">
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',

  // computed: {
  //   homeStyle() {
  //     return {
  //       'width': `90vw`
  //     }
  //   }
  // },

  // created() {
  //   // console.log(document.getElementById('p-body'))
  // },
};
</script>

<style scoped>
@import 'assets/css/portfolio.css'
</style>