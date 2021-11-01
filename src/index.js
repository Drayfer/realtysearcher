import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ListContext from './context';


import { BrowserRouter } from 'react-router-dom';
const Main = () => {
  const [state, setState] = useState([])
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ListContext.Provider value={{state, setState}}>
          <App />
        </ListContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(
 <Main />,
  document.getElementById('root')
);


