<template>
<div id="idpa-body" class="d-flex flex-column justify-content-between align-items-center" @mousedown="onBodyDivMouseDown">
        <header id="idpa-header" class="d-flex justify-content-between align-items-center">
        <router-link id="idpa-logo" to="/" class="hoverable">EELee</router-link>
            <ul id="idpa-headerUl" class="d-flex align-items-center" :style="headerUlStyle">
                <li>
                    <router-link to="/" class="idpa-nav-link hoverable" @mouseup="onNavLinkMouseUp">Home</router-link>
                </li>
                <li>
                    <router-link to="/portfolio" class="idpa-nav-link hoverable" @mouseup="onNavLinkMouseUp">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/donate" class="idpa-nav-link hoverable" @mouseup="onNavLinkMouseUp">Donate</router-link>
                </li>
                <li>
                    <router-link to="/order" class="idpa-nav-link hoverable" @mouseup="onNavLinkMouseUp">Order Now!</router-link>
                </li>
            </ul>
            <span id="idpa-menuButton" class="d-none" @click="onMenuButtonClick">
                <img id="idpa-menuImg" class="hoverable" :src="require(`@/assets/images/svg/menu-button.svg`)" alt="" @mouseenter="onMenuImgMouseEnter" @mouseleave="onMenuImgMouseLeave" >
            </span>
      </header>

      <section id="idpa-showcase">
        <div id="idpa-formCover" class="d-none"></div>
        <Table
        @contextmenu="preventDefaultEvents"/>
      </section>

        <footer id="idpa-footer" class="d-flex flex-column justify-content-around align-items-center">
          <div id="idpa-footerNav" class="d-flex justify-content-between align-items-center">
            <img id="idpa-linkedinNav" ref="linkedinNav" class="hoverable" :src="require(`@/assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <router-link to="contact">
                <img id="idpa-emailNav" ref="emailNav" class="hoverable" :src="require(`@/assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
            </router-link>
            <img id="idpa-telegramNav" ref="telegramNav" class="hoverable" :src="require(`@/assets/images/svg/telegram-${widthClass}.svg`)" alt="" @mouseenter="onTelegramMouseEnter" @mouseleave="onTelegramMouseLeave">
          </div>
          <router-link id="idpa-footerNote" to="/portfolio" class="hoverable">&copy; 2022 - EELee App Design</router-link>
      </footer>

</div>
</template>

<script>
import Table from './components/Table.vue'


