<template>
  <div id="idpd-body" class="body" @mousedown="onBodyDivMouseDown">
    <Header
      pageRoute="/donate"
      logoMainColor="#ffbf1f"
      logoHoverColor="#fff"
      logoActiveColor="#76efff"
      navLinkMainColor="#fff"
      navLinkHoverColor="#ffbf1f"
      navLinkActiveColor="#76efff"
    />
    <section
      id="idpd-showcase"
      class="showcase justify-content-between align-items-center"
    >
      <form
        id="idpd-donationForm"
        class="d-flex flex-column justify-content-center align-items-center"
        action="https://perfectmoney.is/api/step1.asp"
        method="post"
        target="_blank"
      >
        <p ref="donationTxt" id="idpd-donationTxt">Help us by</p>
        <div class="d-flex align-items-center">
          <input
            id="idpd-donationInput"
            v-model="donationAmount"
            type="number"
            name="PAYMENT_AMOUNT"
            min="0.01"
            @click="onDonationInputClick"
          />
          <label for="PAYMENT_AMOUNT">USD</label>
        </div>
      </form>
      <button
        id="idpd-donateButton"
        class="idpd-hoverable"
        @click="onDonateClick"
      >
        Donate
      </button>
    </section>
    <Footer
      iconMainColor="#ffbf1f"
      iconHoverColor="#fff"
      noteMainColor="#fff"
      noteHoverColor="#ffbf1f"
    />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Donate",

  components: {
    Header,
    Footer,
  },
  data() {
    return {
      donationAmount: 3,
      donationError: false,

      // Elements Object Refs
      donationForm: Object,
    };
  },

  watch: {
    donationError(val) {
      if (val) {
        this.$refs.donationTxt.innerHTML = "Invalid Amount";
        this.$refs.donationTxt.style.color = "#ffbf1f";
      } else {
        this.$refs.donationTxt.innerHTML = "Help us by";
        this.$refs.donationTxt.style.color = "#fff";
      }
    },
  },

  methods: {
    // Event Handlers

    onDonationInputClick() {
      this.donationError = false;
    },
    onDonateClick() {
      if (this.donationAmount < 0.01) this.donationError = true;
      else {
        var PAYEE_ACCOUNT = document.createElement("input");
        var PAYEE_NAME = document.createElement("input");
        var PAYMENT_UNITS = document.createElement("input");
        var PAYMENT_URL = document.createElement("input");
        var NOPAYMENT_URL = document.createElement("input");
        PAYEE_ACCOUNT.setAttribute("type", "hidden");
        PAYEE_ACCOUNT.setAttribute("name", "PAYEE_ACCOUNT");
        PAYEE_ACCOUNT.setAttribute("value", "U12120163");
        PAYEE_NAME.setAttribute("type", "hidden");
        PAYEE_NAME.setAttribute("name", "PAYEE_NAME");
        PAYEE_NAME.setAttribute("value", "EELee App Design");
        PAYMENT_UNITS.setAttribute("type", "hidden");
        PAYMENT_UNITS.setAttribute("name", "PAYMENT_UNITS");
        PAYMENT_UNITS.setAttribute("value", "USD");
        PAYMENT_URL.setAttribute("type", "hidden");
        PAYMENT_URL.setAttribute("name", "PAYMENT_URL");
        PAYMENT_URL.setAttribute(
          "value",
          "https://webhook.site/b70bce10-e349-4f17-9abidpd-e631f667339d"
        );
        NOPAYMENT_URL.setAttribute("type", "hidden");
        NOPAYMENT_URL.setAttribute("name", "NOPAYMENT_URL");
        NOPAYMENT_URL.setAttribute(
          "value",
          "https://webhook.site/b70bce10-e349-4f17-9abidpd-e631f667339d"
        );
        this.donationForm.appendChild(PAYEE_ACCOUNT);
        this.donationForm.appendChild(PAYEE_NAME);
        this.donationForm.appendChild(PAYMENT_UNITS);
        this.donationForm.appendChild(PAYMENT_URL);
        this.donationForm.appendChild(NOPAYMENT_URL);
        this.donationForm.submit();
      }
    },
  },

  mounted() {
    this.donationForm = document.querySelector("#idpd-donationForm");
    document.querySelectorAll(".hoverable").forEach((element) => {
      element.classList.remove("hoverable");
      element.classList.add("idpd-hoverable");
    });
  },
};
</script>

<style scoped>
@import "assets/css/donate.css";
</style>