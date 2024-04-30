import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom";
import Navbar from './components/Navbar';
import Header from "./Header";
import Carousel from "./components/Carousel";
import RegistrationForm from "./components/RegistrationForm";
import ServiceDescription from "./components/ServiceDescription"; 

const App = () => {
  return (
    <StrictMode>
      <Navbar />
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '20px' }}>
          <Carousel style={{ height: '400px' }} /> 
        </div>
        <div>
          <RegistrationForm />
        </div>
      </div>
      <ServiceDescription /> 
    </StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);