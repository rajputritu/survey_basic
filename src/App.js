import React from 'react';
import './App.css';
//import NavBar from './components/navbar/navbar';
//import Login from './pages/login/login';
//import Survey from './pages/survey/survey';
import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roman from './components/roman/roman';







export default function App() {

  

  return (
  
    /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
       <Route path="/survey" element={<Survey/>}/> 


      </Routes>
    </BrowserRouter>
    */
   <Roman></Roman>

  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
