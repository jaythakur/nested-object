import React from 'react';

import Basic from './Components/Basic';
import './App.css';

class App extends React.Component {
  
  render() {
    console.log('[App.js] render')
    return (
      <div className="App">
        <div className="col-md-4">

        </div>
        <div className="col-md-8">
          <Basic />
        </div>
      </div>
    );
  }  
}

export default App;
