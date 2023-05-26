function aoCarregar() {
    var mensagem = window.document.getElementById('msg')
    var image = window.document.getElementById('imagem')
    var comp = window.document.getElementById('complement')
    var agr = new Date()
    var hora = agr.getHours()

    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        image.src = 'manha.jpg'
        document.body.style.background ='orange'
        comp.innerHTML='Bom dia!'
    } else if (hora >= 12 && hora < 18) {
            image.src = 'tarde.jpg'
            comp.innerHTML='Boa tarde!'
        }
    else {
        image.src ='noite.png'
        document.body.style.background='darkblue'
        comp.innerHTML='Boa noite!'
    }
}