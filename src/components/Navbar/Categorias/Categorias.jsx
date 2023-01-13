import React from 'react';
import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-link">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <button className='btn btn-secondary'><Link className="nav-link" to={"/"}>Home</Link></button>
        </li>
        <li className="nav-link">
          <button className="btn btn-secondary"><Link className='nav-link' to={"/categoria/Aventura"}>Aventura</Link></button>
        </li>
        <li className="nav-link">
          <button className="btn btn-secondary"><Link className='nav-link' to={"/categoria/Deportes"}>Deportes</Link></button>
        </li>
        <li className="nav-link">
          <button className="btn btn-secondary"><Link className='nav-link' to={"/categoria/Peleas"}>Peleas</Link></button>
        </li>
        <li className="nav-link">
          <button className="btn btn-secondary"><Link className='nav-link' to={"/categoria/Disparos"}>Disparos</Link></button>
        </li>
      </ul>
    );
}

export default Categorias;
