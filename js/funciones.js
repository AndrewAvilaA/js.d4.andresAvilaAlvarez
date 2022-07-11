function calcular (parCantidad, parValor){
    let precio = parseFloat(parCantidad * parValor)
    return precio
}

const inputBuscar = document.querySelector("#inputBuscar")

const botonBuscar = document.getElementById("botonBuscar")

botonBuscar.addEventListener("click", busqueda)

const listaBusqueda = document.querySelector("#listaBusqueda")

function busqueda(){
    inputBuscar.value.trim() === "" ? noSearch() : motorBusqueda()   
}

function motorBusqueda(){
    debugger
    let plantilla = ``
    listaBusqueda.innerHTML = ""
    let aBuscar = (inputBuscar.value).toUpperCase()
    let arrayResultados = productos.filter(l => l.nombre.includes(aBuscar) || l.tipo.includes(aBuscar))
    for (elemento of arrayResultados){
        plantilla += retornoElContenido(elemento)
        listaBusqueda.innerHTML = plantilla
    }
    arrayResultados.length === 0 && noResults()
}


function noResults(){
    listaBusqueda.innerHTML = ""
    listaBusqueda.innerHTML += `<h5 class="m-3">Lo sentimos, ¡no encontramos resultados!</h5>`
    mensajeNoData()
}

const cartelPersonal = document.getElementById("cartelPersonal")

const inputCartel = document.querySelector("#inputCartel")

inputCartel.addEventListener("keyup", (e)=>{e.keyCode === 13 && evaluarCartel()})

const botonCartel = document.getElementById("botonCartel")

botonCartel.addEventListener("click", evaluarCartel)

let carteles = []

function evaluarCartel(){
    debugger
    inputCartel.value.trim() === "" ? cartelInvalido() : presupuestarCartel()   
}

function presupuestarCartel(){
    cartelPersonal.innerHTML = ""
    let cartel = inputCartel.value
    let letras = cartel.length
    let precio = calcular (letras, precioLetra)
    cartelPersonal.innerHTML += "<h3>"+cartel.toUpperCase()+"</h3><p> ¡Gracias por tu consulta! 😊 Este cartel tiene un valor de "+precio+" pesos.</p>"
    inputCartel.value = ""
        cartelesValuados.push(new CartelValuado(cartel.toUpperCase(), precio))
        localStorage.setItem("cartelesValuados", JSON.stringify (cartelesValuados))
}

const recuperarCartelesValuados = () => {
    if (localStorage.getItem("cartelesValuados")){
        let cart = JSON.parse(localStorage.getItem("cartelesValuados"))
            for (elemento of cart){
                cartelesValuados.push(elemento)
            }
    }
}

recuperarCartelesValuados()

const botonRefresh = document.querySelector("#botonRefresh")

botonRefresh.addEventListener("click", ()=> location.reload())