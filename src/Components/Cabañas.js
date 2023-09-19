
import React, { useState } from "react";
import "../styles/Home.css";
import Logo from "../assets/ruta.jpg";
import Cabaña1 from "../assets/cabaña1.PNG";
import Cabaña2 from "../assets/cabaña2.PNG";
import Cabaña3 from "../assets/cabaña3.PNG";
import Cabaña4 from "../assets/cabaña4.PNG";
import Cabaña5 from "../assets/cabaña5.PNG";
import Cabaña6 from "../assets/cabaña6.PNG";
import Cabaña7 from "../assets/cabaña7.PNG";
import Cabaña8 from "../assets/cabaña8.PNG";
import Cabaña9 from "../assets/cabaña9.PNG";
import Cabaña10 from "../assets/cabaña10.PNG";
import Cabaña11 from "../assets/cabaña11.PNG";
import Cabaña12 from "../assets/cabaña12.PNG";
import Cabaña13 from "../assets/cabaña13.PNG";
import Cabaña14 from "../assets/cabaña14.PNG";
import Cabaña15 from "../assets/cabaña15.PNG";
import Cabaña16 from "../assets/cabaña16.PNG";

import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Cabañas.css";

function Cabañas() {
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
        
        <a href="./" target="_blank" rel="noopener noreferrer">
        <button className="botonnavbar " type="button">INICIO</button>
      </a>
        

        <a href="./Servicios" target="_blank" rel="noopener noreferrer">
        <button className="botonnavbar" type="button">SERVICIOS</button>
      </a>
        
        <button className="botonnavbar" type="button">TURISMO</button>

        <a href="./Cabañas" target="_blank" rel="noopener noreferrer">
        <button className="botonnavbar" type="button">CABAÑAS</button>
      </a>
        <button className="botonnavbar" type="button">NOVEDADES</button>
        <button className="botonnavbar" type="button">MAPA</button>
          
        </div>
      </div>
    
        </div>


        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Cabaña1} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">JEMARESDAGU</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña2} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CENTRO TURISTICO RAHUE</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña3} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CENTRO TURISTICO RAYEN</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  </div>






  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Cabaña4} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS ALBERGUE LA LEONA</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña5} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">O'NDE JUANITO</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña6} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">COMPLEJO TURISTICO EL ROBLE</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  </div>




  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Cabaña7} alt="Mi Imagen" class="imagen-estilizada"></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS "COLORADO"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña8} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS/HOSTAL "REFUGIO EL TRICAHUE"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña9} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">REFUGIO "EL MÉDANO"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  </div>



  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Cabaña10} alt="Mi Imagen" class="imagen-estilizada"></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS "DONDE NIBALDO"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña11} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS "SANTA TERESITA"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña12} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS "MARCELA"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  </div>





  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Cabaña13} alt="Mi Imagen" class="imagen-estilizada"></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS "LOS QUILLAYES"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña14} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS "RIO MAULE"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Cabaña15} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS "ELIZABETH BASOALTO"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  </div>

  <div class="col">
    <div class="card h-100">
    <img src={Cabaña16} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">CABAÑAS Y ALMACEN "DON RENÉ"</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
        </body>




    );
}








export default Cabañas
