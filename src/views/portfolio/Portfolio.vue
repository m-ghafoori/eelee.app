<template>
  <div id="idpp-body" class="d-flex flex-column justify-content-between align-items-center" @mousedown="onBodyDivMouseDown">
    <div id="idpp-bodyCover" class="d-none"></div>
    <header id="idpp-header" class="d-flex justify-content-between align-items-center">
          <router-link id="idpp-logo" to="/" class="hoverable">EELee</router-link>
            <ul id="idpp-headerUl" class="d-flex align-items-center" :style="headerUlStyle">
                <li>
                    <router-link to="/" class="idpp-nav-link hoverable">Home</router-link>
                </li>
                <li>
                    <router-link to="/app" class="idpp-nav-link hoverable">App</router-link>
                </li>
                <li>
                    <router-link to="/donate" class="idpp-nav-link hoverable">Donate</router-link>
                </li>
                <li>
                    <router-link to="/order" class="idpp-nav-link hoverable">Order Now!</router-link>
                </li>
            </ul>
            <span id="idpp-menuButton" class="d-none" @click="onMenuButtonClick">
                <img id="idpp-menuImg" class="hoverable" :src="require(`@/assets/images/svg/menu-button.svg`)" alt="" @mouseenter="onMenuImgMouseEnter" @mouseleave="onMenuImgMouseLeave" >
            </span>
      </header>

    <section id="idpp-mainPage" class="invisible">
      <div id="idpp-mainHeader" class="idpp-animated-bg">About EELee</div>
        <p id="idpp-mainPar" class="idpp-paragraph">
          EELee App Design is a full stack web app development group,
          mainly focused on designing frontend by modern JavaScript frameworks like Vue.js
          <br><br>
          Scroll down to discover more about our work...
        </p>
    </section>
    <section id="idpp-homePage" class="invisible d-flex">
      <div
        id="idpp-homeFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center"
      >
          <p id="idpp-homeFirstPar" class="idpp-paragraph flex-grow-1">
            Two distinct responsive home pages for different screen sizes!
          </p>
        <div id="idpp-homeImageContainer" class="d-flex justify-content-center align-items-center">
          <div id="idpp-homeMdParentDiv" class="">
            <div id="idpp-homeMdDiv" class="reflection"></div>
          </div>
          <div id="idpp-homeLgParentDiv" class="">
            <div id="idpp-homeLgDiv" class="reflection"></div>
          </div>
        </div>
        <p id="idpp-homeSecondPar" class="idpp-paragraph flex-grow-1">
          They both have artistic designs along with animated elements. <br />
          Two samples for clients who are interested in this type of user
          interface design...
        </p>
      </div>
      <div id="idpp-homeHeader" class="idpp-animated-bg">Home&nbsp;Page</div>
    </section>
    <section id="idpp-appPage" class="invisible d-flex">
      <div id="idpp-appHeader" class="idpp-animated-bg">App&nbsp;Sample</div>
      <div
        id="idpp-appFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center flex-grow-1"
      >
        <div id="idpp-appTxtImgContainer" class="d-flex justify-content-between">
          <p id="idpp-appFirstPar" class="idpp-paragraph flex-grow-1">
            This is the classic "MineSweeper" game... But, it has a modern
            design and everything is customizable! <br><br>
            You can change everything from game-specific numbers, to colors and
            fonts of every element, without disturbing the game play... <br><br>
            It's really nice! Give it a try :)
          </p>
          <div id="idpp-appImageContainer" class="">
            <div id="idpp-appImgDiv" class="reflection d-inline-block"></div>
          </div>
        </div>
        <p id="idpp-appSecondPar" class="idpp-paragraph flex-grow-1">
        </p>
      </div>
    </section>

    <section id="idpp-portPage" class="invisible d-flex">
      <div
        id="idpp-portFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center flex-grow-1"
      >
        <div id="idpp-portTxtImgContainer" class="d-flex justify-content-between">
          <div id="idpp-portImageContainer" class="">
            <div id="idpp-portImgDiv" class="reflection d-inline-block"></div>
          </div>
          <p id="idpp-portFirstPar" class="idpp-paragraph flex-grow-1">
            This is the classic "MineSweeper" game... But, it has a modern
            design and everything is customizable! <br><br>
            You can change everything from game-specific numbers, to colors and
            fonts of every element, without disturbing the game play... <br><br>
            It's really nice! Give it a try :)
          </p>
        </div>
        <p id="idpp-portSecondPar" class="idpp-paragraph flex-grow-1">
        </p>
      </div>
      <div id="idpp-portHeader" class="idpp-animated-bg">Portfolio</div>
    </section>

    <section id="idpp-othersPage" class="invisible d-flex">
      <div id="idpp-othersHeader" class="idpp-animated-bg">Other&nbsp;Pages</div>
      <div
        id="idpp-othersFlexColBox"
        class="d-flex flex-column justify-content-between align-items-center"
      >
          <p id="idpp-othersFirstPar" class="idpp-paragraph flex-grow-1">
            Two distinct responsive home pages for different screen sizes!
          </p>
        <div id="idpp-othersImageContainer" class="d-flex justify-content-center align-items-center">
          <div id="idpp-othersLeftParentDiv" class="">
            <div id="idpp-othersLeftDiv" class="reflection"></div>
          </div>
          <div id="idpp-othersMiddleParentDiv" class="">
            <div id="idpp-othersMiddleDiv" class="reflection"></div>
          </div>
          <div id="idpp-othersRightParentDiv" class="">
            <div id="idpp-othersRightDiv" class="reflection"></div>
          </div>
          <!-- <div id="idpp-othersLgParentDiv" class="">
            <div id="idpp-othersLgDiv" class="reflection"></div>
          </div> -->
        </div>
        <p id="idpp-othersSecondPar" class="idpp-paragraph flex-grow-1">
          They both have artistic designs along with animated elements. <br />
          Two samples for clients who are interested in this type of user
          interface design...
        </p>
      </div>
    </section>

    <footer id="idpp-footer" class="d-flex flex-column justify-content-around align-items-center">
          <div id="idpp-footerNav" class="d-flex justify-content-between align-items-center">
            <img id="idpp-linkedinNav" class="hoverable" :src="require(`@/assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <router-link to="/contact">
                <img id="idpp-emailNav" class="hoverable" :src="require(`@/assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
            </router-link>
            <img id="idpp-telegramNav" class="hoverable" :src="require(`@/assets/images/svg/telegram-${widthClass}.svg`)" alt="" @mouseenter="onTelegramMouseEnter" @mouseleave="onTelegramMouseLeave">
          </div>
          <router-link id="idpp-footerNote" to="/portfolio" class="hoverable">&copy; 2022 - EELee App Design</router-link>
      </footer> 
  </div>
