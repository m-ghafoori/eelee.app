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
            <input type="text" name="clientName" id="c-clientName" v-model="clientName" :style="clientNameStyle" @click="onClientNameClick" required>
        </div>
        <div class="c-clientInfo">
            <label for="clientEmail">Email:</label>
            <input type="email" name="clientEmail" id="c-clientEmail" v-model="clientEmail" :style="clientEmailStyle" @click="onClientEmailClick" required>
        </div>
        <div id="c-messageDiv" class="d-flex flex-column justify-content-between align-items-center">
            <textarea name="clientMessage" id="c-clientMessage" cols="90" rows="10" v-model="clientMessage" :style="clientMessageStyle" @click="onClientMessageClick" required></textarea>
            <div id="c-messageButtons" class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                    <span id="c-attachFile" @click="onAttachClick">Attach</span>
                    <input id="c-attachInput" type="file" @change="onFileUpload">
                    <p id="c-fileNamePar">{{fileName}}</p>
                </div>
                <span id="c-sendMessage" @click="onSendMessageClick">Send</span>
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
            widthClass: String,
            sizeHistoryArray: [],
            clientName: '',
            clientEmail: '',
            clientLastEnteredEmail: '',
            clientMessage: '',
            clientNameColor: '#0b7a62',
            clientEmailColor: '#0b7a62',
            clientMessageColor: '#0b7a62',
            fileName: '',
            attachedFile: {'name':''},
            isMounted: false,
            isVerticalMenuExpanded: false,
            showNoNameError: false,
            showNoEmailError: false,
            showInvalidEmailError: false,
            showNoMessageError: false,

            //
            header: Object,
            headerNavbar: Object,
            headerUl: Object,
            menuButton: Object,
            menuImg: Object,
            contactForm: Object,
            formCover: Object,
            clientNameInput: Object,
            clientEmailInput: Object,
            clientMessageInput: Object,
            attachInput: Object,
            messageButtons: Object,
            fileNamePar: Object,

            // Footer
            linkedinNav: Object,
            emailNav: Object,
            telegramNav: Object,
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
        },
        clientEmail(val) {
            if (val != 'Email is required.' && val != `"${this.clientLastEnteredEmail}" is not a valid email address.`)
            this.clientLastEnteredEmail = val;
            // console.log(this.clientLastEnteredEmail);
        },
        showNoNameError(val) {
            if (val) {
                this.clientName = 'Name is required.';
                this.clientNameColor = '#ff0000';
            } else {
                this.clientName = '';
                this.clientNameColor = '#0b7a62';
            }
        },
        showNoEmailError(val) {
            if (val) {
                this.clientEmail = 'Email is required.';
                this.clientEmailColor = '#ff0000';
            } else {
                this.clientEmail = '';
                this.clientEmailColor = '#0b7a62';
            }
        },
        showInvalidEmailError(val) {
            if (val) {
                this.clientEmail = `"${this.clientEmail}" is not a valid email address.`;
                this.clientEmailColor = '#ff0000';
            } else {
                this.clientEmail = this.clientLastEnteredEmail;
                this.clientEmailColor = '#0b7a62';
            }
        },
        showNoMessageError(val) {
            if (val) {
                this.clientMessage = 'Message is required.';
                this.clientMessageColor = '#ff0000';
            } else {
                this.clientMessage = '';
                this.clientMessageColor = '#0b7a62';
            }
        },
    },

    computed: {

        headerUlStyle() {
            return {
                'left': `${this.headerUlLeftPosition}px`,
            }
        },
        clientNameStyle() {
            return {
                'color': `${this.clientNameColor}`,
            }
        },
        clientEmailStyle() {
            return {
                'color': `${this.clientEmailColor}`,
            }
        },
        clientMessageStyle() {
            return {
                'color': `${this.clientMessageColor}`,
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
            this.attachInput.click();
        },
        onClientNameClick() {
            if (this.showNoNameError) this.showNoNameError = false;
        },
        onClientEmailClick() {
            if (this.showNoEmailError) this.showNoEmailError = false;
            if (this.showInvalidEmailError) this.showInvalidEmailError = false;
        },
        onClientMessageClick() {
            if (this.showNoMessageError) this.showNoMessageError = false;
        },
        onSendMessageClick() {
            if (this.clientName == '') this.showNoNameError = true;
            if (this.clientEmail == '') this.showNoEmailError = true;
            if (this.clientMessage == '') this.showNoMessageError = true;
            if (!this.clientEmailInput.validity.valid && this.clientEmail != '') this.showInvalidEmailError = true;
            if (!this.showNoNameError && !this.showNoEmailError && !this.showNoMessageError && this.clientEmailInput.validity.valid) {
                // console.log(this.clientEmailInput.validity.valid);
                var messageFormData = new FormData();
                messageFormData.append('name', this.clientName);
                messageFormData.append('email', this.clientEmail);
                messageFormData.append('message', this.clientMessage);
                messageFormData.append('attachment', this.attachedFile);
                for (const entry of messageFormData.entries()) {
                    console.log(entry);
                }
            }
            // var messageForm = document.createElement('form');
            // this.contactForm.appendChild(messageForm);
            // messageForm.setAttribute('method', 'POST');
            // messageForm.setAttribute('action', 'https://webhook.site/767019c1-1d04-4f24-b4ef-77ce3235f8e0');
            // messageForm.appendChild(this.clientNameInput);
            // messageForm.appendChild(this.clientEmailInput);
            // messageForm.appendChild(this.clientMessageInput);
            // messageForm.appendChild(this.attachInput);
            // messageForm.submit();

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
        this.header = document.getElementById('c-header');
        this.headerNavbar = document.getElementById('c-headerNavbar');
        this.headerUl = document.getElementById('c-headerUl');
        this.menuButton = document.getElementById('c-menuButton');
        this.menuImg = document.getElementById('c-menuImg');
        this.contactForm = document.getElementById('c-contactForm');
        this.formCover = document.getElementById('c-formCover');
        this.clientNameInput = document.getElementById('c-clientName');
        this.clientEmailInput = document.getElementById('c-clientEmail');
        this.clientMessageInput = document.getElementById('c-clientMessage');
        this.attachInput = document.getElementById('c-attachInput');
        this.messageButtons = document.getElementById('c-messageButtons');
        this.fileNamePar = document.getElementById('c-fileNamePar');
        this.linkedinNav = document.getElementById('c-linkedinNav');
        this.emailNav = document.getElementById('c-emailNav');
        this.telegramNav = document.getElementById('c-telegramNav');
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