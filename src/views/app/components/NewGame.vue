<template>
    <button class="hoverable" @click="clickHandler" :style="btnStyle">{{label}}</button>
</template>

<script>
import startNewGame from "../assets/js/tableGenerator"

export default {
    name: 'NewGame',
    props: {
        label: String,
        fontFamily: String,
        rowsNum: Number,
        colsNum: Number,
        minesNum: Number,
    },
    data () {
        return {
            newCellsArray: Array,
            minesNumber: Number
        }
    },
    computed: {
        btnStyle() {
            return {
                'font-family': `${this.fontFamily}`,
            }
        },
    },
    methods: {
        clickHandler() {
            try {
                this.newCellsArray = startNewGame(this.rowsNum, this.colsNum, this.minesNum);
                this.minesNumber = this.minesNum;
            } catch (error) {
                console.log(error);
            }
            this.$emit('new-game', this.newCellsArray, this.minesNumber);
        }
    }
}
</script>

<style scoped>

button {
    background: orange;
    border: 1px solid orange;
    border-radius: 50%;
    font-size: calc(1vw + 1.5vh);
    padding: 1vw 2vw;
    margin: 2vh 0;
}

button:active {
    color: blueviolet;
}

</style>