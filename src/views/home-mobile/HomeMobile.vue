<template>
  <div id="m-body" class="">

    <div id="m-containerWrapper" class="">
      <div id="m-mainContainer" class="">
        <header id="m-header" class="">
          <span id="m-logo-1" class="text-shadow-logo">ee</span>
          <span id="m-logo-2" class="text-shadow-logo">f </span>
          <span id="m-logo-3" class="text-shadow-logo">ee</span>
        </header>

        <section id="m-showcase" class="">
          <ul id="m-navUl" class="hoverable">
            <li class="">
              <span id="m-portNav" class="text-shadow-drop-center" h="#"
                >Portfolio</span
              >
            </li>
            <li class="">
              <span id="m-appNav" class="text-shadow-drop-center" h="#"
                >App</span
              >
            </li>
          </ul>

          <div id="m-centralDiv" class="">
            <div id="m-orderDiv" class="">
              <span id="m-orderSpan-1" class="moon-shadow hoverable"
                >Need A Web App ???</span
              >
              <span id="m-orderSpan-2" class="text-shadow-logo hoverable">
                <span id="m-orderSpan-2-1">Click to <br /></span>
                <span id="m-orderSpan-2-2">c</span>
                <span id="m-orderSpan-2-3">RDER</span>
              </span>
            </div>

            <div id="m-donateDiv" class="">
              <img
                id="m-donateIcon"
                class="moon-shadow hoverable"
                @mouseenter="donateIconMouseEnter"
                @mouseleave="donateIconMouseLeave"
                :src="require(`./assets/images/svg/donate-${widthClass}.svg`)"
                alt=""
              />
            </div>
          </div>
        </section>

        <footer id="m-footer" class="">
          <ul>
            <li id="m-telegramNav" h="#" class="">
              <img
                id="m-telegramIcon"
                class="footer-shadow hoverable"
                @mouseenter="telegramNavMouseEnter"
                @mouseleave="telegramNavMouseLeave"
                :src="require(`./assets/images/svg/telegram-${widthClass}.svg`)"
              />
            </li>
            <li id="m-emailNav" h="#" class="">
              <img
                id="m-emailIcon"
                class="footer-shadow hoverable"
                @mouseenter="emailNavMouseEnter"
                @mouseleave="emailNavMouseLeave"
                :src="require(`./assets/images/svg/email-${widthClass}.svg`)"
              />
            </li>
            <li id="m-linkedinNav" h="#" class="">
              <img
                id="m-linkedinIcon"
                class="footer-shadow hoverable"
                @mouseenter="linkedinNavMouseEnter"
                @mouseleave="linkedinNavMouseLeave"
                :src="require(`./assets/images/svg/linkedin-${widthClass}.svg`)"
              />
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeMobile",

  data() {
    return {

      // Element Object References
      containerWrapper: Object,
      mainContainer: Object,
      appNav: Object,
      portNav: Object,
      orderDiv: Object,
      donateDiv: Object,
      linkedinNav: Object,
      emailNav: Object,
      telegramNav: Object,

      // Arrays
      footerNavsList: Array,
    };
  },

  computed: {
    widthClass() {return this.windowWidthClassEmitter()},
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
    
    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      var windowWidth = window.innerWidth;

      switch (true) {
        case windowWidth < 320:
          this.$emit("screen-width-change", "xxs");
          return "xxs";

        case windowWidth < 576:
          this.$emit("screen-width-change", "xs");
          return "xs";

        case windowWidth < 768:
          this.$emit("screen-width-change", "sm");
          return "sm";

        case windowWidth < 992:
          this.$emit("screen-width-change", "md");
          return "md";

        default:
          this.$emit("screen-width-change", "lg");
          return "lg";
      }
    },

    // Main Functionality

    // Starts initial appearance animations
    startAnimations() {
      console.log("animations started");
      this.containerWrapper.classList.add("d-flex");
    },

    // Event Handler Methods

    // Showcase Section Handlers

    donateIconMouseEnter() {
      this.donateDiv.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/donate-hover-${this.widthClass}.svg`)
      );
    },

    donateIconMouseLeave() {
      this.donateDiv.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/donate-${this.widthClass}.svg`)
      );
    },

    // Footer Section Handlers

    telegramNavMouseEnter() {
      this.telegramNav.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/telegram-hover-${this.widthClass}.svg`)
      );
    },

    telegramNavMouseLeave() {
      this.telegramNav.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/telegram-${this.widthClass}.svg`)
      );
    },

    emailNavMouseEnter() {
      this.emailNav.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/email-hover-${this.widthClass}.svg`)
      );
    },

    emailNavMouseLeave() {
      this.emailNav.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/email-${this.widthClass}.svg`)
      );
    },

    linkedinNavMouseEnter() {
      this.linkedinNav.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/linkedin-hover-${this.widthClass}.svg`)
      );
    },

    linkedinNavMouseLeave() {
      this.linkedinNav.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/linkedin-${this.widthClass}.svg`)
      );
    },
  },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },

  mounted() {
    this.containerWrapper = document.getElementById("m-containerWrapper");
    this.mainContainer = document.getElementById("m-mainContainer");
    this.appNav = document.getElementById("m-appNav");
    this.portNav = document.getElementById("m-portNav");
    this.orderDiv = document.getElementById("m-orderDiv");
    this.donateDiv = document.getElementById("m-donateDiv");
    this.linkedinNav = document.getElementById("m-linkedinNav");
    this.emailNav = document.getElementById("m-emailNav");
    this.telegramNav = document.getElementById("m-telegramNav");
  },
};
</script>

<style scoped>
@import "assets/css/loading-mobile.css";
@import "assets/css/home-mobile.css";
@import "assets/css/home-mobile-animations.css";
</style>
