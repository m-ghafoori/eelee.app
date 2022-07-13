<template>
  <div id="idpa-body" class="body">
    <Header pageRoute="/app" />
    <section id="idpa-showcase" class="showcase">
      <Table />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Table from "./components/Table/Table.vue";

export default {
  name: "AppLication",
  components: {
    Header,
    Footer,
    Table,
  },

  mounted() {
    document.body.parentElement.style.overflowY = "auto";
    document.querySelectorAll(".hoverable").forEach((element) => {
      element.classList.remove("hoverable");
      element.classList.add("pointer-green");
    });
  },

  beforeUnmount() {
    document.body.parentElement.style.overflowY = "hidden";
  },
};
</script>

<style>
@import "./assets/css/application.css";
</style>
