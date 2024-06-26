import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const history = useHistory();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/media/', formData);
      history.push(`/status/${response.data.id}`);
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadImage;
