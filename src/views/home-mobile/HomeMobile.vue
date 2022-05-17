<template>
  <div id="m-body" class="">
     <!-- <div id="m-loader" class="d-none">
        <h2 id="m-loadingTxt">LOADING ...</h2>
        <div class="mosaic-loader">
        <div class="cell d-0"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        <div class="cell d-5"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        <div class="cell d-5"></div>
        <div class="cell d-6"></div>
        </div>
    </div> -->

    <div id="m-question" class="preload animate__animated">
        <p>ENABLE SOUND EFFECTS ???</p>
        <div class="d-flex justify-content-around align-items-center">
            <span id="m-enableSound" class="hoverable" onclick="acceptHandler()">YES</span>
            <span id="m-disableSound" class="hoverable" onclick="rejectHandler()">NO</span>
        </div>
        <p id="m-soundMessage" class="animate__animated">&nbsp;</p>
    </div>

    <div id="m-containerWrapper" class="">
        <div id="m-mainContainer" class="">
    
            <header class="">
                <span id="m-logo-1" class="text-shadow-logo">ee</span>
                <span id="m-logo-2" class="text-shadow-logo">f
                </span>
                <span id="m-logo-3" class="text-shadow-logo">ee</span>
            </header>
        
            <section id="m-showcase" class="">
                <ul id="m-navUl" class="hoverable">
                    <li class="">
                        <span id="m-portNav" class="text-shadow-drop-center" href="#">Portfolio</span>
                    </li>
                    <li class="">
                        <span id="m-appNav" class="text-shadow-drop-center" href="#">App</span>
                    </li>
                </ul>
            
                <div id="m-centralDiv" class="">
            
                    <div id="m-orderDiv" class="">
                        <span id="m-orderSpan-1" class="moon-shadow hoverable">Need A Web App ???</span>
                        <span id="m-orderSpan-2" class="text-shadow-logo hoverable">
                            <span id="m-orderSpan-2-1">Click to <br></span>
                            <span id="m-orderSpan-2-2">c</span>
                            <span id="m-orderSpan-2-3">RDER</span>
                        </span>
                    </div>
        
                    <div id="m-donateDiv" class="">
                        <img id="m-donateIcon" class="moon-shadow hoverable" @mouseenter="donateImgSrcMouseEnter" @mouseleave="donateImgSrcMouseLeave" :src="require(`./assets/images/svg/donate-${widthClass}.svg`)" alt="">
                    </div>
                </div>
            </section>
    
            <footer class="">
                        <span id="m-telegramSpan" href="#" class="">
                            <img id="m-telegramIcon" class="footer-shadow hoverable" @mouseenter="telegramImgSrcMouseEnter" @mouseleave="telegramImgSrcMouseLeave" :src="require(`./assets/images/svg/telegram-${widthClass}.svg`)">
                        </span>
                        <span id="m-emailSpan" href="#" class="">
                            <img id="m-emailIcon" class="footer-shadow hoverable" @mouseenter="emailImgSrcMouseEnter" @mouseleave="emailImgSrcMouseLeave" :src="require(`./assets/images/svg/email-${widthClass}.svg`)">
                        </span>
                        <span id="m-linkedInSpan" href="#" class="">
                            <img id="m-linkedinIcon" class="footer-shadow hoverable" @mouseenter="linkedinImgSrcMouseEnter" @mouseleave="linkedinImgSrcMouseLeave" :src="require(`./assets/images/svg/linkedin-${widthClass}.svg`)">
                        </span>
            </footer>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      var windowWidth = window.innerWidth;

      switch (true) {
        case (windowWidth < 320):
          this.$emit('screen-width-change', 'xxs')
          return 'xxs';
    
        case (windowWidth < 576):
          this.$emit('screen-width-change', 'xs')
          return 'xs';
    
        case (windowWidth < 768):
          this.$emit('screen-width-change', 'sm')
          return 'sm';
        
        case (windowWidth < 992):
          this.$emit('screen-width-change', 'md')
          return 'md';
            
        default:
          this.$emit('screen-width-change', 'lg')
          return 'lg';
      }
    },
    donateImgSrcMouseEnter() {
      document.getElementById('m-donateIcon').setAttribute('src', require(`./assets/images/svg/donate-hover-${this.widthClass}.svg`));
    },
    donateImgSrcMouseLeave() {
      document.getElementById('m-donateIcon').setAttribute('src', require(`./assets/images/svg/donate-${this.widthClass}.svg`));
    },
    telegramImgSrcMouseEnter() {
      document.getElementById('m-telegramIcon').setAttribute('src', require(`./assets/images/svg/telegram-hover-${this.widthClass}.svg`));
    },
    telegramImgSrcMouseLeave() {
      document.getElementById('m-telegramIcon').setAttribute('src', require(`./assets/images/svg/telegram-${this.widthClass}.svg`));
    },
    emailImgSrcMouseEnter() {
      document.getElementById('m-emailIcon').setAttribute('src', require(`./assets/images/svg/email-hover-${this.widthClass}.svg`));
    },
    emailImgSrcMouseLeave() {
      document.getElementById('m-emailIcon').setAttribute('src', require(`./assets/images/svg/email-${this.widthClass}.svg`));
    },
    linkedinImgSrcMouseEnter() {
      document.getElementById('m-linkedinIcon').setAttribute('src', require(`./assets/images/svg/linkedin-hover-${this.widthClass}.svg`));
    },
    linkedinImgSrcMouseLeave() {
      document.getElementById('m-linkedinIcon').setAttribute('src', require(`./assets/images/svg/linkedin-${this.widthClass}.svg`));
    },
  },
  computed: {
    widthClass() {
      return this.windowWidthClassEmitter();
    }
  },
  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },
  destroyed() {
    window.removeEventListener("resize", this.windowWidthClassEmitter);
  },
}
</script>

<style scoped>
@import 'assets/css/loading-mobile.css';
@import 'assets/css/home-mobile.css';
@import 'assets/css/home-mobile-animations.css';
</style>
