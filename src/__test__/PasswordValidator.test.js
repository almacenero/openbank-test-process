import passwordValidator from "./../helpers/PasswordValidation";

it("Should input a password between 8 to 24 characters which contain at least one numeric digit, one uppercase", () => {
  const Correct_password = "8kasSk23";
  expect(passwordValidator(Correct_password)).toBe(true);
  const Incorrect_password = "8DSDF";
  expect(passwordValidator(Incorrect_password)).toBe(false);
  const Incorrect_password_max_length = "8DSDFasdeddsdasdasdasdasdadad";
  expect(passwordValidator(Incorrect_password_max_length)).toBe(false);
});
