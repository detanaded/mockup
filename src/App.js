import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import router from './router';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {router}
      </HashRouter>
    </div>
  );
}

export default App;
