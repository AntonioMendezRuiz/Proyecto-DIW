$(document).ready(() => {
    $.ajax({
        url: "../JSON/productos.json",
        method: "GET",
        contentType: "json",
        success: (respuesta) => {
            respuesta.forEach((producto, index) => {
                $('#seccion').html($('#seccion').html() + `<div id=${index}><img src="${producto.url}"><h3>${producto.producto}</h3><p>${producto.descripcion}</p></div>`)
            })
        }
    });
})