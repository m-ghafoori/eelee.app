<template>
  <div
    class="color-div hoverable d-flex justify-content-center align-items-center"
  >
    <span
      class="
        label-span
        color-label-span
        d-flex
        justify-content-center
        align-items-center
      "
      :style="labelStyle"
      @mousedown="preventDefaultEvents"
      @click="onLabelClick"
      >{{ labelName }}</span
    >
    <div class="input-div d-flex align-items-center">
      <input
        :id="removeSpace(labelName)"
        class="input hoverable"
        v-model="inputValue"
        :placeholder="placeHolder"
        type="color"
        @mousedown="preventDefaultEvents"
        @click="onInputClick"
        @focus="onInputFocus"
        @blur="onInputBlur"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputColor",
  props: {
    eventName: String,
    labelName: String,
    fontFamily: String,
    defaultValue: String,
  },
  data() {
    return {
      inputValue: String,
      placeHolder: String,
      labelColor: "black",
      labelBorderColor: "black",
      lastActiveElement: "none",
      docHasFocus: Boolean,
      blurOnMouseDown: false,
      colorInput: Object,
    };
  },
  watch: {
    docHasFocus(val) {
      if (!val) {
        this.blurOnMouseDown = true;
        console.log("watcher called on blurOnMouseDown:", this.blurOnMouseDown);
      }
    },
    inputValue(val) {
      this.$emit(this.eventName, val);
    },
  },
  computed: {
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

    // Main Functionality

    // submitChanges () {
    //     this.$emit(this.eventName, this.inputValue);
    // },

    // Event Handlers

    onLabelClick() {
      if (this.lastActiveElement != this.colorInput.id) {
        this.colorInput.click();
      } else {
        this.colorInput.blur();
      }
    },
    onInputClick(e) {
      if (this.lastActiveElement != this.colorInput.id) {
        this.colorInput.focus();
      } else {
        this.preventDefaultEvents(e);
        this.colorInput.blur();
      }
    },
    onInputFocus() {
      if (!this.blurOnMouseDown) {
        this.labelColor = "red";
        this.labelBorderColor = "red";
        console.log("focus", this.lastActiveElement, this.colorInput.id);
        this.lastActiveElement = this.colorInput.id;
        console.log(`last active set to: ${this.lastActiveElement}`);
      } else {
        this.colorInput.blur();
        setTimeout(() => {
          this.blurOnMouseDown = false;
        }, 50);
      }
    },
    onInputBlur() {
      if (!this.blurOnMouseDown) {
        this.labelColor = "black";
        this.labelBorderColor = "black";
        console.log("blur", this.lastActiveElement, this.colorInput.id);
        this.lastActiveElement = "none";
        console.log(`last active set to: ${this.lastActiveElement}`);
      }
    },
  },
  created() {
    this.inputValue = this.defaultValue;
    this.placeHolder = this.inputValue;
  },
  mounted() {
    this.colorInput = document.getElementById(this.removeSpace(this.labelName));
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
  min-width: fit-content;
}

input {
  width: 39px;
  height: 30px;
  border: 0;
  border-right: 2px solid;
  margin-right: 1px;
}

input:focus,
input:active {
  outline: none !important;
  border-color: red;
  box-shadow: 0 0 0;
}

.color-div {
  padding: 0;
  margin: 5px 0;
  margin-bottom: auto;
}

.color-label-span {
  border-left: 2px solid black;
  margin: 5px 0;
}

@media screen and (max-width: 576px) {
  .color-div {
    padding-right: 16px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  input {
    margin-right: 0;
    border-left: 2px solid;
    border-bottom: 2px solid;
  }

  .color-div {
    flex-direction: column !important;
  }

  .input-div {
    align-self: center;
  }

  .color-label-span {
    width: 80px;
    border-right: 2px solid;
    border-top: 2px solid;
    margin: 10px 0 5px 0;
  }
}
</style>