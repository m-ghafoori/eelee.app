<template>
    <div class="number-div hoverable d-flex justify-content-center align-items-center">
        <span class="number-label-span d-flex justify-content-center align-items-center" :style="labelStyle" @mousedown="preventDefaultEvents" @click="inputClickHandler">{{labelName}}</span>
        <div class="number-input-div d-flex align-items-center">
            <input
            :id="removeSpace(labelName)"
            class=""
            :style="{'font-family' : fontFamily}"
            v-model="inputValue"
            :placeholder="placeHolder"
            type="number"
            :min="minValue"
            :max="maxValue"
            @mousedown="preventDefaultEvents"
            @click="inputClickHandler"
            @focus="inputFocusHandler"
            @blur="inputBlurHandler">
            <span class="number-input-btn-span">
                <Button label="Set" :style="{'font-family' : fontFamily}" :clickHandler="submitChanges" />
            </span>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'InputNumber',
    components: {
        Button,
    },
    props: {
        labelName: String,
        eventName: String,
        fontFamily: String,
        defaultValue: Number,
        minValue: Number,
        maxValue: Number,
    },
    data () {
        return {
            numberInput: Object,
            inputValue: Number,
            placeHolder: String,
            labelColor: 'black',
            labelBorderColor: 'black',
            lastActiveElement: 'none',
        }
    },
    computed: {
        filteredValue: function () {
            var filtered = Math.max(this.minValue, this.inputValue);
            return Math.min(this.maxValue, filtered);
        },
        labelStyle() {
            return {
                color : `${this.labelColor}`,
                'border-color' : `${this.labelBorderColor}`,
            }
        }
    },
    watch: {
        defaultValue(val) {
            this.inputValue = val;
            this.filterInputValue();
        }
    },
    methods: {
        preventDefaultEvents (e) {
            e = e || window.event;
            e.preventDefault();
        },
        removeSpace(str) {
            str = str.replace(/ /g, '');
            return str;
        },
        filterInputValue () {
            this.inputValue = this.filteredValue;
        },
        submitChanges () {
            this.$emit(this.eventName, this.filteredValue);
            this.filterInputValue();
        },
        inputClickHandler() {
            if (this.lastActiveElement != this.numberInput.id) {
                this.numberInput.focus();
            } else {
                this.numberInput.blur();
            }
        },
        inputFocusHandler() {
            this.labelColor = 'red';
            this.labelBorderColor = 'red';
            console.log('focus',this.lastActiveElement, this.numberInput.id);
            this.lastActiveElement = this.numberInput.id;
            console.log(`last active set to: ${this.lastActiveElement}`);
        },
        inputBlurHandler() {
            this.labelColor = 'black';
            this.labelBorderColor = 'black';
            console.log('blur',this.lastActiveElement, this.numberInput.id);
            this.lastActiveElement = 'none';
            console.log(`last active set to: ${this.lastActiveElement}`);
        },
    },
    created () {
        this.inputValue = this.defaultValue;
        this.filterInputValue();
        this.placeHolder = this.inputValue.toString();
    },
    mounted() {
        this.numberInput = document.getElementById(this.removeSpace(this.labelName));
    },
}
</script>

<style scoped>

div, span, input {
    background: transparent;
}

input {
    height: 30px;
    min-width: 50%;
    max-width: 55px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-right: 2px solid;
    border-left: 0;
    margin-right: 1px;
}

input:focus, input:active { 
    outline: none !important;
    color: red;
    border-color: red;
    box-shadow: 0 0 0 ;
}

input[type=number]::-webkit-inner-spin-button:hover,
input[type=number]::-webkit-outer-spin-button:hover {
    cursor: url('./pointer-hover.svg'), auto;
}

Button {
    height: 30px;
    padding: 0 16px;
    background: transparent;
    border-right: 0;
}

.number-div {
    padding: 0;
    margin: 5px 0;
}

.number-input-div {
    min-width: 50%;
    max-width: 100%;
}

.number-label-span {
    height: 30px;
    min-width: 50%;
    max-width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin: 5px 0;
}

.number-input-btn-span {
    min-width: 50%;
    max-width: 55px;
}

@media screen and (max-width: 576px) {
    .number-div {
    padding-right: 16px;
    }
}

@media (min-width:576px) and (max-width: 768px) {
    input {
        margin-right: 0;
        padding-left: 10px;
    }

    .number-div {
        flex-direction: column !important;
    }

    .number-input-div {
        width: 100%;
    }

    .number-label-span {
        width: 100%;
        margin: 10px 0 5px 0;
    }
}

</style>