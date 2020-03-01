$(()=>{
    $('[type=submit]').click((e)=>{
        $(e.currentTarget).parent().html('<h2>FORMULARIO ENVIADO</h2>').css('align-items', 'center');

    })
})