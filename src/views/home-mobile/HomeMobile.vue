<template>
  <div id="idpm-body" class="pointer-gold" @click="skipInitAnimations">
    <div
      ref="mainContainer"
      id="idpm-mainContainer"
      class="d-flex flex-column justify-content-around"
    >
      <div ref="bodyCover" id="idpm-bodyCover"></div>
      <header
        id="idpm-header"
        class="d-flex justify-content-center text-shine-logo"
      >
        <div ref="headerCover" id="idpm-headerCover"></div>
        <span ref="logoLeft" id="idpm-logoLeft" class="invisible">ee</span>
        <span ref="logoMoon" id="idpm-logoMoon" class="invisible">f </span>
        <span ref="logoRight" id="idpm-logoRight" class="invisible">ee</span>
      </header>

      <section
        id="idpm-showcase"
        class="d-flex flex-column justify-content-between align-items-center"
      >
        <div ref="orderDiv" id="idpm-orderDiv" class="invisible">
          <router-link to="/order" title="Click to Order" class="hoverable">
            Need A Web App ???
          </router-link>
        </div>

        <div
          id="idpm-centralDiv"
          class="d-flex justify-content-between align-items-start"
        >
          <div
            ref="navUl"
            id="idpm-navUl"
            class="invisible d-flex flex-column justify-content-end"
          >
            <router-link
              id="idpm-portNav"
              title="App Sample"
              to="/app"
              class="idpm-nav-link text-shine hoverable"
              >App</router-link
            >
            <router-link
              id="idpm-appNav"
              title="Portfolio"
              to="/portfolio"
              class="idpm-nav-link text-shine hoverable"
              >Portfolio</router-link
            >
          </div>
          <div
            id="idpm-orderCentral"
            class="d-flex justify-content-around align-items-center"
          >
            <router-link
              ref="orderRight"
              id="idpm-orderRight"
              title="Order Now!"
              to="/order"
              class="text-shine-logo hoverable align-self-start"
            >
              <span
                ref="orderRightTop"
                id="idpm-orderRightTop"
                class="invisible"
                >Click to <br
              /></span>
              <span
                ref="orderRightStar"
                id="idpm-orderRightStar"
                class="invisible"
                >c</span
              >
              <span
                ref="orderRightBottom"
                id="idpm-orderRightBottom"
                class="invisible"
                >RDER</span
              >
            </router-link>
          </div>
        </div>
      </section>

      <div id="idpm-donateDiv" class="invisible" :style="donateStyle">
        <router-link
          to="/donate"
          id="idpm-donateLink"
          class="hoverable d-flex justify-content-center"
        >
          <DonationStone />
        </router-link>
      </div>

      <section
        id="idpm-notes"
        class="d-flex justify-content-between align-items-end"
      >
        <span id="idpm-skipAnimations" :style="skipStyle"
          >Tap on screen<br />To skip animations</span
        >
        <router-link
          id="idpm-footerNote"
          to="/portfolio"
          title="About Us"
          class="hoverable"
          :style="noteStyle"
          >&copy; 2022 - EELee App Design</router-link
        >
      </section>
      <Footer
        iconBasicColor="#f00"
        iconGradientColor="#ffe56f"
        iconHoverColor="#ffe56f"
        linkedinBgMainColor="#f00"
        noteClassList="d-none"
        flexDirection="row-reverse"
        telegramAlign="end"
        emailAlign="start"
        linkedinAlign="end"
        :linkedinClassList="linkedinClassList"
        :emailClassList="emailClassList"
        :telegramClassList="telegramClassList"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer/Footer.vue";
import DonationStone from "./components/DonationStone.vue";

