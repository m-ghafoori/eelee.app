<template>
  <div id="c-body" class="d-flex flex-column justify-content-between" @mousedown="onBodyDivMouseDown">
      <header id="c-header" class="d-flex justify-content-between align-items-center">
        <router-link id="c-logo" to="/" class="hoverable">EELee</router-link>
            <ul id="c-headerUl" class="d-flex align-items-center" :style="headerUlStyle">
                <li>
                    <router-link to="/" class="c-nav-link hoverable" @mouseup="onNavLinkMouseUp">Home</router-link>
                </li>
                <li>
                    <router-link to="/portfolio" class="c-nav-link hoverable" @mouseup="onNavLinkMouseUp">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/app" class="c-nav-link hoverable" @mouseup="onNavLinkMouseUp">App</router-link>
                </li>
                <li>
                    <router-link to="/donate" class="c-nav-link hoverable" @mouseup="onNavLinkMouseUp">Donate</router-link>
                </li>
                <li>
                    <router-link to="/order" class="c-nav-link hoverable" @mouseup="onNavLinkMouseUp">Order Now!</router-link>
                </li>
            </ul>
            <span id="c-menuButton" class="d-none" @click="onMenuButtonClick">
                <img id="c-menuImg" class="hoverable" :src="require(`./assets/images/svg/menu-button.svg`)" alt="" @mouseenter="onMenuImgMouseEnter" @mouseleave="onMenuImgMouseLeave" >
            </span>
      </header>

      <section id="c-contactForm" class="d-flex flex-column align-items-start">
        <div id="c-formCover" class="d-none"></div>
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
                    <p id="c-fileNamePar">{{fileName}}</p>
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
            headerUlLeftPosition: Number,
            attachedFile: Object,
            widthClass: String,
            sizeHistoryArray: [],
            fileName: '',
            isMounted: false,
            isVerticalMenuExpanded: false,

            //
            header: Object,
            headerNavbar: Object,
            headerUl: Object,
            menuButton: Object,
            menuImg: Object,
            contactForm: Object,
            formCover: Object,
            messageButtons: Object,
            fileNamePar: Object,
        }
    },

    watch: {
        isVerticalMenuExpanded(val) {
            if (val) {
                this.menuImg.setAttribute('src', require(`./assets/images/svg/menu-button-hover.svg`));
                this.headerUl.classList.remove('invisible');
                this.formCover.classList.remove('d-none');
            } else {
                this.menuImg.setAttribute('src', require(`./assets/images/svg/menu-button.svg`));
                this.headerUl.classList.add('invisible');
                this.formCover.classList.add('d-none');
            }
        }
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
      
        // Calculates the pixel numbers for left property of headerUl
        headerUlLeftCalculator() {
            if (window.innerWidth > 576) this.headerUlLeftPosition = 0;
            else {
                var vw = window.innerWidth/100;
                this.headerUlLeftPosition = ((100*vw-(26*vw+25+this.headerUl.offsetWidth))/2+4*vw+25);
            }
            console.log(this.headerUlLeftPosition);
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
            this.fileNameUpdator();
            if (this.isMounted) this.headerUlLeftCalculator();
        },

        // Main Functionality

        // Updates the fileName to fit the textarea
        fileNameUpdator() {
            if (this.fileName == '') {} else {
                if (this.fileNamePar.offsetWidth/this.messageButtons.offsetWidth < 0.3 && this.fileName != this.attachedFile.name) this.fileName = this.attachedFile.name;
                if (this.fileNamePar.offsetWidth/this.messageButtons.offsetWidth > 0.45) {
                    var lastCharIndex = this.fileName.lastIndexOf('.');
                    var namePart = this.fileName.substr(0, lastCharIndex-3);
                    var extentionPart = this.fileName.substr(lastCharIndex, this.fileName.length-lastCharIndex);
                    this.fileName = `${namePart}${extentionPart}`;
                } else if (this.fileName != this.attachedFile.name) {
                    var lastCharIndex = this.fileName.lastIndexOf('.');
                    var namePart = this.fileName.substr(0, lastCharIndex-3);
                    var extentionPart = this.fileName.substr(lastCharIndex, this.fileName.length-lastCharIndex);
                    this.fileName = `${namePart}...${extentionPart}`;
                }
            }
        },

        // Determines how header navbar should be displayed
        headerNavDisplay() {
            if (window.innerWidth < 576) {
                // this.headerNavbar.classList.add('flex-column');
                this.headerUl.classList.remove('align-items-center');
                this.headerUl.classList.add('invisible', 'flex-column', 'align-items-end', 'c-vertical-menu');
                this.menuButton.classList.remove('d-none');
            } else {
                // this.headerNavbar.classList.remove('flex-column');
                this.headerUl.classList.remove('invisible', 'flex-column', 'align-items-end', 'c-vertical-menu');
                this.headerUl.classList.add('align-items-center');
                this.menuButton.classList.add('d-none');
            }
        },

        // Event Handlers

        onBodyDivMouseDown($event) {
            if (this.isVerticalMenuExpanded) {
                if ((!$event.target.classList.contains('c-nav-link')) && ($event.target.id != 'c-menuImg')) this.isVerticalMenuExpanded = false;
            }
        },
        onNavLinkMouseUp() {
            this.isVerticalMenuExpanded = false;
        },
        onFileUpload($event) {
            this.attachedFile = $event.target.files[0];
            console.log(this.attachedFile);
            this.fileName = this.attachedFile.name;
        },

        onAttachClick() {
            this.$refs.attachInput.click();
        },

        // Footer

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

    mounted() {
        this.header = document.getElementById('c-header');
        this.headerNavbar = document.getElementById('c-headerNavbar');
        this.headerUl = document.getElementById('c-headerUl');
        this.menuButton = document.getElementById('c-menuButton');
        this.menuImg = document.getElementById('c-menuImg');
        this.contactForm = document.getElementById('c-contactForm');
        this.formCover = document.getElementById('c-formCover');
        this.messageButtons = document.getElementById('c-messageButtons');
        this.fileNamePar = document.getElementById('c-fileNamePar');
        this.windowWidthClassEmitter();
        this.headerNavDisplay();
        this.headerUlLeftCalculator();
        this.isMounted = true;
    },

    updated() {
        this.fileNameUpdator();
        // this.headerNavDisplay();
        // console.log('updated', this.fileName);
    },
}
</script>

<style scoped>
@import 'assets/css/contact.css'
</style>