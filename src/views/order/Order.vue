<template>
  <div id="idpo-body" class="body">
    <Header pageRoute="/order"/>
    <section id="idpo-showcase" class="showcase align-items-start">
      <Slideshow
        uniqueLabel="Agreement"
        :slidesNumber="9"
        :loopMode="false"
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
            <span>Please describe your idea:</span>
            <textarea
              name="clientRequest"
              id="idpo-clientRequest"
              cols="90"
              rows="10"
              v-model="clientRequest"
              @click="onClientRequestClick"
              required
            ></textarea>
          </div>
          <div class="idpo-input-field">
            <span>How long can you wait (in weeks) to receive it?</span>
            <input
              type="number"
              name="projectDuration"
              id="idpo-projectDuration"
              v-model="projectDuration"
              min="1"
              max="200"
              @click="onProjectDurationClick"
              required
            />
          </div>
          <div class="idpo-input-field">
            <span>Your budget (in USD) on this project:</span>
            <input
              type="number"
              name="projectBudget"
              id="idpo-projectBudget"
              v-model="projectBudget"
              min="500"
              maxlength="7"
              @click="onProjectBudgetClick"
              required
            />
          </div>
          <div class="idpo-input-field">
            <span>Your email:</span>
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

    <footer id="idpo-footer" class="footer">
      <div id="idpo-footerNav" class="footer-nav">
        <a
          href="https://www.linkedin.com/"
          target="blank"
          class="idpo-hoverable"
          @mouseenter="onLinkedinMouseEnter"
          @mouseleave="onLinkedinMouseLeave"
        >
          <img
            id="idpo-linkedinNav"
            :src="require(`@/assets/images/svg/linkedin-${widthClass}.svg`)"
            alt=""
          />
        </a>
        <router-link
          to="/contact"
          class="idpo-hoverable"
          @mouseenter="onEmailMouseEnter"
          @mouseleave="onEmailMouseLeave"
        >
          <img
            id="idpo-emailNav"
            :src="require(`@/assets/images/svg/email-${widthClass}.svg`)"
            alt=""
          />
        </router-link>
        <a
          href="https://t.me"
          target="blank"
          class="idpo-hoverable"
          @mouseenter="onTelegramMouseEnter"
          @mouseleave="onTelegramMouseLeave"
        >
          <img
            id="idpo-telegramNav"
            :src="require(`@/assets/images/svg/telegram-${widthClass}.svg`)"
            alt=""
          />
        </a>
      </div>
      <router-link
        id="idpo-footerNote"
        to="/portfolio"
        class="footer-note idpo-hoverable"
        >&copy; 2022 - EELee App Design</router-link
      >
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Slideshow from "@/components/Slideshow/Slideshow.vue";

export default {
  name: "Order",

  components: {
    Header,
    Slideshow,
  },

  data() {
    return {
        widthClass: String,
      windowWidth: Number,
      isMounted: false,
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
      allInputsValid: false,

      // Elements Object Refs
      linkedinNav: Object,
      emailNav: Object,
      telegramNav: Object,
    };
  },

  watch: {
    noRequestError(val) {
      if (val) {
        console.log("noRequestError", this.clientRequest);
      }
    },
    noEmailError(val) {
      if (val) {
        console.log("noEmailError", this.clientEmail);
      }
    },
    invalidEmailError(val) {
      if (val) {
        console.log("invalidEmailError", this.clientEmail);
      }
    },
    invalidDurationError(val) {
      if (val) {
        console.log("invalidDurationError", this.projectDuration);
      }
    },
    invalidBudgetError(val) {
      if (val) {
        console.log("invalidBudgetError", this.projectBudget);
      }
    },
  },

  methods: {
    // Utility Methods

    // Triggers different window size classes on resize
    windowWidthClassEmitter() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth < 320) this.widthClass = "xxs";
      else if (this.windowWidth < 576) this.widthClass = "xs";
      else if (this.windowWidth < 768) this.widthClass = "sm";
      else if (this.windowWidth < 992) this.widthClass = "md";
      else this.widthClass = "lg";
    },

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
      if (!this.$refs.clientEmailInput.validity.valid)
        this.invalidEmailError = true;
      if (this.projectBudget < 500 || this.projectBudget > 9000000)
        this.invalidBudgetError = true;
      if (this.projectDuration < 1 || this.projectDuration > 200)
        this.invalidDurationError = true;
    },

    // Footer
    onLinkedinMouseEnter() {
      this.linkedinNav.setAttribute(
        "src",
        require(`@/assets/images/svg/linkedin-hover-${this.widthClass}.svg`)
      );
    },
    onLinkedinMouseLeave() {
      this.linkedinNav.setAttribute(
        "src",
        require(`@/assets/images/svg/linkedin-${this.widthClass}.svg`)
      );
    },
    onEmailMouseEnter() {
      this.emailNav.setAttribute(
        "src",
        require(`@/assets/images/svg/email-hover-${this.widthClass}.svg`)
      );
    },
    onEmailMouseLeave() {
      this.emailNav.setAttribute(
        "src",
        require(`@/assets/images/svg/email-${this.widthClass}.svg`)
      );
    },
    onTelegramMouseEnter() {
      this.telegramNav.setAttribute(
        "src",
        require(`@/assets/images/svg/telegram-hover-${this.widthClass}.svg`)
      );
    },
    onTelegramMouseLeave() {
      this.telegramNav.setAttribute(
        "src",
        require(`@/assets/images/svg/telegram-${this.widthClass}.svg`)
      );
    },
  },

  created() {
    window.addEventListener("resize", this.windowWidthClassEmitter);
  },

  beforeMount() {
    this.windowWidthClassEmitter();
  },

  mounted() {
    this.linkedinNav = document.querySelector("#idpo-linkedinNav");
    this.emailNav = document.querySelector("#idpo-emailNav");
    this.telegramNav = document.querySelector("#idpo-telegramNav");
    this.isMounted = true;
    this.windowWidthClassEmitter();
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
