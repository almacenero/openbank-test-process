describe("App E2E test ", () => {
  it("Navegate for the site and send a contect form", () => {
    const user = cy;
    user
      .visit("http://localhost:3000")
      .get(".form-check-input")
      .click()
      .get(".css-1u6hxn1-NextButton")
      .click();
    /* .get(".ant-menu > :nth-child(4) > a")
      .click()
      .should("have.text", "Comunícate con nosotros")
      .get("#mail")
      .type("yasser@gmail.com")
      .get("#name")
      .type("yasser")
      .get("#detail")
      .type("Hola esta es una prueba desde mi e2e")
      .get(".css-1b9oiru-ContactPageForm")
      .click(); */
  });
});
