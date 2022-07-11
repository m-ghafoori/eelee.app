<template>
  <footer class="footer">
    <div class="footer-nav">
      <a
        href="https://www.linkedin.com/"
        target="blank"
        class="hoverable"
        @mouseenter="onLinkedinMouseEnter"
        @mouseleave="onLinkedinMouseLeave"
      >
        <Linkedin
          :imgWidth="windowWidth / 50 + 21"
          :imgColor="linkedinIconColor"
        />
      </a>
      <router-link
        to="/contact"
        class="hoverable"
        @mouseenter="onEmailMouseEnter"
        @mouseleave="onEmailMouseLeave"
      >
        <Email :imgWidth="windowWidth / 50 + 35" :imgColor="emailIconColor" />
      </router-link>
      <a
        href="https://t.me"
        target="blank"
        class="hoverable"
        @mouseenter="onTelegramMouseEnter"
        @mouseleave="onTelegramMouseLeave"
      >
        <Telegram
          :imgWidth="windowWidth / 50 + 27"
          :imgColor="telegramIconColor"
        />
      </a>
    </div>
    <router-link to="/portfolio" class="footer-note hoverable"
      >&copy; 2022 - EELee App Design</router-link
    >
  </footer>
</template>

<script>
import Linkedin from "./components/Linkedin.vue";
import Email from "./components/Email.vue";
import Telegram from "./components/Telegram.vue";

export default {
  name: "Footer",
  components: {
    Linkedin,
    Email,
    Telegram,
  },
  props: {
    mainColor: {
      type: String,
      default: "#0d8a6f",
    },
    hoverColor: {
      type: String,
      default: "#fb4a85",
    },
  },

  data() {
    return {
      windowWidth: Number,
      linkedinIconColor: "#0d8a6f",
      emailIconColor: "#0d8a6f",
      telegramIconColor: "#0d8a6f",
    };
  },

  methods: {
    // Utility Methods

    // Emits window width on resize
    windowWidthClassEmitter() {
      this.windowWidth = window.innerWidth;
    },

    // Event Handlers

    onLinkedinMouseEnter() {
      this.linkedinIconColor = this.hoverColor;
    },
    onLinkedinMouseLeave() {
      this.linkedinIconColor = this.mainColor;
    },
    onEmailMouseEnter() {
      this.emailIconColor = this.hoverColor;
    },
    onEmailMouseLeave() {
      this.emailIconColor = this.mainColor;
    },
    onTelegramMouseEnter() {
      this.telegramIconColor = this.hoverColor;
    },
    onTelegramMouseLeave() {
      this.telegramIconColor = this.mainColor;
    },
  },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },

  beforeMount() {
    this.windowWidthClassEmitter();
  },
  mounted() {
    this.linkedinIconColor = this.mainColor;
    this.emailIconColor = this.mainColor;
    this.telegramIconColor = this.mainColor;
  },
};
</script>

<style>
.footer {
  width: 40%;
  height: 105px;
  min-width: 200px;
  position: absolute;
  bottom: 0;
  align-self: center;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.footer-nav {
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-note {
  width: fit-content;
  text-decoration: none;
  font-family: "Gluten", cursive;
  font-size: calc(1vw + 0.5rem);
  white-space: nowrap;
  color: #d8215e;
}

.footer-note:hover {
  color: #2ec7a6;
}

@media (max-width: 320px) {
  .footer {
    width: 70%;
  }
}

@media (min-width: 320px) and (max-width: 576px) {
  .footer {
    width: 60%;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .footer {
    width: 50%;
  }
}
</style>