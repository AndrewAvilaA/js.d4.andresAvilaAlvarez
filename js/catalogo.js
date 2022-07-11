const listaCatalogo = document.querySelector("#listaCatalogo")

const retornoElContenido = (contenido)=> {
    const {nombre, tipo, precio, descripcion} = contenido
    return `<div class="col-sm-6">
                <div class="card text-center m-2 text-bg-light">
                    <div class="card-body texto-card">
                        <h2 class="m-3">${nombre}</h2>
                        <p class="fs-5">${tipo}</p>
                        <p class="fs-5">${descripcion}</p>
                        <p class="fs-5">Precio: ${precio}</p>
                    </div>
                </div>
            </div>`

}

const URL = `js/amigus.json`

const mostrarCatalogo = (URL)=> {
    let visualizacion = ""
        fetch(URL)
            .then((response)=> response.json())
            .then((data)=>{
                for (contenido of data) {
                    visualizacion += retornoElContenido(contenido)
                    listaCatalogo.innerHTML = visualizacion
                }
            })
}

const traerCatalogo = (URL)=> {
    let amigusTodos = ""
    fetch(URL)
        .then((response)=> response.json())
        .then((data)=>{
            for (contenido of data) {
                amigusTodos += constructorProductos(contenido)
            }
        })
}

const constructorProductos = (producto) => {
    //debugger
    const {nombre, tipo, precio, descripcion} = producto
    productos.push(new Producto(`${nombre}`, `${tipo}`, `${precio}`, `${descripcion}`)) 
}

document.addEventListener("DOMContentLoaded", ()=> {
    mostrarCatalogo(URL)
    traerCatalogo(URL)
 })