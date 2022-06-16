<template>
  <div id="m-body" class="" @click="skipInitAnimations">

    <!-- <div id="m-containerWrapper" class="d-flex"> -->
      <div id="m-mainContainer" class="d-flex flex-column justify-content-around">
        <div id="m-bodyCover">
          
        </div>
        <header id="m-header" class="d-flex justify-content-center text-shine-logo">
          <div id="m-headerCover"></div>
          <span id="m-logoLeft" class="invisible">ee</span>
          <span id="m-logoMoon" class="invisible">f </span>
          <span id="m-logoRight" class="invisible">ee</span>
        </header>

        <section id="m-showcase" class="d-flex flex-column justify-content-between align-items-center">

          <div id="m-orderDiv" class="invisible"
                >
                <router-link to="/order" class="hoverable"> Need A Web App ??? </router-link>
                </div
              >

          <div id="m-centralDiv" class="d-flex justify-content-between align-items-start">
            <ul id="m-navUl" class="invisible d-flex flex-column justify-content-end">
              <li class="">
                <router-link id="m-portNav" to="/app" class="text-shine hoverable"
                  >App</router-link
                >
              </li>
              <li class="">
                <router-link id="m-appNav" to="/portfolio" class="text-shine hoverable"
                  >Portfolio</router-link
                >
              </li>
            </ul>
            <div id="m-orderCentral" class="d-flex justify-content-around align-items-center">
              
              <router-link id="m-orderRight" to="/order" class="text-shine-logo hoverable">
                <span id="m-orderRightTop" class="invisible">Click to <br /></span>
                <span id="m-orderRightStar" class="invisible">c</span>
                <span id="m-orderRightBottom" class="invisible">RDER</span>
              </router-link>
            </div>

          </div>

          <div id="m-donateDiv" class="invisible" :style="donateStyle">
            <img
              id="m-donateIcon"
              class="donate-shadow hoverable"
              @mouseenter="donateIconMouseEnter"
              @mouseleave="donateIconMouseLeave"
              :src="require(`./assets/images/svg/donate-${widthClass}.svg`)"
              alt=""
            />
          </div>
        </section>

        <section id="m-notes" class="d-flex justify-content-between align-items-end">
          <span id="m-skipAnimations" :style="skipStyle">Tap on screen<br>To skip animations</span>
          <router-link id="m-footerNote" to="/portfolio" class="hoverable" :style="noteStyle">&copy; 2022 - EELee App Design</router-link>
        </section>

        <footer id="m-footer" class="d-flex justify-content-around">
          <ul id="m-footerUl" class="d-flex justify-content-between align-items-center">
            <li id="m-telegramNav" class="invisible">
              <img
                id="m-telegramIcon"
                class="footer-shadow hoverable"
                @mouseenter="telegramNavMouseEnter"
                @mouseleave="telegramNavMouseLeave"
                :src="require(`./assets/images/svg/telegram-${widthClass}.svg`)"
              />
            </li>
            <li id="m-emailNav" class="invisible">
              <img
                id="m-emailIcon"
                class="footer-shadow hoverable"
                @mouseenter="emailNavMouseEnter"
                @mouseleave="emailNavMouseLeave"
                :src="require(`./assets/images/svg/email-${widthClass}.svg`)"
              />
            </li>
            <li id="m-linkedinNav" class="invisible">
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
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeMobile",

  data() {
    return {
      // screenRatio: Number,
      // donateTop: 0,
      // skipTop: 0,
      // noteTop: 0,
      donateBottom: 0,
      skipBottom: 0,
      noteBottom: 0,
      skipRotation: -40,
      skipColor: '#a2e5ff',
      noteColor: '#a2e5ff',

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
      donateDiv: Object,
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
    // widthClass(val) {
    //   if (val == 'md' || val == 'sm') this.footerNote.classList.add('text-shine-logo');
    //   else this.footerNote.classList.remove('text-shine-logo');
    // },
    // screenRatio(val) {
    //   console.log(val)
    // },
  },

  computed: {
    widthClass() {return this.windowWidthClassEmitter()},
    // screenRatio() {return this.screenRatio},
    donateStyle() {
      return {
        // 'top': `${this.donateTop}px`,
        'bottom': `${this.donateBottom}vh`,
      }
    },
    skipStyle() {
      return {
        // 'top': `${this.skipTop}vh`,
        'bottom': `${this.skipBottom}vh`,
        'transform': `rotate(${this.skipRotation}deg)`,
        'color': `${this.skipColor}`
      }
    },
    noteStyle() {
        return {
          // 'top': `${this.noteTop}vh`,
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
      // var windowHeight = window.innerHeight;
      // this.screenRatio = windowWidth/windowHeight;
      // console.log(this.footerNote.offsetTop)

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
        if ((this.donateDiv.offsetTop/window.innerHeight) > 0.6) {
          this.donateBottom++;
        }
        if ((this.donateDiv.offsetTop/window.innerHeight) < 0.5) {
          this.donateBottom--;
        }
    },

    skipUpdator() {
      if ((window.innerWidth/window.innerHeight) > 1)
        this.skipRotation = -37;
        else this.skipRotation = -40;
      if ((window.innerWidth/window.innerHeight) > 0.85) {
        // this.skipTop = 0;
        this.skipColor = '#a2e5ff';
        if ((this.skipAnimations.offsetTop/window.innerHeight) > 0.7) {
          this.skipBottom++;
        }
        if ((this.skipAnimations.offsetTop/window.innerHeight) < 0.65) {
          this.skipBottom--;
        }
      } else {
        // this.skipBottom = 0;
        this.skipColor = '#f8cc09';
        // this.skipBottom = this.skipBottom*(-1);
        if ((this.skipAnimations.offsetTop/window.innerHeight) < 0.8) {
          this.skipBottom--;
        }
        if ((this.skipAnimations.offsetTop/window.innerHeight) > 0.85) {
          this.skipBottom++;
        }
      }
    },
    noteUpdator() {
      if ((window.innerWidth/window.innerHeight) > 0.8) {
        // this.noteTop = 0;
        this.noteColor = '#a2e5ff';
        if ((this.footerNote.offsetTop/window.innerHeight) > 0.7) {
          this.noteBottom++;
        }
        if ((this.footerNote.offsetTop/window.innerHeight) < 0.65) {
          this.noteBottom--;
        }
      } else {
        // this.noteBottom = 0;
        this.noteColor = '#f8cc09';
        // this.noteBottom = this.noteBottom*(-1);
        if ((this.footerNote.offsetTop/window.innerHeight) < 0.75) {
          this.noteBottom--;
        }
        if ((this.footerNote.offsetTop/window.innerHeight) > 0.8) {
          this.noteBottom++;
        }
      }
    },

    // Main Functionality

    // Starts initial appearance animations
    startAnimations() {
      console.log("animations started");
      // this.containerWrapper.classList.add("d-flex");
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
        this.bodyCover.classList.add('cover-fade');
        this.bodyCoverSecondRef = setTimeout(() => {
          this.bodyCover.classList.add('invisible');
        }, 6000);
      }, 4000);
    },
    
    // Initial donateDiv Bounce
    donateDivInitBounce() {
      this.donateFirstRef = setTimeout(() => {
        this.donateDiv.classList.remove('invisible');
        this.donateDiv.classList.add('donate-bounce-out');
        this.donateSecondRef = setTimeout(() => {
          this.donateDiv.classList.remove('donate-bounce-out');
          this.donateDiv.classList.add('donate-bounce-in');
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
        setTimeout(() => {
          this.isPageFullyLoaded = true;
        }, 2000);
      }, 14000);
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
    this.bodyCover = document.getElementById("m-bodyCover");
    this.headerCover = document.getElementById("m-headerCover");
    this.logoLeft = document.getElementById("m-logoLeft");
    this.logoMoon = document.getElementById("m-logoMoon");
    this.logoRight = document.getElementById("m-logoRight");
    this.orderCentral = document.getElementById("m-orderCentral");
    this.orderDiv = document.getElementById("m-orderDiv");
    this.orderRight = document.getElementById("m-orderRight");
    this.orderRightTop = document.getElementById("m-orderRightTop");
    this.orderRightStar = document.getElementById("m-orderRightStar");
    this.orderRightBottom = document.getElementById("m-orderRightBottom");
    this.navUl = document.getElementById("m-navUl");
    this.appNav = document.getElementById("m-appNav");
    this.portNav = document.getElementById("m-portNav");
    this.donateDiv = document.getElementById("m-donateDiv");
    this.footerNote = document.getElementById("m-footerNote");
    this.skipAnimations = document.getElementById("m-skipAnimations");
    this.linkedinNav = document.getElementById("m-linkedinNav");
    this.emailNav = document.getElementById("m-emailNav");
    this.telegramNav = document.getElementById("m-telegramNav");
    this.initVisibleElemsList = [this.bodyCover, this.headerCover, this.skipAnimations];
    this.invisibleElemsList = [this.logoLeft, this.logoMoon, this.logoRight, this.orderDiv, this.orderRightTop, this.orderRightStar, this.orderRightBottom, this.navUl, this.donateDiv, this.linkedinNav, this.emailNav, this.telegramNav];
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
