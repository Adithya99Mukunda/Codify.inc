import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
     <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
