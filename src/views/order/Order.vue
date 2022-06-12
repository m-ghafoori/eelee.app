<template>
  <div id="o-body" class="d-flex flex-column justify-content-between">
      <header id="o-header" class="d-flex align-items-center">
          <router-link id="o-logo" to="/" class="hoverable">EELee</router-link>
          <router-link to="/" class="o-nav-link hoverable">Home</router-link>
          <router-link to="/portfolio" class="o-nav-link hoverable">Portfolio</router-link>
          <router-link to="/app" class="o-nav-link hoverable">App</router-link>
          <router-link to="/app" class="o-nav-link hoverable">Donate</router-link>
      </header>

      <section id="o-showcase" class="d-flex flex-column align-items-start">
        <Slideshow uniqueLabel="Agreement" :slidesNumber="5" :loopMode="false" >
            <!-- <template #title1>
                <h3>first title</h3>
            </template>
            <template #content1>
                <p>first line</p>
            </template> -->
            <template #title1>
                <h3>First</h3>
            </template>
            <template #content1>
                <p>First, you fill our form and tell us what you want... <br>
            Then, we contact you within 2 days... <br>
            If everything was okay, we have a deal! <br>
            Now, Please read our terms :)</p>
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
          <!-- <h3>To Order Your App:</h3>
          <p>
            First, you fill our form and tell us what you want... <br>
            Then, we contact you within 2 days... <br>
            If everything was okay, we have a deal! <br>
            Now, Please read our terms :)
          </p>
          <h4>Terms and Conditions >>></h4> -->
      </section>

      <footer id="o-footer" class="d-flex flex-column justify-content-around align-items-center">
          <div id="o-footerNav" class="d-flex justify-content-between align-items-center">
            <img id="o-linkedinNav" class="hoverable" :src="require(`./assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <img id="o-emailNav" class="hoverable" :src="require(`./assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
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

            // Elements Object Refs
            linkedinNav: Object,
            emailNav: Object,
            telegramNav: Object,
        }
    },

    watch: {
        widthClass(val) {
            console.log(val)
        }
    },

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
        this.linkedinNav = document.getElementById('o-linkedinNav');
        this.emailNav = document.getElementById('o-emailNav');
        this.telegramNav = document.getElementById('o-telegramNav');
    },
}
</script>

<style scoped>
@import 'assets/css/order.css'
</style>