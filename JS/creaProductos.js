$(document).ready(() => {
    var productos
    $.ajax({
        url: "../JSON/productos.json",
        method: "GET",
        contentType: "json",
        success: (respuesta) => {
            productos = respuesta
            console.log(productos)
            respuesta.forEach((producto, index) => {
                $('#productos').html($('#productos').html() + `<div id=${index}><img src="${producto.url}"><br><br><h3>${producto.producto}</h3><span>${producto.descripcion}</span><br><span>${producto.precio}€</span></div>`)
            })
        }
    });
    $('#productos > div').css({'background-color': 'blue'})

})