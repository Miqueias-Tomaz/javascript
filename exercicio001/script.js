function verificar() {
    var data = new Date()
    var fano = data.getFullYear()
    var res = window.document.getElementById('res')
    var ano = window.document.getElementById('iano')

    if(ano.value.length == 0 || ano.value > fano) {
        window.alert('[ERRO] Verifique se os dados estão corretos!')
    } else {
        window.alert('ok')
    }
}