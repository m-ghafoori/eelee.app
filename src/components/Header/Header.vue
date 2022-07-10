<template>
  <header class="header">
    <router-link to="/" class="logo hoverable">EELee</router-link>
      <ul
        class="header-nav"
      >
        <li>
          <router-link to="/" class="nav-link hoverable">Home</router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="nav-link hoverable"
            >Portfolio</router-link
          >
        </li>
        <li>
          <router-link to="/app" class="nav-link hoverable"
            >App</router-link
          >
        </li>
        <li>
          <router-link to="/donate" class="nav-link hoverable"
            >Donate</router-link
          >
        </li>
        <li>
          <router-link to="/order" class="nav-link hoverable"
            >Order Now!</router-link
          >
        </li>
      </ul>
    <VerticalMenu
      imgColor="maroon"
      :showIfLessThanPx="576"
    />
  </header>
</template>

<script>
import VerticalMenu from "./components/VerticalMenu/VerticalMenu.vue";

export default {
  name: "Header",

  components: {
    VerticalMenu,
  },

  props: {
    pageRoute: String,
  },

  mounted() {
    document.querySelectorAll(".nav-link").forEach((el) => {
      if (el.getAttribute('href') == this.pageRoute) el.parentElement.remove();
    });
  },
};
</script>

<style>
</style>