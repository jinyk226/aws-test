import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import useColorThief from 'use-color-thief'

function uploadFile() {
  let navigate = useNavigate()
  const [source, setSource] = useState('')
  // const [imgPalette, setImgPalette] = useState([])
  // const {palette} = useColorThief(source, {
  //   format: 'hex',
  //   colorCount: 10,
  //   quality: 1,
  // })
  // setImgPalette(palette)

  // useEffect(() => {
  // }, [source])

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('e.target:', e.target)
    const file = e.target.imageInput.files[0]
    console.log("file:", file)

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
    setSource(imageUrl)
    navigate('/color-thief')
  }

  return (
    <div>
      <form id='imageForm' onSubmit={handleSubmit}>
          <input name="imageInput" type="file" accept="image/*" onChange={handleChange} />
          <input type='submit' value="Submit" />
      </form>
      {source.length ? <img src={source} /> : <p>No image uploaded</p>}
      {/* {imgPalette.length ? <p>{imgPalette.join(', ')}</p> : <p>No palette generated</p>} */}
    </div>
  );
}

export default uploadFile;

// const imageForm = document.querySelector("#imageForm")
// const imageInput = document.querySelector("#imageInput")
// import axios from 'axios'

// imageForm.addEventListener("submit", async event => {
//   event.preventDefault()
//   const file = imageInput.files[0]

//   //get secure URL from server
//   const {data:url} = await axios.get("/s3Url")
//   console.log(url)

//   //post the image directly to the s3 bucket
//   const headers = {
//     "Content-Type": "multipart/form-data"
//   }
//   await axios.put(url, file, {headers})

//   const imageUrl = url.split("?")[0]
//   console.log(imageUrl)

//   cont
// })
