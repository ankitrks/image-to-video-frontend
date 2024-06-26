import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ImageStatus = () => {
  const { id } = useParams();
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await axios.get(`http://localhost:8000/api/media/${id}/status/`);
      setStatus(response.data.status);
      if (response.data.status === 'completed') {
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <div>
      <h1>Image Status</h1>
      <p>Status: {status}</p>
      {status === 'completed' && <a href={`/view/${id}`}>View Image and Video</a>}
    </div>
  );
};

export default ImageStatus;
