import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UploadImage from './components/UploadImage';
import ImageStatus from './components/ImageStatus';
import ImageView from './components/ImageView';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={UploadImage} />
          <Route path="/status/:id" component={ImageStatus} />
          <Route path="/view/:id" component={ImageView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
