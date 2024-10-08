// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ModalProvider } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ModalProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ModalProvider>,
  // </React.StrictMode>
);