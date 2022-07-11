const mensajeLimpieza = ()=>{
    Swal.fire(
        '¡Listo!',
        'Se ha limpiado el historial',
        'success'
      )
}

const mensajeNoData = ()=>{
    Swal.fire(
        'No hay coincidencias',
        '¿Querés probar otra búsqueda?',
        'question'
      )
}

const cartelInvalido = ()=>{
    Swal.fire(
        '¡El campo está vacío!',
        'Probá escribiendo un nombre, apodo o mensaje',
        'error'
      )
}

const noSearch = ()=>{
  listaBusqueda.innerHTML = ""
  listaBusqueda.innerHTML += `<h5 class="m-3">Lo sentimos, ¡no encontramos resultados!</h5>`
  Swal.fire(
      '¡El campo está vacío!',
      'Probá buscando por nombre o categoría',
      'error'
    )
}