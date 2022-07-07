<template>
  <div class="slideshow">
    <div :id="`active${uniqueLabel}`" class="slideshow-active d-flex flex-column justify-content-between align-items-start">
        <span class="slideshow-title">
            <slot :name="`title${slideNum}`" />
        </span> 
        <span class="slideshow-content">
            <slot :name="`content${slideNum}`" />
        </span> 
        <div class="slideshow-navigation d-flex flex-column justify-content-between">
            <span :id="`next${uniqueLabel}`" class="slideshow-next prevent-select idpo-hoverable d-flex justify-content-between align-items-center align-self-end" @mouseover="onNextMouseOver" @mouseout="onNextMouseOut" @click="onNextClick">
                <slot :name="`title${nextNumber(slideNum, slidesNumber, true)}`" />
                <img ref="nextArrow" :src="require(`./assets/arrow-right-${widthClass}.svg`)" alt="">
            </span> 
            <span :id="`finish${uniqueLabel}`" class="slideshow-finish d-none prevent-select idpo-hoverable" @click="onFinishClick">
                <slot name="finish" />
            </span> 
            <span :id="`previous${uniqueLabel}`" class="slideshow-previous prevent-select idpo-hoverable d-flex justify-content-between align-items-center align-self-start" @mouseover="onPreviousMouseOver" @mouseout="onPreviousMouseOut" @click="onPreviousClick">
                <img ref="previousArrow" :src="require(`./assets/arrow-left-${widthClass}.svg`)" alt="">
                <slot :name="`title${previousNumber(slideNum, slidesNumber, true)}`" />
            </span> 
        </div>
    </div>
    <div :id="`inactive${uniqueLabel}`" class="slideshow-inactive d-none">
        <slot name="inactive" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'Slideshow',

    props: {
        uniqueLabel: String,
        slidesNumber: Number,
        loopMode: Boolean,
    },

    data() {
        return {
            widthClass: String,
            slideNum: 1,
            isActive: true,
                
            // Elements Object Refs
            activeDiv: Object,
            inactiveDiv: Object,
            previousSpan: Object,
            nextSpan: Object,
            finishSpan: Object,
        }
    },

    watch: {
        slideNum(val) {
            if (!this.loopMode) {
                if (this.slideNum == 1) {
                    this.previousSpan.classList.remove('d-flex');
                    this.previousSpan.classList.add('d-none');
                } else {
                    this.previousSpan.classList.remove('d-none');
                    this.previousSpan.classList.add('d-flex');
                }

                if (this.slidesNumber == val) {
                    this.nextSpan.classList.remove('d-flex');
                    this.nextSpan.classList.add('d-none');
                    this.finishSpan.classList.remove('d-none');
                } else {
                    this.finishSpan.classList.add('d-none');
                    this.nextSpan.classList.remove('d-none');
                    this.nextSpan.classList.add('d-flex');
                } 
            }
        },
        isActive(val) {
            if (!val) {
                this.activeDiv.classList.remove('d-flex');
                this.activeDiv.classList.add('d-none');
                this.inactiveDiv.classList.remove('d-none');
            }
        },
    },

    methods: {
        // Utility Methods
        
        preventDefaultEvents (e) {
            e = e || window.event;
            e.preventDefault();
        },

        // Returns the previous number within the given range starting from zero or one
        // i.e. for the range 5, it is 1-5 or 0-4
        previousNumber(num, range, fromOne) {
        var diffNum = (num - 1) % range;
        if (fromOne) {
            if (diffNum == 0) {
            diffNum = range;
            }
        }
        return diffNum;
        },

        // Returns the next number within the given range starting from zero or one
        // i.e. for the range 5, it is 1-5 or 0-4
        nextNumber(num, range, fromOne) {
        var diffNum = (num + 1) % range;
        if (fromOne) {
            if (diffNum == 0) {
            diffNum = range;
            }
        }
        return diffNum;
        },

    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      var windowWidth = window.innerWidth;

      if (windowWidth < 320) this.widthClass = "xxs";
      else if (windowWidth < 576) this.widthClass = "xs";
      else if (windowWidth < 768) this.widthClass = "sm";
      else if (windowWidth < 992) this.widthClass = "md";
      else this.widthClass = "lg";
    },

        // Event Handlers

        onNextMouseOver() {
            this.$refs.nextArrow.setAttribute('src', require(`./assets/arrow-right-hover-${this.widthClass}.svg`));
        },
        onNextMouseOut() {
            this.$refs.nextArrow.setAttribute('src', require(`./assets/arrow-right-${this.widthClass}.svg`));
        },
        onNextClick() {
            this.slideNum = this.nextNumber(this.slideNum, this.slidesNumber, true);
            this.onNextMouseOut();
            this.activeDiv.scrollTop = 0;
        },
        onFinishClick() {
            this.$emit('slideshow-finish');
            // this.isActive = false;
        },
        onPreviousClick() {
            this.slideNum = this.previousNumber(this.slideNum, this.slidesNumber, true);
            this.onPreviousMouseOut();
            this.activeDiv.scrollTop = 0;
        },
        onPreviousMouseOver() {
            this.$refs.previousArrow.setAttribute('src', require(`./assets/arrow-left-hover-${this.widthClass}.svg`));
        },
        onPreviousMouseOut() {
            this.$refs.previousArrow.setAttribute('src', require(`./assets/arrow-left-${this.widthClass}.svg`));
        },
    },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },

  beforeMount() {
    this.windowWidthClassEmitter();
  },


    mounted() {
        this.activeDiv = document.getElementById(`active${this.uniqueLabel}`);
        this.inactiveDiv = document.getElementById(`inactive${this.uniqueLabel}`);
        this.previousSpan = document.getElementById(`previous${this.uniqueLabel}`);
        this.nextSpan = document.getElementById(`next${this.uniqueLabel}`);
        this.finishSpan = document.getElementById(`finish${this.uniqueLabel}`);
        if (!this.loopMode) {
            this.previousSpan.classList.remove('d-flex');
            this.previousSpan.classList.add('d-none');
        }
    },

    emits: ['slideshow-finish']
}
</script>

