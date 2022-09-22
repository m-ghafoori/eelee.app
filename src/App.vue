<template>
  <router-view></router-view>
  <div class="loading">
    <img src="@/assets/loading.svg" />
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    onresize() {
      if (window.innerWidth / window.innerHeight > 1.5)
        document.body.parentElement.style.background = "#ffffff";
      else document.body.parentElement.style.background = "#000000";
    },
  },

  created() {
    window.addEventListener("resize", this.onresize);
  },

  mounted() {
    if (window.innerWidth / window.innerHeight <= 1.5)
      document.body.parentElement.style.background = "#000000";
  },
};
</script>

<style scoped>
@import "@/assets/css/animations.css";
@import "@/assets/css/global.css";

.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
