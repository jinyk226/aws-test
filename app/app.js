const imageForm = document.querySelector("#imageForm")
const imageInput = document.querySelector("#imageInput")
import axios from 'axios'

imageForm.addEventListener("submit", async event => {
  event.preventDefault()
  const file = imageInput.files[0]

  //get secure URL from server
  const {data:url} = await axios.get("/s3Url")
  console.log(url)

  //post the image directly to the s3 bucket
  const headers = {
    "Content-Type": "multipart/form-data"
  }
  await axios.put(url, file, {headers})

  const imageUrl = url.split("?")[0]
  console.log(imageUrl)

  cont
})
