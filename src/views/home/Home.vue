<template>
  <div id="bodyDiv" class='lg-wide-screen'>

    <div id="mainContainer" class="invisible d-flex flex-column lg-wide-screen">
      <header
        id="header"
        class="d-flex align-items-center"
        @mouseenter="headerMouseEnter"
        @mouseleave="headerMouseLeave"
      >
        <router-link
          id="logo"
          class="invisible hoverable animate__animated"
          to="/"
          @mouseenter="logoMouseEnter"
          @mouseleave="logoMouseLeave"
          >EELee</router-link
        >
        <div id="headerNavbar" class="invisible d-flex align-items-center">

          <router-link
            id="appNav"
            class="nav-link hoverable animate__animated"
            to="/app"
          >
            App
          </router-link>
          <router-link
            id="portNav"
            class="nav-link hoverable animate__animated"
            to="/portfolio"
          >
            Portfolio
          </router-link>
          <router-link
            id="orderNav"
            class="nav-link hoverable animate__animated"
            to="/"
          >
            Let's App!
          </router-link>
        </div>
      </header>

      <section id="showcase" class="">
        <div id="orderDiv" class="animate__animated animate__slower">
          <router-link
            id="orderLink"
            class="invisible hoverable animate__animated"
            to="/"
            @mouseenter="orderLinkMouseEnter"
            @mouseleave="orderLinkMouseLeave"
            href="#"
            >Need A Modern Website ???</router-link
          >
          <span id="orderMessage" class="invisible animate__animated"
            >Click To Get One . . .</span
          >
        </div>

        <div
          id="donateDiv"
          class="invisible hoverable animate__animated animate__slower"
        >
          <router-link id="donateSpan" class="hoverable" to="/">
            <img
              id="donateIcon"
              class="animate__animated"
              @mouseenter="donateMouseEnter"
              @mouseleave="donateMouseLeave"
              :src="require('./assets/images/svg/donate.svg')"
              alt=""
            />
          </router-link>
        </div>

        <div id="skipAnimations" class="hoverable vibrate-1" @mouseenter="onSkipAnimationsMouseEnter" @mouseleave="onSkipAnimationsMouseLeave" @click="onSkipAnimationsClick">Skip Initial Animations >>></div>
      </section>

      <footer id="footer" class="vibrate-1">
        <router-link to="/portfolio" id="footerNote" class="hoverable">&copy; 2022 - EELee App Design</router-link>
        <ul id="footerUl" class="invisible hoverable">
          <li id="linkedinNav" class="animate__animated">
            <img
              id="linkedinIcon"
              class="animate__animated"
              @mouseenter="linkedinMouseEnter"
              @mouseleave="linkedinMouseLeave"
              :src="require('./assets/images/svg/linkedin.svg')"
            />
          </li>
          <li id="emailNav" class="animate__animated">
            <img
              id="emailIcon"
              class="animate__animated"
              @mouseenter="emailMouseEnter"
              @mouseleave="emailMouseLeave"
              :src="require('./assets/images/svg/email.svg')"
            />
          </li>
          <li id="telegramNav" class="animate__animated">
            <img
              id="telegramIcon"
              class="animate__animated"
              @mouseenter="telegramMouseEnter"
              @mouseleave="telegramMouseLeave"
              :src="require('./assets/images/svg/telegram.svg')"
            />
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {

      //#mainContainer Variables
      mainContainerInitRef: Function,

      //#header Variables
      headerInitRef: Function,
      headerNavsInitRef: Function,
      headerLoopInitIntervalRef: Function,
      headerLoopIntervalRef: Function,
      headerInitWindref: Function,
      logoTimeoutRef: Function,
      appNavTimeoutRef: Function,
      portNavTimeoutRef: Function,
      orderNavTimeoutRef: Function,

      //#orderDiv Variables
      orderLinkInitRef: Function,
      linkAnimationList: [
        "animate__shakeX",
        "animate__shakeY",
        "animate__swing",
        "animate__flip",
      ],
      linkAnimationIndex: 0,
      linkIntervalRef: Function,

      //#donateDiv Variables
      donateDivInitRef: Function,
      donateAnimationList: ["animate__jello", "vibrate-3"],
      donateAnimationIndex: 0,
      donateIntervalRef: Function,

      //#footerUl Variables
      footerUlInitRef: Function,
      footerFirstIntervalRef: Function,
      footerSecondIntervalRef: Function,

      //Elements Object References
      headerNavbar: Object,
      logo: Object,
      appNav: Object,
      portNav: Object,
      orderNav: Object,
      orderDiv: Object,
      donateSpan: Object,
      skipAnimations: Object,
      footerUl: Object,
      linkedinNav: Object,
      emailNav: Object,
      telegramNav: Object,
      mainContainer: Object,

      //Arrays
      headerNavsList: Array,
      footerNavsList: Array,
      invisibleElemsList: Array,
      initTimeoutRefsList: Array,
      timeoutRefsList: Array,
      intervalRefsList: Array,
    };
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

    // Triggers and returns different window size classes on resize
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

    timeoutLog() {
      
    },

    // Creates wind effect on header icons with customizable delays
    windEffect(initialDelay, beforeApp, beforePort, beforeOrder) {
      this.logoTimeoutRef = setTimeout(() => {
        this.logo.classList.add("shake-top");

        this.appNavTimeoutRef = setTimeout(() => {
          this.appNav.classList.add("shake-top");

          this.portNavTimeoutRef = setTimeout(() => {
            this.portNav.classList.add("shake-top");

            this.orderNavTimeoutRef = setTimeout(() => {
              this.orderNav.classList.add("shake-top");
            }, beforeOrder);
          }, beforePort);
        }, beforeApp);
      }, initialDelay);
    },

    // Clears wind effect timeouts
    clearWindEffect() {
      clearTimeout(this.logoTimeoutRef);
      clearTimeout(this.orderNavTimeoutRef);
      clearTimeout(this.portNavTimeoutRef);
      clearTimeout(this.appNavTimeoutRef);
      clearInterval(this.headerLoopIntervalRef);
      this.headerNavsList.forEach((item) => {
        item.classList.remove("shake-top");
      });
    },

    // Main Functionality

    // Starts initial appearance animations
    startAnimations() {
      console.log("animations started",new Date().getMilliseconds());
      this.mainContainerInitAppear();
      this.headerInitAppear();
      this.headerInitWind();
      this.headerAnimationLoop();
      this.footerUlInitAppear();
      this.orderLinkInitAppear();
      this.donateDivInitAppear();
    },

    // Loads home page with running animation without replaying initial animations,
    // when resizing the window
    showRunningHome() {
      console.log('running home called', new Date().getUTCMilliseconds());
      this.timeoutRefsList = [this.logoTimeoutRef, this.appNavTimeoutRef, this.portNavTimeoutRef, this.orderNavTimeoutRef];
      this.intervalRefsList = [this.headerLoopIntervalRef, this.headerLoopInitIntervalRef, this.linkIntervalRef, this.donateIntervalRef, this.footerFirstIntervalRef, this.footerSecondIntervalRef];
      this.initTimeoutRefsList = [this.mainContainerInitRef, this.headerInitRef, this.headerInitWindref, this.headerNavsInitRef, this.footerUlInitRef, this.orderLinkInitRef, this.donateDivInitRef];
      this.invisibleElemsList.forEach(element => {
        element.classList.remove('invisible');
      });
      this.timeoutRefsList.forEach(ref => {
        clearTimeout(ref);
        // console.log(`${ref} cleared`)
      });
      this.intervalRefsList.forEach(ref => {
        clearInterval(ref);
        // console.log(`${ref} cleared`)
      });
      this.initTimeoutRefsList.forEach(ref => {
        clearTimeout(ref);
        // console.log(`${ref} cleared`)
      });
      this.headerMouseLeave();
      this.orderLinkMouseLeave();
      this.donateMouseLeave();
      this.linkedinMouseLeave();
    },

    // Starts mainContainer animation
    mainContainerInitAppear() {
      console.log("mainContainerInitAppear called",new Date().getMilliseconds());
      this.mainContainerInitRef = setTimeout(() => {
        // this.mainContainer.parentElement.classList.remove("invisible");
        this.mainContainer.classList.remove("invisible");
        this.mainContainer.classList.add(
          "d-flex",
          "flex-column",
          "bounce-in-initial"
        );
      }, 1000);
    },

    // Initial Header Animations
    headerInitAppear() {
      console.log("headerInitAppear called",new Date().getMilliseconds());
      this.headerInitRef = setTimeout(() => {
        this.logo.classList.remove("invisible");
        this.logo.classList.add("text-focus-in");
        this.headerNavsInitRef = setTimeout(() => {
          for (let i = 1; i < 4; i++) {
            this.headerNavbar.classList.remove("invisible");
            this.headerNavsList[i].classList.add("navbar-tracking-in-expand");
          }
        }, 5300);
      }, 3500);
    },

    // Sets the first wind effect on header
    headerInitWind() {
      console.log("headerInitWind called",new Date().getMilliseconds());
      this.headerInitWindref = setTimeout(() => {
        this.headerNavsList.forEach((item) => {
          item.classList.remove(
            "navbar-tracking-in-expand",
            "animate__swing",
            "shake-top",
            "text-focus-in"
          );
        });
        this.windEffect(100, 800, 400, 400);
      }, 14500);
    },

    // Header Running Animation Loop
    headerAnimationLoop() {
      console.log("headerAnimationLoop called",new Date().getMilliseconds());
      this.headerLoopInitIntervalRef = setInterval(() => {
        this.clearWindEffect();
        this.windEffect(1000, 900, 450, 450);
      }, 33000);
    },

    // Initial footerUl Animation
    footerUlInitAppear() {
      console.log("footerUlInitAppear called",new Date().getMilliseconds());
      this.footerUlInitRef = setTimeout(() => {
        this.footerUl.classList.remove("invisible");
        this.footerUl.classList.add("bounce-in-left");

        this.footerFirstIntervalRef = setInterval(() => {
          this.footerUl.classList.remove("bounce-in-left");
          this.footerUl.classList.add("bounce-out-left");

          this.footerSecondIntervalRef = setTimeout(() => {
            this.footerUl.classList.remove("bounce-out-left");
            this.footerUl.classList.add("bounce-in-left");
          }, 5000);
        }, 22000);
      }, 8500);
    },

    // Initial orderLink Animation
    orderLinkInitAppear() {
      console.log("orderLinkInitAppear called",new Date().getMilliseconds());
      this.orderLinkInitRef = setTimeout(() => {
        this.orderDiv.firstElementChild.classList.remove("invisible");
        this.orderDiv.firstElementChild.classList.add(
          "animate__slower",
          "animate__zoomInUp"
        );

        this.linkIntervalRef = setInterval(() => {
          this.orderDiv.firstElementChild.classList.remove(
            "animate__slower",
            "animate__zoomInUp"
          );
          this.orderDiv.firstElementChild.classList.remove(
            this.linkAnimationList[this.linkAnimationIndex]
          );
          this.linkAnimationIndex = this.nextNumber(
            this.linkAnimationIndex,
            this.linkAnimationList.length,
            false
          );
          this.orderDiv.firstElementChild.classList.add(
            this.linkAnimationList[this.linkAnimationIndex]
          );
        }, 25000);
      }, 11500);
    },

    // Initial donateDiv Animation
    donateDivInitAppear() {
      console.log("donateDivInitAppear called",new Date().getMilliseconds());
      this.donateDivInitRef = setTimeout(() => {
        this.donateSpan.parentElement.classList.remove("invisible");
        this.donateSpan.parentElement.classList.add("shake-horizontal");
        this.donateSpan.firstElementChild.classList.add("slide-in-bottom");
        this.skipAnimations.classList.remove('vibrate-1');
        this.skipAnimations.classList.add('bounce-out-left');
        setTimeout(() => {
          this.skipAnimations.classList.add('invisible')
        }, 5000);

        this.donateIntervalRef = setInterval(() => {
          this.donateSpan.firstElementChild.classList.remove("slide-in-bottom");
          this.donateSpan.firstElementChild.classList.remove(
            this.donateAnimationList[this.donateAnimationIndex]
          );
          this.donateAnimationIndex = this.nextNumber(
            this.donateAnimationIndex,
            this.donateAnimationList.length,
            false
          );
          this.donateSpan.firstElementChild.classList.add(
            this.donateAnimationList[this.donateAnimationIndex]
          );
        }, 18000);
      }, 20000);
    },

    // Event Handler Methods

    // Header Section Handlers

    // Stops header animation loop
    headerMouseEnter() {
      clearInterval(this.headerLoopInitIntervalRef);
      this.clearWindEffect();
    },

    // Resets the header animation loop
    headerMouseLeave() {
      this.headerLoopIntervalRef = setInterval(() => {
        this.headerNavsList.forEach((item) => {
          item.classList.remove(
            "navbar-tracking-in-expand",
            "animate__swing",
            "shake-top"
          );
        });
        this.windEffect(1000, 1000, 500, 500);
      }, 13000);
    },

    logoMouseEnter() {
      this.logo.classList.remove("animate__swing", "text-focus-in");
      this.logo.classList.add("pulsate-fwd-internal");
    },

    logoMouseLeave() {
      this.logo.classList.remove("pulsate-fwd-internal");
      this.logo.classList.add("animate__swing");
    },

    // Showcase Section Handlers
    // orderDiv Handlers

    orderLinkMouseEnter() {
      clearInterval(this.linkIntervalRef);
      this.orderDiv.firstElementChild.classList.remove(
        this.linkAnimationList[this.linkAnimationIndex],
        "animate__slower",
        "animate__zoomInUp"
      );
      this.orderDiv.firstElementChild.classList.add("scale-up-center");
      this.orderDiv.lastElementChild.classList.remove(
        "invisible",
        "animate__zoomOut"
      );
      this.orderDiv.lastElementChild.classList.add("animate__flash");
    },

    orderLinkMouseLeave() {
      this.orderDiv.firstElementChild.classList.remove("scale-up-center");
      this.orderDiv.firstElementChild.classList.add("scale-down-center");
      this.orderDiv.lastElementChild.classList.remove("animate__flash");
      this.orderDiv.lastElementChild.classList.add("animate__zoomOut");
      setTimeout(() => {
        this.orderDiv.firstElementChild.classList.remove("scale-down-center");
      }, 400);

      this.linkIntervalRef = setInterval(() => {
        this.orderDiv.firstElementChild.classList.remove(
          "animate__slower",
          "animate__zoomInUp"
        );
        this.orderDiv.firstElementChild.classList.remove(
          this.linkAnimationList[this.linkAnimationIndex]
        );
        this.linkAnimationIndex = this.nextNumber(
          this.linkAnimationIndex,
          this.linkAnimationList.length,
          false
        );
        this.orderDiv.firstElementChild.classList.add(
          this.linkAnimationList[this.linkAnimationIndex]
        );
      }, 25000);
    },

    // skipAnimations Handlers

    onSkipAnimationsMouseEnter() {
      this.skipAnimations.classList.remove('vibrate-1', 'scale-down-center');
      this.skipAnimations.classList.add('scale-up-center');
    },
    onSkipAnimationsMouseLeave() {
      this.skipAnimations.classList.remove('scale-up-center');
      this.skipAnimations.classList.add('scale-down-center');
      setTimeout(() => {
        this.skipAnimations.classList.remove('scale-down-center');
        this.skipAnimations.classList.add('vibrate-1');
      }, 500);
    },
    onSkipAnimationsClick() {
      this.showRunningHome();
      this.skipAnimations.classList.remove('scale-up-center');
      this.skipAnimations.classList.add('puff-out-hor');
      setTimeout(() => {
        this.skipAnimations.classList.add('d-none');
      }, 1500);
    },

    // donateDiv Handlers

    donateMouseEnter() {
      clearInterval(this.donateIntervalRef);
      this.donateSpan.firstElementChild.classList.remove(
        this.donateAnimationList[this.donateAnimationIndex],
        'slide-in-bottom'
      );
      this.donateSpan.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/donate-hover.svg`)
      );
    },

    donateMouseLeave() {
      this.donateSpan.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/donate.svg`)
      );
      this.donateIntervalRef = setInterval(() => {
        this.donateSpan.firstElementChild.classList.remove("slide-top");
        this.donateSpan.firstElementChild.classList.remove(
          this.donateAnimationList[this.donateAnimationIndex]
        );
        this.donateAnimationIndex = this.nextNumber(
          this.donateAnimationIndex,
          this.donateAnimationList.length,
          false
        );
        this.donateSpan.firstElementChild.classList.add(
          this.donateAnimationList[this.donateAnimationIndex]
        );
      }, 16000);
    },

    // Footer Section Handlers

    linkedinMouseEnter() {
      clearInterval(this.footerFirstIntervalRef);
      clearInterval(this.footerSecondIntervalRef);
      this.footerUl.classList.remove("bounce-in-left", "bounce-out-left");
      this.linkedinNav.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/linkedin-hover.svg")
      );
      this.linkedinNav.classList.add("animate__headShake");
    },

    linkedinMouseLeave() {
      this.linkedinNav.classList.remove("animate__headShake");
      this.linkedinNav.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/linkedin.svg")
      );

      this.footerFirstIntervalRef = setInterval(() => {
        this.footerUl.classList.remove("bounce-in-left");
        this.footerUl.classList.add("bounce-out-left");

        this.footerSecondIntervalRef = setTimeout(() => {
          this.footerUl.classList.remove("bounce-out-left");
          this.footerUl.classList.add("bounce-in-left");
        }, 5000);
      }, 15000);
    },

    emailMouseEnter() {
      clearInterval(this.footerFirstIntervalRef);
      clearInterval(this.footerSecondIntervalRef);
      this.footerUl.classList.remove("bounce-in-left", "bounce-out-left");
      this.emailNav.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/email-hover.svg")
      );
      this.emailNav.classList.add("animate__headShake");
    },

    emailMouseLeave() {
      this.emailNav.classList.remove("animate__headShake");
      this.emailNav.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/email.svg")
      );

      this.footerFirstIntervalRef = setInterval(() => {
        this.footerUl.classList.remove("bounce-in-left");
        this.footerUl.classList.add("bounce-out-left");

        this.footerSecondIntervalRef = setTimeout(() => {
          this.footerUl.classList.remove("bounce-out-left");
          this.footerUl.classList.add("bounce-in-left");
        }, 5000);
      }, 15000);
    },

    telegramMouseEnter() {
      clearInterval(this.footerFirstIntervalRef);
      clearInterval(this.footerSecondIntervalRef);
      this.footerUl.classList.remove("bounce-in-left", "bounce-out-left");
      this.telegramNav.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/telegram-hover.svg")
      );
      this.telegramNav.classList.add("animate__headShake");
    },

    telegramMouseLeave() {
      this.telegramNav.classList.remove("animate__headShake");
      this.telegramNav.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/telegram.svg")
      );

      this.footerFirstIntervalRef = setInterval(() => {
        this.footerUl.classList.remove("bounce-in-left");
        this.footerUl.classList.add("bounce-out-left");

        this.footerSecondIntervalRef = setTimeout(() => {
          this.footerUl.classList.remove("bounce-out-left");
          this.footerUl.classList.add("bounce-in-left");
        }, 5000);
      }, 15000);
    },
  },

  mounted() {
    
    this.headerNavbar = document.getElementById("headerNavbar");
    this.logo = document.getElementById("logo");
    this.appNav = document.getElementById("appNav");
    this.portNav = document.getElementById("portNav");
    this.orderNav = document.getElementById("orderNav");
    this.orderDiv = document.getElementById("orderDiv");
    this.donateSpan = document.getElementById("donateSpan");
    this.skipAnimations = document.getElementById("skipAnimations");
    this.footerUl = document.getElementById("footerUl");
    this.linkedinNav = document.getElementById("linkedinNav");
    this.emailNav = document.getElementById("emailNav");
    this.telegramNav = document.getElementById("telegramNav");
    this.mainContainer = document.getElementById("mainContainer");
    this.headerNavsList = [this.logo, this.appNav, this.portNav, this.orderNav];
    this.footerNavsList = [this.linkedinNav, this.emailNav, this.telegramNav];
    this.invisibleElemsList = [this.mainContainer, this.logo, this.headerNavbar, this.orderDiv.firstElementChild, this.donateSpan.parentElement, this.footerUl];
    this.startAnimations();
  },
  
  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },
};
</script>

<style scoped>
@import "assets/css/loading.css";
@import "assets/css/home.css";
@import "assets/css/home-animations.css";
</style>