<style scoped>

.slideshow {
    min-width: fit-content;
    background: #f9da2d;
    font-size: calc(1.8vw + 0.5rem);
    border: 4px double #d8215e;
    border-radius: 0.5rem;
}

.slideshow-active {
    width: 70vw;
    height: 50vh;
    min-width: 175px;
    min-height: 220px;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
}

.slideshow-title {
    width: 100%;
    height: fit-content;
    background: #f9da2d;
    font-family: 'Gluten';
    font-weight: 500;
    color: #d8215e;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 10px 10px 15px 10px;
}

.slideshow-content {
    width: 100%;
    height: fit-content;
    position: relative;
    font-family: 'Tajawal', sans-serif;
    color: #0101a9;
    line-height: 3rem;
    padding: 1% 3%;
    margin: 0;
}

.slideshow-navigation {
    background: #f9da2d;
    width: 100%;
    height: fit-content;
    position: relative;
    bottom: 0;
}

.slideshow-navigation span {
    width: fit-content;
    height: fit-content;
    font-family: 'Julius Sans One', sans-serif;
    font-size: calc(1.2vw + 0.5rem);
    white-space: nowrap;
    align-self: flex-end;
}

.slideshow-next {
    position: relative;
    right: 0;
    color: #079536;
    margin: 12px 0.5vw 10px 5px;
}

.slideshow-next:hover {
    color: #437bfd;
}

.slideshow-finish {
    position: relative;
    right: 0;
    background: #079536;
    font-weight: 800;
    color: #fff;
    border-radius: 0.5rem;
    padding: 8px;
    margin: 12px calc(3% + 10px);
}

.slideshow-previous {
    position: relative;
    left: 0;
    color: #9920f0;
    margin: 10px 5px 12px 0.5vw;
}

.slideshow-previous:hover {
    color: #ff4180;
}

.slideshow-inactive {
    width: 70vw;
    height: fit-content;
    font-family: 'Julius Sans One', sans-serif;
    font-weight: 900;
    line-height: 1.7rem;
    color: #079536;
    text-align: center;
    padding: 20px;
}
</style>