const consultarBDD = async () => {
    const url = './json/productos.json';
    const response = await fetch(url);
    const productos = await response.json();
    return productos;
};

export {consultarBDD}
// export default consultarBDD