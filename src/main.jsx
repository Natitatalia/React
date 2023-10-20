import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Gallery from './compdos.jsx'
import DespertarMia from './comptres.jsx'
import Funcis from './compcuatro.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('rooty')).render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('rootsy')).render(
  <React.StrictMode>
    <DespertarMia/>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('rootsys')).render(
  <React.StrictMode>
    <Funcis/>
  </React.StrictMode>
)