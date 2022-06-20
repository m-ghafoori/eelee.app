<template>
        <div class="font-div hoverable d-flex justify-content-center align-items-center" @mouseleave="onDivMouseLeave">
            <span :id="`${removeSpace(labelName)}LabelSpan`" class="label-span font-label-span d-flex justify-content-center align-items-center" :style="labelStyle" @mousedown="preventDefaultEvents" @click="onLabelClick">{{labelName}}</span>
            <InputSelect class="input-select" :labelName="labelName" :dataListArray="fontsArray" :zIndex="selectZIndex" :updatorNum="selectUpdator" @selected-changed="onSelectedChanged" @selected-focused="onSelectFocus" @selected-blured="onSelectBlur"/>
        </div>
</template>

<script>
import InputSelect from '@/components/InputSelect/InputSelect.vue'

export default {
    name: 'InputFont',
    components: {
        InputSelect,
    },
    props: {
        eventName: String,
        labelName: String,
        fontFamily: String,
        selectZIndex: Number,
        selectUpdator: Number,
    },
    data () {
        return {
            labelSpan: Object,
            selectInput: Object,
            placeHolder: String,
            labelColor: 'black',
            labelBorderColor: 'black',
            lastActiveElement: 'none',
            fontsArray: ['Baloo', 'Gluten', 'Josefin Slab']
        }
    },
    computed: {
        // Styles

        labelStyle() {
            return {
                outline : 'none',
                color : `${this.labelColor}`,
                'border-color' : `${this.labelBorderColor}`,
            }
        },
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
        onDivMouseLeave () {
            setTimeout(() => {
                this.selectInput.blur();
            }, 300);
        },
        onLabelClick() {
            if (this.lastActiveElement == this.selectInput.id) {
                this.selectInput.blur();
            } else {
                this.selectInput.focus();
            }
        },
        onSelectedChanged (val) {
            this.$emit(this.eventName, val);
        },
        onSelectFocus() {
            this.labelColor = 'red';
            this.labelBorderColor = 'red';
            console.log('focus',this.lastActiveElement, this.selectInput.id);
            this.lastActiveElement = this.selectInput.id;
            console.log(`last active set to: ${this.lastActiveElement}`);
        },
        onSelectBlur() {
            this.labelColor = 'black';
            this.labelBorderColor = 'black';
            console.log('blur',this.lastActiveElement, this.selectInput.id);
            this.lastActiveElement = 'none';
            console.log(`last active set to: ${this.lastActiveElement}`);
        },
    },
    created () {
        this.placeHolder = this.fontFamily;
    },
    mounted() {
    this.labelSpan = document.getElementById(`${this.removeSpace(this.labelName)}LabelSpan`);
    this.selectInput = document.getElementById(`selected${this.removeSpace(this.labelName)}`);
    },
}
</script>

<style scoped>

div, span {
    background: transparent;
}

.font-div {
    width: 200px;
    position: relative;
    padding: 0;
    margin: 5px 0;
    margin-bottom: auto;
}

.font-label-span {
    border-left: 2px solid black;
    margin: 5px 0;
}

.input-select {
    position: absolute;
    width: 100px;
    height: 30px;
    top: 5px;
    right: -35px;
}

@media screen and (max-width: 576px) {
    .font-div {
        padding-right: 16px;
        right: 38px;
    }
}

@media (min-width:576px) and (max-width: 768px) {
    
    .font-div {
        width: 100px;
        flex-direction: column !important;
    }

    .font-label-span {
        width: 120px;
        border-right: 2px solid;
        border-top: 2px solid;
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