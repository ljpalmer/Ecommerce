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
          <button className="btn btn-secondary"><Link className='nav-link' to={"/categoria/Laptops"}>Laptops</Link></button>
        </li>
        <li className="nav-link">
          <button className="btn btn-secondary"><Link className='nav-link' to={"/categoria/Celulares"}>Celulares</Link></button>
        </li>
        <li className="nav-link">
          <button className="btn btn-secondary"><Link className='nav-link' to={"/categoria/Televisores"}>Televisores</Link></button>
        </li>
        <li className="nav-link">
          <button className="btn btn-secondary"><Link className='nav-link' to={"/categoria/Perifericos"}>Periféricos</Link></button>
        </li>
      </ul>
    );
}

export default Categorias;
