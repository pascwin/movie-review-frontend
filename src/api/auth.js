import client from "./client";

export const createUser = async (userInfo) => {
  //without client it would be like this: await axios.post("http://localhost:8000/api")
  try {
    const { data } = await client.post("user/signup", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    //we check if we get our message from the backend
    if (response?.data) return response.data;
    //or get a message send from the system, which we did not create
    return {error: error.message || error};
  }
};