export default {
  name: 'AppLication',
  components: {
    Table
  },
   data () {
    return {
      widthClass: String,
      vw: Number,
      headerUlLeftPosition: Number,
      sizeHistoryArray: [],
      isMounted: false,
      isVerticalMenuExpanded: false,

      // Elements Object Refs
      headerUl: Object,
      logo: Object,
      menuButton: Object,
      menuImg: Object,
      formCover: Object,
      linkedinNav: Object,
      emailNav: Object,
      telegramNav: Object,
    }
  },

  watch: {
      isVerticalMenuExpanded(val) {
          if (val) {
              this.menuImg.setAttribute('src', require(`@/assets/images/svg/menu-button-hover.svg`));
              this.headerUl.classList.remove('invisible', 'scale-down-ver-top');
              this.headerUl.classList.add('scale-up-ver-top');
              this.formCover.classList.remove('d-none');
          } else {
              this.menuImg.setAttribute('src', require(`@/assets/images/svg/menu-button.svg`));
              this.headerUl.classList.remove('scale-up-ver-top');
              this.headerUl.classList.add('scale-down-ver-top');
              this.formCover.classList.add('d-none');
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

    preventDefaultEvents (e) {
      e = e || window.event;
      e.preventDefault();
    },
      
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
          this.vw = document.body.clientWidth/100;
          this.headerUlLeftCalculator();
        }
    },
  
    // Calculates the pixel numbers for left property of headerUl
    headerUlLeftCalculator() {
        if (window.innerWidth > 576) this.headerUlLeftPosition = 0;
        else {
            this.headerUlLeftPosition = ((this.vw*98 - (this.vw*8 + this.logo.offsetWidth + this.menuButton.offsetWidth + this.headerUl.offsetWidth))/2 + this.vw*4 + this.menuButton.offsetWidth);
        }
    },

    // Determines how header navbar should be displayed
    headerNavDisplay() {
        if (window.innerWidth < 576) {
            // this.headerNavbar.classList.add('flex-column');
            this.headerUl.classList.remove('align-items-center');
            this.headerUl.classList.add('invisible', 'flex-column', 'align-items-end', 'vertical-menu');
            this.menuButton.classList.remove('d-none');
        } else {
            // this.headerNavbar.classList.remove('flex-column');
            this.headerUl.classList.remove('invisible', 'scale-down-ver-top', 'flex-column', 'align-items-end', 'vertical-menu');
            this.headerUl.classList.add('align-items-center');
            this.menuButton.classList.add('d-none');
        }
    },

    // Event Handlers

    onBodyDivMouseDown($event) {
        if (this.isVerticalMenuExpanded) {
            if ((!$event.target.classList.contains('idpa-nav-link')) && ($event.target.id != 'idpa-menuImg')) this.isVerticalMenuExpanded = false;
        }
    },
    onNavLinkMouseUp() {
        this.isVerticalMenuExpanded = false;
    },
    onMenuButtonClick() {
        this.isVerticalMenuExpanded = !this.isVerticalMenuExpanded;
    },
    onMenuImgMouseEnter() {
        this.menuImg.setAttribute('src', require(`@/assets/images/svg/menu-button-hover.svg`));
    },
    onMenuImgMouseLeave() {
        if (!this.isVerticalMenuExpanded) this.menuImg.setAttribute('src', require(`@/assets/images/svg/menu-button.svg`));
    },

    // Footer

    onLinkedinMouseEnter() {
        this.linkedinNav.setAttribute('src', require(`@/assets/images/svg/linkedin-hover-${this.widthClass}.svg`));
    },
    onLinkedinMouseLeave() {
        this.linkedinNav.setAttribute('src', require(`@/assets/images/svg/linkedin-${this.widthClass}.svg`));
    },
    onEmailMouseEnter() {
        this.emailNav.setAttribute('src', require(`@/assets/images/svg/email-hover-${this.widthClass}.svg`));
    },
    onEmailMouseLeave() {
        this.emailNav.setAttribute('src', require(`@/assets/images/svg/email-${this.widthClass}.svg`));
    },
    onTelegramMouseEnter() {
        this.telegramNav.setAttribute('src', require(`@/assets/images/svg/telegram-hover-${this.widthClass}.svg`));
    },
    onTelegramMouseLeave() {
        this.telegramNav.setAttribute('src', require(`@/assets/images/svg/telegram-${this.widthClass}.svg`));
    },
},

    created() {
        window.addEventListener("resize", this.windowWidthClassEmitter);
    },

    beforeMount() {
        this.windowWidthClassEmitter();
    },

    mounted() {
        this.headerUl = document.getElementById('idpa-headerUl');
        this.logo = document.getElementById('idpa-logo');
        this.menuButton = document.getElementById('idpa-menuButton');
        this.menuImg = document.getElementById('idpa-menuImg');
        this.formCover = document.getElementById('idpa-formCover');
        this.donationForm = document.getElementById('idpa-donationForm');
        this.linkedinNav = document.getElementById('idpa-linkedinNav');
        this.emailNav = document.getElementById('idpa-emailNav');
        this.telegramNav = document.getElementById('idpa-telegramNav');
        this.isMounted = true;
        document.body.style.overflow = 'auto';
        this.windowWidthClassEmitter();
        this.headerNavDisplay();
        this.headerUlLeftCalculator();
    },
}
</script>

<style>
@import './assets/css/application.css';
</style>
