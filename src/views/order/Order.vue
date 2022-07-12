<template>
  <div id="idpo-body" class="body">
    <Header pageRoute="/order" />
    <section id="idpo-showcase" class="showcase align-items-start">
      <Slideshow
        uniqueLabel="Agreement"
        :slidesNumber="9"
        :loopMode="false"
        :isActive="isFormSubmitted"
        @slideshow-finish="onSlideshowFinish"
      >
        <template #title1>
          <span>How to Order</span>
        </template>
        <template #content1>
          <span>
            First, you fill our form and tell us what you want... <br />
            Then, we contact you within 2 days... <br />
            If everything was okay, then we have a deal! <br />
          </span>
        </template>
        <template #title2>
          <span>Agreement Template</span>
        </template>
        <template #content2>
          <span>
            Our agreement consist of six sections:<br />
            1- Introducing the client and the project manager <br />
            2- A description of the client's request <br />
            3- Project manager's comments on the client's request <br />
            4- The detailed process of the project, including the timeline and
            payment dues <br />
            5- Legal terms and conditions <br />
            6- Signatures of both parties<br />
            Keep reading to know more about these sections...
          </span>
        </template>
        <template #title3>
          <span>Introduction</span>
        </template>
        <template #content3>
          <span>
            Nothing complicated... Just the names of the two "parties" of the
            agreement, the client and the project manager :)
          </span>
        </template>
        <template #title4>
          <span>Client's Request</span>
        </template>
        <template #content4>
          <span>
            Here you describe your request in details...<br />
            Of course, your ideas will be safe and they will not be disclosed
            anywhere.
          </span>
        </template>
        <template #title5>
          <span>Manager's Comments</span>
        </template>
        <template #content5>
          <span>
            After you tell us your idea, we create a template for the project
            and divide it into "stages".<br />
            For small projects, usually it is two stages, the backend and the
            frontend. But as the project gets sophisticated, the stages will
            increase too.<br />
            Additionally, we may have also some comments on the idea itself,
            like some projections or suggestions.
          </span>
        </template>
        <template #title6>
          <span>Project Process</span>
        </template>
        <template #content6>
          <span>
            In this section, we will agree on the detailed process of project
            completion.<br />
            Every stage should have specific due time and payment to preserve
            everyone's interest.
          </span>
        </template>
        <template #title7>
          <span>Terms and Conditions</span>
        </template>
        <template #content7>
          <span>
            Every agreement must have some terms to determine the commitments of
            every party.<br />
            Both parties want to make sure that they're ideas are safe, and what
            happens if something goes wrong in the process, or even how they can
            cencel the agreement if they changed their mind!<br />
            All of these possible situations should be forseened in this
            section.
          </span>
        </template>
        <template #title8>
          <span>Signatures</span>
        </template>
        <template #content8>
          <span>
            Finally, everyone should sign the agreement, right? :) <br />
            Now, if you want to see a sample agreement, click
            <a href="">here</a>. <br />
            And if you want to take the first step of ordering your own web app,
            please proceed to the next slide...
          </span>
        </template>
        <template #title9>
          <span>Order Your Web App</span>
        </template>
        <template #content9>
          <div>
            Now, before signing any agreement, please tell us how we can help
            you...
          </div>
          <div class="idpo-input-field">
            <span ref="clientRequestLabel">Please describe your idea:</span>
            <textarea
              ref="clientRequestInput"
              id="idpo-clientRequest"
              cols="90"
              rows="10"
              v-model="clientRequest"
              @click="onClientRequestClick"
              required
            ></textarea>
          </div>
          <div class="idpo-input-field">
            <span ref="projectDurationLabel"
              >How long can you wait (in weeks) to receive it?</span
            >
            <input
              type="number"
              ref="projectDurationInput"
              id="idpo-projectDuration"
              v-model="projectDuration"
              min="1"
              max="200"
              @click="onProjectDurationClick"
              required
            />
          </div>
          <div class="idpo-input-field">
            <span ref="projectBudgetLabel"
              >Your Budget (in USD) on This Project:</span
            >
            <input
              type="number"
              ref="projectBudgetInput"
              id="idpo-projectBudget"
              v-model="projectBudget"
              min="1000"
              maxlength="7"
              @click="onProjectBudgetClick"
              required
            />
          </div>
          <div class="idpo-input-field">
            <span ref="clientEmailLabel">Your Email:</span>
            <input
              type="email"
              ref="clientEmailInput"
              id="idpo-clientEmail"
              v-model="clientEmail"
              @click="onClientEmailClick"
              required
            />
          </div>
        </template>
        <template #finish>
          <span>Submit</span>
        </template>
        <template #inactive>
          <span
            >Thank you for submitting your information&nbsp;:) <br /><br />
            We'll be in touch with you soon</span
          >
        </template>
      </Slideshow>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Slideshow from "@/components/Slideshow/Slideshow.vue";

