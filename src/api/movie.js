import client from "./client";

export const uploadTrailer = async (formData, onUploadProgress) => {
  const token = localStorage.getItem("auth-token");
  try {
    const { data } = await client.post("/movie/upload-trailer", formData, {
      headers: {
        Authorization: "Bearer " + token,
        "content-type": "multipart/form-data",
      },
      onUploadProgress: ({ loaded, total }) => {
        if (onUploadProgress) console.log("hello1");
        onUploadProgress(Math.floor((loaded / total) * 100));
      },
    });
    console.log("hello2");
    console.log(data, "hello3")
    return data;
  } catch (error) {
    const { response } = error;
    console.log(error.response.data);
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};
