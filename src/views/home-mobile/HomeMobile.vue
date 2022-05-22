<template>
  <div id="m-body" class="">
    <div id="m-question" class="preload animate__animated">
      <p>ENABLE SOUND EFFECTS ???</p>
      <div class="d-flex justify-content-around align-items-center">
        <span id="m-enableSound" class="hoverable" @click="enableSoundHandler"
          >YES</span
        >
        <span id="m-disableSound" class="hoverable" @click="disableSoundHandler"
          >NO</span
        >
      </div>
      <p
        id="m-soundMessage"
        class="animate__animated"
        :style="{ color: soundMessageColor }"
      >
        &nbsp;
      </p>
    </div>

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
  
  props: {
    //Global Sound Variables
    isSoundSelected: false,
    isSoundMuted: false,
  },

  data() {
    return {
      // Global
      soundMessageColor: "#f8cc09",
      isAudioMuted: false,
      isMusicMuted: false,

      // Element Object References
      question: Object,
      soundMessage: Object,
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

  watch: {
    // Starts the initial page animations after sound effects being enabled or disabled
    isSoundSelected() {
      this.soundMessage.classList.add("animate__flash");
      setTimeout(() => {
        this.question.classList.add("animate__bounceOut");
        setTimeout(() => {
          this.question.classList.add("d-none");
          this.startAnimations();
        }, 1000);
      }, 2000);
    },
    
    isSoundMuted(val) {
      this.toggleMuteSoundEffects('sound', val)
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
    
    // Toggles between music and sound effects
    toggleMuteSoundEffects(effect, setMute) {
      switch (effect) {
        case "audio":
          // this.audioArray.forEach((audio) => {
          //   audio.muted = setMute;
          // });
          console.log('audioMuted is:', setMute)
          break;

        case "music":
          // this.musicArray.forEach((music) => {
          //   music.muted = setMute;
          // });
          console.log('musicMuted is:', setMute)
          break;

        default:
          // this.soundArray.forEach((sound) => {
          //   sound.muted = setMute;
          // });
          console.log('isSoundMuted is:', setMute)
          break;
      }
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
    // Global Handlers

    documentLoading() {
      var craeteTime = new Date();
      console.log("loading", craeteTime.getMilliseconds());
    },

    documentLoaded() {
      var craeteTime = new Date();
      console.log("loaded", craeteTime.getMilliseconds());
    },

    enableSoundHandler() {
      this.$emit('sound-enabled');
      this.soundMessage.innerHTML = "ENABLED";
      this.soundMessageColor = "green";
      // this.isiSSoundSelected = true;
    },

    disableSoundHandler() {
      this.$emit('sound-disabled');
      this.soundMessage.innerHTML = "DISABLED";
      this.soundMessageColor = "red";
      // this.isiSSoundMuted = true;
      // this.isiSSoundSelected = true;
    },

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
    window.addEventListener("load", this.documentLoaded);
    window.addEventListener("DOMContentLoaded", this.documentLoading);
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },

  mounted() {
    this.question = document.getElementById("m-question");
    this.soundMessage = document.getElementById("m-soundMessage");
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

  destroyed() {
    window.removeEventListener("load", this.documentLoaded);
    window.removeEventListener("DOMContentLoaded", this.documentLoading);
    window.removeEventListener("resize", this.windowWidthClassEmitter);
  },
};
</script>

<style scoped>
@import "assets/css/loading-mobile.css";
@import "assets/css/home-mobile.css";
@import "assets/css/home-mobile-animations.css";
</style>
