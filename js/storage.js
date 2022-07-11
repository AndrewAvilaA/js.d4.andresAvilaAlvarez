const ul = document.querySelector("ul")

const listarCarteles = () => {
    debugger
    ul.innerHTML = ``
    if (localStorage.getItem("cartelesValuados")){
        let cart = JSON.parse(localStorage.getItem("cartelesValuados"))
            for (elemento of cart){
                ul.innerHTML += `<li>${elemento.nombre} ${elemento.precio} $</li>`
            }
    }else{
        ul.innerHTML = `<p>No hay ningún cartel presupuestado.</p>`
    }
}

const ocultarCarteles = () => {
    ul.innerHTML = ""
}

const botonOcultarCarteles = document.querySelector("#botonOcultarCarteles")

botonOcultarCarteles.addEventListener ("click", ocultarCarteles)

const botonListarCarteles = document.querySelector("#botonListarCarteles")

botonListarCarteles.addEventListener ("click", listarCarteles)

const botonClearStorage = document.querySelector("#botonClearStorage")

botonClearStorage.addEventListener ("click", ()=>{
    debugger
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Todas las búsquedas y presupuestos van a ser borrados",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            ul.innerHTML = ``
            cartelesValuados = []
            localStorage.clear()
            mensajeLimpieza()
        }
      })
})