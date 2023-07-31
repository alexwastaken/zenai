import React, { useState } from 'react'
import backgroundhome from '../img/backgroundhome.png'
import plus from '../img/plus.png'
import logo from '../img/Vector.png'
import submit from '../img/submit.png'
import { useAuth0 } from '@auth0/auth0-react'
import Resizer from "react-image-file-resizer";
import Sidebar from '../components/sidebar'
import PostForm from '../components/postForm.js'

function Post() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { user } = useAuth0()

  const [image, setImage] = useState([]);
  const [binary, setBinary] = useState([]);

  const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      640,
      828,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  const handleImageChange = async (event) => {
    if (event.target.files) {
      const newImages = [...image];
      newImages.push(URL.createObjectURL(event.target.files[0]));
      setImage(newImages);
      
      const resized = await resizeFile(event.target.files[0]);
      setBinary((prevBinary) => [...prevBinary, resized]);
    }
  };

  return (
    <div>
      <div
        className="bg-gray-900 h-screen"
      >
        <Sidebar />
        <PostForm userInfo={user} />
        
      </div>

    </div>
  )
}

export default Post