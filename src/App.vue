<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view @screen-width-change="screenWidthChangeHandler"></router-view>
</template>

<script>
export default {
  data() {
    return {
      sizeHistoryArray: []
    }
  },
  methods: {

    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      var windowWidth = window.innerWidth;

      switch (true) {
          case (windowWidth < 320):
              return 'xxs';
      
          case (windowWidth < 576):
              return 'xs';
      
          case (windowWidth < 768):
              return 'sm';
      
          case (windowWidth < 992):
              return 'md';
              
          default:
              return 'lg';
      }
    },
    
    // Adds all numbers in an array
    sumArrayElements(array) {
      var reducer = (previousValue, currentValue) => previousValue + currentValue;
      var sum = array.reduce(reducer);
      return sum;
    },

    // Takes two arrays and checks wether they are equal
    checkArraysEquality(first, second) {
      var logArray = [0];
      var logResult = 0;
      var loopRange = Math.max(first.length, second.length);

      for (let i = 0; i < loopRange; i++) {
      if (first[i] != second[i]) {
          logArray.push(1);
      } else {
          logArray.push(0);
      }    
      }
      
      logResult = this.sumArrayElements(logArray);
      return (logResult == 0 ? true : false);
    },

    screenWidthChangeHandler(sizeClass) {
      this.sizeHistoryArray.push(sizeClass)
      this.sizeHistoryArray.shift();
      // console.log(this.sizeHistoryArray)
      if (this.checkArraysEquality(this.sizeHistoryArray, ['lg','md'])
        ||this.checkArraysEquality(this.sizeHistoryArray, ['md','lg'])) {
        this.$router.go(0);
      }
    }
  },
  created() {
    var initialSize = this.windowWidthClassEmitter()
    this.sizeHistoryArray.push(initialSize)
    this.sizeHistoryArray.push(initialSize)
    console.log('created:',this.sizeHistoryArray);
  },
  emits: ['screen-width-change']
  }
</script>

<style>
@import '@/assets/css/animate.css';
@import '@/assets/css/global.css';

body {
  margin: 0;
}
</style>
