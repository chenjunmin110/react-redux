import React from 'react';
import Home from './pages/home'
import ComA from './pages/ComA'
import ComB from './pages/ComB'

import store from './store'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA/>
        <ComB/>
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
