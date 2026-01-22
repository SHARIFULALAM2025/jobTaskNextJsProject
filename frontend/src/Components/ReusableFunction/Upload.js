import axios from "axios"


export const uploadImage = async (imageFile) => {
  const formData = new FormData()
  formData.append('image', imageFile)
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_UPLOAD_IMAGE}`,
    formData
  )
  return data?.data?.url
}
export const postUser = async (userData) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/all_user`, userData);
  return data;

}

