<template>
  <div id="idpd-body" class="d-flex flex-column justify-content-between" @mousedown="onBodyDivMouseDown">
      <header id="idpd-header" class="header d-flex justify-content-between align-items-center">
          <router-link id="idpd-logo" to="/" class="logo idpd-hoverable">EELee</router-link>
            <ul id="idpd-headerUl" class="header-ul d-flex align-items-center" :style="headerUlStyle">
                <li>
                    <router-link to="/" class="idpd-nav-link idpd-hoverable">Home</router-link>
                </li>
                <li>
                    <router-link to="/portfolio" class="idpd-nav-link idpd-hoverable">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/app" class="idpd-nav-link idpd-hoverable">App</router-link>
                </li>
                <li>
                    <router-link to="/order" class="idpd-nav-link idpd-hoverable">Order Now!</router-link>
                </li>
            </ul>
            <span id="idpd-menuButton" class="menu-button d-none" @click="onMenuButtonClick">
                <img id="idpd-menuImg" class="idpd-hoverable" :src="require(`./assets/images/svg/menu-button.svg`)" alt="" @mouseenter="onMenuImgMouseEnter" @mouseleave="onMenuImgMouseLeave" >
            </span>
      </header>

      <section id="idpd-showcase" class="d-flex flex-column justify-content-between align-items-center">
        <form id="idpd-donationForm" class="d-flex flex-column justify-content-center align-items-center" action="https://perfectmoney.is/api/step1.asp" method="post" target="_blank">
            <p id="idpd-donationTxt">Help us by</p>
            <div class="d-flex align-items-center">
                <input id="idpd-donationInput" v-model="donationAmount" type="number" name="PAYMENT_AMOUNT">
                <label for="PAYMENT_AMOUNT">USD</label>
            </div>
        </form>
        <button id="idpd-donateButton" class="idpd-hoverable" @click="onDonateClick">Donate</button>
      </section>

      <footer id="idpd-footer" class="footer d-flex flex-column justify-content-around align-items-center">
          <div id="idpd-footerNav" class="footer-nav d-flex justify-content-between align-items-center">
            <img id="idpd-linkedinNav" class="idpd-hoverable" :src="require(`./assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <router-link to="/contact">
                <img id="idpd-emailNav" class="idpd-hoverable" :src="require(`./assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
            </router-link>
            <img id="idpd-telegramNav" class="idpd-hoverable" :src="require(`./assets/images/svg/telegram-${widthClass}.svg`)" alt="" @mouseenter="onTelegramMouseEnter" @mouseleave="onTelegramMouseLeave">
          </div>
          <router-link id="idpd-footerNote" to="/portfolio" class="footer-note idpd-hoverable">&copy; 2022 - EELee App Design</router-link>
      </footer>
  </div>
</template>

