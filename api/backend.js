import Axios from "axios"

export const fetcher = async (url) => {
  try {
    const res = await Axios.get(
      process.env.NEXT_PUBLIC_API_URL + url + "?populate=deep"
    )
    return res.data
  } catch (err) {
    throw err.response.data
  }
}

export const poster = async (url, data) => {
  try {
    await Axios.post(process.env.NEXT_PUBLIC_API_URL + url + "?populate=deep", {
      data,
    })
  } catch (err) {
    throw err.response.data
  }
}

export const uploadFile = async (file) => {
  let formData = new FormData()
  formData.append("files", file)
  Axios({
    method: "post",
    url: process.env.NEXT_PUBLIC_API_UPLOAD_URL,
    data: formData,
  }).catch((error) => {
    console.error("There was an error!", error)
  })
}
