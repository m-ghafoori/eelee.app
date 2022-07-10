<template>
  <div
    id="idpa-body"
    class="body"
    @mousedown="onBodyDivMouseDown"
  >
    <header
      id="idpa-header"
      class="header"
    >
      <router-link id="idpa-logo" to="/" class="logo idpa-hoverable"
        >EELee</router-link
      >
      <ul
        id="idpa-headerNav"
        class="header-nav"
        :style="headerNavStyle"
      >
        <li>
          <router-link to="/" class="nav-link idpa-hoverable">Home</router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="nav-link idpa-hoverable"
            >Portfolio</router-link
          >
        </li>
        <li>
          <router-link to="/donate" class="nav-link idpa-hoverable"
            >Donate</router-link
          >
        </li>
        <li>
          <router-link to="/order" class="nav-link idpa-hoverable"
            >Order Now!</router-link
          >
        </li>
      </ul>
      <span
        id="idpa-menuButton"
        class="menu-button d-none"
        @click="onMenuButtonClick"
      >
        <img
          id="idpa-menuImg"
          class="idpa-hoverable"
          :src="require(`@/assets/images/svg/menu-button.svg`)"
          alt=""
          @mouseenter="onMenuImgMouseEnter"
          @mouseleave="onMenuImgMouseLeave"
        />
      </span>
    </header>

    <section id="idpa-showcase" class="showcase">
      <Table @contextmenu="preventDefaultEvents" />
    </section>

    <footer
      id="idpa-footer"
      class="
        footer
      "
    >
      <div
        id="idpo-footerNav"
        class="footer-nav"
      >
        <a
          href="https://www.linkedin.com/"
          target="blank"
          class="idpo-hoverable"
          @mouseenter="onLinkedinMouseEnter"
          @mouseleave="onLinkedinMouseLeave"
        >
          <img
            id="idpo-linkedinNav"
            :src="require(`@/assets/images/svg/linkedin-${widthClass}.svg`)"
            alt=""
          />
        </a>
        <router-link
          to="/contact"
          class="idpo-hoverable"
          @mouseenter="onEmailMouseEnter"
          @mouseleave="onEmailMouseLeave"
        >
          <img
            id="idpo-emailNav"
            :src="require(`@/assets/images/svg/email-${widthClass}.svg`)"
            alt=""
          />
        </router-link>
        <a
          href="https://t.me"
          target="blank"
          class="idpo-hoverable"
          @mouseenter="onTelegramMouseEnter"
          @mouseleave="onTelegramMouseLeave"
        >
          <img
            id="idpo-telegramNav"
            :src="require(`@/assets/images/svg/telegram-${widthClass}.svg`)"
            alt=""
          />
        </a>
      </div>
      <router-link
        id="idpa-footerNote"
        to="/portfolio"
        class="footer-note idpa-hoverable"
        >&copy; 2022 - EELee App Design</router-link
      >
    </footer>
  </div>
</template>

<script>
import Table from "./components/Table.vue";

