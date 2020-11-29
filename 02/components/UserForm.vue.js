const UserForm = {
  template: `
    <div>
      <header>😈 Your details now 🔫</header>
      <form action="https://example.com/api/create" method="post">
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
        <button class="btn" type="submit">Sign up now 😱</button>
      </form>
    </div>`,
};
