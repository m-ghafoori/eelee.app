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
};
</script>

<style scoped>
@import "@/assets/css/loading.css";
@import "@/assets/css/animations.css";
@import "@/assets/css/global.css";
</style>
