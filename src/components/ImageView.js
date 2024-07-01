import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ImageView = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/media/${id}/`);
        setMedia(response.data);

        // Generate and fetch token from backend
        const tokenResponse = await axios.get(`http://localhost:8080/generate_token/${id}/`);
        const token = tokenResponse.data.token;
        
        // Set the video URL with the token
        setVideoUrl(`http://localhost:8080/stream_video/${token}`);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchMedia();
  }, [id]);

  if (!media) return <div>Loading...</div>;

  return (
    <div>
      <h1>Media View</h1>
      <img src={`${media.image}`} alt="Uploaded" style={{ width: '250px' }} />

      {videoUrl && (
        <div>
          <h2>Video Playback</h2>
          <video
            controls
            style={{ width: '450px' }}
            src={videoUrl}
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
            controlsList="nodownload" // Disable download button
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default ImageView;
