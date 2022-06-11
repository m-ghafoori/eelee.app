<template>
  <div id="p-body" class="d-flex flex-column">
    <header id="p-header" class="d-flex align-items-center">
      <router-link id="p-logo" class="hoverable" to="/">EELee</router-link>
        <router-link id="p-homeNav" class="p-nav-link hoverable" to="/">Home</router-link>
        <router-link id="p-appNav" class="p-nav-link hoverable" to="/app">App</router-link>
        <router-link id="p-donateNav" class="p-nav-link hoverable" to="/app">Donate</router-link>
        <router-link id="p-orderNav" class="p-nav-link hoverable" to="/order">Order Now!</router-link>
    </header>
    <section id="p-homePage" class="">
      <div id="p-homeHeader" class="p-animated-bg">Home Page</div>
      <div id="p-homeBody" class="d-flex flex-column">
        <p id="p-homeFirstPar" class="p-home-paragraph">
          There are two seperate home pages for different screen sizes.
        </p>
        <div class="d-flex justify-content-center align-items-center">
          <div id="p-homeMdParentDiv" class="">
            <div id="p-homeMdDiv" class="reflection"></div>
          </div>
          <div id="p-homeLgParentDiv" class="">
            <div id="p-homeLgDiv" class="reflection"></div>
          </div>
        </div>
        <p id="p-homeSecondPar" class="flex-grow-1 p-home-paragraph">
          They both have artistic designs along with animated elements with
          interesting sound effects! <br />
          Two samples for clients who are interested in this type of user
          interface design...
        </p>
      </div>
    </section>
    <section id="p-appPage" class="d-flex">
      <div
        id="p-appFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center"
      >
        <div id="p-appTxtImgContainer" class="d-flex justify-content-between">
          <p id="p-appFirstPar" class="p-home-paragraph flex-grow-1">
            This is the classic "MineSweeper" game... But, it has a modern
            design and you can change almost everything in it!
          </p>
          <div id="p-appImageContainer" class="">
            <div id="p-appImgDiv" class="reflection d-inline-block"></div>
          </div>
        </div>
        <p id="p-appSecondPar" class="p-home-paragraph flex-grow-1">
          This app is designed by "Vue.js", one of the best modern JavaScript
          frontend frameworks. <br />
          You can change everything from game-specific numbers, to colors and
          fonts of every element, without disturbing the game play... <br />
          It's really nice! Give it a try :)
        </p>
      </div>
      <div id="p-appHeader" class="p-animated-bg">App&nbsp;Sample</div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import 'assets/css/portfolio.css'
</style>