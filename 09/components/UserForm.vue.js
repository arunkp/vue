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
    fields: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  template: `
    <div class="form-wrapper">
      <header>{{ title }}</header>
      <form autocomplete="off" @submit="checkForm" :method="request">
        <div class="form-group" v-for="(field, i) in fields" v-bind:key="i">
          <template v-if="field.type !== 'radio' && field.type !== 'checkbox'">
            <label :for="field.name" v-if="field.label">{{field.label}}</label>
            <input v-if="field.type" class="form-control" :id="field.name" :type="field.type" :name="field.name" />
          </template>
          <template v-else>
            <input class="form-control" :id="field.name+i"  :type="field.type" :name="field.name" />
            <label :for="field.name+i" class="label-check" v-if="field.label">{{field.label}}</label>
          </template>
        </div>
        <slot></slot>
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
