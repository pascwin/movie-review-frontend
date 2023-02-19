export const isValidEmail = (email) => {
  const isValidEmail =
    /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

    return isValidEmail.test(email)
};

export const getToken = () => localStorage.getItem("auth-token");

export const catchError = (error) => {
  const { response } = error;
  if (response?.data) return response.data;

  return { error: error.message || error };
};
