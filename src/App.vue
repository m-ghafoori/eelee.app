<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      isLoaded: false,
    };
  },

  // mounted() {
  //   // window.addEventListener("loadstart", () => {

  //   // })
  //   window.addEventListener("load", () => {
  //     console.log("loaded");
  //       this.isLoaded = true;
  //   });
  // },
};
</script>

<style scoped>
@import "@/assets/css/loading.css";
@import "@/assets/css/animations.css";
@import "@/assets/css/global.css";
</style>
