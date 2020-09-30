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
      .click();
  });
});
