<template>
  <div id="question" class="preload animate__animated">
      <p>ENABLE SOUND EFFECTS ???</p>
      <div class="d-flex justify-content-around align-items-center">
        <span id="enableSound" class="hoverable" @click="enableSoundHandler"
          >YES</span
        >
        <span id="disableSound" class="hoverable" @click="disableSoundHandler"
          >NO</span
        >
      </div>
      <p
        id="soundMessage"
        class="animate__animated"
        :style="{ color: soundMessageColor }"
      >
        &nbsp;
      </p>
    </div>
</template>

<script>
export default {
    name: 'Question',

    data() {
        return {
            soundMessageColor: "#f8cc09",
            question: Object,
            soundMessage: Object,
        }
    },

    methods: {
        // Event Handlers

        enableSoundHandler() {
            this.soundMessage.innerHTML = "ENABLED";
            this.soundMessageColor = "green";
            this.soundMessage.classList.add("animate__flash");
            setTimeout(() => {
                this.question.classList.add("animate__bounceOut");
                setTimeout(() => {
                    this.$emit('sound-enabled', true);
                    this.question.classList.add("d-none");
                }, 1000);
            }, 2000);
        },

        disableSoundHandler() {
            this.soundMessage.innerHTML = "DISABLED";
            this.soundMessageColor = "red";
            this.soundMessage.classList.add("animate__flash");
            setTimeout(() => {
                this.question.classList.add("animate__bounceOut");
                setTimeout(() => {
                    this.$emit('sound-disabled', true);
                    this.question.classList.add("d-none");
                }, 1000);
            }, 2000);
        },
    },

    mounted() {
        this.question = document.getElementById("question");
        this.soundMessage = document.getElementById("soundMessage");
    },

}
</script>

<style scoped>

div {
    background: #0bc0b7;
}
</style>