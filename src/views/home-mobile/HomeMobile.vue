<template>
  <div id="idpm-body" class="" @click="skipInitAnimations">

    <!-- <div id="idpm-containerWrapper" class="d-flex"> -->
      <div id="idpm-mainContainer" class="d-flex flex-column justify-content-around">
        <div id="idpm-bodyCover">
          
        </div>
        <header id="idpm-header" class="d-flex justify-content-center text-shine-logo">
          <div id="idpm-headerCover"></div>
          <span id="idpm-logoLeft" class="invisible">ee</span>
          <span id="idpm-logoMoon" class="invisible">f </span>
          <span id="idpm-logoRight" class="invisible">ee</span>
        </header>

        <section id="idpm-showcase" class="d-flex flex-column justify-content-between align-items-center">

          <div id="idpm-orderDiv" class="invisible"
                >
                <router-link to="/order" class="idpm-hoverable"> Need A Web App ??? </router-link>
                </div
              >

          <div id="idpm-centralDiv" class="d-flex justify-content-between align-items-start">
            <ul id="idpm-navUl" class="invisible d-flex flex-column justify-content-end">
              <li class="">
                <router-link id="idpm-portNav" to="/app" class="text-shine idpm-hoverable"
                  >App</router-link
                >
              </li>
              <li class="">
                <router-link id="idpm-appNav" to="/portfolio" class="text-shine idpm-hoverable"
                  >Portfolio</router-link
                >
              </li>
            </ul>
            <div id="idpm-orderCentral" class="d-flex justify-content-around align-items-center">
              
              <router-link id="idpm-orderRight" to="/order" class="text-shine-logo idpm-hoverable align-self-start">
                <span id="idpm-orderRightTop" class="invisible">Click to <br /></span>
                <span id="idpm-orderRightStar" class="invisible">c</span>
                <span id="idpm-orderRightBottom" class="invisible">RDER</span>
              </router-link>
            </div>

          </div>
        </section>

        <div id="idpm-donateDiv">
          <router-link to="/donate" id="idpm-donateLink" class="invisible d-flex justify-content-center" :style="donateStyle">
            <img
              id="idpm-donateIcon"
              class="donate-shadow idpm-hoverable"
              @mouseenter="donateIconMouseEnter"
              @mouseleave="donateIconMouseLeave"
              :src="require(`./assets/images/svg/donate-${widthClass}.svg`)"
              alt=""
            />
          </router-link>
        </div>

        <section id="idpm-notes" class="d-flex justify-content-between align-items-end">
          <span id="idpm-skipAnimations" :style="skipStyle">Tap on screen<br>To skip animations</span>
          <router-link id="idpm-footerNote" to="/portfolio" class="idpm-hoverable" :style="noteStyle">&copy; 2022 - EELee App Design</router-link>
        </section>

        <footer id="idpm-footer" class="d-flex justify-content-around">
          <ul id="idpm-footerUl" class="d-flex justify-content-between align-items-center">
            <li id="idpm-telegramNav" class="invisible">
              <img
                id="idpm-telegramIcon"
                class="footer-shadow idpm-hoverable"
                @mouseenter="telegramNavMouseEnter"
                @mouseleave="telegramNavMouseLeave"
                :src="require(`./assets/images/svg/telegram-${widthClass}.svg`)"
              />
            </li>
            <li>
            <router-link to="contact" id="idpm-emailNav" class="invisible">
              <img
                id="idpm-emailIcon"
                class="footer-shadow idpm-hoverable"
                @mouseenter="emailNavMouseEnter"
                @mouseleave="emailNavMouseLeave"
                :src="require(`./assets/images/svg/email-${widthClass}.svg`)"
              />
            </router-link>
            </li>
            <li id="idpm-linkedinNav" class="invisible">
              <img
                id="idpm-linkedinIcon"
                class="footer-shadow idpm-hoverable"
                @mouseenter="linkedinNavMouseEnter"
                @mouseleave="linkedinNavMouseLeave"
                :src="require(`./assets/images/svg/linkedin-${widthClass}.svg`)"
              />
            </li>
          </ul>
        </footer>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeMobile",

  data() {
    return {
      donateBottom: 0,
      skipBottom: 0,
      noteBottom: 0,
      skipRotation: -40,
      skipColor: String,
      noteColor: String,
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
      emailNavRef: Function,
      telegramNavRef: Function,
      linkedinNavRef: Function,
      navUlRef: Function,

      // Element Object References
      containerWrapper: Object,
      mainContainer: Object,
      bodyCover: Object,
      headerCover: Object,
      logoMoon: Object,
      logoLeft: Object,
      logoRight: Object,
      orderCentral: Object,
      orderDiv: Object,
      orderRight: Object,
      orderRightTop: Object,
      orderRightStar: Object,
      orderRightBottom: Object,
      navUl: Object,
      appNav: Object,
      portNav: Object,
      donateLink: Object,
      footerNote: Object,
      skipAnimations: Object,
      linkedinNav: Object,
      emailNav: Object,
      telegramNav: Object,

      // Arrays
      initVisibleElemsList: Array,
      invisibleElemsList: Array,
      timeoutRefsList: Array,
      footerNavsList: Array,
    };
  },

  watch: {
    isPageFullyLoaded(val) {
      if (val) {
        this.skipAnimations.classList.add('fade-skip');
        setTimeout(() => {
          this.skipAnimations.classList.add('invisible');
        }, 2000);
      }
    },
    skipColor(val) {
      if (val == '#a2e5ff') this.skipAnimations.classList.add('text-shine-logo');
      else this.skipAnimations.classList.remove('text-shine-logo');
    },
    noteColor(val) {
      if (val == '#a2e5ff') this.footerNote.classList.add('text-shine-logo');
      else this.footerNote.classList.remove('text-shine-logo');
    },
  },

  computed: {
    widthClass() {return this.windowWidthClassEmitter()},
    donateStyle() {
      return {
        'bottom': `${this.donateBottom}vh`,
      }
    },
    skipStyle() {
      return {
        'bottom': `${this.skipBottom}vh`,
        'transform': `rotate(${this.skipRotation}deg)`,
        'color': `${this.skipColor}`
      }
    },
    noteStyle() {
        return {
          'bottom': `${this.noteBottom}vh`,
          'color': `${this.noteColor}`
        }
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

    donateUpdator() {
      if (window.innerHeight > 450) {
        if ((this.donateLink.offsetTop/window.innerHeight) > 0.6) {
          this.donateBottom++;
        }
        if ((this.donateLink.offsetTop/window.innerHeight) < 0.5) {
          this.donateBottom--;
        }
      }
    },

    skipUpdator() {
      if (window.innerHeight > 450) {
        if ((window.innerWidth/window.innerHeight) > 1)
          this.skipRotation = -37;
          else this.skipRotation = -40;
        if ((window.innerWidth/window.innerHeight) > 0.85) {
          this.skipColor = '#a2e5ff';
          if ((this.skipAnimations.offsetTop/window.innerHeight) > 0.7) {
            this.skipBottom++;
          }
          if ((this.skipAnimations.offsetTop/window.innerHeight) < 0.65) {
            this.skipBottom--;
          }
        } else {
          this.skipColor = '#f8cc09';
          if ((this.skipAnimations.offsetTop/window.innerHeight) < 0.8) {
            this.skipBottom--;
          }
          if ((this.skipAnimations.offsetTop/window.innerHeight) > 0.85) {
            this.skipBottom++;
          }
        }
      }
    },
    noteUpdator() {
      if (window.innerHeight > 450) {
        if ((window.innerWidth/window.innerHeight) > 0.8) {
          this.noteColor = '#a2e5ff';
          if ((this.footerNote.offsetTop/window.innerHeight) > 0.7) {
            this.noteBottom++;
          }
          if ((this.footerNote.offsetTop/window.innerHeight) < 0.65) {
            this.noteBottom--;
          }
        } else {
          this.noteColor = '#f8cc09';
          if ((this.footerNote.offsetTop/window.innerHeight) < 0.75) {
            this.noteBottom--;
          }
          if ((this.footerNote.offsetTop/window.innerHeight) > 0.8) {
            this.noteBottom++;
          }
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
      this.donateLinkInitBounce();
      this.orderDivInitAppear();
      this.footerInitAppear();
      this.navUlInitAppear();
      this.orderRightInitAppear();
    },

    // Skips initial animations and shows running home page
    skipInitAnimations() {
      if (!this.isPageFullyLoaded) {
        console.log('skipped')
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
          this.emailNavRef,
          this.telegramNavRef,
          this.linkedinNavRef,
          this.navUlRef,
        ];
        this.timeoutRefsList.forEach(ref => {
          clearTimeout(ref);
        });
        this.initVisibleElemsList.forEach(element => {
          element.classList.add('invisible');
        });
        this.invisibleElemsList.forEach(element => {
          element.classList.remove('invisible');
        });
        this.orderDiv.classList.remove('order-central-appear');
        this.orderDiv.classList.add('order-central-shine');
      }
    },
    
    // Initial Header Cloud Move Effect
    headerCloudMove() {
      this.headerCover.classList.add('cloud-move');
      this.cloudMoveRef = setTimeout(() => {
        this.headerCover.classList.add('invisible');
      }, 10000);
    },
    
    // Initial Logo Appearance
    logoInitAppear() {
      this.logoLeftRef = setTimeout(() => {
        this.logoLeft.classList.remove('invisible');
        this.logoLeft.classList.add('star-appear');
        this.logoMoonRef = setTimeout(() => {
          this.logoMoon.classList.remove('invisible');
          this.logoMoon.classList.add('star-appear');
          this.logoRightRef = setTimeout(() => {
            this.logoRight.classList.remove('invisible');
            this.logoRight.classList.add('star-appear');
          }, 1000);
        }, 1000);
      }, 500);
    },
    
    // Initial bodyCover Fade Effect
    bodyCoverFade() {
      this.bodyCoverFirstRef = setTimeout(() => {
        this.bodyCover.classList.add('fade-cover');
        this.bodyCoverSecondRef = setTimeout(() => {
          this.bodyCover.classList.add('invisible');
        }, 6000);
      }, 4000);
    },
    
    // Initial donateLink Bounce
    donateLinkInitBounce() {
      this.donateFirstRef = setTimeout(() => {
        this.donateLink.classList.remove('invisible');
        this.donateLink.classList.add('donate-bounce-out');
        this.donateSecondRef = setTimeout(() => {
          this.donateLink.classList.remove('donate-bounce-out');
          this.donateLink.classList.add('donate-bounce-in');
        }, 1500);
      }, 6000);
    },
    
    // Initial orderDiv Appearance
    orderDivInitAppear() {
      this.orderDivFirstRef = setTimeout(() => {
        this.orderDiv.classList.remove('invisible');
        this.orderDiv.classList.add('order-central-appear');
        this.orderDivSecondRef = setTimeout(() => {
          this.orderDiv.classList.remove('order-central-appear');
          this.orderDiv.classList.add('order-central-shine');
        }, 4000);
      }, 5500);
    },
        
    // Initial orderRight Appearance
    orderRightInitAppear() {
      this.orderRightStarRef = setTimeout(() => {
        this.orderRightStar.classList.remove('invisible');
        this.orderRightStar.classList.add('star-appear');
        this.orderRightTextRef = setTimeout(() => {
          this.orderRightTop.classList.remove('invisible');
          this.orderRightBottom.classList.remove('invisible');
          this.orderRightTop.classList.add('star-appear');
          this.orderRightBottom.classList.add('star-appear');
        }, 2500);
      }, 10000);
    },

    // Initial Footer Appearance
    footerInitAppear() {
      this.emailNavRef = setTimeout(() => {
        this.emailNav.classList.remove('invisible');
        this.emailNav.classList.add('footer-appear');
        this.telegramNavRef = setTimeout(() => {
          this.telegramNav.classList.remove('invisible');
          this.telegramNav.classList.add('footer-appear');
          this.linkedinNavRef = setTimeout(() => {
            this.linkedinNav.classList.remove('invisible');
            this.linkedinNav.classList.add('footer-appear');
          }, 500);
        }, 500);
      }, 6000);
    },
    
    // Initial navUl Appearance
    navUlInitAppear() {
      this.navUlRef = setTimeout(() => {
        this.navUl.classList.remove('invisible');
        this.navUl.classList.add('star-appear');
          this.isPageFullyLoaded = true;
      }, 14000);
    },

    // Event Handler Methods

    // Showcase Section Handlers

    donateIconMouseEnter() {
      this.donateLink.firstElementChild.setAttribute(
        "src",
        require(`./assets/images/svg/donate-hover-${this.widthClass}.svg`)
      );
    },

    donateIconMouseLeave() {
      this.donateLink.firstElementChild.setAttribute(
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
    this.containerWrapper = document.getElementById("idpm-containerWrapper");
    this.mainContainer = document.getElementById("idpm-mainContainer");
    this.bodyCover = document.getElementById("idpm-bodyCover");
    this.headerCover = document.getElementById("idpm-headerCover");
    this.logoLeft = document.getElementById("idpm-logoLeft");
    this.logoMoon = document.getElementById("idpm-logoMoon");
    this.logoRight = document.getElementById("idpm-logoRight");
    this.orderCentral = document.getElementById("idpm-orderCentral");
    this.orderDiv = document.getElementById("idpm-orderDiv");
    this.orderRight = document.getElementById("idpm-orderRight");
    this.orderRightTop = document.getElementById("idpm-orderRightTop");
    this.orderRightStar = document.getElementById("idpm-orderRightStar");
    this.orderRightBottom = document.getElementById("idpm-orderRightBottom");
    this.navUl = document.getElementById("idpm-navUl");
    this.appNav = document.getElementById("idpm-appNav");
    this.portNav = document.getElementById("idpm-portNav");
    this.donateLink = document.getElementById("idpm-donateLink");
    this.footerNote = document.getElementById("idpm-footerNote");
    this.skipAnimations = document.getElementById("idpm-skipAnimations");
    this.linkedinNav = document.getElementById("idpm-linkedinNav");
    this.emailNav = document.getElementById("idpm-emailNav");
    this.telegramNav = document.getElementById("idpm-telegramNav");
    this.initVisibleElemsList = [this.bodyCover, this.headerCover, this.skipAnimations];
    this.invisibleElemsList = [this.logoLeft, this.logoMoon, this.logoRight, this.orderDiv, this.orderRightTop, this.orderRightStar, this.orderRightBottom, this.navUl, this.donateLink, this.linkedinNav, this.emailNav, this.telegramNav];
    this.startAnimations();
    this.donateUpdator();
    this.skipUpdator();
    this.noteUpdator();
  },

  updated() {
    this.donateUpdator();
    // console.log('donateBottom:',this.donateBottom);
    this.skipUpdator();
    // console.log('skipBottom:',this.skipBottom);
    this.noteUpdator();
    // console.log('noteBottom:',this.noteBottom);
  },
};
</script>

<style scoped>
@import "assets/css/loading-mobile.css";
@import "assets/css/home-mobile.css";
@import "assets/css/home-mobile-animations.css";
</style>