export default {
  name: "Order",

  components: {
    Header,
    Footer,
    Slideshow,
  },

  data() {
    return {
      windowWidth: Number,
      clientRequest: "",
      clientEmail: "",
      projectBudget: 4000,
      projectDuration: 4,

      // Error Handling Vars
      noRequestError: false,
      noEmailError: false,
      invalidEmailError: false,
      invalidDurationError: false,
      invalidBudgetError: false,
      isFormSubmitted: false,
    };
  },

  watch: {
    noRequestError(val) {
      if (val) {
        this.$refs.clientRequestLabel.classList.add("idpo-input-field-error");
        this.$refs.clientRequestLabel.innerHTML = "Error: Message is required.";
        this.$refs.clientRequestInput.classList.add("idpo-input-error");
        this.$refs.clientRequestInput.parentElement.style.borderColor = "#f00";
      } else {
        this.$refs.clientRequestLabel.classList.remove(
          "idpo-input-field-error"
        );
        this.$refs.clientRequestLabel.innerHTML = "Please describe your idea:";
        this.$refs.clientRequestInput.classList.remove("idpo-input-error");
        this.$refs.clientRequestInput.parentElement.style.borderColor =
          "#daa520";
      }
    },
    noEmailError(val) {
      if (val) {
        this.$refs.clientEmailLabel.classList.add("idpo-input-field-error");
        this.$refs.clientEmailLabel.innerHTML = "Error: Email is required.";
        this.$refs.clientEmailInput.classList.add("idpo-input-error");
        this.$refs.clientEmailInput.parentElement.style.borderColor = "#f00";
      } else {
        this.$refs.clientEmailLabel.classList.remove("idpo-input-field-error");
        this.$refs.clientEmailLabel.innerHTML = "Your Email:";
        this.$refs.clientEmailInput.classList.remove("idpo-input-error");
        this.$refs.clientEmailInput.parentElement.style.borderColor = "#daa520";
      }
    },
    invalidEmailError(val) {
      if (val) {
        this.$refs.clientEmailLabel.classList.add("idpo-input-field-error");
        this.$refs.clientEmailLabel.innerHTML = `Error: "${this.clientEmail}" is not a valid email.`;
        this.$refs.clientEmailInput.classList.add("idpo-input-error");
        this.$refs.clientEmailInput.parentElement.style.borderColor = "#f00";
      } else {
        this.$refs.clientEmailLabel.classList.remove("idpo-input-field-error");
        this.$refs.clientEmailLabel.innerHTML = "Your Email:";
        this.$refs.clientEmailInput.classList.remove("idpo-input-error");
        this.$refs.clientEmailInput.parentElement.style.borderColor = "#daa520";
      }
    },
    invalidDurationError(val) {
      if (val) {
        this.$refs.projectDurationLabel.classList.add("idpo-input-field-error");
        this.$refs.projectDurationLabel.innerHTML =
          "Error: Invalid Number of Weeks<br>(Must be a value between 1 and 200)";
        this.$refs.projectDurationInput.classList.add("idpo-input-error");
        this.$refs.projectDurationInput.parentElement.style.borderColor =
          "#f00";
      } else {
        this.$refs.projectDurationLabel.classList.remove(
          "idpo-input-field-error"
        );
        this.$refs.projectDurationLabel.innerHTML =
          "How long can you wait (in weeks) to receive it?";
        this.$refs.projectDurationInput.classList.remove("idpo-input-error");
        this.$refs.projectDurationInput.parentElement.style.borderColor =
          "#daa520";
      }
    },
    invalidBudgetError(val) {
      if (val) {
        this.$refs.projectBudgetLabel.classList.add("idpo-input-field-error");
        this.$refs.projectBudgetLabel.innerHTML =
          "Error: Invalid Budget Amount<br>(Must be a value between 1000 and 9,000,000 USD)";
        this.$refs.projectBudgetInput.classList.add("idpo-input-error");
        this.$refs.projectBudgetInput.parentElement.style.borderColor = "#f00";
      } else {
        this.$refs.projectBudgetLabel.classList.remove(
          "idpo-input-field-error"
        );
        this.$refs.projectBudgetLabel.innerHTML =
          "Your Budget (in USD) on This Project:";
        this.$refs.projectBudgetInput.classList.remove("idpo-input-error");
        this.$refs.projectBudgetInput.parentElement.style.borderColor =
          "#daa520";
      }
    },
  },

  methods: {
    // Event Handlers

    // Order Form
    onClientRequestClick() {
      this.noRequestError = false;
    },
    onClientEmailClick() {
      this.noEmailError = false;
      this.invalidEmailError = false;
    },
    onProjectBudgetClick() {
      this.invalidBudgetError = false;
    },
    onProjectDurationClick() {
      this.invalidDurationError = false;
    },
    onSlideshowFinish() {
      if (this.clientRequest == "") this.noRequestError = true;
      if (this.clientEmail == "") this.noEmailError = true;
      if (!this.$refs.clientEmailInput.validity.valid && !this.noEmailError)
        this.invalidEmailError = true;
      if (this.projectBudget < 1000 || this.projectBudget > 9000000)
        this.invalidBudgetError = true;
      if (this.projectDuration < 1 || this.projectDuration > 200)
        this.invalidDurationError = true;
      if (
        !this.noRequestError &&
        !this.noEmailError &&
        !this.invalidEmailError &&
        !this.invalidBudgetError &&
        !this.invalidDurationError
      ) {
        var formData = new FormData();
        formData.append("request", this.clientRequest);
        formData.append("duration", this.projectDuration);
        formData.append("budget", this.projectBudget);
        formData.append("email", this.clientEmail);
        for (const entry of formData.entries()) {
          console.log(entry);
        }
        this.isFormSubmitted = true;
      }
    },
  },

  mounted() {
    document.querySelectorAll(".hoverable").forEach((element) => {
      element.classList.remove("hoverable");
      element.classList.add("idpo-hoverable");
    });
  },
};
</script>

<style scoped>
@import "assets/css/order.css";
</style>
