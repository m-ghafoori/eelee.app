<template>
  <header class="header">
    <router-link
      ref="logo"
      to="/"
      class="logo hoverable"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      @mousedown="onMouseDown"
      >EELee</router-link
    >
    <div class="header-nav">
      <VerticalMenu :showIfLessThanPx="576" />
      <ul class="nav-ul">
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
    logoMainColor: {
      default: "#b42857",
    },
    logoHoverColor: {
      default: "#2ec7a6",
    },
    logoActiveColor: {
      default: "#5eecf9",
    },
    navLinkMainColor: {
      default: "#0d8a6f",
    },
    navLinkHoverColor: {
      default: "#fb4a85",
    },
    navLinkActiveColor: {
      default: "#49a8f0",
    },
  },

  methods: {
    // Event Handlers

    onMouseOver($event) {
      if ($event.target.classList.contains("logo"))
        $event.target.style.color = this.logoHoverColor;
      else $event.target.style.color = this.navLinkHoverColor;
    },
    onMouseOut($event) {
      if ($event.target.classList.contains("logo"))
        $event.target.style.color = this.logoMainColor;
      else $event.target.style.color = this.navLinkMainColor;
    },
    onMouseDown($event) {
      if ($event.target.classList.contains("logo"))
        $event.target.style.color = this.logoActiveColor;
      else $event.target.style.color = this.navLinkActiveColor;
    },
  },

  mounted() {
    document.querySelector(".logo").style.color = this.logoMainColor;
    document.querySelectorAll(".nav-link").forEach((el) => {
      if (el.getAttribute("href") == this.pageRoute) el.parentElement.remove();
      else {
        el.style.color = this.navLinkMainColor;
        el.addEventListener("mouseover", this.onMouseOver);
        el.addEventListener("mouseout", this.onMouseOut);
        el.addEventListener("mousedown", this.onMouseDown);
      }
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
  padding-right: 0.6rem;
  text-decoration: none;
}

.header-nav {
  height: fit-content;
  max-height: fit-content;
  display: flex;
  flex-grow: 1;
  position: relative;
}

.vertical-nav {
  flex-direction: column !important;
  flex-grow: unset !important;
  width: fit-content !important;
  align-self: flex-start !important;
  margin-top: 15px !important;
}

.nav-ul {
  height: 100%;
  font-size: calc(1.5vw + 0.7rem);
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.nav-ul li {
  width: fit-content;
  height: fit-content;
  margin: auto 0;
  font-size: calc(1.5vw + 2vh);
}

.vertical-ul {
  width: calc(100% - 40px) !important;
  height: 60vh !important;
  min-height: 250px !important;
  font-size: calc(3vw + 0.5rem) !important;
  flex-direction: column !important;
  align-items: flex-end !important;
  align-self: flex-start !important;
}

.vertical-ul * {
  font-size: calc(3vw + 0.5rem) !important;
}

.nav-link {
  min-width: fit-content;
  font-family: "Poiret One", cursive;
  font-weight: 1000;
  margin: 1vw 0 1vw 4vw;
  text-decoration: none;
  white-space: nowrap;
}
</style>