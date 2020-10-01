export default function StringLengthValidator(str) {
  if (str.length <= 255) {
    return true;
  } else {
    return false;
  }
}
