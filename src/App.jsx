import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages/components
import Home from './pages/home';
import Create from './pages/create';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/create" element={<Create />} />
       
      </Routes>
    </Router>
  );
}

export default App;
