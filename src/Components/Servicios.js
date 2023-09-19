import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Servicios.css";
import Logo from "../assets/ruta.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import Gasolinera from "../assets/gasolineria.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


  function Servicios() {
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
        <button className="botonnavbar" type="button">NOVEDADES</button>
      </a> 

        <button className="botonnavbar" type="button">¿QUIENES SOMOS?</button>
        <button className="botonnavbar" type="button">MAPA</button>
          
        </div>
      </div>
    
      
        
        </div>
      <h1 class="tituloo">Categorías</h1>
  
  
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Alimentacion</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card ">
    <img  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Alojamiento</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Gasolinera}class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Bencineras</h5>
        <a href="./Bencineras">
        <button className="btn" type="button">Leer mas</button>
        </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Hospedajes</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  </div>


  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Servicios</h5>
        <button className="btn" type="button">Leer mas</button>
      
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card ">
    <img  class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Servicios</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Servicios</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Servicios</h5>
        <button className="btn" type="button">Leer mas</button>
      </div>
    </div>
  </div>
  </div>


   </body> 
    
  );
}

export default Servicios
