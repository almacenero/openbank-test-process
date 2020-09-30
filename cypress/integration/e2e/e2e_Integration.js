describe("App E2E test ", () => {
  it("Navegate for the site and send a contect form", () => {
    const user = cy;
    user
      .visit("http://localhost:3000")
      .get(".form-check-input")
      .click()
      .get(".css-1qri4k-NextButton")
      .click()
      .get("[data-testid=password]")
      .type("Yasser2010")
      .get("[data-testid=repassword]")
      .type("Yasser2010")
      .get(":nth-child(5) > .ant-input")
      .type(
        "Duis cillum cupidatat consequat cupidatat proident incididunt exercitation velit in reprehenderit cillum ullamco. Labore incididunt pariatur Lorem in nisi. Aliquip voluptate consectetur ut labore ut amet. Aliqua velit exercitation aliqua non anim. Ullamco est nisi eiusmod sit commodo excepteur proident do dolor ut. Lorem ut mollit culpa esse irure velit excepteur deserunt labore commodo."
      )
      .get(".css-v8vmtm-SaveButton")
      .click()
      .get(".css-g11xb5-CancelButton")
      .click();
  });
});
