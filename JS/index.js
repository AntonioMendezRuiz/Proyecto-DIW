
$(function () {
    $('.fa-play').click((e) => {
        $(e.currentTarget).toggle()
        $(e.currentTarget).next().toggle()
        $(e.currentTarget).parent().prev()[0].play()

    })
    $('.fa-pause').click((e) => {
        $(e.currentTarget).toggle()
        $(e.currentTarget).prev().toggle()
        $(e.currentTarget).parent().prev()[0].pause()
    })
    $('video').each((index, e) => {
        console.log(e)

        e.ontimeupdate = () => {
            let cT = e.currentTime, d = e.duration
            let p = cT / d * 100
            $(e).next().children('.progress').val(p)
            //console.log(p)
        }
    });
    $('audio').each((index, e) => {
        console.log(e)

        e.ontimeupdate = () => {
            let cT = e.currentTime, d = e.duration
            let p = cT / d * 100
            $(e).next().children('.progress').val(p)
            //console.log(p)
        }
    });
    $('.progress').each((index, e) => {
        e.onclick = () => {
            let v = $(e).val()
            let d = $(e).parent().prev()[0].duration
            $(e).parent().prev()[0].currentTime = d * v / 100
        }
    })
    $('.volume').val($('.volume').parent().prev()[0].volume)
    $('.volume').each((index, e) => {
        e.onclick = () => {
            let v = $(e).val()
            $(e).parent().prev()[0].volume = v
        }
    })
});