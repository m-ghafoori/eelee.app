<template>
  <div id="d-body" class="d-flex flex-column justify-content-between">
      <header id="d-header" class="d-flex align-items-center">
          <router-link id="d-logo" to="/" class="hoverable">EELee</router-link>
          <router-link to="/" class="d-nav-link hoverable">Home</router-link>
          <router-link to="/portfolio" class="d-nav-link hoverable">Portfolio</router-link>
          <router-link to="/app" class="d-nav-link hoverable">App</router-link>
          <router-link to="/order" class="d-nav-link hoverable">Order Now!</router-link>
      </header>

      <section id="d-showcase" class="d-flex flex-column align-items-center">
        <form id="d-donationForm" class="d-flex justify-content-center align-items-center" action="https://perfectmoney.is/api/step1.asp" method="post" target="_blank">
            Help us by
            <input id="d-donationInput" v-model="donationAmount" type="number" name="PAYMENT_AMOUNT">
            <label for="PAYMENT_AMOUNT">USD</label>
        </form>
        <button id="d-donateButton" class="hoverable" @click="onDonateClick">Donate</button>
      </section>

      <footer id="d-footer" class="d-flex flex-column justify-content-around align-items-center">
          <div id="d-footerNav" class="d-flex justify-content-between align-items-center">
            <img id="d-linkedinNav" class="hoverable" :src="require(`./assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <img id="d-emailNav" class="hoverable" :src="require(`./assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
            <img id="d-telegramNav" class="hoverable" :src="require(`./assets/images/svg/telegram-${widthClass}.svg`)" alt="" @mouseenter="onTelegramMouseEnter" @mouseleave="onTelegramMouseLeave">
          </div>
          <router-link id="d-footerNote" to="/portfolio" class="hoverable">&copy; 2022 - EELee App Design</router-link>
      </footer>
  </div>
</template>

<script>
export default {
    name: 'Donate',

    data() {
        return {
            widthClass: String,
            donationAmount: 0,

            // Elements Object Refs
            donationForm: Object,
            linkedinNav: Object,
            emailNav: Object,
            telegramNav: Object,
        }
    },

    // watch: {
    //     widthClass(val) {
    //         console.log(val)
    //     }
    // },

    methods: {
        // Utility Methods
      
        // Triggers different window size classes on resize
        windowWidthClassEmitter() {
            var windowWidth = window.innerWidth;

            if (windowWidth < 320) this.widthClass = 'xxs';
            else if (windowWidth < 576) this.widthClass = 'xs';
            else if (windowWidth < 768) this.widthClass = 'sm';
            else if (windowWidth < 992) this.widthClass = 'md';
            else this.widthClass = 'lg';
        },

        // Event Handlers

        onDonateClick() {
            var PAYEE_ACCOUNT = document.createElement('input');
            var PAYEE_NAME = document.createElement('input');
            var PAYMENT_UNITS = document.createElement('input');
            var PAYMENT_URL = document.createElement('input');
            var NOPAYMENT_URL = document.createElement('input');
            PAYEE_ACCOUNT.setAttribute('type', 'hidden');
            PAYEE_ACCOUNT.setAttribute('name', 'PAYEE_ACCOUNT');
            PAYEE_ACCOUNT.setAttribute('value', 'U12120163' );
            PAYEE_NAME.setAttribute('type', 'hidden');
            PAYEE_NAME.setAttribute('name', 'PAYEE_NAME');
            PAYEE_NAME.setAttribute('value', 'EELee App Design');
            PAYMENT_UNITS.setAttribute('type', 'hidden');
            PAYMENT_UNITS.setAttribute('name', 'PAYMENT_UNITS');
            PAYMENT_UNITS.setAttribute('value', 'USD');
            PAYMENT_URL.setAttribute('type', 'hidden');
            PAYMENT_URL.setAttribute('name', 'PAYMENT_URL');
            PAYMENT_URL.setAttribute('value', 'https://webhook.site/b70bce10-e349-4f17-9abc-e631f667339d');
            NOPAYMENT_URL.setAttribute('type', 'hidden');
            NOPAYMENT_URL.setAttribute('name', 'NOPAYMENT_URL');
            NOPAYMENT_URL.setAttribute('value', 'https://webhook.site/b70bce10-e349-4f17-9abc-e631f667339d');
            this.donationForm.appendChild(PAYEE_ACCOUNT);
            this.donationForm.appendChild(PAYEE_NAME);
            this.donationForm.appendChild(PAYMENT_UNITS);
            this.donationForm.appendChild(PAYMENT_URL);
            this.donationForm.appendChild(NOPAYMENT_URL);
            this.donationForm.submit();
        },

        // Footer

        onLinkedinMouseEnter() {
            this.linkedinNav.setAttribute('src', require(`./assets/images/svg/linkedin-hover-${this.widthClass}.svg`));
        },
        onLinkedinMouseLeave() {
            this.linkedinNav.setAttribute('src', require(`./assets/images/svg/linkedin-${this.widthClass}.svg`));
        },
        onEmailMouseEnter() {
            this.emailNav.setAttribute('src', require(`./assets/images/svg/email-hover-${this.widthClass}.svg`));
        },
        onEmailMouseLeave() {
            this.emailNav.setAttribute('src', require(`./assets/images/svg/email-${this.widthClass}.svg`));
        },
        onTelegramMouseEnter() {
            this.telegramNav.setAttribute('src', require(`./assets/images/svg/telegram-hover-${this.widthClass}.svg`));
        },
        onTelegramMouseLeave() {
            this.telegramNav.setAttribute('src', require(`./assets/images/svg/telegram-${this.widthClass}.svg`));
        },
    },
    
    created() {
        window.addEventListener("resize", this.windowWidthClassEmitter);
    },

    beforeMount() {
        this.windowWidthClassEmitter();
    },

    mounted() {
        this.donationForm = document.getElementById('d-donationForm');
        this.linkedinNav = document.getElementById('d-linkedinNav');
        this.emailNav = document.getElementById('d-emailNav');
        this.telegramNav = document.getElementById('d-telegramNav');
    },
}
</script>

<style scoped>
@import 'assets/css/donate.css'
</style>