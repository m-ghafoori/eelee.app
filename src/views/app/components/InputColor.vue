<template>
    <div class="color-div hoverable d-flex justify-content-center align-items-center">
        <span class="color-label-span d-flex justify-content-center align-items-center" :style="labelStyle" @mousedown="preventDefaultEvents" @click="labelClickHandler">{{labelName}}</span>
        <div class="color-input-div d-flex align-items-center">
            <input
            :id="removeSpace(labelName)"
            class="hoverable"
            v-model="inputValue"
            :placeholder="placeHolder"
            type="color"
            @mousedown="preventDefaultEvents"
            @click="inputClickHandler"
            @focus="inputFocusHandler"
            @blur="inputBlurHandler">
            <span class="color-input-btn-span">
                <Button label="Set" :style="{'font-family' : fontFamily}" :clickHandler="submitChanges" />
            </span>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'InputColor',
    components: {
        Button,
    },
    props: {
        eventName: String,
        labelName: String,
        fontFamily: String,
        defaultValue: String
    },
    data () {
        return {
            colorInput: Object,
            inputValue: String,
            placeHolder: String,
            labelColor: 'black',
            labelBorderColor: 'black',
            lastActiveElement: 'none',
        }
    },
    computed: {
        labelStyle() {
            return {
                color : `${this.labelColor}`,
                'border-color' : `${this.labelBorderColor}`,
            }
        }
    },
    methods: {
        preventDefaultEvents(e) {
            e = e || window.event;
            e.preventDefault();
        },
        removeSpace(str) {
            str = str.replace(/ /g, '');
            return str;
        },
        submitChanges () {
            this.$emit(this.eventName, this.inputValue);
        },
        labelClickHandler() {
            if (this.lastActiveElement != this.colorInput.id) {
                this.colorInput.click();
            } else {
                this.colorInput.blur();
            }
        },
        inputClickHandler(e) {
            if (this.lastActiveElement != this.colorInput.id) {
                this.colorInput.focus();
            } else {
                this.preventDefaultEvents(e);
                this.colorInput.blur();
            }
        },
        inputFocusHandler() {
            this.labelColor = 'red';
            this.labelBorderColor = 'red';
            console.log('focus',this.lastActiveElement, this.colorInput.id);
            this.lastActiveElement = this.colorInput.id;
            console.log(`last active set to: ${this.lastActiveElement}`);
        },
        inputBlurHandler() {
            this.labelColor = 'black';
            this.labelBorderColor = 'black';
            console.log('blur',this.lastActiveElement, this.colorInput.id);
            this.lastActiveElement = 'none';
            console.log(`last active set to: ${this.lastActiveElement}`);
        },
    },
    created () {
        this.inputValue = this.defaultValue;
        this.placeHolder = this.inputValue;
    },
    mounted() {

        this.colorInput = document.getElementById(this.removeSpace(this.labelName));
    },
    emits: ['selected-changed'],
}
</script>

<style scoped>

div, span, input {
    background: transparent;
    min-width: fit-content;
}

input {
    width: 50%;
    height: 30px;
    min-width: 50%;
    max-width: 60px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-right: 2px solid;
    border-left: 0;
    margin-right: 1px;
}

input:focus, input:active { 
    outline: none !important;
    border-color: red;
    box-shadow: 0 0 0 ;
}

Button {
    height: 30px;
    padding: 0 16px;
    background: transparent;
    border-right: 0;
}

.color-div {
    min-width: 114px;
    padding: 0;
    margin: 5px 0;
}

.color-input-div {
    min-width: 50%;
    max-width: 100%;
}

.color-label-span {
    height: 30px;
    min-width: 50%;
    max-width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin: 5px 0;
}

.color-input-btn-span {
    width: 50%;
    min-width: 50%;
    max-width: 55px;
    /* margin-left: 1px; */
}

@media screen and (max-width: 576px) {
    .color-div {
    padding-right: 16px;
    }
}

@media (min-width:576px) and (max-width: 768px) {
    input {
        margin-right: 0;
    }

    .color-div {
        flex-direction: column !important;
    }

    .color-input-div {
        width: 100%;
    }

    .color-label-span {
        width: 100%;
        margin: 10px 0 5px 0;
    }
}

</style>