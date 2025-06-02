import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importando o BrowserRouter
import Home from './Home.jsx'
import Log from './Log.jsx'
import Sign from './Sign.jsx'
import Store from './Store.jsx'
import Contact from './Contact.jsx';
import UserArea from './UserArea.jsx';
import Payment from './Payment.jsx';
import Delete from './Delete.jsx';
import Update from './Update.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/home" element={<Home />} />  
        <Route path="/log" element={<Log />} />  
        <Route path="/sign" element={<Sign />} />  
        <Route path="/store" element={<Store />} />  
        <Route path="/contact" element={<Contact />} />  
        <Route path="/userarea" element={<UserArea />} />  
        <Route path="/delete" element={<Delete />} />  
        <Route path="/update" element={<Update />} />  
         <Route path="/payment" element={<Payment />} />  
      </Routes>
    </Router>
  </StrictMode>,
  
)
