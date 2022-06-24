<template>
  <router-view
    @screen-width-change="onScreenWidthChange"
  ></router-view>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      sizeHistoryArray: [],
    };
  },
  watcher: {
    docHasFocus(val) {
      console.log(val)
    }
  },
  computed: {
    docHasFocus() {
      return document.hasFocus();
    },
  },
  methods: {
    // Utility Methods

    preventDefaultEvents (e) {
      e = e || window.event;
      e.preventDefault();
    },
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

    onScreenWidthChange(sizeClass) {
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
  },

  created() {
    var initialSize = this.windowWidthClassEmitter();
    this.sizeHistoryArray.push(initialSize);
    this.sizeHistoryArray.push(initialSize);
    console.log("created:", this.sizeHistoryArray);
  },
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  updated() {
      console.log(this.docHasFocus)
  },
  emits: ['screen-width-change'],
};
</script>

<style>
@import "@/assets/css/animate.css";
@import "@/assets/css/global.css";
</style>
