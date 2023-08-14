import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StyledEngineProvider } from "@mui/joy/styles";
import { Provider } from 'react-redux'
import { store  } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import './index.css'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store} >
        <PersistGate persistor={persistor}>
          <App/>
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
