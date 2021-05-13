import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Nav/NavBar'
import Dashboard from './Dashboard/Dashboard'
import {AppProvider} from './context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <div className="app-container">
          <NavBar/>
         
      </div>
    </AppProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

