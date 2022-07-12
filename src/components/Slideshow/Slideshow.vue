<template>
  <div class="slideshow">
    <div :id="`active${uniqueLabel}`" class="slideshow-active">
      <span class="slideshow-title">
        <slot :name="`title${slideNum}`" />
      </span>
      <span class="slideshow-content">
        <slot :name="`content${slideNum}`" />
      </span>
      <div class="slideshow-navigation">
        <span
          :id="`next${uniqueLabel}`"
          class="slideshow-next prevent-select hoverable"
          @mouseover="onNextMouseOver"
          @mouseout="onNextMouseOut"
          @click="onNextClick"
          :style="{ color: nextTextColor }"
        >
          <slot :name="`title${nextNumber(slideNum, slidesNumber, true)}`" />
          <ToRightArrow
            :imgWidth="18 + windowWidth / 50"
            :imgColor="nextArrowColor"
          />
        </span>
        <span
          :id="`finish${uniqueLabel}`"
          class="slideshow-finish d-none prevent-select hoverable"
          @click="onFinishClick"
        >
          <slot name="finish" />
        </span>
        <span
          :id="`previous${uniqueLabel}`"
          class="slideshow-previous prevent-select hoverable"
          @mouseover="onPreviousMouseOver"
          @mouseout="onPreviousMouseOut"
          @click="onPreviousClick"
          :style="{ color: previousTextColor }"
        >
          <ToLeftArrow
            :imgWidth="18 + windowWidth / 50"
            :imgColor="previousArrowColor"
          />
          <slot
            :name="`title${previousNumber(slideNum, slidesNumber, true)}`"
          />
        </span>
      </div>
    </div>
    <div :id="`inactive${uniqueLabel}`" class="slideshow-inactive d-none">
      <slot name="inactive" />
    </div>
  </div>
</template>

<script>
import ToRightArrow from "./components/ToRightArrow.vue";
import ToLeftArrow from "./components/ToLeftArrow.vue";

export default {
  name: "Slideshow",

  components: {
    ToRightArrow,
    ToLeftArrow,
  },

  props: {
    uniqueLabel: String,
    slidesNumber: Number,
    loopMode: Boolean,
    nextTextMainColor: {
      default: "#079536",
    },
    nextTextHoverColor: {
      default: "#437bfd",
    },
    nextArrowMainColor: {
      default: "#2bde67",
    },
    nextArrowHoverColor: {
      default: "#ff4180",
    },
    previousTextMainColor: {
      default: "#9920f0",
    },
    previousTextHoverColor: {
      default: "#ff4180",
    },
    previousArrowMainColor: {
      default: "#e436ff",
    },
    previousArrowHoverColor: {
      default: "#51c4c4",
    },
  },

  data() {
    return {
      windowWidth: Number,
      nextTextColor: "#079536",
      nextArrowColor: "#2bde67",
      previousTextColor: "#9920f0",
      previousArrowColor: "#e436ff",
      slideNum: 1,
      isActive: true,

      // Elements Object Refs
      activeDiv: Object,
      inactiveDiv: Object,
      previousSpan: Object,
      nextSpan: Object,
      finishSpan: Object,
    };
  },

  watch: {
    slideNum(val) {
      if (!this.loopMode) {
        if (this.slideNum == 1) {
          this.previousSpan.classList.add("d-none");
        } else {
          this.previousSpan.classList.remove("d-none");
        }

        if (this.slidesNumber == val) {
          this.nextSpan.classList.add("d-none");
          this.finishSpan.classList.remove("d-none");
        } else {
          this.finishSpan.classList.add("d-none");
          this.nextSpan.classList.remove("d-none");
        }
      }
    },
    isActive(val) {
      if (!val) {
        this.activeDiv.classList.add("d-none");
        this.inactiveDiv.classList.remove("d-none");
      }
    },
  },

  methods: {
    // Utility Methods

    preventDefaultEvents(e) {
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
      this.windowWidth = window.innerWidth;
    },

    // Event Handlers

    onNextMouseOver() {
      this.nextTextColor = this.nextTextHoverColor;
      this.nextArrowColor = this.nextArrowHoverColor;
    },
    onNextMouseOut() {
      this.nextTextColor = this.nextTextMainColor;
      this.nextArrowColor = this.nextArrowMainColor;
    },
    onNextClick() {
      this.slideNum = this.nextNumber(this.slideNum, this.slidesNumber, true);
      this.onNextMouseOut();
      this.activeDiv.scrollTop = 0;
    },
    onFinishClick() {
      this.$emit("slideshow-finish");
      // this.isActive = false;
    },
    onPreviousClick() {
      this.slideNum = this.previousNumber(
        this.slideNum,
        this.slidesNumber,
        true
      );
      this.onPreviousMouseOut();
      this.activeDiv.scrollTop = 0;
    },
    onPreviousMouseOver() {
      this.previousTextColor = this.previousTextHoverColor;
      this.previousArrowColor = this.previousArrowHoverColor;
    },
    onPreviousMouseOut() {
      this.previousTextColor = this.previousTextMainColor;
      this.previousArrowColor = this.previousArrowMainColor;
    },
  },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },

  beforeMount() {
    this.windowWidthClassEmitter();
  },

  mounted() {
    this.activeDiv = document.querySelector(`#active${this.uniqueLabel}`);
    this.inactiveDiv = document.querySelector(`#inactive${this.uniqueLabel}`);
    this.previousSpan = document.querySelector(`#previous${this.uniqueLabel}`);
    this.nextSpan = document.querySelector(`#next${this.uniqueLabel}`);
    this.finishSpan = document.querySelector(`#finish${this.uniqueLabel}`);
    if (!this.loopMode) {
      this.previousSpan.classList.add("d-none");
    }
  },

  emits: ["slideshow-finish"],
};
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.slideshow-title {
  width: 100%;
  height: fit-content;
  background: #f9da2d;
  font-family: "Gluten";
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
  font-family: "Tajawal", sans-serif;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.slideshow-navigation span {
  width: fit-content;
  height: fit-content;
  font-family: "Julius Sans One", sans-serif;
  font-size: calc(1.2vw + 0.5rem);
  white-space: nowrap;
}

.slideshow-next {
  position: relative;
  right: 0;
  margin: 12px 0.5vw 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
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
  align-self: flex-end;
}

.slideshow-previous {
  position: relative;
  left: 0;
  margin: 10px 5px 12px 0.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
}

.slideshow-inactive {
  width: 70vw;
  height: fit-content;
  font-family: "Julius Sans One", sans-serif;
  font-weight: 900;
  line-height: 1.7rem;
  color: #079536;
  text-align: center;
  padding: 20px;
}
</style>