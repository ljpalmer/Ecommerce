const consultarBDD = async (ruta) => {
    // const url = './json/productos.json';
    const response = await fetch(ruta);
    const productos = await response.json();
    return productos;
};

export {consultarBDD}
// export default consultarBDD