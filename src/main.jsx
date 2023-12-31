import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
// import { ThemeContextProvider } from './context/ThemeContext';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     {/* <ThemeContextProvider> */}

    <BrowserRouter>
      <App />
    </BrowserRouter>
     {/* </ThemeContextProvider> */}
  </Provider>

)