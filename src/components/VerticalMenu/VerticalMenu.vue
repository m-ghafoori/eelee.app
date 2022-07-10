<template>
  <span ref="menuButton" class="menu-button d-none" @click="onMenuButtonClick">
    <img
      ref="menuImg"
      class="menu-img"
      alt=""
      @mouseenter="onMenuImgMouseEnter"
      @mouseleave="onMenuImgMouseLeave"
    />
  </span>
</template>

<script>
export default {
  name: "VerticalMenu",

  props: {
    idPrefix: String,
    showIfLessThanPx: Number,
    imgColor: String,
  },

  data() {
    return {
      widthClass: String,
      windowWidth: Number,
      isMenuExpanded: false,
      isMounted: false,
      bodyDiv: Object,
      headerNav: Object,
      showcase: Object,
    };
  },

  watch: {
    windowWidth(val) {
      if (val >= this.showIfLessThanPx && this.isMenuExpanded)
        this.isMenuExpanded = false;
      setTimeout(() => {
        this.headerNavDisplay();
      }, 50);
    },

    isMenuExpanded(val) {
      if (val) {
        this.$refs.menuImg.setAttribute(
          "src",
          require(`./assets/menu-button-${this.imgColor}-hover.svg`)
        );
        this.headerNav.classList.remove("invisible", "scale-down-ver-top");
        this.headerNav.classList.add("scale-up-ver-top");
        this.showcase.style.opacity = "0.2";
      } else {
        this.headerNav.classList.remove("scale-up-ver-top");
        this.headerNav.classList.add("scale-down-ver-top");
        this.showcase.style.opacity = "1";
      }
    },
  },

  methods: {
    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth < 320) this.widthClass = "xxs";
      else if (this.windowWidth < 576) this.widthClass = "xs";
      else if (this.windowWidth < 768) this.widthClass = "sm";
      else if (this.windowWidth < 992) this.widthClass = "md";
      else this.widthClass = "lg";
    },

    // Determines how header navbar should be displayed
    headerNavDisplay() {
      if (this.isMounted) {
        if (this.windowWidth < this.showIfLessThanPx) {
          this.headerNav.style.left = "65px";
          this.headerNav.classList.remove("align-items-center");
          this.headerNav.classList.add(
            "flex-column",
            "align-items-end",
            "vertical-menu"
          );
          if (!this.isMenuExpanded) this.headerNav.classList.add("invisible");
          this.$refs.menuButton.classList.remove("d-none");
        } else {
          this.headerNav.style.left = "0px";
          this.headerNav.classList.remove(
            "invisible",
            "scale-down-ver-top",
            "flex-column",
            "align-items-end",
            "vertical-menu"
          );
          this.headerNav.classList.add("align-items-center");
          this.$refs.menuButton.classList.add("d-none");
          this.$refs.menuImg.setAttribute(
            "src",
            require(`./assets/menu-button-${this.imgColor}.svg`)
          );
        }
      }
    },

    // Event Handlers

    onBodyDivClick($event) {
      if (this.isMenuExpanded) {
        if (
          !$event.target.classList.contains("nav-link") &&
          !$event.target.classList.contains("menu-img")
        )
          this.isMenuExpanded = false;
      }
    },
    onMenuButtonClick() {
      this.isMenuExpanded = !this.isMenuExpanded;
    },
    onMenuImgMouseEnter() {
      this.$refs.menuImg.setAttribute(
        "src",
        require(`./assets/menu-button-${this.imgColor}-hover.svg`)
      );
    },
    onMenuImgMouseLeave() {
      if (!this.isMenuExpanded)
        this.$refs.menuImg.setAttribute(
          "src",
          require(`./assets/menu-button-${this.imgColor}.svg`)
        );
    },
  },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },

  beforeMount() {
    this.windowWidthClassEmitter();
  },

  mounted() {
    this.bodyDiv = document.querySelector(".body");
    this.header = document.querySelector(".header");
    this.logo = document.querySelector(".logo");
    this.headerNav = document.querySelector(".header-nav");
    this.showcase = document.querySelector(".showcase");
    this.bodyDiv.addEventListener("click", this.onBodyDivClick);
    this.isMounted = true;
    this.windowWidthClassEmitter();
    this.headerNavDisplay();
    this.$refs.menuImg.setAttribute(
      "src",
      require(`./assets/menu-button-${this.imgColor}.svg`)
    );
    this.$refs.menuImg.classList.add(`${this.idPrefix}-hoverable`);
  },
};
</script>

<style>
</style>