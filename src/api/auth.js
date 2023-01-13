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
  //without client it would be like this: await axios.post("http://localhost:8000/api")
  try {
    //userid and otp must be in userinfo
    const { data } = await client.post("/user/verify-email", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    console.log(error)
    //we check if we get our message from the backend
    if (response?.data) return response.data;
    //or get a message send from the system, which we did not create
    return { error: error.message || error };
  }
};