</template>

<script>
export default {
  name: 'Portfolio',

  data() {
    return {
      widthClass: String,
      vw: Number,
      vh: Number,
      headerUlLeftPosition: Number,
      sizeHistoryArray: [],
      isMounted: false,
      isVerticalMenuExpanded: false,
      
      // Loading Variables
      loadMain: false,
      loadHome: false,
      loadApp: false,
      loadPort: false,
      loadOthers: false,

      // Loading Height Points
      remainingHeightHome: Number,
      remainingHeightApp: Number,
      remainingHeightPort: Number,
      remainingHeightOthers: Number,

      // Element Object Refs
      bodyDiv: Object,
      headerUl: Object,
      logo: Object,
      menuButton: Object,
      menuImg: Object,
      bodyCover: Object,
      mainPage: Object,
      homePage: Object,
      appPage: Object,
      portPage: Object,
      othersPage: Object,
      
            // Footer
            linkedinNav: Object,
            emailNav: Object,
            telegramNav: Object,
    }
  },

  watch: {
    isVerticalMenuExpanded(val) {
        if (val) {
            this.menuImg.setAttribute('src', require(`@/assets/images/svg/menu-button-hover.svg`));
            this.headerUl.classList.remove('invisible', 'scale-down-ver-top');
            this.headerUl.classList.add('scale-up-ver-top');
            this.bodyCover.classList.remove('d-none');
        } else {
            this.menuImg.setAttribute('src', require(`@/assets/images/svg/menu-button.svg`));
            this.headerUl.classList.remove('scale-up-ver-top');
            this.headerUl.classList.add('scale-down-ver-top');
            this.bodyCover.classList.add('d-none');
        }
    },
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

  computed: {
      headerUlStyle() {
          return {
              'left': `${this.headerUlLeftPosition}px`,
          }
      },
  },

  methods: {
    // Utility Methods
      
        // Tracks width size changes by updating sizeHistoryArray 
        sizeHistoryUpdator(sizeClass) {
            this.sizeHistoryArray.push(sizeClass);
            if (this.sizeHistoryArray.length > 2) this.sizeHistoryArray.shift();
            if (this.sizeHistoryArray.includes('sm') && this.sizeHistoryArray.includes('xs')) {
                if (this.isVerticalMenuExpanded) this.isVerticalMenuExpanded = false;
                setTimeout(() => {
                    this.headerNavDisplay();
                }, 50);
            }
        },
      
    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
        var windowWidth = window.innerWidth;

        if (windowWidth < 320) this.widthClass = 'xxs';
        else if (windowWidth < 576) this.widthClass = 'xs';
        else if (windowWidth < 768) this.widthClass = 'sm';
        else if (windowWidth < 992) this.widthClass = 'md';
        else this.widthClass = 'lg';
        this.sizeHistoryUpdator(this.widthClass);
        if (this.isMounted) {
            this.vh = window.innerHeight/100;
            this.vw = document.body.clientWidth/100;
            this.headerUlLeftCalculator();
            this.headerNavDisplay();
            this.remainingHeightHome = (this.vh*25 + this.mainPage.offsetHeight + this.homePage.offsetHeight*0.3);
            this.remainingHeightApp = (this.remainingHeightHome + this.homePage.offsetHeight*0.7 + this.vh*10 + this.appPage.offsetHeight*0.3);
            this.remainingHeightPort = (this.remainingHeightApp + this.appPage.offsetHeight*0.7 + this.vh*10 + this.portPage.offsetHeight*0.3);
            this.remainingHeightOthers = (this.remainingHeightPort + this.portPage.offsetHeight*0.7 + this.vh*10 + this.portPage.offsetHeight*0.3);
            this.onScroll();
        }
    },
       
        // Calculates the pixel numbers for left property of headerUl
        headerUlLeftCalculator() {
            if (window.innerWidth >= 576) this.headerUlLeftPosition = 0;
            else {
              this.headerUlLeftPosition = ((this.vw*98 - (this.vw*8 + this.logo.offsetWidth + this.menuButton.offsetWidth + this.headerUl.offsetWidth))/2 + this.vw*4 + this.menuButton.offsetWidth);
            }
        },

        // Determines how header navbar should be displayed
        headerNavDisplay() {
            if (window.innerWidth < 576) {
                // this.headerNavbar.classList.add('flex-column');
                this.headerUl.classList.remove('align-items-center');
                this.headerUl.classList.add('invisible', 'flex-column', 'align-items-end', 'vertical-menu');
                this.menuButton.classList.remove('d-none');
            } else {
                // this.headerNavbar.classList.remove('flex-column');
                this.menuButton.classList.add('d-none');
                this.headerUl.classList.remove('invisible', 'scale-down-ver-top', 'flex-column', 'align-items-end', 'vertical-menu');
                this.headerUl.classList.add('align-items-center');
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
    },
            onBodyDivMouseDown($event) {
            if (this.isVerticalMenuExpanded) {
                if ((!$event.target.classList.contains('idpp-nav-link')) && ($event.target.id != 'idpp-menuImg')) this.isVerticalMenuExpanded = false;
            }
        },
        onMenuButtonClick() {
            this.isVerticalMenuExpanded = !this.isVerticalMenuExpanded;
        },
        onMenuImgMouseEnter() {
            this.menuImg.setAttribute('src', require(`@/assets/images/svg/menu-button-hover.svg`));
        },
        onMenuImgMouseLeave() {
            if (!this.isVerticalMenuExpanded) this.menuImg.setAttribute('src', require(`@/assets/images/svg/menu-button.svg`));
        },
                onLinkedinMouseEnter() {
            this.linkedinNav.setAttribute('src', require(`@/assets/images/svg/linkedin-hover-${this.widthClass}.svg`));
        },
        onLinkedinMouseLeave() {
            this.linkedinNav.setAttribute('src', require(`@/assets/images/svg/linkedin-${this.widthClass}.svg`));
        },
        onEmailMouseEnter() {
            this.emailNav.setAttribute('src', require(`@/assets/images/svg/email-hover-${this.widthClass}.svg`));
        },
        onEmailMouseLeave() {
            this.emailNav.setAttribute('src', require(`@/assets/images/svg/email-${this.widthClass}.svg`));
        },
        onTelegramMouseEnter() {
            this.telegramNav.setAttribute('src', require(`@/assets/images/svg/telegram-hover-${this.widthClass}.svg`));
        },
        onTelegramMouseLeave() {
            this.telegramNav.setAttribute('src', require(`@/assets/images/svg/telegram-${this.widthClass}.svg`));
        },
  },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
    document.addEventListener('scroll', this.onScroll);
  },

  beforeMount() {
    this.windowWidthClassEmitter();
  },

  mounted() {
    this.bodyDiv = document.getElementById('idpp-body');
    this.headerUl = document.getElementById('idpp-headerUl');
    this.logo = document.getElementById('idpp-logo');
    this.menuButton = document.getElementById('idpp-menuButton');
    this.menuImg = document.getElementById('idpp-menuImg');
    this.bodyCover = document.getElementById('idpp-bodyCover');
    this.mainPage = document.getElementById('idpp-mainPage');
    this.homePage = document.getElementById('idpp-homePage');
    this.appPage = document.getElementById('idpp-appPage');
    this.portPage = document.getElementById('idpp-portPage');
    this.othersPage = document.getElementById('idpp-othersPage');
            this.linkedinNav = document.getElementById('idpp-linkedinNav');
        this.emailNav = document.getElementById('idpp-emailNav');
        this.telegramNav = document.getElementById('idpp-telegramNav');
    this.isMounted = true;
    document.body.style.overflowY = 'auto';
    this.windowWidthClassEmitter();
    this.headerNavDisplay();
    this.headerUlLeftCalculator();
    this.onLoad();
  },
};
</script>

<style scoped>
@import 'assets/css/portfolio.css';
@import 'assets/css/portfolio-animations.css';
</style>