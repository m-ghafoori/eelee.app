<template>
        <div class="font-div hoverable d-flex justify-content-center align-items-center">
            <span class="font-label-span d-flex justify-content-center align-items-center" :style="labelStyle" @mousedown="preventDefaultEvents" @click="labelClickHandler">{{labelName}}</span>
<!--             
            <select 
            :id="labelName" 
            class="hoverable"
            :style="{'font-family' : fontFamily}"
            @change="submitFontChange"
            @mousedown="inputClickHandler"
            @focus="inputFocusHandler"
            @blur="inputBlurHandler">
                <option class="" v-for="font in fontsArray" :key="font.index">{{font}}</option>
            </select> -->

            <InputSelect class="input-select" :labelName="labelName" :dataListArray="fontsArray" :zIndex="selectZIndex" @selected-changed="submitFontChange" />

        </div>
</template>

<script>
import Button from './Button.vue'
import InputSelect from './InputSelect/InputSelect.vue'

export default {
    name: 'InputFont',
    components: {
        Button,
        InputSelect,
    },
    props: {
        eventName: String,
        labelName: String,
        fontFamily: String,
        selectZIndex: Number,
    },
    data () {
        return {
            fontInput: Object,
            placeHolder: String,
            labelColor: 'black',
            labelBorderColor: 'black',
            lastActiveElement: 'none',
            fontsArray: ['Baloo', 'Gluten', 'Josefin Slab']
        }
    },
    computed: {
        labelStyle() {
            return {
                color : `${this.labelColor}`,
                'border-color' : `${this.labelBorderColor}`,
            }
        },
    },
    methods: {
        preventDefaultEvents (e) {
            e = e || window.event;
            e.preventDefault();
        },
        submitFontChange (val) {
            console.log(val);
            // var fontIndex = event.srcElement.options.selectedIndex;
            this.$emit(this.eventName, val);
        },
        labelClickHandler() {
            if (this.lastActiveElement != this.fontInput.id) {
                this.fontInput.focus();
            } else {
                this.fontInput.blur();
            }
        },
        inputSelectHandler(e) {
            console.log('select handler:', e)
        },
        inputClickHandler(e) {
            console.log('click handler:', e)
        },
        inputFocusHandler() {
            this.labelColor = 'red';
            this.labelBorderColor = 'red';
            console.log('focus',this.lastActiveElement, this.fontInput.id);
            this.lastActiveElement = this.fontInput.id;
            console.log(`last active set to: ${this.lastActiveElement}`);
        },
        inputBlurHandler() {
            this.labelColor = 'black';
            this.labelBorderColor = 'black';
            console.log('blur',this.lastActiveElement, this.fontInput.id);
            this.lastActiveElement = 'none';
            console.log(`last active set to: ${this.lastActiveElement}`);
        },
    },
    created () {
        this.placeHolder = this.fontFamily;
    },
        mounted() {
        this.fontInput = document.getElementById(`${this.labelName}`);
    },
    emits: ['selected-changed'],
}
</script>

<style scoped>

div, span, select {
    background: transparent;
}

select {
    height: 30px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-right: 0;
    border-left: 0;
    padding: 3px 0;
    min-width: 50%;
    max-width: 100%;
}

select:focus, select:active { 
    outline: none !important;
    color: red;
    border-color: red;
    box-shadow: 0 0 0 ;
}

.font-div {
    width: 190px;
    position: relative;
    padding: 0;
    margin: 5px 0;
}

.font-label-span {
    height: 30px;
    width: 95px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin: 5px 0;
}

.input-select {
    position: absolute;
    top: 5px;
    right: -38px;
}

@media screen and (max-width: 576px) {
    .font-div {
        padding-right: 16px;
        right: 38px;
    }
}

@media (min-width:576px) and (max-width: 768px) {
    
    .font-div {
        width: 95px;
        flex-direction: column !important;
    }

    .font-label-span {
        width: 100%;
        margin: 10px 0 5px 0;
    }

    .input-select {
        position: inherit;
        width: 100%;
        right: 0;
        top: 0;
    }
}

</style>