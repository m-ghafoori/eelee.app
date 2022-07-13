<template>
  <div class="cell d-flex justify-content-center align-items-center" :style="cellStyle"
  @click="leftClickEmitter(this.info, e)"
  @contextmenu="rightClickEmitter(this.info, e)"
  @mousedown="preventMouseEvent(e)"
  @mouseenter="preventMouseEvent(e)">
    <span :style="spanStyle">{{cellLabel}}</span>
  </div>
</template>
<script>
export default {
  name: 'Cell',
  props: {
    cell: {},
    defCol: String,
    revCol: String,
    markCol: String,
    bombCol: String,
    minesNumCol: String,
    defSize: Number
  },
  data () {
    return {
      info: {}
    }
  },
  computed: {
    cellLabel: function () {
      if (!this.info.isMine) {
        if (this.info.minesAround != 0) return `${this.info.minesAround}`;
        else return ' ';
      }
      else return 'X';
    },
    visibState: function () {
      var visState = 'hidden';
      if (this.info.isRevealed) visState = 'visible';
      return visState;
    },
    backColor: function () {
      var bColor = this.defCol;
      if (this.info.isRevealed) {
        if (this.info.isMine) { bColor = this.bombCol; }
        else bColor = this.revCol;
      } else if (this.info.isMarked) bColor = this.markCol;
      return bColor;
    },
    cellStyle: function () {
      return {
        display: 'inline-block',
        margin: '1px',
        'background-image': `linear-gradient(to bottom right, #fffcf2, ${this.backColor})`,
        'border-radius': '13%',
        height: `${this.defSize}px`,
        width: `${this.defSize}px`
      }
    },
    spanStyle: function () {
      return {
        visibility: `${this.visibState}`,
        color: this.minesNumCol,
        'font-weight': 'bold',
        'font-size': `${this.defSize/1.6}px`
      }
    }
  },
  created () {
    this.info = this.cell;
  },

  methods: {
    rightClickEmitter (data, e) {
      e = e || window.event;
      e.preventDefault();
      this.$emit('right-click', data)
    },
    leftClickEmitter (data, e) {
      e = e || window.event;
      e.preventDefault();
      this.$emit('left-click', data);
      // console.log(data);
    },
    preventMouseEvent(e) {
      e = e || window.event;
      e.preventDefault();
    }
  }
}

</script>

<style scoped>

span {
  color: #944a04;
}
</style>