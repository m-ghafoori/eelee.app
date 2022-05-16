<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },  
  methods: {
    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      var windowWidth = window.innerWidth;

      switch (true) {
        case (windowWidth < 320):
          this.$emit('screen-width-change', 'xxs')
          break;
    
        case (windowWidth < 576):
          this.$emit('screen-width-change', 'xs')
          break;
    
        case (windowWidth < 768):
          this.$emit('screen-width-change', 'sm')
          break;
        
        case (windowWidth < 992):
          this.$emit('screen-width-change', 'md')
          break;
            
        default:
          this.$emit('screen-width-change', 'lg')
          break;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },
  destroyed() {
    window.removeEventListener("resize", this.windowWidthClassEmitter);
  },
}
</script>
