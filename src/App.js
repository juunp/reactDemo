import React from 'react';
import logo from './logo.svg';
import { createStore } from 'redux';
import { Provider } from 'react-redux';  
import reducer from './reducer';
import './App.css';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello
          </p>
        </header>
      </div>
    </Provider>
  );
}

export default App;
