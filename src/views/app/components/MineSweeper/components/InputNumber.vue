<template>
  <div class="number-div hoverable">
    <span
      class="label-span number-label-span"
      :style="labelStyle"
      @mousedown="preventDefaultEvents"
      @click="onLabelClick"
      >{{ labelName }}</span
    >
    <div class="input-div align-items-center">
      <input
        :id="removeSpace(labelName)"
        class="input"
        v-model="inputValue"
        type="number"
        :min="minValue"
        :max="maxValue"
        @focus="onInputFocus"
        @blur="onInputBlur"
        @keydown="onInputKeyDown"
        @keyup="onInputKeyUp"
      />
      <div class="spinner-box">
        <Spinner
          :isActive="isUpperSpinnerActive"
          hoverColor="#f34fff"
          @mousedown="onUpperSpinnerMouseDown"
          @mouseup="onUpperSpinnerMouseUp"
          @mouseleave="onUpperSpinnerMouseUp"
          style="transform: rotate(180deg)"
        />
        <Spinner
          :isActive="isLowerSpinnerActive"
          hoverColor="#f34fff"
          @mousedown="onLowerSpinnerMouseDown"
          @mouseup="onLowerSpinnerMouseUp"
          @mouseleave="onLowerSpinnerMouseUp"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
export default {
  name: "InputNumber",
  components: {
    Spinner,
  },
  props: {
    labelName: String,
    eventName: String,
    defaultValue: Number,
    minValue: Number,
    maxValue: Number,
  },
  data() {
    return {
      inputValue: Number,
      docHasFocus: Boolean,
      labelColor: "#000",
      labelBorderColor: "#000",
      lastActiveElement: "none",
      blurOnMouseDown: false,
      isUpperSpinnerActive: false,
      isLowerSpinnerActive: false,
      incrementTimeoutRef: Function,
      decrementTimeoutRef: Function,
      incrementIntervalRef: Function,
      decrementIntervalRef: Function,
      numberInput: Object,
    };
  },
  watch: {
    defaultValue(val) {
      this.inputValue = val;
    },
    docHasFocus(val) {
      if (!val) {
        this.blurOnMouseDown = true;
        console.log("watcher called on blurOnMouseDown:", this.blurOnMouseDown);
      }
    },
    inputValue() {
      this.$emit(this.eventName, this.filteredValue);
    },
    isUpperSpinnerActive(val) {
      if (val) {
        if (this.inputValue < this.maxValue) this.inputValue++;
        this.incrementTimeoutRef = setTimeout(() => {
          this.incrementIntervalRef = setInterval(() => {
            if (this.inputValue < this.maxValue) this.inputValue++;
          }, 125);
        }, 500);
      } else {
        clearTimeout(this.incrementTimeoutRef);
        clearInterval(this.incrementIntervalRef);
      }
    },
    isLowerSpinnerActive(val) {
      if (val) {
        if (this.inputValue > this.minValue) this.inputValue--;
        this.decrementTimeoutRef = setTimeout(() => {
          this.decrementIntervalRef = setInterval(() => {
            if (this.inputValue > this.minValue) this.inputValue--;
          }, 125);
        }, 500);
      } else {
        clearTimeout(this.decrementTimeoutRef);
        clearInterval(this.decrementIntervalRef);
      }
    },
  },
  computed: {
    filteredValue: function () {
      var filtered = Math.max(this.minValue, this.inputValue);
      return Math.min(this.maxValue, filtered);
    },

    // Styles

    labelStyle() {
      return {
        color: `${this.labelColor}`,
        "border-color": `${this.labelBorderColor}`,
      };
    },
  },
  methods: {
    // Utility Methods

    preventDefaultEvents(e) {
      e = e || window.event;
      e.preventDefault();
    },
    removeSpace(str) {
      str = str.replace(/ /g, "");
      return str;
    },

    // Event Handlers

    onLabelClick() {
      if (this.lastActiveElement != this.numberInput.id) {
        this.numberInput.focus();
      } else {
        this.numberInput.blur();
      }
    },
    onInputFocus() {
      if (!this.blurOnMouseDown) {
        this.labelColor = "#f00";
        this.labelBorderColor = "#f00";
        this.numberInput.style.color = "#f00";
        this.numberInput.parentElement.style.borderColor = "#f00";
        console.log("focus", this.lastActiveElement, this.numberInput.id);
        this.lastActiveElement = this.numberInput.id;
        console.log(`last active set to: ${this.lastActiveElement}`);
      } else {
        this.numberInput.blur();
        setTimeout(() => {
          this.blurOnMouseDown = false;
        }, 50);
      }
    },
    onInputBlur() {
      if (!this.blurOnMouseDown) {
        this.labelColor = "#000";
        this.labelBorderColor = "#000";
        this.numberInput.style.color = "#000";
        this.numberInput.parentElement.style.borderColor = "#000";
        console.log("blur", this.lastActiveElement, this.numberInput.id);
        this.lastActiveElement = "none";
        console.log(`last active set to: ${this.lastActiveElement}`);
      }
    },
    onInputKeyDown(e) {
      if (e.key == "ArrowUp") {
        this.onUpperSpinnerMouseDown(e);
      }
      if (e.key == "ArrowDown") {
        this.onLowerSpinnerMouseDown(e);
      }
    },
    onInputKeyUp(e) {
      if (e.key == "ArrowUp") {
        this.onUpperSpinnerMouseUp(e);
      }
      if (e.key == "ArrowDown") {
        this.onLowerSpinnerMouseUp(e);
      }
    },
    onUpperSpinnerMouseDown(e) {
      this.preventDefaultEvents(e);
      this.isUpperSpinnerActive = true;
      this.numberInput.focus();
    },
    onUpperSpinnerMouseUp(e) {
      this.preventDefaultEvents(e);
      this.isUpperSpinnerActive = false;
    },
    onLowerSpinnerMouseDown(e) {
      this.preventDefaultEvents(e);
      this.isLowerSpinnerActive = true;
      this.numberInput.focus();
    },
    onLowerSpinnerMouseUp(e) {
      this.preventDefaultEvents(e);
      this.isLowerSpinnerActive = false;
    },
  },
  created() {
    this.inputValue = this.defaultValue;
    this.placeHolder = this.inputValue.toString();
  },
  mounted() {
    this.numberInput = document.getElementById(
      this.removeSpace(this.labelName)
    );
    this.docHasFocus = document.hasFocus();
  },
  updated() {
    this.docHasFocus = document.hasFocus();
  },
};
</script>

<style scoped>
div,
span,
input {
  background: transparent;
}

input {
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: calc(1.5vw + 1.5vh);
  border: 0;
  margin-right: 0.1vw;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input:focus,
input:active {
  outline: none !important;
  color: red;
  border-color: red;
  box-shadow: 0 0 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  appearance: none;
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.number-div {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.number-label-span {
  border-left: 0.2vw solid;
  justify-content: center;
}

.spinner-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>