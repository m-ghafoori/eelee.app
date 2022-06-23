<template>
  <div id="p_body" class="d-flex flex-column align-items-center">
    <header id="p_header" class="d-flex align-items-center">
      <router-link id="p_logo" class="hoverable" to="/">EELee</router-link>
        <router-link id="p_homeNav" class="p_nav-link hoverable" to="/">Home</router-link>
        <router-link id="p_appNav" class="p_nav-link hoverable" to="/app">App</router-link>
        <router-link id="p_donateNav" class="p_nav-link hoverable" to="/donate">Donate</router-link>
        <router-link id="p_orderNav" class="p_nav-link hoverable" to="/order">Order Now!</router-link>
    </header>

    <section id="p_mainPage" class="invisible">
      <div id="p_mainHeader" class="p_animated-bg">About EELee</div>
        <p id="p_mainPar" class="p_paragraph">
          EELee App Design is a full stack web app development group,
          mainly focused on designing frontend by modern JavaScript frameworks like Vue.js
          <br><br>
          Scroll down to discover more about our work...
        </p>
    </section>
    <section id="p_homePage" class="invisible d-flex">
      <div
        id="p_homeFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center"
      >
          <p id="p_homeFirstPar" class="p_paragraph flex-grow-1">
            Two distinct responsive home pages for different screen sizes!
          </p>
        <div id="p_homeImageContainer" class="d-flex justify-content-center align-items-center">
          <div id="p_homeMdParentDiv" class="">
            <div id="p_homeMdDiv" class="reflection"></div>
          </div>
          <div id="p_homeLgParentDiv" class="">
            <div id="p_homeLgDiv" class="reflection"></div>
          </div>
        </div>
        <p id="p_homeSecondPar" class="p_paragraph flex-grow-1">
          They both have artistic designs along with animated elements. <br />
          Two samples for clients who are interested in this type of user
          interface design...
        </p>
      </div>
      <div id="p_homeHeader" class="p_animated-bg">Home&nbsp;Page</div>
    </section>
    <section id="p_appPage" class="invisible d-flex">
      <div id="p_appHeader" class="p_animated-bg">App&nbsp;Sample</div>
      <div
        id="p_appFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center flex-grow-1"
      >
        <div id="p_appTxtImgContainer" class="d-flex justify-content-between">
          <p id="p_appFirstPar" class="p_paragraph flex-grow-1">
            This is the classic "MineSweeper" game... But, it has a modern
            design and everything is customizable! <br><br>
            You can change everything from game-specific numbers, to colors and
            fonts of every element, without disturbing the game play... <br><br>
            It's really nice! Give it a try :)
          </p>
          <div id="p_appImageContainer" class="">
            <div id="p_appImgDiv" class="reflection d-inline-block"></div>
          </div>
        </div>
        <p id="p_appSecondPar" class="p_paragraph flex-grow-1">
        </p>
      </div>
    </section>

    <section id="p_portPage" class="invisible d-flex">
      <div
        id="p_portFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center flex-grow-1"
      >
        <div id="p_portTxtImgContainer" class="d-flex justify-content-between">
          <div id="p_portImageContainer" class="">
            <div id="p_portImgDiv" class="reflection d-inline-block"></div>
          </div>
          <p id="p_portFirstPar" class="p_paragraph flex-grow-1">
            This is the classic "MineSweeper" game... But, it has a modern
            design and everything is customizable! <br><br>
            You can change everything from game-specific numbers, to colors and
            fonts of every element, without disturbing the game play... <br><br>
            It's really nice! Give it a try :)
          </p>
        </div>
        <p id="p_portSecondPar" class="p_paragraph flex-grow-1">
        </p>
      </div>
      <div id="p_portHeader" class="p_animated-bg">Portfolio</div>
    </section>

    <section id="p_othersPage" class="invisible d-flex">
      <div id="p_othersHeader" class="p_animated-bg">Other&nbsp;Pages</div>
      <div
        id="p_othersFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center"
      >
          <p id="p_othersFirstPar" class="p_paragraph flex-grow-1">
            Two distinct responsive home pages for different screen sizes!
          </p>
        <div id="p_othersImageContainer" class="d-flex justify-content-center align-items-center">
          <div id="p_othersLeftParentDiv" class="">
            <div id="p_othersLeftDiv" class="reflection"></div>
          </div>
          <div id="p_othersMiddleParentDiv" class="">
            <div id="p_othersMiddleDiv" class="reflection"></div>
          </div>
          <div id="p_othersRightParentDiv" class="">
            <div id="p_othersRightDiv" class="reflection"></div>
          </div>
          <!-- <div id="p_othersLgParentDiv" class="">
            <div id="p_othersLgDiv" class="reflection"></div>
          </div> -->
        </div>
        <p id="p_othersSecondPar" class="p_paragraph flex-grow-1">
          They both have artistic designs along with animated elements. <br />
          Two samples for clients who are interested in this type of user
          interface design...
        </p>
      </div>
    </section>

    <footer id="p_footer" class="d-flex flex-column justify-content-around align-items-center">
          <div id="p_footerNav" class="d-flex justify-content-between align-items-center">
            <img id="p_linkedinNav" class="hoverable" :src="require(`@/assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <router-link to="/contact">
                <img id="p_emailNav" class="hoverable" :src="require(`@/assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
            </router-link>
            <img id="p_telegramNav" class="hoverable" :src="require(`@/assets/images/svg/telegram-${widthClass}.svg`)" alt="" @mouseenter="onTelegramMouseEnter" @mouseleave="onTelegramMouseLeave">
          </div>
          <router-link id="p_footerNote" to="/portfolio" class="hoverable">&copy; 2022 - EELee App Design</router-link>
      </footer> 
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
      isMounted: false,

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
        if (this.isMounted) {
            this.vh = window.innerHeight/100;
            this.remainingHeightHome = (this.vh*25 + this.mainPage.offsetHeight + this.homePage.offsetHeight*0.3);
            this.remainingHeightApp = (this.remainingHeightHome + this.homePage.offsetHeight*0.7 + this.vh*10 + this.appPage.offsetHeight*0.3);
            this.remainingHeightPort = (this.remainingHeightApp + this.appPage.offsetHeight*0.7 + this.vh*10 + this.portPage.offsetHeight*0.3);
            this.remainingHeightOthers = (this.remainingHeightPort + this.portPage.offsetHeight*0.7 + this.vh*10 + this.portPage.offsetHeight*0.3);
            this.onScroll();
        }
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
    this.windowWidthClassEmitter();
  },

  beforeMount() {
    this.windowWidthClassEmitter();
  },

  mounted() {
    this.bodyDiv = document.getElementById('p_body');
    this.mainPage = document.getElementById('p_mainPage');
    this.homePage = document.getElementById('p_homePage');
    this.appPage = document.getElementById('p_appPage');
    this.portPage = document.getElementById('p_portPage');
    this.othersPage = document.getElementById('p_othersPage');
    this.isMounted = true;
    this.windowWidthClassEmitter();
    this.onLoad();
  },
};
</script>

<style scoped>
@import 'assets/css/portfolio.css';
@import 'assets/css/portfolio-animations.css';
</style>