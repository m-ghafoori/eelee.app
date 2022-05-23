<template>
  <router-view
    @screen-width-change="screenWidthChangeHandler"
    @sound-enabled="enableSoundHandler"
    @sound-disabled="disableSoundHandler"
    :isSoundSelected="this.isSoundSelected"
    :soundAlreadySelected="this.soundAlreadySelected"
    :isSoundMuted="this.isSoundMuted"
  ></router-view>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      sizeHistoryArray: [],
      isSoundSelected: false,
      isSoundMuted: false,
      soundAlreadySelected: false,
    };
  },

  methods: {
    // Utility Methods

    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      var windowWidth = window.innerWidth;

      switch (true) {
        case windowWidth < 320:
          return "xxs";

        case windowWidth < 576:
          return "xs";

        case windowWidth < 768:
          return "sm";

        case windowWidth < 992:
          return "md";

        default:
          return "lg";
      }
    },

    // Event Handler Methods

    beforeUnloadHandler() {
      if (this.isSoundSelected) {
        this.$router.push({name: 'home'})
      }
    },

    screenWidthChangeHandler(sizeClass) {
      this.sizeHistoryArray.push(sizeClass);
      this.sizeHistoryArray.shift();
      if (
        this.sizeHistoryArray.includes('lg') &&
        this.sizeHistoryArray[0] != this.sizeHistoryArray[1]
      ) {
        if (this.$route.path == '/') this.$router.go('/home');
        if (this.$route.path == '/home') this.$router.go('/');      
      }
    },

    enableSoundHandler(fromQuestion) {
      this.$router.push({name: 'home'})
      setTimeout(() => {
        this.isSoundMuted = false;
        if (fromQuestion) {
          this.isSoundSelected = true;
        } else if (this.isSoundSelected) {
          this.soundAlreadySelected = true;
        }
      }, 500);
    },

    disableSoundHandler(fromQuestion) {
      this.$router.push({name: 'home'})
      setTimeout(() => {
        this.isSoundMuted = true;
        if (fromQuestion) {
          this.isSoundSelected = true;
        } else if (this.isSoundSelected) {
          this.soundAlreadySelected = true;
        }
      }, 500);
    },
  },

  created() {
    window.addEventListener("beforeunload", this.beforeUnloadHandler);
    var initialSize = this.windowWidthClassEmitter();
    this.sizeHistoryArray.push(initialSize);
    this.sizeHistoryArray.push(initialSize);
    console.log("created:", this.sizeHistoryArray);
  },

  destroyed() {
    window.removeEventListener("beforeunload", this.beforeUnloadHandler);
  },

  emits: ["screen-width-change", "sound-enabled", "sound-disabled"],
};
</script>

<style>
@import "@/assets/css/animate.css";
@import "@/assets/css/global.css";
</style>
