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
  template: `
    <div>
      <header>{{ title }}</header>
      <form @submit="checkForm" :action="url" :method="request">
        <div class="form-group">
          <label>First Name</label>
          <input class="form-control" type="text" name="first_name" />
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
};
