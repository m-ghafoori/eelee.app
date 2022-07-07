<template>
  <div
    id="idpc-body"
    class="body d-flex flex-column justify-content-between"
    @click="onBodyDivClick"
  >
    <header
      id="idpc-header"
      class="header d-flex justify-content-between align-items-center"
    >
      <router-link id="idpc-logo" to="/" class="logo idpc-hoverable"
        >EELee</router-link
      >
      <ul
        id="idpc-headerNav"
        class="header-nav d-flex align-items-center"
        :style="headerNavStyle"
      >
        <li>
          <router-link to="/" class="nav-link idpc-hoverable">Home</router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="nav-link idpc-hoverable"
            >Portfolio</router-link
          >
        </li>
        <li>
          <router-link to="/app" class="nav-link idpc-hoverable"
            >App</router-link
          >
        </li>
        <li>
          <router-link to="/donate" class="nav-link idpc-hoverable"
            >Donate</router-link
          >
        </li>
        <li>
          <router-link to="/order" class="nav-link idpc-hoverable"
            >Order Now!</router-link
          >
        </li>
      </ul>
      <span
        id="idpc-menuButton"
        class="menu-button d-none"
        @click="onMenuButtonClick"
      >
        <img
          id="idpc-menuImg"
          class="idpc-hoverable"
          :src="require(`@/assets/images/svg/menu-button.svg`)"
          alt=""
          @mouseenter="onMenuImgMouseEnter"
          @mouseleave="onMenuImgMouseLeave"
        />
      </span>
    </header>

    <section id="idpc-showcase" class="d-flex flex-column align-items-start">
      <div id="idpc-messagereceived" class="d-none">
        Thanks! <br /><br /><br />
        Your message has been received. <br /><br /><br />
        We will contact you in two days :)
      </div>
      <div id="idpc-contactForm" class="d-flex flex-column align-items-start">
        <p id="idpc-contactPar">
          You can fill the form below or email us to
          <span id="idpc-contactEmail">"eelee.app@gmail.com"</span>
        </p>
        <div class="idpc-clientInfo">
          <label for="clientName">Name:</label>
          <input
            type="text"
            name="clientName"
            id="idpc-clientName"
            v-model="clientName"
            :style="clientNameStyle"
            @click="onClientNameClick"
            required
          />
        </div>
        <div class="idpc-clientInfo">
          <label for="clientEmail">Email:</label>
          <input
            type="email"
            name="clientEmail"
            id="idpc-clientEmail"
            v-model="clientEmail"
            :style="clientEmailStyle"
            @click="onClientEmailClick"
            required
          />
        </div>
        <div
          id="idpc-messageDiv"
          class="d-flex flex-column justify-content-between align-items-center"
        >
          <textarea
            name="clientMessage"
            id="idpc-clientMessage"
            cols="90"
            rows="10"
            v-model="clientMessage"
            :style="clientMessageStyle"
            @click="onClientMessageClick"
            required
          ></textarea>
          <div
            id="idpc-messageButtons"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="d-flex justify-content-between align-items-center">
              <span
                id="idpc-attachFile"
                class="idpc-hoverable"
                @click="onAttachClick"
                >Attach</span
              >
              <input id="idpc-attachInput" type="file" @change="onFileUpload" />
              <p id="idpc-fileNamePar">{{ fileName }}</p>
            </div>
            <span
              id="idpc-sendMessage"
              class="idpc-hoverable"
              @click="onSendMessageClick"
              >Send</span
            >
          </div>
        </div>
      </div>
    </section>

    <footer
      id="idpc-footer"
      class="
        footer
        d-flex
        flex-column
        justify-content-around
        align-items-center
      "
    >
      <div
        id="idpc-footerNav"
        class="footer-nav d-flex justify-content-between align-items-center"
      >
        <a
          href="https://www.linkedin.com/"
          target="blank"
          class="idpc-hoverable"
          @mouseenter="onLinkedinMouseEnter"
          @mouseleave="onLinkedinMouseLeave"
        >
          <img
            id="idpc-linkedinNav"
            :src="require(`@/assets/images/svg/linkedin-${widthClass}.svg`)"
            alt=""
          />
        </a>
        <router-link
          to="/contact"
          class="idpc-hoverable"
          @mouseenter="onEmailMouseEnter"
          @mouseleave="onEmailMouseLeave"
        >
          <img
            id="idpc-emailNav"
            :src="require(`@/assets/images/svg/email-${widthClass}.svg`)"
            alt=""
          />
        </router-link>
        <a
          href="https://t.me"
          target="blank"
          class="idpc-hoverable"
          @mouseenter="onTelegramMouseEnter"
          @mouseleave="onTelegramMouseLeave"
        >
          <img
            id="idpc-telegramNav"
            :src="require(`@/assets/images/svg/telegram-${widthClass}.svg`)"
            alt=""
          />
        </a>
      </div>
      <router-link
        id="idpc-footerNote"
        to="/portfolio"
        class="footer-note idpc-hoverable"
        >&copy; 2022 - EELee App Design</router-link
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      widthClass: String,
      vw: Number,
      headerNavLeftPosition: Number,
      sizeHistoryArray: [],
      clientName: "",
      clientEmail: "",
      clientLastEnteredEmail: "",
      clientMessage: "",
      clientNameColor: "#0b7a62",
      clientEmailColor: "#0b7a62",
      clientMessageColor: "#0b7a62",
      fileName: "",
      attachedFile: { name: "" },
      isMounted: false,
      isVerticalMenuExpanded: false,
      showNoNameError: false,
      showNoEmailError: false,
      showInvalidEmailError: false,
      showNoMessageError: false,

      //
      header: Object,
      logo: Object,
      headerNav: Object,
      menuButton: Object,
      menuImg: Object,
      showcase: Object,
      messagereceived: Object,
      contactPar: Object,
      contactForm: Object,
      clientNameInput: Object,
      clientEmailInput: Object,
      clientMessageInput: Object,
      attachInput: Object,
      messageButtons: Object,
      fileNamePar: Object,

      // Footer
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
    clientEmail(val) {
      if (
        val != "Email is required." &&
        val != `"${this.clientLastEnteredEmail}" is not valid.`
      )
        this.clientLastEnteredEmail = val;
    },
    showNoNameError(val) {
      if (val) {
        this.clientName = "Name is required.";
        this.clientNameColor = "#ff0000";
      } else {
        this.clientName = "";
        this.clientNameColor = "#0b7a62";
      }
    },
    showNoEmailError(val) {
      if (val) {
        this.clientEmail = "Email is required.";
        this.clientEmailColor = "#ff0000";
      } else {
        this.clientEmail = "";
        this.clientEmailColor = "#0b7a62";
      }
    },
    showInvalidEmailError(val) {
      if (val) {
        this.clientEmail = `"${this.clientEmail}" is not valid.`;
        this.clientEmailColor = "#ff0000";
      } else {
        this.clientEmail = this.clientLastEnteredEmail;
        this.clientEmailColor = "#0b7a62";
      }
    },
    showNoMessageError(val) {
      if (val) {
        this.clientMessage = "Message is required.";
        this.clientMessageColor = "#ff0000";
      } else {
        this.clientMessage = "";
        this.clientMessageColor = "#0b7a62";
      }
    },
  },

  computed: {
    headerNavStyle() {
      return {
        left: `${this.headerNavLeftPosition}px`,
      };
    },
    clientNameStyle() {
      return {
        color: `${this.clientNameColor}`,
      };
    },
    clientEmailStyle() {
      return {
        color: `${this.clientEmailColor}`,
      };
    },
    clientMessageStyle() {
      return {
        color: `${this.clientMessageColor}`,
      };
    },
  },

  methods: {
    // Utility Methods

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
        this.fileNameUpdator();
      }
    },

    // Main Functionality

    // Updates the fileName to fit the textarea
    fileNameUpdator() {
      if (this.fileName == "") {
      } else {
        if (
          this.fileNamePar.offsetWidth / this.messageButtons.offsetWidth <
            0.3 &&
          this.fileName != this.attachedFile.name
        )
          this.fileName = this.attachedFile.name;
        if (
          this.fileNamePar.offsetWidth / this.messageButtons.offsetWidth >
          0.45
        ) {
          var lastCharIndex = this.fileName.lastIndexOf(".");
          var namePart = this.fileName.substr(0, lastCharIndex - 3);
          var extentionPart = this.fileName.substr(
            lastCharIndex,
            this.fileName.length - lastCharIndex
          );
          this.fileName = `${namePart}${extentionPart}`;
        } else if (this.fileName != this.attachedFile.name) {
          var lastCharIndex = this.fileName.lastIndexOf(".");
          var namePart = this.fileName.substr(0, lastCharIndex - 3);
          var extentionPart = this.fileName.substr(
            lastCharIndex,
            this.fileName.length - lastCharIndex
          );
          this.fileName = `${namePart}...${extentionPart}`;
        }
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

    onBodyDivClick($event) {
      if (this.isVerticalMenuExpanded) {
        if (
          !$event.target.classList.contains("nav-link") &&
          $event.target.id != "idpc-menuImg"
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
    onFileUpload($event) {
      this.attachedFile = $event.target.files[0];
      this.fileName = this.attachedFile.name;
    },
    onAttachClick() {
      this.attachInput.click();
    },
    onClientNameClick() {
      if (this.showNoNameError) this.showNoNameError = false;
    },
    onClientEmailClick() {
      if (this.showNoEmailError) this.showNoEmailError = false;
      if (this.showInvalidEmailError) this.showInvalidEmailError = false;
    },
    onClientMessageClick() {
      if (this.showNoMessageError) this.showNoMessageError = false;
    },
    onSendMessageClick() {
      if (this.clientName == "") this.showNoNameError = true;
      if (this.clientEmail == "") this.showNoEmailError = true;
      if (this.clientMessage == "") this.showNoMessageError = true;
      if (!this.clientEmailInput.validity.valid && this.clientEmail != "")
        this.showInvalidEmailError = true;
      if (
        !this.showNoNameError &&
        !this.showNoEmailError &&
        !this.showNoMessageError &&
        this.clientEmailInput.validity.valid
      ) {
        var messageFormData = new FormData();
        messageFormData.append("name", this.clientName);
        messageFormData.append("email", this.clientEmail);
        messageFormData.append("message", this.clientMessage);
        messageFormData.append("attachment", this.attachedFile);
        this.contactForm.classList.remove("d-flex");
        this.contactForm.classList.add("d-none");
        this.messagereceived.classList.remove("d-none");
      }
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
    this.header = document.getElementById("idpc-header");
    this.logo = document.getElementById("idpc-logo");
    this.headerNav = document.getElementById("idpc-headerNav");
    this.menuButton = document.getElementById("idpc-menuButton");
    this.menuImg = document.getElementById("idpc-menuImg");
    this.showcase = document.getElementById("idpc-showcase");
    this.messagereceived = document.getElementById("idpc-messagereceived");
    this.contactPar = document.getElementById("idpc-contactPar");
    this.contactForm = document.getElementById("idpc-contactForm");
    this.clientNameInput = document.getElementById("idpc-clientName");
    this.clientEmailInput = document.getElementById("idpc-clientEmail");
    this.clientMessageInput = document.getElementById("idpc-clientMessage");
    this.attachInput = document.getElementById("idpc-attachInput");
    this.messageButtons = document.getElementById("idpc-messageButtons");
    this.fileNamePar = document.getElementById("idpc-fileNamePar");
    this.linkedinNav = document.getElementById("idpc-linkedinNav");
    this.emailNav = document.getElementById("idpc-emailNav");
    this.telegramNav = document.getElementById("idpc-telegramNav");
    this.isMounted = true;
    this.windowWidthClassEmitter();
    this.headerNavDisplay();
    this.headerNavLeftCalculator();
  },

  updated() {
    this.fileNameUpdator();
  },
};
</script>

<style scoped>
@import "assets/css/contact.css";
</style>