export default {
  name: "AppLication",
  components: {
    Table,
  },
  data() {
    return {
      widthClass: String,
      vw: Number,
      headerNavLeftPosition: Number,
      sizeHistoryArray: [],
      isMounted: false,
      isVerticalMenuExpanded: false,

      // Elements Object Refs
      header: Object,
      logo: Object,
      headerNav: Object,
      menuButton: Object,
      menuImg: Object,
      showcase: Object,
      linkedinNav: Object,
      emailNav: Object,
      telegramNav: Object,
    };
  },

  watch: {
    isVerticalMenuExpanded(val) {
      if (val) {
        this.menuImg.setAttribute(
          "src",
          require(`@/assets/images/svg/menu-button-hover.svg`)
        );
        this.headerNav.classList.remove("invisible", "scale-down-ver-top");
        this.headerNav.classList.add("scale-up-ver-top");
        this.showcase.style.opacity = "0.2";
      } else {
        this.menuImg.setAttribute(
          "src",
          require(`@/assets/images/svg/menu-button.svg`)
        );
        this.headerNav.classList.remove("scale-up-ver-top");
        this.headerNav.classList.add("scale-down-ver-top");
        this.showcase.style.opacity = "1";
      }
    },
  },

  computed: {
    headerNavStyle() {
      return {
        left: `${this.headerNavLeftPosition}px`,
      };
    },
  },

  methods: {
    // Utility Methods

    preventDefaultEvents(e) {
      e = e || window.event;
      e.preventDefault();
    },

    // Tracks width size changes by updating sizeHistoryArray
    sizeHistoryUpdator(sizeClass) {
      this.sizeHistoryArray.push(sizeClass);
      if (this.sizeHistoryArray.length > 2) this.sizeHistoryArray.shift();
      if (
        this.sizeHistoryArray.includes("sm") &&
        this.sizeHistoryArray.includes("xs")
      ) {
        if (this.isVerticalMenuExpanded) this.isVerticalMenuExpanded = false;
        setTimeout(() => {
          this.headerNavDisplay();
        }, 50);
      }
    },

    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      var windowWidth = window.innerWidth;

      if (windowWidth < 320) this.widthClass = "xxs";
      else if (windowWidth < 576) this.widthClass = "xs";
      else if (windowWidth < 768) this.widthClass = "sm";
      else if (windowWidth < 992) this.widthClass = "md";
      else this.widthClass = "lg";
      this.sizeHistoryUpdator(this.widthClass);
      if (this.isMounted) {
        this.vw = windowWidth / 100;
        this.headerNavLeftCalculator();
      }
    },

    // Calculates the pixel numbers for left property of headerNav
    headerNavLeftCalculator() {
      if (window.innerWidth >= 576) this.headerNavLeftPosition = 0;
      else {
        this.headerNavLeftPosition =
          (this.header.offsetWidth -
            (this.vw * 5 +
              65 +
              this.logo.offsetWidth +
              this.menuButton.offsetWidth +
              this.headerNav.offsetWidth)) /
            2 +
          this.vw * 4 +
          this.menuButton.offsetWidth;
      }
    },

    // Determines how header navbar should be displayed
    headerNavDisplay() {
      if (window.innerWidth < 576) {
        this.headerNav.classList.remove("align-items-center");
        this.headerNav.classList.add(
          "invisible",
          "flex-column",
          "align-items-end",
          "vertical-menu"
        );
        this.menuButton.classList.remove("d-none");
      } else {
        this.headerNav.classList.remove(
          "invisible",
          "scale-down-ver-top",
          "flex-column",
          "align-items-end",
          "vertical-menu"
        );
        this.headerNav.classList.add("align-items-center");
        this.menuButton.classList.add("d-none");
      }
    },

    // Event Handlers

    onBodyDivMouseDown($event) {
      if (this.isVerticalMenuExpanded) {
        if (
          !$event.target.classList.contains("nav-link") &&
          $event.target.id != "idpa-menuImg"
        )
          this.isVerticalMenuExpanded = false;
      }
    },
    onMenuButtonClick() {
      this.isVerticalMenuExpanded = !this.isVerticalMenuExpanded;
    },
    onMenuImgMouseEnter() {
      this.menuImg.setAttribute(
        "src",
        require(`@/assets/images/svg/menu-button-hover.svg`)
      );
    },
    onMenuImgMouseLeave() {
      if (!this.isVerticalMenuExpanded)
        this.menuImg.setAttribute(
          "src",
          require(`@/assets/images/svg/menu-button.svg`)
        );
    },

    // Footer

    onLinkedinMouseEnter() {
      this.linkedinNav.setAttribute(
        "src",
        require(`@/assets/images/svg/linkedin-hover-${this.widthClass}.svg`)
      );
    },
    onLinkedinMouseLeave() {
      this.linkedinNav.setAttribute(
        "src",
        require(`@/assets/images/svg/linkedin-${this.widthClass}.svg`)
      );
    },
    onEmailMouseEnter() {
      this.emailNav.setAttribute(
        "src",
        require(`@/assets/images/svg/email-hover-${this.widthClass}.svg`)
      );
    },
    onEmailMouseLeave() {
      this.emailNav.setAttribute(
        "src",
        require(`@/assets/images/svg/email-${this.widthClass}.svg`)
      );
    },
    onTelegramMouseEnter() {
      this.telegramNav.setAttribute(
        "src",
        require(`@/assets/images/svg/telegram-hover-${this.widthClass}.svg`)
      );
    },
    onTelegramMouseLeave() {
      this.telegramNav.setAttribute(
        "src",
        require(`@/assets/images/svg/telegram-${this.widthClass}.svg`)
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
    this.header = document.getElementById("idpa-header");
    this.logo = document.getElementById("idpa-logo");
    this.headerNav = document.getElementById("idpa-headerNav");
    this.menuButton = document.getElementById("idpa-menuButton");
    this.menuImg = document.getElementById("idpa-menuImg");
    this.showcase = document.getElementById("idpa-showcase");
    this.donationForm = document.getElementById("idpa-donationForm");
    this.linkedinNav = document.getElementById("idpa-linkedinNav");
    this.emailNav = document.getElementById("idpa-emailNav");
    this.telegramNav = document.getElementById("idpa-telegramNav");
    this.isMounted = true;
    document.body.parentElement.style.overflowY = "auto";
    this.windowWidthClassEmitter();
    this.headerNavDisplay();
    this.headerNavLeftCalculator();
  },

  beforeUnmount() {
    document.body.parentElement.style.overflowY = "hidden";
  },
};
</script>

<style>
@import "./assets/css/application.css";
</style>
