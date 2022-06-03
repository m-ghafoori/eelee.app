<template>
  <div class="select-div d-flex flex-column">
    <span :id="`selected${removeSpace(labelName)}`" class="d-flex justify-content-between align-items-center select-selected-span" @click="selectedSpanClickHandler" @focus="selectedFocus"
      ><span :id="`selected${removeSpace(labelName)}Option`">{{selectedText}}</span>
      <img src="./assets/arrow.svg"/>
      </span>
    <ul :id="`${removeSpace(labelName)}DataUl`" class="d-flex flex-column scale-down-ver-top" :style="dataUlStyle">
      <li v-for="item in dataListArray" :key="item.index" :id="`${removeSpace(labelName)}${removeSpace(item)}`" @click="dataItemClickHandler(item)">
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
      selectedText: 'Select',
      selectedValue: String,
      selectedSpan: Object,
      selectedOption: Object,
      dataUl: Object,
    };
  },
  watch: {
    selectedValue(val) {
      this.$emit('selected-changed', val);
    },
    updatorNum() {
      this.selectedText = this.selectedValue;
    },
  },
  methods: {
    selectedSpanClickHandler() {
        // First, check if the current input list is expanded, and if it is, collapse it
        if (this.dataUl.classList.contains('select-open')) {
            this.dataUl.classList.remove('scale-up-ver-top');
            this.dataUl.classList.add('scale-down-ver-top');
            this.dataUl.classList.remove('select-open');
        } else {
            // Now we want to expand the currnet input list, but before that,
            // we should check to collapse any other input list that is already expanded
            if (document.getElementsByClassName('select-open').item(0)) {
              document.getElementsByClassName('select-open').item(0).classList.remove('scale-up-ver-top');
              document.getElementsByClassName('select-open').item(0).classList.add('scale-down-ver-top');
              document.getElementsByClassName('select-open').item(0).classList.remove('select-open');
            }
            // Now we expand the current input list
            this.dataUl.classList.remove('scale-down-ver-top');
            this.dataUl.classList.add('scale-up-ver-top');
            this.dataUl.classList.add('select-open');
        }
    },
    dataItemClickHandler(item) {
      this.selectedValue = item.toString();
      this.selectedText = this.selectedValue;
      this.selectedSpanClickHandler();
    },

    removeSpace(str) {
      str = str.replace(/ /g, '');
      return str;
    },
    selectedFocus() {
      console.log(document.activeElement.tagName)
    },
    selectedTextUpdator() {
      if (this.selectedOption.offsetWidth > 68) {
        this.selectedText = `${this.selectedText.substr(0, this.selectedText.length-4)}...`;
      }
    },
  },
  computed: {
      dataUlStyle() {
          return {
              'z-index' : this.zIndex,
          }
      },
  },
  mounted() {
    this.selectedSpan = document.getElementById(`selected${this.removeSpace(this.labelName)}`);
    this.selectedOption = document.getElementById(`selected${this.removeSpace(this.labelName)}Option`);
    this.dataUl = document.getElementById(`${this.removeSpace(this.labelName)}DataUl`);
    this.selectedValue = this.dataListArray[0];
    this.selectedText = this.selectedValue;
  },
  updated() {
    this.selectedTextUpdator();
  },
  emits: ['selected-changed']
};
</script>

<style scoped>
.select-div {
  width: 95px;
  height: 30px;
  position: relative;
}

.select-selected-span {
    width: 95px;
    height: 30px;
    position: absolute;
    top: 0;
    background: transparent;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-right: 0;
    border-left: 0;
    padding: 3px 3px 3px 6px;
}

ul {
    width: 95px;
    position: absolute;
    top: 30px;
    border: 2px solid black;
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
  border-bottom: 1px solid black;
  padding: 2%;
  font-size: 14px;
  width: 95px;
  overflow-wrap: break-word;
}

li:nth-last-of-type(1) {
  border-bottom: 0;
}

@media (max-width:576px) {
  .select-selected-span {
    justify-content: flex-end !important;
  }
}
</style>