<template>
  <div id="c-body" class="d-flex flex-column justify-content-between">
      <header id="c-header" class="d-flex align-items-center">
          <router-link id="c-logo" to="/" class="hoverable">EELee</router-link>
          <router-link to="/" class="c-nav-link hoverable">Home</router-link>
          <router-link to="/portfolio" class="c-nav-link hoverable">Portfolio</router-link>
          <router-link to="/app" class="c-nav-link hoverable">App</router-link>
          <router-link to="/donate" class="c-nav-link hoverable">Donate</router-link>
          <router-link to="/order" class="c-nav-link hoverable">Order Now!</router-link>
      </header>

      <section id="c-contactForm" class="d-flex flex-column align-items-start">
        <p id="c-contactPar">You can fill the form below or email us to <span id="c-contactEmail">"eelee.app@gmail.com"</span></p>
        <div class="c-clientInfo">
            <label for="clientName">Name:</label>
            <input type="text" name="clientName" id="c-clientName">
        </div>
        <div class="c-clientInfo">
            <label for="clientEmail">Email:</label>
            <input type="email" name="clientEmail" id="c-clientEmail">
        </div>
        <div id="c-messageDiv" class="d-flex flex-column justify-content-between align-items-center">
            <textarea name="messageText" id="c-messageText" cols="90" rows="10"></textarea>
            <div id="c-messageButtons" class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                    <span id="c-attachFile" @click="onAttachClick">Attach</span>
                    <input id="c-attachInput" ref="attachInput" type="file" @change="onFileUpload">
                    <p>{{fileName}}</p>
                </div>
                <span id="c-sendEmail">Send</span>
            </div>
        </div>
      </section>

      <footer id="c-footer" class="d-flex flex-column justify-content-around align-items-center">
          <div id="c-footerNav" class="d-flex justify-content-between align-items-center">
            <img id="c-linkedinNav" ref="linkedinNav" class="hoverable" :src="require(`./assets/images/svg/linkedin-${widthClass}.svg`)" alt="" @mouseenter="onLinkedinMouseEnter" @mouseleave="onLinkedinMouseLeave">
            <router-link to="contact">
                <img id="c-emailNav" ref="emailNav" class="hoverable" :src="require(`./assets/images/svg/email-${widthClass}.svg`)" alt="" @mouseenter="onEmailMouseEnter" @mouseleave="onEmailMouseLeave">
            </router-link>
            <img id="c-telegramNav" ref="telegramNav" class="hoverable" :src="require(`./assets/images/svg/telegram-${widthClass}.svg`)" alt="" @mouseenter="onTelegramMouseEnter" @mouseleave="onTelegramMouseLeave">
          </div>
          <router-link id="c-footerNote" to="/portfolio" class="hoverable">&copy; 2022 - EELee App Design</router-link>
      </footer>
  </div>
</template>

<script>
// import Slideshow from '@/components/Slideshow/Slideshow.vue'

export default {
    name: 'Contact',

    // components: {
    //     Slideshow,
    // },

    data() {
        return {
            widthClass: String,
            attachedFile: Object,
            fileName: '',
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

        onFileUpload($event) {
            this.attachedFile = $event.target.files[0];
            console.log(this.attachedFile);
            this.fileName = this.attachedFile.name;
        },

        onAttachClick() {
            this.$refs.attachInput.click();
        },

        // Footer

        onLinkedinMouseEnter() {
            this.$refs.linkedinNav.setAttribute('src', require(`./assets/images/svg/linkedin-hover-${this.widthClass}.svg`));
        },
        onLinkedinMouseLeave() {
            this.$refs.linkedinNav.setAttribute('src', require(`./assets/images/svg/linkedin-${this.widthClass}.svg`));
        },
        onEmailMouseEnter() {
            this.$refs.emailNav.setAttribute('src', require(`./assets/images/svg/email-hover-${this.widthClass}.svg`));
        },
        onEmailMouseLeave() {
            this.$refs.emailNav.setAttribute('src', require(`./assets/images/svg/email-${this.widthClass}.svg`));
        },
        onTelegramMouseEnter() {
            this.$refs.telegramNav.setAttribute('src', require(`./assets/images/svg/telegram-hover-${this.widthClass}.svg`));
        },
        onTelegramMouseLeave() {
            this.$refs.telegramNav.setAttribute('src', require(`./assets/images/svg/telegram-${this.widthClass}.svg`));
        },
    },
    
    created() {
        window.addEventListener("resize", this.windowWidthClassEmitter);
    },

    beforeMount() {
        this.windowWidthClassEmitter();
    },
}
</script>

<style scoped>
@import 'assets/css/contact.css'
</style>