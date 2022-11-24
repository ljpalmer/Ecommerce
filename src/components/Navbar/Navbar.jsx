import Form from "../Form/Form";
import Categorias from "./Categorias/Categorias";

export default function Navbar() {
  return ( 
        <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mercado Perú</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Categorias/>
            <Form busqueda={"Buscar Categorias"}/>           
          </div>
        </div>
      </nav>
  )
}
