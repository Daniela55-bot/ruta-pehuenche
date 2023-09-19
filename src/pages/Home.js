import React, { useState } from "react";
import Logo from "../assets/ruta.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import ReorderIcon from '@mui/icons-material/Reorder';



function Home () {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <body className="pagina">
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        
       
      </div>
    </div>
    
    <div className="navbar2">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
    
        <div className="contenedor-botones">
        
        
        <a href="./" >
        <button className="botonnavbar " type="button">INICIO</button>
      </a>
        

        <a href="./Servicios" >
        <button className="botonnavbar " href="./Servicios" type="button">SERVICIOS</button>
      </a>
        
        <button className="botonnavbar" type="button">TURISMO</button>

        <a href="./Cabañas" >
        <button className="botonnavbar" type="button">NOVEDADES</button>
      </a>
        <button className="botonnavbar" type="button">¿QUIENES SOMOS?</button>
        <button className="botonnavbar" type="button">MAPA</button>
          
        </div>
      </div>
    
        
        
        </div>
        
    </body>
  );
}

export default Home;
