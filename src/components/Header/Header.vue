<template>
  <header class="header">
    <router-link to="/" class="logo hoverable">EELee</router-link>
    <div class="nav-div">
      <VerticalMenu :showIfLessThanPx="576" />
      <ul class="header-nav">
        <li>
          <router-link to="/" class="nav-link hoverable">Home</router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="nav-link hoverable"
            >Portfolio</router-link
          >
        </li>
        <li>
          <router-link to="/app" class="nav-link hoverable">App</router-link>
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
    </div>
  </header>
</template>

<script>
import VerticalMenu from "./components/VerticalMenu.vue";

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
      if (el.getAttribute("href") == this.pageRoute) el.parentElement.remove();
    });
  },
};
</script>

<style>
.header {
  height: 60px;
  position: fixed;
  padding-top: 5px;
  margin-bottom: 10px;
  z-index: 200;
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: fit-content;
  height: fit-content;
  font-family: "Fredericka the Great", cursive;
  font-weight: 1000;
  font-size: calc(1vw + 1.4rem);
  padding-left: calc(2vw + 1rem);
  text-decoration: none;
  color: #b42857;
}

.logo:hover {
  color: #2ec7a6;
}

.nav-div {
  display: flex;
  flex-grow: 1;
  position: relative;
}

.header-nav {
  height: 100%;
  font-size: calc(1.5vw + 0.7rem);
  position: relative;
  margin: 0;
  display: flex;
  flex-grow: 1;
}

.header-nav li {
  width: fit-content;
  height: fit-content;
  margin: auto 0;
  font-size: calc(1.5vw + 2vh);
}

.vertical-menu {
  width: calc(100% - 40px) !important;
  height: 60vh !important;
  min-height: 250px !important;
  font-size: calc(3vw + 0.5rem) !important;
  align-self: flex-start !important;
}

.vertical-menu * {
  font-size: calc(3vw + 0.5rem) !important;
}

.nav-link {
  min-width: fit-content;
  font-family: "Poiret One", cursive;
  font-weight: 1000;
  color: #0d8a6f;
  margin: 1vw 0 1vw 4vw;
  text-decoration: none;
  white-space: nowrap;
}

.nav-link:hover {
  color: #fb4a85;
}

.nav-link:active {
  color: #49a8f0;
}

@media (max-width: 576px) {
  .nav-div {
    flex-direction: column;
    flex-grow: unset;
    width: fit-content;
    align-self: flex-start;
    margin-top: 15px;
  }
}
</style>