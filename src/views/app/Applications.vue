<template>
  <div id="idpa-body" class="body">
    <Header
      pageRoute="/app"
      logoHoverColor="#ff711f"
      logoActiveColor="#ff1ff0"
      navLinkActiveColor="#ff1ff0"
    />
    <section id="idpa-showcase" class="showcase">
      <MineSweeper />
    </section>
    <Footer noteHoverColor="#ff711f" />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import MineSweeper from "./components/MineSweeper/MineSweeper.vue";

export default {
  name: "AppLication",
  components: {
    Header,
    Footer,
    MineSweeper,
  },

  mounted() {
    document.querySelectorAll(".hoverable").forEach((element) => {
      element.classList.remove("hoverable");
      element.classList.add("pointer-green");
    });
  },
};
</script>

<style>
@import "./assets/css/applications.css";
</style>
