<template>
  <div class="hoverable">
    <img
      :id="imgID"
      class="rotate-center"
      :src="require(`./assets/${imgSource}`)"
      alt=""
      @click="iconClickHandler"
    />
  </div>
</template>

<script>
export default {
  name: "SettingsIcon",
  props: {
    imgType: String,
    targetID: String,
  },
  // data () {
  //     return {
  //         imgSource: {
  //             "font": "font1.svg",
  //             "number": "number1.svg",
  //             "color": "color2.svg"
  //         }
  //     }
  // }
  computed: {
    imgSource: function () {
      switch (this.imgType) {
        case "font":
          return "font.svg";

        case "number":
          return "number.svg";

        case "color":
          return "color.svg";

        default:
          return "settings.svg";
      }
    },
    imgID: function () {
      return `${this.imgType}Img`;
    },
  },
  methods: {
    iconClickHandler() {
      this.$emit("settingsIconClick", this.targetID, this.imgID);
      // console.log()
    },
  },
};
</script>