import StringLengthValidator from "./../helpers/StringLengthValidator";
const randomstring = require("randomstring");

it("Should string to be max 255 charts ", () => {
  expect(StringLengthValidator(randomstring.generate(255))).toBe(true);
  expect(StringLengthValidator(randomstring.generate(256))).toBe(false);
});
