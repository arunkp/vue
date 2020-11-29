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
  },
  template: `
    <div>
      <header>{{ title }}</header>
      <form :action="url" :method="request">
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
        <button class="btn" type="submit">{{ btnText }}</button>
      </form>
    </div>`,
};
