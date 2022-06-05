<template>
    <div class="number-div hoverable d-flex justify-content-center align-items-center">
        <span class="label-span number-label-span d-flex justify-content-center align-items-center" :style="labelStyle" @mousedown="preventDefaultEvents" @click="onLabelClick">{{labelName}}</span>
        <div class="input-div d-flex align-items-center">
            <input
            :id="removeSpace(labelName)"
            class="input"
            :style="{'font-family' : fontFamily}"
            v-model="inputValue"
            type="number"
            :min="minValue"
            :max="maxValue"
            @focus="onInputFocus"
            @blur="onInputBlur">
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputNumber',
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
            inputValue: Number,
            labelColor: 'black',
            labelBorderColor: 'black',
            lastActiveElement: 'none',
            docHasFocus: Boolean,
            blurOnMouseDown: false,
            numberInput: Object,
        }
    },
    watch: {
        defaultValue(val) {
            this.inputValue = val;
        },
        docHasFocus(val) {
            if (!val) {
                this.blurOnMouseDown = true;
                console.log('watcher called on blurOnMouseDown:', this.blurOnMouseDown)
            }
        },
        inputValue() {
            this.$emit(this.eventName, this.filteredValue)
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
                color : `${this.labelColor}`,
                'border-color' : `${this.labelBorderColor}`,
            }
        }
    },
    methods: {
        // Utility Methods

        preventDefaultEvents (e) {
            e = e || window.event;
            e.preventDefault();
        },
        removeSpace(str) {
            str = str.replace(/ /g, '');
            return str;
        },

        // Main Functionality


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
                this.labelColor = 'red';
                this.labelBorderColor = 'red';
                console.log('focus',this.lastActiveElement, this.numberInput.id);
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
                this.labelColor = 'black';
                this.labelBorderColor = 'black';
                console.log('blur',this.lastActiveElement, this.numberInput.id);
                this.lastActiveElement = 'none';
                console.log(`last active set to: ${this.lastActiveElement}`);
            }
        },
    },
    created () {
        this.inputValue = this.defaultValue;
        this.placeHolder = this.inputValue.toString();
    },
    mounted() {
        this.numberInput = document.getElementById(this.removeSpace(this.labelName));
        this.docHasFocus = document.hasFocus();
    },
    updated() {
        this.docHasFocus = document.hasFocus();
    },
}
</script>

<style scoped>

div, span, input {
    background: transparent;
}

input {
    width: 49px;
    height: 30px;
    border: 0;
    border-right: 2px solid;
    margin-right: 1px;
    text-align: center;
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

.number-div {
    padding: 0;
    margin: 5px 0;
    margin-bottom: auto;
}

.number-label-span {
    border-left: 2px solid;
    margin: 5px 0;
}

@media screen and (max-width: 576px) {
    .number-div {
    padding-right: 16px;
    }
}

@media (min-width:576px) and (max-width: 768px) {
    input {
        border-left: 2px solid;
        border-bottom: 2px solid;
        margin-right: 0;
        padding-left: 10px;
    }

    .number-div {
        flex-direction: column !important;
    }

    .input-div {
        align-self: center;
    }

    .number-label-span {
        width: 80px;
        border-right: 2px solid;
        border-top: 2px solid;
        margin: 10px 0 5px 0;
    }
}

</style>