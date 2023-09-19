
import React, { useState } from "react";
import "../styles/Home.css";
import Logo from "../assets/ruta.jpg";
import Bencinera1 from "../assets/bencinera1.jpg";
import Bencinera2 from "../assets/bencinera2.jpg";
import Bencinera3 from "../assets/bencinera3.jpg";

import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Bencineras.css";

function Bencineras() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
  
    return (

        <body className="pagina">
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Inicio </Link>
          <Link to="/restaurante"> restaurante </Link>
        </div>
      </div>
      
      <div className="rightSide">
        <Link to="/"> Inicio </Link>
        <Link to="/restaurante"> restaurante </Link>
        <Link to="/Home"> Home </Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon/>
        </button>
       
      </div>
    </div>
  
  
    <div className="navbar2">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
    
        <div className="contenedor-botones">
        
        <a href="./" >
        <button className="botonnavbar " type="button">INICIO</button>
      </a>
        

        <a href="./Servicios">
        <button className="botonnavbar" type="button">SERVICIOS</button>
      </a>
        
        <button className="botonnavbar" type="button">TURISMO</button>

        
        <button className="botonnavbar" type="button">NOVEDADES</button>
        <button className="botonnavbar" type="button">¿QUIENES SOMOS?</button>
        <button className="botonnavbar" type="button">MAPA</button>
          
        </div>
      </div>
    
        </div>

        
      <h1 class="tituloo">Bencineras</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Bencinera1} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">COPEC</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Bencinera2} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">COPEC</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Bencinera3} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">COPEC</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Bencinera3} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Estacion Shell</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  </div>






        </body>




    );
}








export default  Bencineras
