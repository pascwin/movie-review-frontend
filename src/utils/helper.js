export const isValidEmail = (email) => {
  const isValidEmail =
    /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

    return isValidEmail.test(email)
};
