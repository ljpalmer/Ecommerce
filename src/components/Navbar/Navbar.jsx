import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import BotonDarkMode from "./BotonDarkMode/BotonDarkMode";

//Context
import { useDarkModeContext } from "../../context/DarkModeContext";

export default function Navbar() {
  const {darkMode} = useDarkModeContext();

  return ( 
        <nav className={`navbar navbar-expand-lg bg-primary ${darkMode ? 'bg-dark' : 'bg-primary'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mercado Perú</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Categorias/>         
          </div>
            <CartWidget/>
            <BotonDarkMode />
        </div>
      </nav>
  )
}
