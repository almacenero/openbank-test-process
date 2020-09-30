describe("Internationalization test ", () => {
  it("Navegate for the site change language", () => {
    const user = cy;
    user
      .visit("http://localhost:3000")
      .get("[data-testid=Flag-DE]")
      .click()
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
        "Ea et velit sint proident sit do non ad incididunt voluptate consequat labore. Culpa pariatur ut id in dolor veniam do voluptate dolor nostrud exercitation. Cillum incididunt id pariatur sint mollit irure adipisicing commodo. Adipisicing exercitation in nulla esse consequat qui reprehenderit tempor consectetur sit deserunt enim. Ad minim id aute consequat qui enim aliqua enim officia Lorem ex deserunt. Consectetur amet ipsum irure eu."
      )
      .get(".css-v8vmtm-SaveButton")
      .click();
  });
});
