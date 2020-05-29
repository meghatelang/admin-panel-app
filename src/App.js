import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as _ from 'lodash';
import Navigation from '../src/components/Navigation';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
