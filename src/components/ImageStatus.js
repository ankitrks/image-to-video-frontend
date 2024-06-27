import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ImageStatus = () => {
  const { id } = useParams();
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/media/${id}/status/`);
        setStatus(response.data.status);
        if (response.data.status === 'completed') {
          clearInterval(interval);
        }
      } catch (error) {
        console.error('Error fetching image status:', error);
        // Handle error state or retry logic if needed
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <React.Fragment>
      <div>
        <h1>Image Status</h1>
        <p>Status: {status}</p>
        {status === 'completed' && <a href={`/view/${id}`}>View Image and Video</a>}
      </div>
    </React.Fragment>
  );
};

export default ImageStatus;
