<template>
  <div id="p-body" class="d-flex flex-column align-items-center">
    <header id="p-header" class="d-flex align-items-center">
      <router-link id="p-logo" class="hoverable" to="/">EELee</router-link>
        <router-link id="p-homeNav" class="p-nav-link hoverable" to="/">Home</router-link>
        <router-link id="p-appNav" class="p-nav-link hoverable" to="/app">App</router-link>
        <router-link id="p-donateNav" class="p-nav-link hoverable" to="/donate">Donate</router-link>
        <router-link id="p-orderNav" class="p-nav-link hoverable" to="/order">Order Now!</router-link>
    </header>

    <section id="p-mainPage" class="invisible">
      <div id="p-mainHeader" class="p-animated-bg">About EELee</div>
        <p id="p-mainPar" class="p-paragraph">
          EELee App Design is a full stack web app development group,
          mainly focused on designing frontend by modern JavaScript frameworks like Vue.js
          <br><br>
          Scroll down to discover more about our work...
        </p>
    </section>
    <section id="p-homePage" class="invisible d-flex">
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
    <section id="p-appPage" class="invisible d-flex">
      <div id="p-appHeader" class="p-animated-bg">App&nbsp;Sample</div>
      <div
        id="p-appFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center flex-grow-1"
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

    <section id="p-portPage" class="invisible d-flex">
      <div
        id="p-portFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center flex-grow-1"
      >
        <div id="p-portTxtImgContainer" class="d-flex justify-content-between">
          <div id="p-portImageContainer" class="">
            <div id="p-portImgDiv" class="reflection d-inline-block"></div>
          </div>
          <p id="p-portFirstPar" class="p-paragraph flex-grow-1">
            This is the classic "MineSweeper" game... But, it has a modern
            design and everything is customizable! <br><br>
            You can change everything from game-specific numbers, to colors and
            fonts of every element, without disturbing the game play... <br><br>
            It's really nice! Give it a try :)
          </p>
        </div>
        <p id="p-portSecondPar" class="p-paragraph flex-grow-1">
        </p>
      </div>
      <div id="p-portHeader" class="p-animated-bg">Portfolio</div>
    </section>

    <section id="p-othersPage" class="invisible d-flex">
      <div id="p-othersHeader" class="p-animated-bg">Other&nbsp;Pages</div>
      <div
        id="p-othersFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center"
      >
          <p id="p-othersFirstPar" class="p-paragraph flex-grow-1">
            Two distinct responsive home pages for different screen sizes!
          </p>
        <div id="p-othersImgContainer" class="d-flex justify-content-center align-items-center">
          <div id="p-othersMdParentDiv" class="">
            <div id="p-othersMdDiv" class="reflection"></div>
          </div>
          <div id="p-othersLgParentDiv" class="">
            <div id="p-othersLgDiv" class="reflection"></div>
          </div>
        </div>
        <p id="p-othersSecondPar" class="p-paragraph flex-grow-1">
          They both have artistic designs along with animated elements. <br />
          Two samples for clients who are interested in this type of user
          interface design...
        </p>
      </div>
    </section>    
  </div>
</template>

<script>
export default {
  name: 'Portfolio',

  data() {
    return {
      widthClass: String,

      // Loading Variables
      loadMain: false,
      loadHome: false,
      loadApp: false,
      loadPort: false,
      loadOthers: false,

      // Loading Height Points
      vh: Number,
      remainingHeightHome: Number,
      remainingHeightApp: Number,
      remainingHeightPort: Number,
      remainingHeightOthers: Number,

      // Element Object Refs
      bodyDiv: Object,
      mainPage: Object,
      homePage: Object,
      appPage: Object,
      portPage: Object,
      othersPage: Object,
    }
  },

  watch: {
    loadMain(val) {
      if (val) {
        this.mainPage.classList.remove('invisible');
        this.mainPage.classList.add('slide-in-down');
      }
    },
    loadHome(val) {
      if (val) {
        this.homePage.classList.remove('invisible');
        this.homePage.classList.add('slide-in-left');
      }
    },
    loadApp(val) {
      if (val) {
        this.appPage.classList.remove('invisible');
        this.appPage.classList.add('slide-in-right');
      }
    },
    loadPort(val) {
      if (val) {
        this.portPage.classList.remove('invisible');
        this.portPage.classList.add('slide-in-left');
      }
    },
    loadOthers(val) {
      if (val) {
        this.othersPage.classList.remove('invisible');
        this.othersPage.classList.add('slide-in-right');
      }
    },
  },

  methods: {
    // Utility Methods

    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
        var windowWidth = window.innerWidth;

        if (windowWidth < 320) this.widthClass = 'xxs';
        else if (windowWidth < 576) this.widthClass = 'xs';
        else if (windowWidth < 768) this.widthClass = 'sm';
        else if (windowWidth < 992) this.widthClass = 'md';
        else this.widthClass = 'lg';
        this.vh = window.innerHeight/100;
        this.remainingHeightHome = (this.vh*25 + this.mainPage.offsetHeight + this.homePage.offsetHeight*0.3);
        this.remainingHeightApp = (this.remainingHeightHome + this.homePage.offsetHeight*0.7 + this.vh*10 + this.appPage.offsetHeight*0.3);
        this.remainingHeightPort = (this.remainingHeightApp + this.appPage.offsetHeight*0.7 + this.vh*10 + this.portPage.offsetHeight*0.3);
        this.remainingHeightOthers = (this.remainingHeightPort + this.portPage.offsetHeight*0.7 + this.vh*10 + this.portPage.offsetHeight*0.3);
        this.onScroll();
    },
  
    // Event Handlers

    onLoad() {
      this.loadMain = true;
    },

    onScroll() {
      var screenBottom = (window.innerHeight + window.scrollY);
      if (!this.loadHome && (screenBottom > this.remainingHeightHome)) {
          this.loadHome = true;
      }
      if (!this.loadApp && (screenBottom > this.remainingHeightApp)) {
          this.loadApp = true;
      }
      if (!this.loadPort && (screenBottom > this.remainingHeightPort)) {
          this.loadPort = true;
      }
      if (!this.loadOthers && (screenBottom > this.remainingHeightOthers)) {
          this.loadOthers = true;
      }
    }
  },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
    document.addEventListener('scroll', this.onScroll);
  },

  mounted() {
    this.bodyDiv = document.getElementById('p-body');
    this.mainPage = document.getElementById('p-mainPage');
    this.homePage = document.getElementById('p-homePage');
    this.appPage = document.getElementById('p-appPage');
    this.portPage = document.getElementById('p-portPage');
    this.othersPage = document.getElementById('p-othersPage');
    this.windowWidthClassEmitter();
    this.onLoad();
  },
};
</script>

<style scoped>
@import 'assets/css/portfolio.css';
@import 'assets/css/portfolio-animations.css';
</style>