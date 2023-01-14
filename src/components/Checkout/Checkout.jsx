import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from '../../assets/firebase';
import { useCarritoContext } from "../../context/CarritoContext";
import { toast } from 'react-toastify';

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
const Checkout = () => {
    const {totalPrice, carrito, emptyCart} = useCarritoContext();
    const datosFormulario = React.useRef();
    let navigate = useNavigate();

    const consultarFormulario = (e) => {
        e.preventDefault();
        const datForm = new FormData(datosFormulario.current);
        const cliente = Object.fromEntries(datForm);
        const emailCliente = cliente.email;
        const aux = [...carrito];
        if(aux.length>0){ //Contiene Items el Carrito 
            if(cliente.email !== cliente.email2){
                toast.error(`Los correos ingresados deben de coincidir.`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }else if (validateEmail(emailCliente)) {            
                aux.forEach(prodCarrito => {
                    getProducto(prodCarrito.id).then(prodBDD => {
                        if(prodBDD.stock >= prodCarrito.cant) {
                            prodBDD.stock -= prodCarrito.cant;
                            updateProducto(prodCarrito.id, prodBDD);
        
                        } else {
                            //Escenario producto no comprado
                            toast.error(`El Stock del producto no es válido.`, {
                                position: toast.POSITION.TOP_RIGHT
                            });
                            // console.log("Stock no valido")
                        }
                    })
                })
        
                createOrdenCompra(cliente,totalPrice(), new Date().toISOString()).then(ordenCompra => {
                    getOrdenCompra(ordenCompra.id).then(item => {
                        toast.success(`¡Muchas gracias por su compra, su orden es ${item.id}`);
                        emptyCart();
                        e.target.reset();                         
                        navigate("/");
                    }).catch(error => {
                        toast.error("Su orden no pudo ser generada, intente de nuevo.");
                        console.error(error);
                    })
                    
                })
            }else{
                toast.error(`No es un correo electronico válido`, {
                    position: toast.POSITION.TOP_RIGHT
                });                
            }
        }
        else{
            toast.error(`Debe ingresar articulos a su carrito antes de continuar`, {
                position: toast.POSITION.TOP_RIGHT
            });            
        }        
    };

    return (
        <div className="container" style={{marginTop: "20px"}}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="email2" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
        </div>        
    );
}

export default Checkout;