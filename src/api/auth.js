import client from "./client";

export const createUser = async (userInfo) => {
  //without client it would be like this: await axios.post("http://localhost:8000/api")
  try {
    const { data } = await client.post("user/create", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    //we check if we get our message from the backend
    if (response?.data) return response.data;
    //or get a message send from the system, which we did not create
    return { error: error.message || error };
  }
};

export const verifyUserEmail = async (userInfo) => {
  try {
    //userid and otp must be in userinfo
    const { data } = await client.post("/user/verify-email", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    console.log(error);
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const signInUser = async (userInfo) => {
  try {
    const { data } = await client.post("/user/sign-in", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    console.log(error);
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const getIsAuth = async (token) => {
  try {
    const { data } = await client.get("/user/is-auth", {
      headers: {
        Authorization: "Bearer " + token,
        accept: "application.json",
      },
    });
    return data;
  } catch (error) {
    const { response } = error;
    console.log(error);
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const forgetPassword = async (email) => {
  try {
    const { data } = await client.post("/user/forget-password", { email });
    return data;
  } catch (error) {
    const { response } = error;
    console.log(error);
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const verifyPasswordResetToken = async (token, userId) => {
  try {
    const { data } = await client.post("/user/verify-password-reset-token", {
      token,
      userId,
    });
    return data;
  } catch (error) {
    const { response } = error;
    console.log(error);
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const resetPassword = async (passwordInfo) => {
  try {
    const { data } = await client.post("/user/reset-password", passwordInfo);
    return data;
  } catch (error) {
    const { response } = error;
    console.log(error);
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};
