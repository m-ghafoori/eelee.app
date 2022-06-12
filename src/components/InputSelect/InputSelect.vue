<template>
  <div class="select-div d-flex flex-column">
    <span :id="`selected${removeSpace(labelName)}`" class="d-flex justify-content-between align-items-center select-selected-span input" tabindex="0" :style="selectedSpanStyle" @mousedown="preventDefaultEvents" @click="onSelectedSpanClick" @focus="onSelectedSpanFocus" @blur="onSelectedSpanBlur"
      ><span :id="`selected${removeSpace(labelName)}Option`">{{selectedText}}</span>
      <img :id="`${removeSpace(labelName)}SelectArrow`" :src="require('./assets/arrow.svg')"/>
      </span>
    <ul :id="`${removeSpace(labelName)}DataUl`" class="d-flex flex-column scale-down-ver-top" :style="dataUlStyle">
      <li v-for="item in dataListArray" :key="item.index" :id="`${removeSpace(labelName)}${removeSpace(item)}`" :style="{'border-color':dataUlBorderColor}" @mousedown="preventDefaultEvents" @click="onDataItemClick(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InputSelect",
  props: {
    labelName: String,
    dataListArray: Array,
    zIndex: Number,
    updatorNum: Number,
  },
  data() {
    return {
      selectedValue: String,
      selectedText: 'Select',
      selectedColor: 'black',
      selectedBorderColor: 'black',
      dataUlBorderColor: 'black',
      lastActiveElement: 'none',
      docHasFocus: Boolean,
      blurOnMouseDown: false,
      selectedSpan: Object,
      selectedOption: Object,
      dataUl: Object,
      arrowImage: Object,
    };
  },
  watch: {
    selectedValue(val) {
      this.$emit('selected-changed', val);
    },
    updatorNum() {
      this.selectedText = this.selectedValue;
    },
    docHasFocus(val) {
      if (!val) {
        this.blurOnMouseDown = true;
        console.log('watcher called on blurOnMouseDown:', this.blurOnMouseDown)
      }
    },
  },
  computed: {
    // Utilities



    // Styles

    selectedSpanStyle() {
        return {
            outline: 'none',
            color: `${this.selectedColor}`,
            'border-color': `${this.selectedBorderColor}`,
        }
    },
    dataUlStyle() {
        return {
            'border-color' : this.dataUlBorderColor,
            'z-index' : this.zIndex,
        }
    },
  },
  methods: {
    preventDefaultEvents (e) {
        e = e || window.event;
        e.preventDefault();
    },
    onSelectedSpanClick() {
      if (this.lastActiveElement == this.selectedSpan.id) {
        console.log(`onSelectSpanClick: lastActive: ${this.lastActiveElement}, this id:${this.selectedSpan.id}`);
        this.selectedSpan.blur();
      } else {
          console.log(`onSelectSpanClick: lastActive: ${this.lastActiveElement}, this id:${this.selectedSpan.id}`);
          this.selectedSpan.focus();
        } 
    },
    onDataItemClick(item) {
      this.selectedValue = item.toString();
      this.selectedText = this.selectedValue;
    },
    removeSpace(str) {
      str = str.replace(/ /g, '');
      return str;
    },
    onSelectedSpanFocus() {
      if (!this.blurOnMouseDown) {
        this.selectedColor = 'red';
        this.selectedBorderColor = 'red';
        this.arrowImage.setAttribute('src', require('./assets/arrowFocused.svg'));
        this.lastActiveElement = this.selectedSpan.id;
        // First we should check to collapse any other input list that is already expanded
        if (document.getElementsByClassName('select-open').item(0)) {
          document.getElementsByClassName('select-open').item(0).classList.remove('scale-up-ver-top');
          document.getElementsByClassName('select-open').item(0).classList.add('scale-down-ver-top');
          document.getElementsByClassName('select-open').item(0).classList.remove('select-open');
        }
        // Now we expand the current input list
        this.dataUlBorderColor = 'red';
        this.dataUl.classList.remove('scale-down-ver-top');
        this.dataUl.classList.add('scale-up-ver-top');
        this.dataUl.classList.add('select-open');
        this.$emit('selected-focused');
      } else {
          this.selectedSpan.blur();
          setTimeout(() => {
            this.blurOnMouseDown = false;
          }, 50);
        }
    },
    onSelectedSpanBlur() {
      if (!this.blurOnMouseDown) {
        this.selectedColor = 'black';
        this.selectedBorderColor = 'black';
        this.arrowImage.setAttribute('src', require('./assets/arrow.svg'));
        this.lastActiveElement = 'none';
        // Collapse the current input list
        this.dataUlBorderColor = 'black';
        this.dataUl.classList.remove('scale-up-ver-top');
        this.dataUl.classList.add('scale-down-ver-top');
        this.dataUl.classList.remove('select-open');
        this.$emit('selected-blured');
      }
    },
    selectedTextUpdator() {
      if (this.selectedOption.offsetWidth > 72) {
        this.selectedText = `${this.selectedText.substr(0, this.selectedText.length-4)}...`;
      }
    },
  },
  mounted() {
    this.selectedSpan = document.getElementById(`selected${this.removeSpace(this.labelName)}`);
    this.selectedOption = document.getElementById(`selected${this.removeSpace(this.labelName)}Option`);
    this.dataUl = document.getElementById(`${this.removeSpace(this.labelName)}DataUl`);
    this.arrowImage = document.getElementById(`${this.removeSpace(this.labelName)}SelectArrow`);
    this.selectedValue = this.dataListArray[0];
    this.selectedText = this.selectedValue;
    this.docHasFocus = document.hasFocus();
  },
  updated() {
    this.selectedTextUpdator();
    this.docHasFocus = document.hasFocus();
  },
  emits: ['selected-changed', 'selected-focused', 'selected-blured']
};
</script>

<style scoped>
.select-div {
  width: 100px;
  height: 30px;
  position: relative;
}

.select-selected-span {
    width: 100px;
    height: 30px;
    position: absolute;
    top: 0;
    background: transparent;
    border-right: 2px solid;
    padding: 3px 3px 3px 6px;
}

ul {
    width: 100px;
    position: absolute;
    top: 30px;
    border: 2px solid;
    border-top: 0;
    border-bottom: 0;
    border-radius: 0 0 10px 10px;
    background: repeating-linear-gradient(to bottom right, rgb(255, 202, 230) 48%, #d4ffff 68%, rgb(255, 202, 230) 88%);
}

span{
  padding: 2%;
  min-width: fit-content;
}

img {
  margin-left: 3px;
}

li {
  border-bottom: 1px solid red;
  padding: 2%;
  font-size: 14px;
  width: 100%;
  overflow-wrap: break-word;
}

li:nth-last-of-type(1) {
  border-bottom: 0;
}

li:hover {
  color: red;
}

@media (max-width: 576px) {
  .select-selected-span {
    justify-content: flex-end !important;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .select-selected-span {
    border: 2px solid;
    border-top: 0;
  }
}

</style>