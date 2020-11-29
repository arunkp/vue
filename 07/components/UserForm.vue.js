const UserForm = {
  props: {
    title: {
      type: String,
      default: "Custom Title",
    },
    btnText: {
      type: String,
      default: "Custom Button Text",
    },
    url: {
      type: String,
      default: "/",
    },
    request: {
      type: String,
      default: "POST",
    },
    async: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      error: false,
      firstName: "",
      productOwners: ["Max", "Konsti", "Arun", "Hoda"],
    };
  },
  watch: {
    firstName(newVal, oldVal) {
      if (this.productOwners.includes(newVal) || !Boolean(newVal.length)) {
        this.error = false;
      } else {
        this.error = true;
      }
    },
  },
  computed: {
    firstNameError() {
      return `Sorry, ${this.firstName} is not in the list of the product Owners.`;
    },
  },
  template: `
    <div>
      <header>{{ title }}</header>
      <form autocomplete="off" @submit="checkForm" :method="request">
        <div class="form-group">
          <label>First Name</label>
          <input v-model="firstName" class="form-control" type="text" name="first_name" />
          <div class="error" v-if="error">{{firstNameError}}</div>
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input class="form-control" type="text" name="last_name" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input class="form-control" type="email" name="email" />
        </div>
        <div class="col-2">
          <button class="btn" type="submit">{{ btnText }}</button>
          <button @click.prevent="cancelForm" class="btn default">Cancel</button>
        </div>
      </form>
    </div>`,
  methods: {
    checkForm(e) {
      if (this.async) {
        e.preventDefault();
        // When form is submitted, Vue broadcasts(emits) an event with a name 'formSubmit' which can be listened-to in parent component
        this.$emit("formSubmit");
      }
      return true;
    },
    cancelForm() {
      // When cancel button is clicked, Vue broadcasts(emits) an event with a name 'cancelled' which can be listened-to in parent component
      this.$emit("cancelled");
    },
  },
};
