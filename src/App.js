import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UploadImage from './components/UploadImage';
import ImageStatus from './components/ImageStatus';
import ImageView from './components/ImageView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UploadImage />} />
        <Route path="/status/:id" element={<ImageStatus />} />
        <Route path="/view/:id" element={<ImageView />} />
      </Routes>
    </div>
  );
}

export default App;
