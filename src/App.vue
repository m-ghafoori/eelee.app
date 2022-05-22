<template>
  <router-view
    @screen-width-change="screenWidthChangeHandler"
    @sound-enabled="enableSoundHandler"
    @sound-disabled="disableSoundHandler"
    :isSoundSelected="this.isSoundSelected"
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

    screenWidthChangeHandler(sizeClass) {
      this.sizeHistoryArray.push(sizeClass);
      this.sizeHistoryArray.shift();
      if (
        this.sizeHistoryArray.includes('lg') &&
        this.sizeHistoryArray[0] != this.sizeHistoryArray[1]
      ) {
        this.$router.go(0);
      }
    },

    enableSoundHandler() {
      this.isSoundMuted = false;
      this.isSoundSelected = true;
    },

    disableSoundHandler() {
      this.isSoundMuted = true;
      this.isSoundSelected = true;
    },
  },

  created() {
    var initialSize = this.windowWidthClassEmitter();
    this.sizeHistoryArray.push(initialSize);
    this.sizeHistoryArray.push(initialSize);
    console.log("created:", this.sizeHistoryArray);
  },

  emits: ["screen-width-change", "sound-enabled", "sound-disabled"],
};
</script>

<style>
@import "@/assets/css/animate.css";
@import "@/assets/css/global.css";
</style>