export default {
  name: "HomeMobile",

  components: {
    Footer,
    DonationStone,
  },

  data() {
    return {
      linkedinClassList: "invisible footer-shadow pointer-white",
      emailClassList: "invisible footer-shadow pointer-white",
      telegramClassList: "invisible footer-shadow pointer-white",
      donateBottom: 0,
      skipBottom: 0,
      noteBottom: 0,
      skipRotation: -40,
      skipColor: String,
      noteColor: String,
      isMounted: false,
      isPageFullyLoaded: false,

      // Timeout References
      cloudMoveRef: Function,
      logoLeftRef: Function,
      logoMoonRef: Function,
      logoRightRef: Function,
      bodyCoverFirstRef: Function,
      bodyCoverSecondRef: Function,
      donateFirstRef: Function,
      donateSecondRef: Function,
      orderDivFirstRef: Function,
      orderDivSecondRef: Function,
      orderRightStarRef: Function,
      orderRightTextRef: Function,
      navUlRef: Function,
      linkedinNavRef: Function,
      emailNavRef: Function,
      telegramNavRef: Function,

      // Element Object References
      mainContainer: Object,
      donateLink: Object,
      footerNote: Object,
      skipAnimations: Object,

      // Arrays
      initVisibleElemsList: Array,
      timeoutRefsList: Array,
    };
  },

  watch: {
    isPageFullyLoaded(val) {
      if (val) {
        this.skipAnimations.classList.add("fade-skip");
        setTimeout(() => {
          this.skipAnimations.classList.add("invisible");
        }, 2000);
        document.querySelectorAll(".footer-appear").forEach((element) => {
          element.classList.remove("footer-appear");
          element.classList.add("footer-shadow");
        });
      }
    },
    skipColor(val) {
      if (val == "#a2e5ff")
        this.skipAnimations.classList.add("text-shine-logo");
      else this.skipAnimations.classList.remove("text-shine-logo");
    },
    noteColor(val) {
      if (val == "#a2e5ff") this.footerNote.classList.add("text-shine-logo");
      else this.footerNote.classList.remove("text-shine-logo");
    },
  },

  computed: {
    widthClass() {
      return this.onresize();
    },
    donateStyle() {
      return {
        bottom: `${this.donateBottom}vh`,
      };
    },
    skipStyle() {
      return {
        bottom: `${this.skipBottom}vh`,
        transform: `rotate(${this.skipRotation}deg)`,
        color: `${this.skipColor}`,
      };
    },
    noteStyle() {
      return {
        bottom: `${this.noteBottom}vh`,
        color: `${this.noteColor}`,
      };
    },
  },

  methods: {
    // Utility Methods

    // Returns the next number within the given range starting from zero or one
    // i.e. for the range 5, it is 1-5 or 0-4
    nextNumber(num, range, fromOne) {
      var diffNum = (num + 1) % range;
      if (fromOne) {
        if (diffNum == 0) {
          diffNum = range;
        }
      }
      return diffNum;
    },

    onresize() {
      if (this.isMounted) {
        this.donateUpdator();
        this.skipUpdator();
        this.noteUpdator();
        this.mainContainer.style.setProperty("width", `${window.innerWidth}px`);
        this.mainContainer.style.setProperty(
          "height",
          `${window.innerHeight}px`
        );
      }
    },

    donateUpdator() {
      // console.log('donateUpdator:', this.donateDiv.offsetTop);
      if (this.donateDiv.offsetTop / window.innerHeight > 0.6) {
        this.donateBottom++;
      }
      if (this.donateDiv.offsetTop / window.innerHeight < 0.5) {
        this.donateBottom--;
      }
    },

    skipUpdator() {
      if (window.innerWidth / window.innerHeight > 1) this.skipRotation = -37;
      else this.skipRotation = -40;
      if (window.innerWidth / window.innerHeight > 0.85) {
        this.skipColor = "#a2e5ff";
        if (this.skipAnimations.offsetTop / window.innerHeight > 0.7) {
          this.skipBottom++;
        }
        if (this.skipAnimations.offsetTop / window.innerHeight < 0.65) {
          this.skipBottom--;
        }
      } else {
        this.skipColor = "#f8cc09";
        if (this.skipAnimations.offsetTop / window.innerHeight < 0.75) {
          this.skipBottom--;
        }
        if (this.skipAnimations.offsetTop / window.innerHeight > 0.8) {
          this.skipBottom++;
        }
      }
    },
    noteUpdator() {
      if (window.innerWidth / window.innerHeight > 0.8) {
        this.noteColor = "#a2e5ff";
        if (this.footerNote.offsetTop / window.innerHeight > 0.7) {
          this.noteBottom++;
        }
        if (this.footerNote.offsetTop / window.innerHeight < 0.65) {
          this.noteBottom--;
        }
      } else {
        this.noteColor = "#f8cc09";
        if (this.footerNote.offsetTop / window.innerHeight < 0.75) {
          this.noteBottom--;
        }
        if (this.footerNote.offsetTop / window.innerHeight > 0.8) {
          this.noteBottom++;
        }
      }
    },

    // Main Functionality

    // Starts initial appearance animations
    startAnimations() {
      console.log("animations started");
      this.headerCloudMove();
      this.logoInitAppear();
      this.bodyCoverFade();
      this.donateDivInitBounce();
      this.orderDivInitAppear();
      this.footerInitAppear();
      this.navUlInitAppear();
      this.orderRightInitAppear();
    },

    // Skips initial animations and shows running home page
    skipInitAnimations() {
      if (!this.isPageFullyLoaded) {
        console.log("skipped");
        this.timeoutRefsList = [
          this.cloudMoveRef,
          this.logoLeftRef,
          this.logoMoonRef,
          this.logoRightRef,
          this.bodyCoverFirstRef,
          this.bodyCoverSecondRef,
          this.donateFirstRef,
          this.donateSecondRef,
          this.orderDivFirstRef,
          this.orderDivSecondRef,
          this.orderRightStarRef,
          this.orderRightTextRef,
          this.navUlRef,
          this.linkedinNavRef,
          this.emailNavRef,
          this.telegramNavRef,
        ];
        this.timeoutRefsList.forEach((ref) => {
          clearTimeout(ref);
        });
        document.querySelectorAll(".invisible").forEach((element) => {
          element.classList.remove("invisible");
        });
        this.initVisibleElemsList.forEach((element) => {
          element.classList.add("invisible");
        });
        this.$refs.orderDiv.classList.remove("order-central-appear");
        this.$refs.orderDiv.classList.add("order-central-shine");
        this.isPageFullyLoaded = true;
      }
    },

    // Initial Header Cloud Move Effect
    headerCloudMove() {
      this.$refs.headerCover.classList.add("cloud-move");
      this.cloudMoveRef = setTimeout(() => {
        this.$refs.headerCover.classList.add("invisible");
      }, 10000);
    },

    // Initial Logo Appearance
    logoInitAppear() {
      this.logoLeftRef = setTimeout(() => {
        this.$refs.logoLeft.classList.remove("invisible");
        this.$refs.logoLeft.classList.add("star-appear");
        this.logoMoonRef = setTimeout(() => {
          this.$refs.logoMoon.classList.remove("invisible");
          this.$refs.logoMoon.classList.add("star-appear");
          this.logoRightRef = setTimeout(() => {
            this.$refs.logoRight.classList.remove("invisible");
            this.$refs.logoRight.classList.add("star-appear");
          }, 1000);
        }, 1000);
      }, 500);
    },

    // Initial bodyCover Fade Effect
    bodyCoverFade() {
      this.bodyCoverFirstRef = setTimeout(() => {
        this.$refs.bodyCover.classList.add("fade-cover");
        this.bodyCoverSecondRef = setTimeout(() => {
          this.$refs.bodyCover.classList.add("invisible");
        }, 6000);
      }, 4000);
    },

    // Initial donateLink Bounce
    donateDivInitBounce() {
      this.donateFirstRef = setTimeout(() => {
        this.donateDiv.classList.remove("invisible");
        this.donateDiv.classList.add("donate-bounce-out");
        this.donateSecondRef = setTimeout(() => {
          this.donateDiv.classList.remove("donate-bounce-out");
          this.donateDiv.classList.add("donate-bounce-in");
        }, 1500);
      }, 6000);
    },

    // Initial orderDiv Appearance
    orderDivInitAppear() {
      this.orderDivFirstRef = setTimeout(() => {
        this.$refs.orderDiv.classList.remove("invisible");
        this.$refs.orderDiv.classList.add("order-central-appear");
        this.orderDivSecondRef = setTimeout(() => {
          this.$refs.orderDiv.classList.remove("order-central-appear");
          this.$refs.orderDiv.classList.add("order-central-shine");
        }, 4000);
      }, 5500);
    },

    // Initial orderRight Appearance
    orderRightInitAppear() {
      this.orderRightStarRef = setTimeout(() => {
        this.$refs.orderRightStar.classList.remove("invisible");
        this.$refs.orderRightStar.classList.add("star-appear");
        this.orderRightTextRef = setTimeout(() => {
          this.$refs.orderRightTop.classList.remove("invisible");
          this.$refs.orderRightBottom.classList.remove("invisible");
          this.$refs.orderRightTop.classList.add("star-appear");
          this.$refs.orderRightBottom.classList.add("star-appear");
        }, 2500);
      }, 10000);
    },

    // Initial Footer Appearance
    footerInitAppear() {
      this.emailNavRef = setTimeout(() => {
        this.emailClassList = "footer-appear pointer-white";
        this.telegramNavRef = setTimeout(() => {
          this.telegramClassList = "footer-appear pointer-white";
          this.linkedinNavRef = setTimeout(() => {
            this.linkedinClassList = "footer-appear pointer-white";
          }, 500);
        }, 500);
      }, 6000);
    },

    // Initial navUl Appearance
    navUlInitAppear() {
      this.navUlRef = setTimeout(() => {
        this.$refs.navUl.classList.remove("invisible");
        this.$refs.navUl.classList.add("star-appear");
        this.isPageFullyLoaded = true;
      }, 14000);
    },
  },

  created() {
    window.addEventListener("resize", this.onresize);
  },

  mounted() {
    document.body.parentElement.classList.add("overflow-hidden");
    this.mainContainer = document.querySelector("#idpm-mainContainer");
    this.mainContainer.style.setProperty("width", `${window.innerWidth}px`);
    this.mainContainer.style.setProperty("height", `${window.innerHeight}px`);
    this.donateDiv = document.querySelector("#idpm-donateDiv");
    this.footerNote = document.querySelector("#idpm-footerNote");
    this.skipAnimations = document.querySelector("#idpm-skipAnimations");
    this.initVisibleElemsList = [
      this.$refs.bodyCover,
      this.$refs.headerCover,
      this.skipAnimations,
    ];
    document.querySelectorAll(".hoverable").forEach((element) => {
      element.classList.remove("hoverable");
      element.classList.add("pointer-white");
    });
    this.isMounted = true;
    this.startAnimations();
    this.donateUpdator();
    this.skipUpdator();
    this.noteUpdator();
  },

  updated() {
    this.donateUpdator();
    this.skipUpdator();
    this.noteUpdator();
  },
};
</script>

<style scoped>
@import "assets/css/loading-mobile.css";
@import "assets/css/home-mobile.css";
</style>
