<template>
  <div
    id="idpp-body"
    class="body d-flex flex-column justify-content-between align-items-center"
    @mousedown="onBodyDivMouseDown"
  >
    <header
      id="idpp-header"
      class="header d-flex justify-content-between align-items-center"
    >
      <router-link id="idpp-logo" to="/" class="logo idpp-hoverable"
        >EELee</router-link
      >
      <ul
        id="idpp-headerUl"
        class="header-ul d-flex align-items-center"
        :style="headerUlStyle"
      >
        <li>
          <router-link to="/" class="nav-link idpp-hoverable">Home</router-link>
        </li>
        <li>
          <router-link to="/app" class="nav-link idpp-hoverable"
            >App</router-link
          >
        </li>
        <li>
          <router-link to="/donate" class="nav-link idpp-hoverable"
            >Donate</router-link
          >
        </li>
        <li>
          <router-link to="/order" class="nav-link idpp-hoverable"
            >Order Now!</router-link
          >
        </li>
      </ul>
      <span
        id="idpp-menuButton"
        class="menu-button d-none"
        @click="onMenuButtonClick"
      >
        <img
          id="idpp-menuImg"
          class="idpp-hoverable"
          :src="require(`@/assets/images/svg/menu-button.svg`)"
          alt=""
          @mouseenter="onMenuImgMouseEnter"
          @mouseleave="onMenuImgMouseLeave"
        />
      </span>
    </header>

    <section id="idpp-showcase">
      <div
        ref="mainHeader"
        id="idpp-mainHeader"
        class="invisible idpp-section-header"
      >
        <div ref="mainUpper" class="idpp-header-border"></div>
        <div ref="mainText" class="idpp-header-title">About EELee</div>
        <div ref="mainLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="mainPage"
        id="idpp-mainPage"
        class="invisible idpp-section-page"
      >
        <p id="idpp-mainPar" class="idpp-paragraph">
          EELee App Design is a full stack web app development group, mainly
          focused on designing frontend by modern JavaScript frameworks like
          Vue.js
          <br /><br />
          Scroll down to discover more about our work...
        </p>
      </div>

      <div
        ref="homeHeader"
        id="idpp-homeHeader"
        class="invisible idpp-section-header"
      >
        <div ref="homeUpper" class="idpp-header-border"></div>
        <div ref="homeText" class="idpp-header-title">Home&nbsp;Page</div>
        <div ref="homeLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="homePage"
        id="idpp-homePage"
        class="invisible idpp-section-page d-flex"
      >
        <div
          id="idpp-homeFlexColBox"
          class="
            page-flexbox
            d-flex
            flex-column
            justify-content-between
            align-items-center
          "
        >
          <p id="idpp-homeFirstPar" class="idpp-paragraph flex-grow-1">
            Two distinct responsive home pages for different screen sizes!
          </p>
          <div
            id="idpp-homeImageContainer"
            class="d-flex justify-content-center align-items-center"
          >
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
      </div>

      <div
        ref="appHeader"
        id="idpp-appHeader"
        class="invisible idpp-section-header"
      >
        <div ref="appUpper" class="idpp-header-border"></div>
        <div ref="appText" class="idpp-header-title">App&nbsp;Sample</div>
        <div ref="appLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="appPage"
        id="idpp-appPage"
        class="invisible idpp-section-page d-flex"
      >
        <div
          id="idpp-appFlexColBox"
          class="
            page-flexbox
            d-flex
            flex-column
            justify-content-between
            align-items-center
            flex-grow-1
          "
        >
          <div
            id="idpp-appTxtImgContainer"
            class="d-flex justify-content-between"
          >
            <p id="idpp-appFirstPar" class="idpp-paragraph flex-grow-1">
              This is the classic "MineSweeper" game... But, it has a modern
              design and everything is customizable! <br /><br />
              You can change everything from game-specific numbers, to colors
              and fonts of every element, without disturbing the game play...
              <br /><br />
              It's really nice! Give it a try :)
            </p>
            <div id="idpp-appImageContainer" class="">
              <div id="idpp-appImgDiv" class="reflection d-inline-block"></div>
            </div>
          </div>
          <p id="idpp-appSecondPar" class="idpp-paragraph flex-grow-1"></p>
        </div>
      </div>

      <div
        ref="portHeader"
        id="idpp-portHeader"
        class="invisible idpp-section-header"
      >
        <div ref="portUpper" class="idpp-header-border"></div>
        <div ref="portText" class="idpp-header-title">Portfolio</div>
        <div ref="portLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="portPage"
        id="idpp-portPage"
        class="invisible idpp-section-page d-flex"
      >
        <div
          id="idpp-portFlexColBox"
          class="
            page-flexbox
            d-flex
            flex-column
            justify-content-between
            align-items-center
            flex-grow-1
          "
        >
          <div
            id="idpp-portTxtImgContainer"
            class="d-flex justify-content-between"
          >
            <div id="idpp-portImageContainer" class="">
              <div id="idpp-portImgDiv" class="reflection d-inline-block"></div>
            </div>
            <p id="idpp-portFirstPar" class="idpp-paragraph flex-grow-1">
              This is the classic "MineSweeper" game... But, it has a modern
              design and everything is customizable! <br /><br />
              You can change everything from game-specific numbers, to colors
              and fonts of every element, without disturbing the game play...
              <br /><br />
              It's really nice! Give it a try :)
            </p>
          </div>
          <p id="idpp-portSecondPar" class="idpp-paragraph flex-grow-1"></p>
        </div>
      </div>

      <div
        ref="othersHeader"
        id="idpp-othersHeader"
        class="invisible idpp-section-header"
      >
        <div ref="othersUpper" class="idpp-header-border"></div>
        <div ref="othersText" class="idpp-header-title">Other&nbsp;Pages</div>
        <div ref="othersLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="othersPage"
        id="idpp-othersPage"
        class="invisible idpp-section-page d-flex"
      >
        <div
          id="idpp-othersFlexColBox"
          class="
            page-flexbox
            d-flex
            flex-column
            justify-content-between
            align-items-center
          "
        >
          <p id="idpp-othersFirstPar" class="idpp-paragraph flex-grow-1">
            Two distinct responsive home pages for different screen sizes!
          </p>
          <div
            id="idpp-othersImageContainer"
            class="d-flex justify-content-center align-items-center"
          >
            <div id="idpp-othersLeftParentDiv" class="">
              <div id="idpp-othersLeftDiv" class="reflection"></div>
            </div>
            <div id="idpp-othersMiddleParentDiv" class="">
              <div id="idpp-othersMiddleDiv" class="reflection"></div>
            </div>
            <div id="idpp-othersRightParentDiv" class="">
              <div id="idpp-othersRightDiv" class="reflection"></div>
            </div>
          </div>
          <p id="idpp-othersSecondPar" class="idpp-paragraph flex-grow-1">
            They both have artistic designs along with animated elements. <br />
            Two samples for clients who are interested in this type of user
            interface design...
          </p>
        </div>
      </div>
    </section>

    <footer
      id="idpp-footer"
      class="
        footer
        d-flex
        flex-column
        justify-content-around
        align-items-center
      "
    >
      <div
        id="idpo-footerNav"
        class="footer-nav d-flex justify-content-between align-items-center"
      >
        <a
          href="https://www.linkedin.com/"
          target="blank"
          class="idpo-hoverable"
          @mouseenter="onLinkedinMouseEnter"
          @mouseleave="onLinkedinMouseLeave"
        >
          <img
            id="idpo-linkedinNav"
            :src="require(`@/assets/images/svg/linkedin-${widthClass}.svg`)"
            alt=""
          />
        </a>
        <router-link
          to="/contact"
          class="idpo-hoverable"
          @mouseenter="onEmailMouseEnter"
          @mouseleave="onEmailMouseLeave"
        >
          <img
            id="idpo-emailNav"
            :src="require(`@/assets/images/svg/email-${widthClass}.svg`)"
            alt=""
          />
        </router-link>
        <a
          href="https://t.me"
          target="blank"
          class="idpo-hoverable"
          @mouseenter="onTelegramMouseEnter"
          @mouseleave="onTelegramMouseLeave"
        >
          <img
            id="idpo-telegramNav"
            :src="require(`@/assets/images/svg/telegram-${widthClass}.svg`)"
            alt=""
          />
        </a>
      </div>
      <router-link
        id="idpp-footerNote"
        to="/portfolio"
        class="footer-note idpp-hoverable"
        >&copy; 2022 - EELee App Design</router-link
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: "Portfolio",

  data() {
    return {
      widthClass: String,
      vw: Number,
      // vh: Number,
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
      pageMarginBottom: Number,
      remainingHeightHome: Number,
      remainingHeightApp: Number,
      remainingHeightPort: Number,
      remainingHeightOthers: Number,

      // Element Object Refs
      bodyDiv: Object,
      header: Object,
      logo: Object,
      headerUl: Object,
      menuButton: Object,
      menuImg: Object,
      sectionPage: Object,
      // mainPage: Object,
      // mainHeader: Object,
      // homePage: Object,
      // homeHeader: Object,
      // appPage: Object,
      // appHeader: Object,
      // portPage: Object,
      // portHeader: Object,
      // othersPage: Object,
      // othersHeader: Object,

      // Footer
      linkedinNav: Object,
      emailNav: Object,
      telegramNav: Object,
    };
  },

  watch: {
    isVerticalMenuExpanded(val) {
      if (val) {
        this.menuImg.setAttribute(
          "src",
          require(`@/assets/images/svg/menu-button-hover.svg`)
        );
        this.headerUl.classList.remove("invisible", "scale-down-ver-top");
        this.headerUl.classList.add("scale-up-ver-top");
        for (const section of document.getElementsByTagName("section")) {
          section.style.opacity = "0.2";
        }
      } else {
        this.menuImg.setAttribute(
          "src",
          require(`@/assets/images/svg/menu-button.svg`)
        );
        this.headerUl.classList.remove("scale-up-ver-top");
        this.headerUl.classList.add("scale-down-ver-top");
        for (const section of document.getElementsByTagName("section")) {
          section.style.opacity = "1";
        }
      }
    },
    loadMain(val) {
      if (val) {
        this.$refs.mainPage.classList.remove("invisible");
        this.$refs.mainHeader.classList.remove("invisible");
        this.$refs.mainText.classList.add("fade-in-d500");
        this.$refs.mainUpper.classList.add("slide-in-right");
        this.$refs.mainLower.classList.add("slide-in-left");
        this.$refs.mainPage.classList.add("slide-in-up-d1000");
      }
    },
    loadHome(val) {
      if (val) {
        this.$refs.homeHeader.classList.remove("invisible");
        this.$refs.homePage.classList.remove("invisible");
        this.$refs.homeText.classList.add("fade-in-d500");
        this.$refs.homeUpper.classList.add("slide-in-left");
        this.$refs.homeLower.classList.add("slide-in-right");
        this.$refs.homePage.classList.add("slide-in-right-d1000");
      }
    },
    loadApp(val) {
      if (val) {
        this.$refs.appPage.classList.remove("invisible");
        this.$refs.appHeader.classList.remove("invisible");
        this.$refs.appText.classList.add("fade-in-d500");
        this.$refs.appUpper.classList.add("slide-in-right");
        this.$refs.appLower.classList.add("slide-in-left");
        this.$refs.appPage.classList.add("slide-in-left-d1000");
      }
    },
    loadPort(val) {
      if (val) {
        this.$refs.portHeader.classList.remove("invisible");
        this.$refs.portPage.classList.remove("invisible");
        this.$refs.portText.classList.add("fade-in-d500");
        this.$refs.portUpper.classList.add("slide-in-left");
        this.$refs.portLower.classList.add("slide-in-right");
        this.$refs.portPage.classList.add("slide-in-right-d1000");
      }
    },
    loadOthers(val) {
      if (val) {
        this.$refs.othersPage.classList.remove("invisible");
        this.$refs.othersHeader.classList.remove("invisible");
        this.$refs.othersText.classList.add("fade-in-d500");
        this.$refs.othersUpper.classList.add("slide-in-right");
        this.$refs.othersLower.classList.add("slide-in-left");
        this.$refs.othersPage.classList.add("slide-in-left-d1000");
      }
    },
  },

  computed: {
    headerUlStyle() {
      return {
        left: `${this.headerUlLeftPosition}px`,
      };
    },
  },

  methods: {
    // Utility Methods

    // Tracks width size changes by updating sizeHistoryArray
    sizeHistoryUpdator(sizeClass) {
      this.sizeHistoryArray.push(sizeClass);
      if (this.sizeHistoryArray.length > 2) this.sizeHistoryArray.shift();
      if (
        this.sizeHistoryArray.includes("sm") &&
        this.sizeHistoryArray.includes("xs")
      ) {
        if (this.isVerticalMenuExpanded) this.isVerticalMenuExpanded = false;
        setTimeout(() => {
          this.headerNavDisplay();
        }, 50);
      }
    },

    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      var windowWidth = window.innerWidth;

      if (windowWidth < 320) this.widthClass = "xxs";
      else if (windowWidth < 576) this.widthClass = "xs";
      else if (windowWidth < 768) this.widthClass = "sm";
      else if (windowWidth < 992) this.widthClass = "md";
      else this.widthClass = "lg";
      this.sizeHistoryUpdator(this.widthClass);
      if (this.isMounted) {
        this.vw = window.innerWidth / 100;
        this.pageMarginBottom = parseInt(
          getComputedStyle(this.sectionPage).marginBottom
        );
        this.headerUlLeftCalculator();
        this.headerNavDisplay();
        this.remainingHeightHome =
          90 +
          this.$refs.mainHeader.offsetHeight +
          this.$refs.mainPage.offsetHeight +
          this.pageMarginBottom +
          this.$refs.homeHeader.offsetHeight +
          this.$refs.homePage.offsetHeight * 0.3;
        this.remainingHeightApp =
          this.remainingHeightHome +
          this.$refs.homePage.offsetHeight * 0.7 +
          this.pageMarginBottom +
          this.$refs.appHeader.offsetHeight +
          this.$refs.appPage.offsetHeight * 0.3;
        this.remainingHeightPort =
          this.remainingHeightApp +
          this.$refs.appPage.offsetHeight * 0.7 +
          this.pageMarginBottom +
          this.$refs.portHeader.offsetHeight +
          this.$refs.portPage.offsetHeight * 0.3;
        this.remainingHeightOthers =
          this.remainingHeightPort +
          this.$refs.portPage.offsetHeight * 0.7 +
          this.pageMarginBottom +
          this.$refs.portHeader.offsetHeight +
          this.$refs.portPage.offsetHeight * 0.3;
        this.onScroll();
      }
    },

    // Calculates the pixel numbers for left property of headerUl
    headerUlLeftCalculator() {
      if (window.innerWidth >= 576) this.headerUlLeftPosition = 0;
      else {
        this.headerUlLeftPosition =
          (this.header.offsetWidth -
            (this.vw * 5 +
              65 +
              this.logo.offsetWidth +
              this.menuButton.offsetWidth +
              this.headerUl.offsetWidth)) /
            2 +
          this.vw * 4 +
          this.menuButton.offsetWidth;
      }
    },

    // Determines how header navbar should be displayed
    headerNavDisplay() {
      if (window.innerWidth < 576) {
        // this.headerNavbar.classList.add('flex-column');
        this.headerUl.classList.remove("align-items-center");
        this.headerUl.classList.add(
          "invisible",
          "flex-column",
          "align-items-end",
          "vertical-menu"
        );
        this.menuButton.classList.remove("d-none");
      } else {
        // this.headerNavbar.classList.remove('flex-column');
        this.menuButton.classList.add("d-none");
        this.headerUl.classList.remove(
          "invisible",
          "scale-down-ver-top",
          "flex-column",
          "align-items-end",
          "vertical-menu"
        );
        this.headerUl.classList.add("align-items-center");
      }
    },

    // Event Handlers

    onLoad() {
      this.loadMain = true;
    },

    onScroll() {
      var screenBottom = window.innerHeight + window.scrollY;
      if (!this.loadHome && screenBottom > this.remainingHeightHome) {
        // console.log( 'this.remainingHeightHome:',screenBottom, this.remainingHeightHome);
        this.loadHome = true;
      }
      if (!this.loadApp && screenBottom > this.remainingHeightApp) {
        // console.log( 'this.remainingHeightApp:',screenBottom, this.remainingHeightApp);
        this.loadApp = true;
      }
      if (!this.loadPort && screenBottom > this.remainingHeightPort) {
        // console.log( 'this.remainingHeightPort:',screenBottom, this.remainingHeightPort);
        this.loadPort = true;
      }
      if (!this.loadOthers && screenBottom > this.remainingHeightOthers) {
        // console.log( 'this.remainingHeightOthers:',screenBottom, this.remainingHeightOthers);
        this.loadOthers = true;
      }
    },
    onBodyDivMouseDown($event) {
      if (this.isVerticalMenuExpanded) {
        if (
          !$event.target.classList.contains("nav-link") &&
          $event.target.id != "idpp-menuImg"
        )
          this.isVerticalMenuExpanded = false;
      }
    },
    onMenuButtonClick() {
      this.isVerticalMenuExpanded = !this.isVerticalMenuExpanded;
    },
    onMenuImgMouseEnter() {
      this.menuImg.setAttribute(
        "src",
        require(`@/assets/images/svg/menu-button-hover.svg`)
      );
    },
    onMenuImgMouseLeave() {
      if (!this.isVerticalMenuExpanded)
        this.menuImg.setAttribute(
          "src",
          require(`@/assets/images/svg/menu-button.svg`)
        );
    },
    onLinkedinMouseEnter() {
      this.linkedinNav.setAttribute(
        "src",
        require(`@/assets/images/svg/linkedin-hover-${this.widthClass}.svg`)
      );
    },
    onLinkedinMouseLeave() {
      this.linkedinNav.setAttribute(
        "src",
        require(`@/assets/images/svg/linkedin-${this.widthClass}.svg`)
      );
    },
    onEmailMouseEnter() {
      this.emailNav.setAttribute(
        "src",
        require(`@/assets/images/svg/email-hover-${this.widthClass}.svg`)
      );
    },
    onEmailMouseLeave() {
      this.emailNav.setAttribute(
        "src",
        require(`@/assets/images/svg/email-${this.widthClass}.svg`)
      );
    },
    onTelegramMouseEnter() {
      this.telegramNav.setAttribute(
        "src",
        require(`@/assets/images/svg/telegram-hover-${this.widthClass}.svg`)
      );
    },
    onTelegramMouseLeave() {
      this.telegramNav.setAttribute(
        "src",
        require(`@/assets/images/svg/telegram-${this.widthClass}.svg`)
      );
    },
  },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
    document.addEventListener("scroll", this.onScroll);
  },

  beforeMount() {
    this.windowWidthClassEmitter();
  },

  mounted() {
    this.bodyDiv = document.getElementById("idpp-body");
    this.header = document.getElementById("idpp-header");
    this.logo = document.getElementById("idpp-logo");
    this.headerUl = document.getElementById("idpp-headerUl");
    this.menuButton = document.getElementById("idpp-menuButton");
    this.menuImg = document.getElementById("idpp-menuImg");
    // this.$refs.mainPage = document.getElementById('idpp-mainPage');
    // this.$refs.mainHeader = document.getElementById('idpp-mainHeader');
    // this.$refs.homePage = document.getElementById('idpp-homePage');
    // this.$refs.homeHeader = document.getElementById('idpp-homeHeader');
    // this.$refs.appPage = document.getElementById('idpp-appPage');
    // this.appHeader = document.getElementById('idpp-appHeader');
    // this.$refs.portPage = document.getElementById('idpp-portPage');
    // this.portHeader = document.getElementById('idpp-portHeader');
    // this.othersPage = document.getElementById('idpp-othersPage');
    // this.othersHeader = document.getElementById('idpp-othersHeader');
    this.linkedinNav = document.getElementById("idpp-linkedinNav");
    this.emailNav = document.getElementById("idpp-emailNav");
    this.telegramNav = document.getElementById("idpp-telegramNav");
    this.sectionPage = document
      .getElementsByClassName("idpp-section-page")
      .item(0);
    this.isMounted = true;
    document.body.parentElement.style.overflowY = "auto";
    this.windowWidthClassEmitter();
    this.headerNavDisplay();
    this.headerUlLeftCalculator();
    this.onLoad();
  },

  beforeUnmount() {
    document.body.parentElement.style.overflowY = "hidden";
  },
};
</script>

<style scoped>
@import "assets/css/portfolio.css";
@import "assets/css/portfolio-animations.css";
</style>