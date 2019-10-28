import React from 'react';

import './App.scss';
import ClientOnBoarding from './containers/ClientOnBoarding/clientOnBoarding';

class App extends React.Component {
  

  render() {
    return (
      <main role="main" className="container">
        <ClientOnBoarding />
      </main>
    )
  }  
}

export default App;
