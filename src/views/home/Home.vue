<template>
  <div id="bodyDiv" class="">
    <div id="question" class="preload animate__animated">
      <p>ENABLE SOUND EFFECTS ???</p>
      <div class="d-flex justify-content-around align-items-center">
        <span id="enableSound" class="hoverable" @click="enableSoundHandler"
          >YES</span
        >
        <span id="disableSound" class="hoverable" @click="disableSoundHandler"
          >NO</span
        >
      </div>
      <p
        id="soundMessage"
        class="animate__animated"
        :style="{ color: soundMessageColor }"
      >
        &nbsp;
      </p>
    </div>

    <div id="mainContainer" class="d-none">
      <header
        id="header"
        class=""
        @mouseenter="headerMouseEnter"
        @mouseleave="headerMouseLeave"
      >
        <span
          id="logo"
          class="invisible hoverable animate__animated"
          @mouseenter="logoMouseEnter"
          @mouseleave="logoMouseLeave"
          href="#"
          >EELee</span
        >
        <ul id="navbarUl" class="">
          <li
            id="appNav"
            class="invisible hoverable animate__animated"
            href="#"
          >
            App
          </li>
          <li
            id="portNav"
            class="invisible hoverable animate__animated"
            href="#"
          >
            Portfolio
          </li>
          <li
            id="orderNav"
            class="invisible hoverable animate__animated"
            href="#"
          >
            Let's App
          </li>
        </ul>
      </header>

      <section id="showcase" class="">
        <div id="orderDiv" class="animate__animated animate__slower">
          <span
            id="orderLink"
            class="invisible hoverable animate__animated"
            @mouseenter="orderLinkMouseEnter"
            @mouseleave="orderLinkMouseLeave"
            href="#"
            >Need A Modern Website ???</span
          >
          <span id="orderMessage" class="invisible animate__animated"
            >Click To Get One . . .</span
          >
        </div>

        <div
          id="soundDiv"
          class="animate__animated"
          @mouseleave="soundDivMouseLeave"
        >
          <span
            id="soundSpan"
            class="invisible hoverable animate__animated"
            @click="soundSpanClick"
          >
            <img
              id="soundIcon"
              class="vibrate-1 animate__animated"
              @mouseenter="soundIconMouseEnter"
              @mouseleave="soundIconMouseLeave"
              :src="require('./assets/images/svg/music.svg')"
              alt=""
            />
          </span>
          <span
            id="musicSpan"
            class="invisible hoverable animate__animated"
            @click="musicSpanClick"
          >
            <img
              id="musicIcon"
              class="animate__animated"
              @mouseenter="musicIconMouseEnter"
              @mouseleave="musicIconMouseLeave"
              :src="require('./assets/images/svg/music-on.svg')"
              alt=""
            />
          </span>
          <span
            id="audioSpan"
            class="invisible hoverable animate__animated"
            @click="audioSpanClick"
          >
            <img
              id="audioIcon"
              class="animate__animated"
              @mouseenter="audioIconMouseEnter"
              @mouseleave="audioIconMouseLeave"
              :src="require('./assets/images/svg/volume-on.svg')"
              alt=""
            />
          </span>
        </div>
        <div
          id="donateDiv"
          class="invisible hoverable animate__animated animate__slower"
        >
          <span id="donateSpan" href="#">
            <img
              id="donateIcon"
              class="animate__animated"
              @mouseenter="donateMouseEnter"
              @mouseleave="donateMouseLeave"
              :src="require('./assets/images/svg/donate.svg')"
              alt=""
            />
          </span>
        </div>
      </section>

      <footer id="footer" class="vibrate-1">
        <span id="footerNote" class="">&copy; 2022 - EELee App Design</span>
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

      //#header Variables
      intervalRef: Function,
      initialIntervalRef: Function,
      logoTimeOutRef: Function,
      appNavTimeOutRef: Function,
      portNavTimeOutRef: Function,
      orderNavTimeOutRef: Function,

      //#orderDiv Variables
      linkAnimationList: [
        "animate__shakeX",
        "animate__shakeY",
        "animate__swing",
        "animate__flip",
      ],
      linkAnimationIndex: 0,
      linkAudioIndex: 0,
      linkIntervalRef: Function,

      //#soundDiv Variables
      visibilityTimeOutRef: Function,
      vibrationTimeOutRef: Function,

      //#donateDiv Variables
      donateAnimationList: ["animate__jello", "vibrate-3"],
      donateAnimationIndex: 0,
      donateIntervalRef: Function,

      //#footerUl Variables
      footerFirstIntervalRef: Function,
      footerSecondIntervalRef: Function,

      //Audio
      backgroundWaveAudio: Audio,
      headerWindAudio: Audio,
      logoWindAudio: Audio,
      footerInWaveAudio: Audio,
      footerOutWaveAudio: Audio,
      donateShakeAudio: Audio,
      orderLinkAudioOne: Audio,
      orderLinkAudioTwo: Audio,
      orderLinkAudioThree: Audio,
      orderLinkAudioFour: Audio,
      bellAudioOne: Audio,
      bellAudioTwo: Audio,

      //Element Object References
      question: Object,
      soundMessage: Object,
      logo: Object,
      appNav: Object,
      portNav: Object,
      orderNav: Object,
      soundSpan: Object,
      musicSpan: Object,
      audioSpan: Object,
      orderDiv: Object,
      donateSpan: Object,
      footerUl: Object,
      linkedinNav: Object,
      emailNav: Object,
      telegramNav: Object,
      mainContainer: Object,

      //Arrays
      linkAudioList: Array,
      audioArray: Array,
      musicArray: Array,
      soundArray: Array,
      headerNavsList: Array,
      soundDivList: Array,
      footerNavsList: Array,
    };
  },

  watch: {
    // Starts the initial page animations after sound effects being enabled or disabled
    isSoundSelected() {
      this.soundMessage.classList.add("animate__flash");
      setTimeout(() => {
        this.question.classList.add("animate__bounceOut");
        this.question.parentElement.classList.add("lg-wide-screen");
        this.mainContainer.classList.add("lg-wide-screen");
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
          this.audioArray.forEach((audio) => {
            audio.muted = setMute;
          });
          console.log('audioMuted:', setMute)
          break;

        case "music":
          this.musicArray.forEach((music) => {
            music.muted = setMute;
          });
          console.log('musicMuted:', setMute)
          break;

        default:
          this.soundArray.forEach((sound) => {
            sound.muted = setMute;
          });
          console.log('isSoundMuted:', setMute)
          break;
      }
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

    // Creates wind effect on logo and navbar icons with sound effects with customizable delays
    windEffect(initialDelay, beforeApp, beforePort, beforeOrder) {
      this.logoTimeOutRef = setTimeout(() => {
        this.logo.classList.add("shake-top");
        this.headerWindAudio.play();

        setTimeout(() => {
          this.bellAudioOne.play();
          this.bellAudioTwo.play();
        }, 800);

        this.appNavTimeOutRef = setTimeout(() => {
          this.appNav.classList.add("shake-top");
          this.bellAudioTwo.play();
          this.bellAudioOne.play();

          this.portNavTimeOutRef = setTimeout(() => {
            this.portNav.classList.add("shake-top");
            this.bellAudioTwo.play();
            this.bellAudioOne.play();

            this.orderNavTimeOutRef = setTimeout(() => {
              this.orderNav.classList.add("shake-top");
              this.bellAudioTwo.play();
              this.bellAudioOne.play();
            }, beforeOrder);
          }, beforePort);
        }, beforeApp);
      }, initialDelay);
    },

    // Clears wind effect timeouts
    clearWindEffect() {
      clearTimeout(this.logoTimeOutRef);
      clearTimeout(this.orderNavTimeOutRef);
      clearTimeout(this.portNavTimeOutRef);
      clearTimeout(this.appNavTimeOutRef);
      clearInterval(this.intervalRef);
      this.headerNavsList.forEach((item) => {
        item.classList.remove("shake-top");
      });
    },

    // Main Functionality

    // Starts initial appearance animations
    startAnimations() {
      console.log("animations started");
      this.setInitVol();
      this.mainContainerInitAppear();
      this.headerInitAppear();
      this.headerInitWind();
      this.headerAnimationLoop();
      this.soundSpanInitAppear();
      this.footerUlInitAppear();
      this.donateDivInitAppear();
      this.orderLinkInitAppear();
    },

    // Sets initial volumes
    setInitVol() {
      this.backgroundWaveAudio.volume = 0.15;
      this.headerWindAudio.volume = 0.58;
      this.logoWindAudio.volume = 0.6;
      this.orderLinkAudioOne.volume = 0.3;
      this.orderLinkAudioTwo.volume = 0.3;
      this.orderLinkAudioThree.volume = 0.3;
      this.orderLinkAudioFour.volume = 0.3;
      this.donateShakeAudio.volume = 0.2;
      this.footerOutWaveAudio.volume = 0.25;

      this.backgroundWaveAudio.loop = true;
      this.backgroundWaveAudio.play();
    },

    // Starts mainContainer animation
    mainContainerInitAppear() {
      setTimeout(() => {
        this.mainContainer.classList.remove("d-none");
        this.mainContainer.classList.add(
          "d-flex",
          "flex-column",
          "bounce-in-initial"
        );
      }, 1000);
    },

    // Initial Header Animations
    headerInitAppear() {
      setTimeout(() => {
        this.logo.classList.remove("invisible");
        this.logo.classList.add("text-focus-in");
        this.logoWindAudio.play();
        setTimeout(() => {
          for (let i = 1; i < 4; i++) {
            this.headerNavsList[i].classList.remove("invisible");
            this.headerNavsList[i].classList.add("navbar-tracking-in-expand");
          }
        }, 5300);
      }, 3500);
    },

    // Sets the first wind effect on header
    headerInitWind() {
      setTimeout(() => {
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
      this.initialIntervalRef = setInterval(() => {
        this.clearWindEffect();
        this.bellAudioOne.volume = 0.2;
        this.bellAudioTwo.volume = 0.2;
        this.windEffect(1000, 900, 450, 450);
      }, 33000);
    },

    // Initial soundSpan Animation
    soundSpanInitAppear() {
      setTimeout(() => {
        this.soundSpan.classList.remove("invisible");
        this.soundSpan.classList.add("roll-in-left");
      }, 8000);
    },

    // Initial footerUl Animation
    footerUlInitAppear() {
      setTimeout(() => {
        this.footerUl.classList.remove("invisible");
        this.footerUl.classList.add("bounce-in-left");
        this.footerInWaveAudio.play();

        this.footerFirstIntervalRef = setInterval(() => {
          this.footerUl.classList.remove("bounce-in-left");
          this.footerUl.classList.add("bounce-out-left");
          this.footerOutWaveAudio.play();

          this.footerSecondIntervalRef = setTimeout(() => {
            this.footerUl.classList.remove("bounce-out-left");
            this.footerUl.classList.add("bounce-in-left");
            this.footerInWaveAudio.play();
          }, 5000);
        }, 15000);
      }, 8500);
    },

    // Initial donateDiv Animation
    donateDivInitAppear() {
      setTimeout(() => {
        this.donateSpan.parentElement.classList.remove("invisible");
        this.donateSpan.parentElement.classList.add("shake-horizontal");
        this.donateSpan.firstElementChild.classList.add("slide-in-bottom");

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
          this.donateShakeAudio.play();
        }, 18000);
      }, 20000);
    },

    // Initial orderLink Animation
    orderLinkInitAppear() {
      setTimeout(() => {
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
          this.linkAudioIndex = this.nextNumber(
            this.linkAudioIndex,
            this.linkAudioList.length,
            false
          );
          this.orderDiv.firstElementChild.classList.add(
            this.linkAnimationList[this.linkAnimationIndex]
          );
          this.linkAudioList[this.linkAudioIndex].play();
        }, 25000);
      }, 11500);
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

    // Header Section Handlers

    // Stops header animation loop
    headerMouseEnter() {
      clearInterval(this.initialIntervalRef);
      this.clearWindEffect();
    },

    // Resets the header animation loop
    headerMouseLeave() {
      this.intervalRef = setInterval(() => {
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
        this.linkAudioIndex = this.nextNumber(
          this.linkAudioIndex,
          this.linkAudioList.length,
          false
        );
        this.orderDiv.firstElementChild.classList.add(
          this.linkAnimationList[this.linkAnimationIndex]
        );
        this.linkAudioList[this.linkAudioIndex].play();
      }, 25000);
    },

    // soundDiv Handlers

    soundSpanClick() {
      // this.toggleMuteSoundEffects("all", !this.isiSSoundMuted);
      // this.isiSSoundMuted = !this.isiSSoundMuted;
      var soundEvent = (this.isSoundMuted ? 'sound-enabled' : 'sound-disabled'); 
      this.$emit(soundEvent)
    },

    musicSpanClick() {
      this.isMusicMuted = !this.isMusicMuted;
      this.toggleMuteSoundEffects("music", this.isMusicMuted);
    },

    audioSpanClick() {
      this.isAudioMuted = !this.isAudioMuted;
      this.toggleMuteSoundEffects("audio", this.isAudioMuted);
    },

    soundIconMouseEnter() {
      clearTimeout(this.visibilityTimeOutRef);
      clearTimeout(this.vibrationTimeOutRef);
      this.soundSpan.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/music-hover.svg")
      );
      this.soundSpan.firstElementChild.classList.remove(
        "vibrate-1",
        "animate__wobble"
      );
      this.soundSpan.firstElementChild.classList.add("scale-up-center");
      this.musicSpan.classList.remove("invisible");
      this.audioSpan.classList.remove("invisible");
      this.musicSpan.firstElementChild.classList.remove(
        "invisible",
        "animate__rollOut"
      );
      this.audioSpan.firstElementChild.classList.remove(
        "invisible",
        "animate__rollOut"
      );
      this.musicSpan.firstElementChild.classList.add("animate__rollIn");
      this.audioSpan.firstElementChild.classList.add("animate__rollIn");
    },

    soundIconMouseLeave() {
      this.soundSpan.firstElementChild.classList.remove("scale-up-center");
      this.soundSpan.firstElementChild.classList.add("scale-down-center");
      setTimeout(() => {
        this.soundSpan.firstElementChild.classList.remove("scale-down-center");
      }, 400);
    },

    soundDivMouseLeave() {
      this.soundSpan.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/music.svg")
      );
      this.musicSpan.firstElementChild.classList.remove("animate__rollIn");
      this.audioSpan.firstElementChild.classList.remove("animate__rollIn");
      setTimeout(() => {
        this.soundSpan.firstElementChild.classList.add("animate__wobble");
        this.musicSpan.firstElementChild.classList.add(
          "animate__animated",
          "animate__rollOut"
        );
        this.audioSpan.firstElementChild.classList.add(
          "animate__animated",
          "animate__rollOut"
        );
      }, 400);

      this.visibilityTimeOutRef = setTimeout(() => {
        for (let i = 1; i < 3; i++) {
          this.soundDivList[i].classList.add("invisible");
          this.soundDivList[i].firstElementChild.classList.add("invisible");
        }
      }, 1000);

      this.vibrationTimeOutRef = setTimeout(() => {
        this.soundSpan.firstElementChild.classList.add("vibrate-1");
      }, 2500);
    },

    musicIconMouseEnter() {
      this.musicSpan.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/music-off-hover.svg")
      );
      this.musicSpan.firstElementChild.classList.add("scale-up-center");
    },

    musicIconMouseLeave() {
      this.musicSpan.firstElementChild.classList.remove("scale-up-center");
      this.musicSpan.firstElementChild.classList.add("scale-down-center");
      this.musicSpan.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/music-on.svg")
      );
      this.musicSpan.firstElementChild.classList.remove("animate__animated");
      setTimeout(() => {
        this.musicSpan.firstElementChild.classList.remove("scale-down-center");
      }, 400);
    },

    audioIconMouseEnter() {
      this.audioSpan.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/volume-off-hover.svg")
      );
      this.audioSpan.firstElementChild.classList.add("scale-up-center");
    },

    audioIconMouseLeave() {
      this.audioSpan.firstElementChild.classList.remove("scale-up-center");
      this.audioSpan.firstElementChild.classList.add("scale-down-center");
      this.audioSpan.firstElementChild.setAttribute(
        "src",
        require("./assets/images/svg/volume-on.svg")
      );
      this.audioSpan.firstElementChild.classList.remove("animate__animated");
      setTimeout(() => {
        this.audioSpan.firstElementChild.classList.remove("scale-down-center");
      }, 400);
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
        this.donateShakeAudio.play();
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
        this.footerOutWaveAudio.play();

        this.footerSecondIntervalRef = setTimeout(() => {
          this.footerUl.classList.remove("bounce-out-left");
          this.footerUl.classList.add("bounce-in-left");
          this.footerInWaveAudio.play();
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
        this.footerOutWaveAudio.play();

        this.footerSecondIntervalRef = setTimeout(() => {
          this.footerUl.classList.remove("bounce-out-left");
          this.footerUl.classList.add("bounce-in-left");
          this.footerInWaveAudio.play();
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
        this.footerOutWaveAudio.play();

        this.footerSecondIntervalRef = setTimeout(() => {
          this.footerUl.classList.remove("bounce-out-left");
          this.footerUl.classList.add("bounce-in-left");
          this.footerInWaveAudio.play();
        }, 5000);
      }, 15000);
    },
  },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
    window.addEventListener("DOMContentLoaded", this.documentLoading);
    window.addEventListener("load", this.documentLoaded);
  },

  mounted() {
    this.backgroundWaveAudio = new Audio(
      require("./assets/audio/backgroundWaveAudio.mp3")
    );
    this.headerWindAudio = new Audio(
      require("./assets/audio/headerWindAudio.mp3")
    );
    this.logoWindAudio = new Audio(require("./assets/audio/logoWindAudio.mp3"));
    this.footerInWaveAudio = new Audio(
      require("./assets/audio/footerInWaveAudio.mp3")
    );
    this.footerOutWaveAudio = new Audio(
      require("./assets/audio/footerOutWaveAudio.mp3")
    );
    this.donateShakeAudio = new Audio(
      require("./assets/audio/donateShakeAudio.mp3")
    );
    this.orderLinkAudioOne = new Audio(
      require("./assets/audio/orderLinkAudioOne.mp3")
    );
    this.orderLinkAudioTwo = new Audio(
      require("./assets/audio/orderLinkAudioTwo.mp3")
    );
    this.orderLinkAudioThree = new Audio(
      require("./assets/audio/orderLinkAudioThree.mp3")
    );
    this.orderLinkAudioFour = new Audio(
      require("./assets/audio/orderLinkAudioFour.mp3")
    );
    this.bellAudioOne = new Audio(require("./assets/audio/bellAudioOne.mp3"));
    this.bellAudioTwo = new Audio(require("./assets/audio/bellAudioTwo.mp3"));
    this.linkAudioList = [
      this.orderLinkAudioFour,
      this.orderLinkAudioOne,
      this.orderLinkAudioTwo,
      this.orderLinkAudioThree,
    ];
    this.audioArray = [
      this.backgroundWaveAudio,
      this.footerInWaveAudio,
      this.footerOutWaveAudio,
      this.headerWindAudio,
      this.logoWindAudio,
      this.orderLinkAudioOne,
      this.orderLinkAudioTwo,
      this.orderLinkAudioThree,
      this.orderLinkAudioFour,
      this.donateShakeAudio,
      this.bellAudioOne,
      this.bellAudioTwo,
    ];
    this.musicArray = [];
    this.soundArray = this.audioArray.concat(this.musicArray);
    this.question = document.getElementById("question");
    this.soundMessage = document.getElementById("soundMessage");
    this.logo = document.getElementById("logo");
    this.appNav = document.getElementById("appNav");
    this.portNav = document.getElementById("portNav");
    this.orderNav = document.getElementById("orderNav");
    this.soundSpan = document.getElementById("soundSpan");
    this.musicSpan = document.getElementById("musicSpan");
    this.audioSpan = document.getElementById("audioSpan");
    this.orderDiv = document.getElementById("orderDiv");
    this.donateSpan = document.getElementById("donateSpan");
    this.footerUl = document.getElementById("footerUl");
    this.linkedinNav = document.getElementById("linkedinNav");
    this.emailNav = document.getElementById("emailNav");
    this.telegramNav = document.getElementById("telegramNav");
    this.mainContainer = document.getElementById("mainContainer");
    this.headerNavsList = [this.logo, this.appNav, this.portNav, this.orderNav];
    this.soundDivList = [this.soundSpan, this.musicSpan, this.audioSpan];
    this.footerNavsList = [this.linkedinNav, this.emailNav, this.telegramNav];
  },

  destroyed() {
    window.removeEventListener("resize", this.windowWidthClassEmitter);
    window.removeEventListener("DOMContentLoaded", this.documentLoading);
    window.removeEventListener("load", this.documentLoaded);
  },
};
</script>

<style scoped>
@import "assets/css/loading.css";
@import "assets/css/home.css";
@import "assets/css/home-animations.css";
</style>
