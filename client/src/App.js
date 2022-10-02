import React from 'react'

import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './component/Contact';
import Login from './component/Login';
import SignIn from './component/SignIn'
import Error from './component/Error';
import Appss from './component/TEst/TEstRgeg';
import Appss2 from './component/TEst/TestReg2';
import Login1 from './component/TEst/TEstLog';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/test" element={<Appss />} />
          <Route path="/test2" element={<Appss2 />} />
          <Route path="/log2" element={<Login1 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
