import "./App.css";
import "./Components/Navbar/Navbar.css";
import "./Components/Home/home.css";
import "./Components/Services/Cards.css"
import "./Components/About/About.css"
import "./Components/Menu/Menu.css"

// import { useRef } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

import Cards from "./Components/Services/Cards";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";


function App() {



  return (
    <>
    
        <Navbar/>
          <Home/>
        <Cards/> 
         <About/>
          <Menu/>
        <Team/>
         <Footer/>
       
       
         
       
      
       
            
        
            
         
          
       
    </>
  );
}

export default App;
