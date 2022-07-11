<template>
  <div id="idpc-body" class="body" @click="onBodyDivClick">
    <Header pageRoute="/contact" />
    <section id="idpc-showcase" class="showcase align-items-start">
      <div id="idpc-messagereceived" class="d-none">
        Thanks! <br /><br /><br />
        Your message has been received. <br /><br /><br />
        We will contact you in two days :)
      </div>
      <div id="idpc-contactForm" class="d-flex flex-column align-items-start">
        <p id="idpc-contactPar">
          You can fill the form below or email us to
          <span id="idpc-contactEmail">"eelee.app@gmail.com"</span>
        </p>
        <div class="idpc-clientInfo">
          <label for="clientName">Name:</label>
          <input
            type="text"
            name="clientName"
            id="idpc-clientName"
            v-model="clientName"
            :style="clientNameStyle"
            @click="onClientNameClick"
            required
          />
        </div>
        <div class="idpc-clientInfo">
          <label for="clientEmail">Email:</label>
          <input
            type="email"
            name="clientEmail"
            id="idpc-clientEmail"
            v-model="clientEmail"
            :style="clientEmailStyle"
            @click="onClientEmailClick"
            required
          />
        </div>
        <div
          id="idpc-messageDiv"
          class="d-flex flex-column justify-content-between align-items-center"
        >
          <textarea
            name="clientMessage"
            id="idpc-clientMessage"
            cols="90"
            rows="10"
            v-model="clientMessage"
            :style="clientMessageStyle"
            @click="onClientMessageClick"
            required
          ></textarea>
          <div
            id="idpc-messageButtons"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="d-flex justify-content-between align-items-center">
              <span
                id="idpc-attachFile"
                class="idpc-hoverable"
                @click="onAttachClick"
                >Attach</span
              >
              <input id="idpc-attachInput" type="file" @change="onFileUpload" />
              <p id="idpc-fileNamePar">{{ fileName }}</p>
            </div>
            <span
              id="idpc-sendMessage"
              class="idpc-hoverable"
              @click="onSendMessageClick"
              >Send</span
            >
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Contact",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      clientName: "",
      clientEmail: "",
      clientLastEnteredEmail: "",
      clientMessage: "",
      clientNameColor: "#0b7a62",
      clientEmailColor: "#0b7a62",
      clientMessageColor: "#0b7a62",
      fileName: "",
      attachedFile: { name: "" },
      showNoNameError: false,
      showNoEmailError: false,
      showInvalidEmailError: false,
      showNoMessageError: false,

      //
      messagereceived: Object,
      contactPar: Object,
      contactForm: Object,
      clientNameInput: Object,
      clientEmailInput: Object,
      clientMessageInput: Object,
      attachInput: Object,
      messageButtons: Object,
      fileNamePar: Object,
    };
  },

  watch: {
    clientEmail(val) {
      if (
        val != "Email is required." &&
        val != `"${this.clientLastEnteredEmail}" is not valid.`
      )
        this.clientLastEnteredEmail = val;
    },
    showNoNameError(val) {
      if (val) {
        this.clientName = "Name is required.";
        this.clientNameColor = "#ff0000";
      } else {
        this.clientName = "";
        this.clientNameColor = "#0b7a62";
      }
    },
    showNoEmailError(val) {
      if (val) {
        this.clientEmail = "Email is required.";
        this.clientEmailColor = "#ff0000";
      } else {
        this.clientEmail = "";
        this.clientEmailColor = "#0b7a62";
      }
    },
    showInvalidEmailError(val) {
      if (val) {
        this.clientEmail = `"${this.clientEmail}" is not valid.`;
        this.clientEmailColor = "#ff0000";
      } else {
        this.clientEmail = this.clientLastEnteredEmail;
        this.clientEmailColor = "#0b7a62";
      }
    },
    showNoMessageError(val) {
      if (val) {
        this.clientMessage = "Message is required.";
        this.clientMessageColor = "#ff0000";
      } else {
        this.clientMessage = "";
        this.clientMessageColor = "#0b7a62";
      }
    },
  },

  computed: {
    clientNameStyle() {
      return {
        color: `${this.clientNameColor}`,
      };
    },
    clientEmailStyle() {
      return {
        color: `${this.clientEmailColor}`,
      };
    },
    clientMessageStyle() {
      return {
        color: `${this.clientMessageColor}`,
      };
    },
  },

  methods: {
    // Main Functionality

    // Updates the fileName to fit the textarea
    fileNameUpdator() {
      if (this.fileName == "") {
      } else {
        if (
          this.fileNamePar.offsetWidth / this.messageButtons.offsetWidth <
            0.3 &&
          this.fileName != this.attachedFile.name
        )
          this.fileName = this.attachedFile.name;
        if (
          this.fileNamePar.offsetWidth / this.messageButtons.offsetWidth >
          0.45
        ) {
          var lastCharIndex = this.fileName.lastIndexOf(".");
          var namePart = this.fileName.substr(0, lastCharIndex - 3);
          var extentionPart = this.fileName.substr(
            lastCharIndex,
            this.fileName.length - lastCharIndex
          );
          this.fileName = `${namePart}${extentionPart}`;
        } else if (this.fileName != this.attachedFile.name) {
          var lastCharIndex = this.fileName.lastIndexOf(".");
          var namePart = this.fileName.substr(0, lastCharIndex - 3);
          var extentionPart = this.fileName.substr(
            lastCharIndex,
            this.fileName.length - lastCharIndex
          );
          this.fileName = `${namePart}...${extentionPart}`;
        }
      }
    },

    // Event Handlers
    onFileUpload($event) {
      this.attachedFile = $event.target.files[0];
      this.fileName = this.attachedFile.name;
    },
    onAttachClick() {
      this.attachInput.click();
    },
    onClientNameClick() {
      if (this.showNoNameError) this.showNoNameError = false;
    },
    onClientEmailClick() {
      if (this.showNoEmailError) this.showNoEmailError = false;
      if (this.showInvalidEmailError) this.showInvalidEmailError = false;
    },
    onClientMessageClick() {
      if (this.showNoMessageError) this.showNoMessageError = false;
    },
    onSendMessageClick() {
      if (this.clientName == "") this.showNoNameError = true;
      if (this.clientEmail == "") this.showNoEmailError = true;
      if (this.clientMessage == "") this.showNoMessageError = true;
      if (!this.clientEmailInput.validity.valid && this.clientEmail != "")
        this.showInvalidEmailError = true;
      if (
        !this.showNoNameError &&
        !this.showNoEmailError &&
        !this.showNoMessageError &&
        this.clientEmailInput.validity.valid
      ) {
        var messageFormData = new FormData();
        messageFormData.append("name", this.clientName);
        messageFormData.append("email", this.clientEmail);
        messageFormData.append("message", this.clientMessage);
        messageFormData.append("attachment", this.attachedFile);
        this.contactForm.classList.remove("d-flex");
        this.contactForm.classList.add("d-none");
        this.messagereceived.classList.remove("d-none");
      }
    },
  },

  // created() {
  //   window.addEventListener("resize", this.windowWidthClassEmitter);
  // },

  // beforeMount() {
  //   this.windowWidthClassEmitter();
  // },

  mounted() {
    this.messagereceived = document.querySelector("#idpc-messagereceived");
    this.contactPar = document.querySelector("#idpc-contactPar");
    this.contactForm = document.querySelector("#idpc-contactForm");
    this.clientNameInput = document.querySelector("#idpc-clientName");
    this.clientEmailInput = document.querySelector("#idpc-clientEmail");
    this.clientMessageInput = document.querySelector("#idpc-clientMessage");
    this.attachInput = document.querySelector("#idpc-attachInput");
    this.messageButtons = document.querySelector("#idpc-messageButtons");
    this.fileNamePar = document.querySelector("#idpc-fileNamePar");
    document.querySelectorAll(".hoverable").forEach((element) => {
      element.classList.remove("hoverable");
      element.classList.add("idpc-hoverable");
    });
  },

  updated() {
    this.fileNameUpdator();
  },
};
</script>

<style scoped>
@import "assets/css/contact.css";
</style>