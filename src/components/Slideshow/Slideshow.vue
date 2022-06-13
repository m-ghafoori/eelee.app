<template>
  <div class="slideshow">
    <div :id="`active${uniqueLabel}`" class="slideshow-active d-flex flex-column justify-content-between align-items-start">
        <span class="slideshow-title">
            <slot :name="`title${slideNum}`" />
        </span> 
        <span class="slideshow-content">
            <slot :name="`content${slideNum}`" />
        </span> 
        <div class="slideshow-navigation d-flex justify-content-between">
            <span :id="`previous${uniqueLabel}`" class="slideshow-previous prevent-select" @click="onPreviousClick">
                <slot :name="`title${previousNumber(slideNum, slidesNumber, true)}`" />
            </span> 
            <span :id="`next${uniqueLabel}`" class="slideshow-next prevent-select" @click="onNextClick">
                <slot :name="`title${nextNumber(slideNum, slidesNumber, true)}`" />
            </span> 
            <span :id="`finish${uniqueLabel}`" class="slideshow-finish d-none prevent-select" @click="onFinishClick">
                <slot name="finish" />
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
                    console.log('watcher', this.slideNum, 'hiding previous');
                    this.previousSpan.classList.add('invisible');
                } else {
                    console.log('watcher', this.slideNum, 'showing previous');
                    this.previousSpan.classList.remove('invisible');
                }

                if (this.slidesNumber == val) {
                    console.log('watcher', this.slideNum, 'hiding next');
                    this.nextSpan.classList.add('d-none');
                    this.finishSpan.classList.remove('d-none');
                    console.log('finish classList', this.finishSpan.classList)
                } else {
                    console.log('watcher', this.slideNum, 'hiding finish');
                    this.finishSpan.classList.add('d-none');
                    this.nextSpan.classList.remove('d-none');
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
        console.log('previous number:', num, diffNum);
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

        // Event Handlers

        onPreviousClick() {
            console.log('previous clicked')
            this.slideNum = this.previousNumber(this.slideNum, this.slidesNumber, true);
        },

        onNextClick() {
            console.log('next clicked')
            this.slideNum = this.nextNumber(this.slideNum, this.slidesNumber, true);
        },

        onFinishClick() {
            console.log('finish clicked')
            this.isActive = false;
        },
    },

    created() {

    },

    mounted() {
        this.activeDiv = document.getElementById(`active${this.uniqueLabel}`);
        this.inactiveDiv = document.getElementById(`inactive${this.uniqueLabel}`);
        this.previousSpan = document.getElementById(`previous${this.uniqueLabel}`);
        this.nextSpan = document.getElementById(`next${this.uniqueLabel}`);
        this.finishSpan = document.getElementById(`finish${this.uniqueLabel}`);
        if (!this.loopMode) this.previousSpan.classList.add('invisible');
    },
}
</script>

<style scoped>

.slideshow {
    background: #ffdaf0;
}

.slideshow-active {
    position: relative;
    width: 70vw;
    height: 50vh;
    overflow-x: hidden;
    overflow-y: auto;
}

.slideshow-title {
    width: inherit;
    height: 15%;
    background: #cbffe8;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 10000;
    padding-top: 1.5%;
}

.slideshow-content {
    width: inherit;
    height: fit-content;
    position: relative;
    padding: 1% 3%;
}

.slideshow-navigation {
    background: #cbffe8;
    width: 100%;
    height: 18%;
    position: relative;
    bottom: 0;
    padding: 2% 5%;
}

.slideshow-previous {
    position: relative;
    left: 0;
}

.slideshow-next {
    position: relative;
    right: 0;
}

.slideshow-inactive {
    background: #fff;
}
</style>