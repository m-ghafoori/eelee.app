<template>
<div id="a_body" @mousedown="onBodyDivMouseDown">
        <header id="a_header" class="d-flex justify-content-between align-items-center">
        <router-link id="a_logo" to="/" class="hoverable">EELee</router-link>
            <ul id="a_headerUl" class="d-flex align-items-center" :style="headerUlStyle">
                <li>
                    <router-link to="/" class="a_nav-link hoverable" @mouseup="onNavLinkMouseUp">Home</router-link>
                </li>
                <li>
                    <router-link to="/portfolio" class="a_nav-link hoverable" @mouseup="onNavLinkMouseUp">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/donate" class="a_nav-link hoverable" @mouseup="onNavLinkMouseUp">Donate</router-link>
                </li>
                <li>
                    <router-link to="/order" class="a_nav-link hoverable" @mouseup="onNavLinkMouseUp">Order Now!</router-link>
                </li>
            </ul>
            <span id="a_menuButton" class="d-none" @click="onMenuButtonClick">
                <img id="a_menuImg" class="hoverable" :src="require(`@/assets/images/svg/menu-button.svg`)" alt="" @mouseenter="onMenuImgMouseEnter" @mouseleave="onMenuImgMouseLeave" >
            </span>
      </header>

      <section id="a_showcase">
        <div id="a_formCover" class="d-none"></div>
        <Table
        @contextmenu="preventDefaultEvents"/>
      </section>

        <footer id="a_footer" class="d-flex flex-column justify-content-around align-items-center">
          <div id="a_footerNav" class="d-flex justify-content-between align-items-center">
            <img id="a_linkedinNav" ref="linkedinNav" class="hoverable" :src="require(`@/assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <router-link to="contact">
                <img id="a_emailNav" ref="emailNav" class="hoverable" :src="require(`@/assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
            </router-link>
            <img id="a_telegramNav" ref="telegramNav" class="hoverable" :src="require(`@/assets/images/svg/telegram-${widthClass}.svg`)" alt="" @mouseenter="onTelegramMouseEnter" @mouseleave="onTelegramMouseLeave">
          </div>
          <router-link id="a_footerNote" to="/portfolio" class="hoverable">&copy; 2022 - EELee App Design</router-link>
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
        console.log('sizeHistoryArray:', this.sizeHistoryArray);
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
          this.vw = window.innerWidth/100;
          this.headerUlLeftCalculator();
        }
    },
  
    // Calculates the pixel numbers for left property of headerUl
    headerUlLeftCalculator() {
        if (window.innerWidth > 576) this.headerUlLeftPosition = 0;
        else {
            this.headerUlLeftPosition = ((window.innerWidth - (this.vw*8 + 16 + this.logo.offsetWidth + this.menuButton.offsetWidth + this.headerUl.offsetWidth))/2 + this.vw*4 + this.menuButton.offsetWidth);
        }
        console.log(this.headerUlLeftPosition);
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
            if ((!$event.target.classList.contains('a_nav-link')) && ($event.target.id != 'a_menuImg')) this.isVerticalMenuExpanded = false;
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
        this.headerUl = document.getElementById('a_headerUl');
        this.logo = document.getElementById('a_logo');
        this.menuButton = document.getElementById('a_menuButton');
        this.menuImg = document.getElementById('a_menuImg');
        this.formCover = document.getElementById('a_formCover');
        this.donationForm = document.getElementById('a_donationForm');
        this.linkedinNav = document.getElementById('a_linkedinNav');
        this.emailNav = document.getElementById('a_emailNav');
        this.telegramNav = document.getElementById('a_telegramNav');
        this.isMounted = true;
        this.windowWidthClassEmitter();
        this.headerNavDisplay();
        this.headerUlLeftCalculator();
    },
}
</script>

<style>
@import './assets/css/application.css';
</style>
