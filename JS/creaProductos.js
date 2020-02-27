var lista = []
function muestraLista(lista) {
    $('#lista').html('')
    lista.forEach((producto, index) => {
        $('#lista').html($('#lista').html() + `<div><div>${producto.producto}</div><input onchange='calculaPrecio(this, ${producto.precio})' type='number' value='1' min='1'><span name='precio'>${producto.precio}€</span><span onclick='eliminar(${index})' class='fa fa-trash'><span></div>`)
    })
    calculaPrecioFinal()
}
function calculaPrecio(input, precio) {
    var cantidad = input.value
    //console.log(cantidad)
    //console.log(precio)
    $(input).next().html(`${cantidad * precio}€`)
    calculaPrecioFinal()
}
function calculaPrecioFinal() {
    var precioFinal = 0
    $('span[name=precio]').each(function (i, val) {
        var precio = $(val).html()
        precioFinal += Number(precio.replace('€', ''))
    })
    if (precioFinal < 200 && precioFinal >0) {
        precioFinal += 15
        $('#envio').html('* Gastos de envío: 15€')
    }
    else{
        $('#envio').html('')
    }
    $('#precioFinal').html(`Total: ${precioFinal}€`)
}
function eliminar(indice) {
    lista.splice(indice, 1)
    muestraLista(lista)
}
$(document).ready(() => {

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