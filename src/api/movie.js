import client from "./client";

export const uploadTrailer = async (formData) => {
  const token = localStorage.getItem("auth-token");
  try {
    const { data } = await client.post("/movie/upload-trailer", formData, {
      headers: {
        Authorization: "Bearer " + token,
        "content-type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {

    const { response } = error;
    console.log(error.response.data);
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};
