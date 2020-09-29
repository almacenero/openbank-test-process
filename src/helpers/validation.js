export default function passwordValidator(password) {
  //const passw_match = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,24}$/;
  const passw_match = /^(?=.*\d)(?=.*[A-Z]).{8,24}$/;

  if (password.match(passw_match)) {
    return true;
  } else {
    return false;
  }
}
