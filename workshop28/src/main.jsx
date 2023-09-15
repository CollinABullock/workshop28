import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom" 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wrapping the app in the BrowserRouter tag.  I dunno what this does!  Okay, some googling tells me that it basically lines up the user interface with the the URL.  I dunno, dude. */}
      <BrowserRouter>
    <App />
      </BrowserRouter>
  </React.StrictMode>,
)
