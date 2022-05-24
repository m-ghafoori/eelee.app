<template>
    <button class="hoverable" @click="clickHandler">{{label}}</button>
</template>

<script>
export default {
    props: {
        label: String,
        clickHandler: Function,
    },
}
</script>

<style scoped>
button:active {
    color: red;
    border-color: red;
}
</style>