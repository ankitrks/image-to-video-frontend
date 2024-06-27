import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ImageView = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      const response = await axios.get(`http://localhost:8080/api/media/${id}/`);
      setMedia(response.data);
    };

    fetchMedia();
  }, [id]);

  if (!media) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <div>
        <h1>Media View</h1>
        <img src={`${media.image}`} alt="Uploaded" style={{width: '250px'}}/>
        <div>{media.video && <video controls src={`${media.video}`} />}</div>
      </div>
    </React.Fragment>
  );
};

export default ImageView;
