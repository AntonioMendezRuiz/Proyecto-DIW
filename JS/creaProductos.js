function muestraLista(lista) {
    $('#lista').html('')
    lista.forEach((producto) => {
        $('#lista').html($('#lista').html() + `<div><p>${producto.producto}<p><input onchange='calculaPrecio(this, ${producto.precio})' type='number' value='1' min='1'><span name='precio'>${producto.precio}€</span><span onclick='eliminar(${index},${lista})' class='fa fa-trash'><span></div>`)
    })
}
function calculaPrecio(input, precio) {
    var cantidad = input.value
    //console.log(cantidad)
    //console.log(precio)
    $(input).next().html(`${cantidad * precio}€`)

}
function eliminar(indice, lista) {
    lista.splice(indice, 1)
    muestraLista(lista)
}
$(document).ready(() => {
    var lista = []
    $.ajax({
        url: "../JSON/productos.json",
        method: "GET",
        contentType: "json",
        success: (respuesta) => {
            console.log(productos)
            respuesta.forEach((producto, index) => {
                $('#productos').html($('#productos').html() + `<div id=${index}><img src="${producto.url}"><br><br><h3>${producto.producto}</h3><span>${producto.descripcion}</span><br><span>${producto.precio}€</span></div>`)
            })
            $('#productos > div').click((evento) => {
                if (lista.indexOf(respuesta[evento.currentTarget.id]) == -1) {
                    lista.push(respuesta[evento.currentTarget.id])
                }
                muestraLista(lista)
            })
        }

    })
})