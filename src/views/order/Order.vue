<template>
  <div id="idpo-body" class="d-flex flex-column justify-content-between" @mousedown="onBodyDivMouseDown">
      <header id="idpo-header" class="d-flex justify-content-between align-items-center">
          <router-link id="idpo-logo" to="/" class="hoverable">EELee</router-link>
            <ul id="idpo-headerUl" class="d-flex align-items-center" :style="headerUlStyle">
                <li>
                    <router-link to="/" class="idpo-nav-link hoverable">Home</router-link>
                </li>
                <li>
                    <router-link to="/portfolio" class="idpo-nav-link hoverable">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/app" class="idpo-nav-link hoverable">App</router-link>
                </li>
                <li>
                    <router-link to="/donate" class="idpo-nav-link hoverable">Donate</router-link>
                </li>
            </ul>
            <span id="idpo-menuButton" class="d-none" @click="onMenuButtonClick">
                <img id="idpo-menuImg" class="hoverable" :src="require(`@/assets/images/svg/menu-button.svg`)" alt="" @mouseenter="onMenuImgMouseEnter" @mouseleave="onMenuImgMouseLeave" >
            </span>
      </header>

      <section id="idpo-showcase" class="d-flex flex-column align-items-start">
        <div id="idpo-formCover" class="d-none"></div>
        <Slideshow uniqueLabel="Agreement" :slidesNumber="5" :loopMode="false" >
            <template #title1>
                <h3>First</h3>
            </template>
            <template #content1>
                <p>First, you fill our form and tell us what you want... <br>
            Then, we contact you within 2 days... <br>
            If everything was okay, we have a deal! <br></p>
            </template>
            <template #title2>
                <h3>Second</h3>
            </template>
            <template #content2>
                <p>Second text</p>
            </template>
            <template #title3>
                <h3>Third</h3>
            </template>
            <template #content3>
                <p>Third text</p>
            </template>
            <template #title4>
                <h3>Fourth</h3>
            </template>
            <template #content4>
                <p>Fourth text</p>
            </template>
            <template #title5>
                <h3>Fifth</h3>
            </template>
            <template #content5>
                <p>Fifth text</p>
            </template>
            <template #finish>
                <h3>Finish</h3>
            </template>
            <template #inactive>
                <p>Finished text</p>
            </template>
        </Slideshow>
      </section>

      <footer id="idpo-footer" class="d-flex flex-column justify-content-around align-items-center">
          <div id="idpo-footerNav" class="d-flex justify-content-between align-items-center">
            <img id="idpo-linkedinNav" class="hoverable" :src="require(`@/assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <router-link to="/contact">
                <img id="idpo-emailNav" class="hoverable" :src="require(`@/assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
            </router-link>
            <img id="idpo-telegramNav" class="hoverable" :src="require(`@/assets/images/svg/telegram-${widthClass}.svg`)" alt="" @mouseenter="onTelegramMouseEnter" @mouseleave="onTelegramMouseLeave">
          </div>
          <router-link id="idpo-footerNote" to="/portfolio" class="hoverable">&copy; 2022 - EELee App Design</router-link>
      </footer>
  </div>
</template>

<script>
import Slideshow from '@/components/Slideshow/Slideshow.vue'

export default {
    name: 'Order',

    components: {
        Slideshow,
    },

    data() {
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
                this.headerUlLeftPosition = ((this.vw*98 - (this.vw*8 + this.logo.offsetWidth + this.menuButton.offsetWidth + this.headerUl.offsetWidth))/2 + this.vw*4 + this.menuButton.offsetWidth);
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

        // Footer

        onBodyDivMouseDown($event) {
            if (this.isVerticalMenuExpanded) {
                if ((!$event.target.classList.contains('idpo-nav-link')) && ($event.target.id != 'idpo-menuImg')) this.isVerticalMenuExpanded = false;
            }
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
        this.headerUl = document.getElementById('idpo-headerUl');
        this.logo = document.getElementById('idpo-logo');
        this.menuButton = document.getElementById('idpo-menuButton');
        this.menuImg = document.getElementById('idpo-menuImg');
        this.formCover = document.getElementById('idpo-formCover');
        this.linkedinNav = document.getElementById('idpo-linkedinNav');
        this.emailNav = document.getElementById('idpo-emailNav');
        this.telegramNav = document.getElementById('idpo-telegramNav');
        this.isMounted = true;
        this.windowWidthClassEmitter();
        this.headerNavDisplay();
        this.headerUlLeftCalculator();
    },
}
</script>

<style scoped>
@import 'assets/css/order.css'
</style>