<script>
export default {
    name: 'Donate',

    data() {
        return {
            widthClass: String,
            vw: Number,
            headerUlLeftPosition: Number,
            sizeHistoryArray: [],
            isMounted: false,
            isVerticalMenuExpanded: false,
            donationAmount: 3,

            // Elements Object Refs
            header: Object,
            logo: Object,
            headerUl: Object,
            menuButton: Object,
            menuImg: Object,
            showcase: Object,
            donationForm: Object,
            linkedinNav: Object,
            emailNav: Object,
            telegramNav: Object,
        }
    },

    watch: {
        isVerticalMenuExpanded(val) {
            if (val) {
                this.menuImg.setAttribute('src', require(`./assets/images/svg/menu-button-hover.svg`));
                this.headerUl.classList.remove('invisible', 'scale-down-ver-top');
                this.headerUl.classList.add('scale-up-ver-top');
                this.showcase.style.opacity = '0.2';
            } else {
                this.menuImg.setAttribute('src', require(`./assets/images/svg/menu-button.svg`));
                this.headerUl.classList.remove('scale-up-ver-top');
                this.headerUl.classList.add('scale-down-ver-top');
                this.showcase.style.opacity = '1';
            }
        },
    },

    computed: {
        headerUlStyle() {
            return {
                'left': `${this.headerUlLeftPosition}px`,
            }
        },
    },

    methods: {
        // Utility Methods
      
        // Tracks width size changes by updating sizeHistoryArray 
        sizeHistoryUpdator(sizeClass) {
            this.sizeHistoryArray.push(sizeClass);
            if (this.sizeHistoryArray.length > 2) this.sizeHistoryArray.shift();
            if (this.sizeHistoryArray.includes('sm') && this.sizeHistoryArray.includes('xs')) {
                if (this.isVerticalMenuExpanded) this.isVerticalMenuExpanded = false;
                setTimeout(() => {
                    this.headerNavDisplay();
                }, 50);
            }
        },
      
        // Triggers different window size classes on resize
        windowWidthClassEmitter() {
            var windowWidth = window.innerWidth;

            if (windowWidth < 320) this.widthClass = 'xxs';
            else if (windowWidth < 576) this.widthClass = 'xs';
            else if (windowWidth < 768) this.widthClass = 'sm';
            else if (windowWidth < 992) this.widthClass = 'md';
            else this.widthClass = 'lg';
            this.sizeHistoryUpdator(this.widthClass);
            if (this.isMounted) {
                this.vw = windowWidth/100;
                this.headerUlLeftCalculator();
            }
        },
      
        // Calculates the pixel numbers for left property of headerUl
        headerUlLeftCalculator() {
            if (window.innerWidth >= 576) this.headerUlLeftPosition = 0;
            else {
                this.headerUlLeftPosition = ((this.header.offsetWidth - (this.vw*5 + 65 + this.logo.offsetWidth + this.menuButton.offsetWidth + this.headerUl.offsetWidth))/2 + this.vw*4 + this.menuButton.offsetWidth);
            }
        },

        // Determines how header navbar should be displayed
        headerNavDisplay() {
            if (window.innerWidth < 576) {
                this.headerUl.classList.remove('align-items-center');
                this.headerUl.classList.add('invisible', 'flex-column', 'align-items-end', 'vertical-menu');
                this.menuButton.classList.remove('d-none');
            } else {
                this.headerUl.classList.remove('invisible', 'scale-down-ver-top', 'flex-column', 'align-items-end', 'vertical-menu');
                this.headerUl.classList.add('align-items-center');
                this.menuButton.classList.add('d-none');
            }
        },

        // Event Handlers

        onBodyDivMouseDown($event) {
            if (this.isVerticalMenuExpanded) {
                if ((!$event.target.classList.contains('idpd-nav-link')) && ($event.target.id != 'idpd-menuImg')) this.isVerticalMenuExpanded = false;
            }
        },
        onMenuButtonClick() {
            this.isVerticalMenuExpanded = !this.isVerticalMenuExpanded;
        },
        onMenuImgMouseEnter() {
            this.menuImg.setAttribute('src', require(`./assets/images/svg/menu-button-hover.svg`));
        },
        onMenuImgMouseLeave() {
            if (!this.isVerticalMenuExpanded) this.menuImg.setAttribute('src', require(`./assets/images/svg/menu-button.svg`));
        },
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
            PAYMENT_URL.setAttribute('value', 'https://webhook.site/b70bce10-e349-4f17-9abidpd-e631f667339d');
            NOPAYMENT_URL.setAttribute('type', 'hidden');
            NOPAYMENT_URL.setAttribute('name', 'NOPAYMENT_URL');
            NOPAYMENT_URL.setAttribute('value', 'https://webhook.site/b70bce10-e349-4f17-9abidpd-e631f667339d');
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
        this.header = document.getElementById('idpd-header');
        this.logo = document.getElementById('idpd-logo');
        this.headerUl = document.getElementById('idpd-headerUl');
        this.menuButton = document.getElementById('idpd-menuButton');
        this.menuImg = document.getElementById('idpd-menuImg');
        this.showcase = document.getElementById('idpd-showcase');
        this.donationForm = document.getElementById('idpd-donationForm');
        this.linkedinNav = document.getElementById('idpd-linkedinNav');
        this.emailNav = document.getElementById('idpd-emailNav');
        this.telegramNav = document.getElementById('idpd-telegramNav');
        this.isMounted = true;
        this.windowWidthClassEmitter();
        this.headerNavDisplay();
        this.headerUlLeftCalculator();
    },
}
</script>

<style scoped>
@import 'assets/css/donate.css'
</style>