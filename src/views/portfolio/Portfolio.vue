<template>
  <div id="idpp-body" class="body">
    <Header pageRoute="/portfolio" />
    <section id="idpp-showcase" class="showcase">
      <div
        ref="mainHeader"
        id="idpp-mainHeader"
        class="idpp-faded idpp-section-header"
      >
        <div ref="mainUpper" class="idpp-header-border"></div>
        <div ref="mainText" class="idpp-header-title">About EELee</div>
        <div ref="mainLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="mainPage"
        id="idpp-mainPage"
        class="idpp-faded idpp-section-page"
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
        class="idpp-faded idpp-section-header"
      >
        <div ref="homeUpper" class="idpp-header-border"></div>
        <div ref="homeText" class="idpp-header-title">Home&nbsp;Page</div>
        <div ref="homeLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="homePage"
        id="idpp-homePage"
        class="idpp-faded idpp-section-page d-flex"
      >
        <div
          id="idpp-homeFlexColBox"
          class="
            idpp-page-flexbox
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
              <div id="idpp-homeMdDiv" class="idpp-reflection"></div>
            </div>
            <div id="idpp-homeLgParentDiv" class="">
              <div id="idpp-homeLgDiv" class="idpp-reflection"></div>
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
        class="idpp-faded idpp-section-header"
      >
        <div ref="appUpper" class="idpp-header-border"></div>
        <div ref="appText" class="idpp-header-title">App&nbsp;Sample</div>
        <div ref="appLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="appPage"
        id="idpp-appPage"
        class="idpp-faded idpp-section-page d-flex"
      >
        <div
          id="idpp-appFlexColBox"
          class="
            idpp-page-flexbox
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
              <div
                id="idpp-appImgDiv"
                class="idpp-reflection d-inline-block"
              ></div>
            </div>
          </div>
          <p id="idpp-appSecondPar" class="idpp-paragraph flex-grow-1"></p>
        </div>
      </div>

      <div
        ref="portHeader"
        id="idpp-portHeader"
        class="idpp-faded idpp-section-header"
      >
        <div ref="portUpper" class="idpp-header-border"></div>
        <div ref="portText" class="idpp-header-title">Portfolio</div>
        <div ref="portLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="portPage"
        id="idpp-portPage"
        class="idpp-faded idpp-section-page d-flex"
      >
        <div
          id="idpp-portFlexColBox"
          class="
            idpp-page-flexbox
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
              <div
                id="idpp-portImgDiv"
                class="idpp-reflection d-inline-block"
              ></div>
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
        class="idpp-faded idpp-section-header"
      >
        <div ref="othersUpper" class="idpp-header-border"></div>
        <div ref="othersText" class="idpp-header-title">Other&nbsp;Pages</div>
        <div ref="othersLower" class="idpp-header-border"></div>
      </div>
      <div
        ref="othersPage"
        id="idpp-othersPage"
        class="idpp-faded idpp-section-page d-flex"
      >
        <div
          id="idpp-othersFlexColBox"
          class="
            idpp-page-flexbox
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
              <div id="idpp-othersLeftDiv" class="idpp-reflection"></div>
            </div>
            <div id="idpp-othersMiddleParentDiv" class="">
              <div id="idpp-othersMiddleDiv" class="idpp-reflection"></div>
            </div>
            <div id="idpp-othersRightParentDiv" class="">
              <div id="idpp-othersRightDiv" class="idpp-reflection"></div>
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
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Portfolio",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      // Loading Variables
      loadMain: false,
      loadHome: false,
      loadApp: false,
      loadPort: false,
      loadOthers: false,

      // Element Object Refs
      sectionPage: Object,
    };
  },

  watch: {
    loadMain(val) {
      if (val) {
        this.$refs.mainPage.classList.remove("idpp-faded");
        this.$refs.mainHeader.classList.remove("idpp-faded");
        this.$refs.mainText.classList.add("fade-in-d500");
        this.$refs.mainUpper.classList.add("slide-in-right");
        this.$refs.mainLower.classList.add("slide-in-left");
        this.$refs.mainPage.classList.add("slide-in-up-d1000");
      }
    },
    loadHome(val) {
      if (val) {
        this.$refs.homeHeader.classList.remove("idpp-faded");
        this.$refs.homePage.classList.remove("idpp-faded");
        this.$refs.homeText.classList.add("fade-in-d500");
        this.$refs.homeUpper.classList.add("slide-in-left");
        this.$refs.homeLower.classList.add("slide-in-right");
        this.$refs.homePage.classList.add("slide-in-right-d1000");
      }
    },
    loadApp(val) {
      if (val) {
        this.$refs.appPage.classList.remove("idpp-faded");
        this.$refs.appHeader.classList.remove("idpp-faded");
        this.$refs.appText.classList.add("fade-in-d500");
        this.$refs.appUpper.classList.add("slide-in-right");
        this.$refs.appLower.classList.add("slide-in-left");
        this.$refs.appPage.classList.add("slide-in-left-d1000");
      }
    },
    loadPort(val) {
      if (val) {
        this.$refs.portHeader.classList.remove("idpp-faded");
        this.$refs.portPage.classList.remove("idpp-faded");
        this.$refs.portText.classList.add("fade-in-d500");
        this.$refs.portUpper.classList.add("slide-in-left");
        this.$refs.portLower.classList.add("slide-in-right");
        this.$refs.portPage.classList.add("slide-in-right-d1000");
      }
    },
    loadOthers(val) {
      if (val) {
        this.$refs.othersPage.classList.remove("idpp-faded");
        this.$refs.othersHeader.classList.remove("idpp-faded");
        this.$refs.othersText.classList.add("fade-in-d500");
        this.$refs.othersUpper.classList.add("slide-in-right");
        this.$refs.othersLower.classList.add("slide-in-left");
        this.$refs.othersPage.classList.add("slide-in-left-d1000");
      }
    },
  },

  methods: {
    // Event Handlers

    onLoad() {
      this.loadMain = true;
    },

    onScroll() {
      if (
        !this.loadHome &&
        (this.$refs.homeHeader.getBoundingClientRect().top < 160 ||
          this.$refs.homePage.getBoundingClientRect().top <
            window.innerHeight - 0.6 * this.$refs.homePage.offsetWidth)
      ) {
        this.loadHome = true;
      }
      if (
        !this.loadApp &&
        (this.$refs.appHeader.getBoundingClientRect().top < 160 ||
          this.$refs.appPage.getBoundingClientRect().top <
            window.innerHeight - 0.6 * this.$refs.appPage.offsetWidth)
      ) {
        this.loadApp = true;
      }
      if (
        !this.loadPort &&
        (this.$refs.portHeader.getBoundingClientRect().top < 160 ||
          this.$refs.portPage.getBoundingClientRect().top <
            window.innerHeight - 0.6 * this.$refs.portPage.offsetWidth)
      ) {
        this.loadPort = true;
      }
      if (
        !this.loadOthers &&
        (this.$refs.othersHeader.getBoundingClientRect().top < 160 ||
          this.$refs.othersPage.getBoundingClientRect().top <
            window.innerHeight - 0.6 * this.$refs.othersPage.offsetWidth)
      ) {
        this.loadOthers = true;
      }
    },
  },

  created() {
    window.addEventListener("resize", this.onScroll);
    window.addEventListener("scroll", this.onScroll);
  },

  mounted() {
    this.sectionPage = document
      .getElementsByClassName("idpp-section-page")
      .item(0);
    document.body.parentElement.style.overflowY = "auto";
    this.onLoad();
    this.onScroll();
    document.querySelectorAll(".hoverable").forEach((element) => {
      element.classList.remove("hoverable");
      element.classList.add("pointer-green");
    });
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