<template>
  <div id="o-body" class="d-flex flex-column justify-content-between" @mousedown="onBodyDivMouseDown">
      <header id="o-header" class="d-flex justify-content-between align-items-center">
          <router-link id="o-logo" to="/" class="hoverable">EELee</router-link>
            <ul id="o-headerUl" class="d-flex align-items-center" :style="headerUlStyle">
                <li>
                    <router-link to="/" class="o-nav-link hoverable" @mouseup="onNavLinkMouseUp">Home</router-link>
                </li>
                <li>
                    <router-link to="/portfolio" class="o-nav-link hoverable" @mouseup="onNavLinkMouseUp">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/app" class="o-nav-link hoverable" @mouseup="onNavLinkMouseUp">App</router-link>
                </li>
                <li>
                    <router-link to="/donate" class="o-nav-link hoverable" @mouseup="onNavLinkMouseUp">Donate</router-link>
                </li>
            </ul>
            <span id="o-menuButton" class="d-none" @click="onMenuButtonClick">
                <img id="o-menuImg" class="hoverable" :src="require(`./assets/images/svg/menu-button.svg`)" alt="" @mouseenter="onMenuImgMouseEnter" @mouseleave="onMenuImgMouseLeave" >
            </span>
      </header>

      <section id="o-showcase" class="d-flex flex-column align-items-start">
        <div id="o-formCover" class="d-none"></div>
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

      <footer id="o-footer" class="d-flex flex-column justify-content-around align-items-center">
          <div id="o-footerNav" class="d-flex justify-content-between align-items-center">
            <img id="o-linkedinNav" class="hoverable" :src="require(`./assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <router-link to="/contact">
                <img id="o-emailNav" class="hoverable" :src="require(`./assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
            </router-link>
            <img id="o-telegramNav" class="hoverable" :src="require(`./assets/images/svg/telegram-${widthClass}.svg`)" alt="" @mouseenter="onTelegramMouseEnter" @mouseleave="onTelegramMouseLeave">
          </div>
          <router-link id="o-footerNote" to="/portfolio" class="hoverable">&copy; 2022 - EELee App Design</router-link>
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
            headerUlLeftPosition: Number,
            sizeHistoryArray: [],
            isMounted: false,
            isVerticalMenuExpanded: false,

            // Elements Object Refs
            headerUl: Object,
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
                this.menuImg.setAttribute('src', require(`./assets/images/svg/menu-button-hover.svg`));
                this.headerUl.classList.remove('invisible', 'scale-down-ver-top');
                this.headerUl.classList.add('scale-up-ver-top');
                this.formCover.classList.remove('d-none');
            } else {
                this.menuImg.setAttribute('src', require(`./assets/images/svg/menu-button.svg`));
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
            if (this.isMounted) this.headerUlLeftCalculator();
        },
      
        // Calculates the pixel numbers for left property of headerUl
        headerUlLeftCalculator() {
            if (window.innerWidth > 576) this.headerUlLeftPosition = 0;
            else {
                var vw = window.innerWidth/100;
                this.headerUlLeftPosition = ((100*vw-(26*vw+25+this.headerUl.offsetWidth))/2+4*vw+25);
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

        // Footer

        onBodyDivMouseDown($event) {
            if (this.isVerticalMenuExpanded) {
                if ((!$event.target.classList.contains('o-nav-link')) && ($event.target.id != 'o-menuImg')) this.isVerticalMenuExpanded = false;
            }
        },
        onNavLinkMouseUp() {
            this.isVerticalMenuExpanded = false;
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
        this.headerUl = document.getElementById('o-headerUl');
        this.menuButton = document.getElementById('o-menuButton');
        this.menuImg = document.getElementById('o-menuImg');
        this.formCover = document.getElementById('o-formCover');
        this.linkedinNav = document.getElementById('o-linkedinNav');
        this.emailNav = document.getElementById('o-emailNav');
        this.telegramNav = document.getElementById('o-telegramNav');
        this.windowWidthClassEmitter();
        this.headerNavDisplay();
        this.headerUlLeftCalculator();
        this.isMounted = true;
    },
}
</script>

<style scoped>
@import 'assets/css/order.css'
</style>