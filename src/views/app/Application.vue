<template>
<div class="container">
  <Table
  @contextmenu="tableClickPreventer(e)"/>
</div>
</template>

<script>
import Table from './components/Table.vue'


export default {
  name: 'AppLication',
  components: {
    Table
  },
  //  data () {
  //   return {
  //     rows: 10,
  //     cols: 10,
  //     mines: 20,
  //     cellSize: 30,
  //     defaultColor: '#ff7f50',
  //     revealedColor: '#9acd32',
  //     markedColor: '#8a2be2',
  //     bombLostColor: '#ff0000',
  //   }
  // },
  methods: {
    tableClickPreventer (e) {
      e = e || window.event;
      e.preventDefault();
    },
    bodyClickHandler() {
      // if (document.getElementsByClassName('select-open').item(0)) {
      //   document.getElementsByClassName('select-open').item(0).classList.remove('scale-up-ver-top');
      //   document.getElementsByClassName('select-open').item(0).classList.add('scale-down-ver-top');
      //   document.getElementsByClassName('select-open').item(0).classList.remove('select-open');
      // }
      console.log('app:', document.activeElement.tagName)
    },
  }
  // emits: ['rows-changed', 'cols-changed', 'mines-changed', 'cell-size-changed',
  //         'def-color-changed', 'rev-color-changed', 'mark-color-changed', 'bomb-lost-color-changed']
}
</script>

<style>
@import './assets/css/app.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: transparent;
}
</style>
