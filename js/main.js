/* função para carregar uma parte da página utilizando ajax e promise*/
function navegarAjax(url, seletor, push = true){
    if(!url || !seletor) return
    const elemento = document.querySelector(seletor)
    fetch(url)
        .then(resposta => resposta.text())
        .then(html => {
            elemento.innerHTML = html
            if(push){
                history.pushState({ seletor }, null, url)
            }
        })
}

/* função para selecionar os valores dos atributos seletores das tags para usar de parametro na função de navegação,
    prevenir a navegação padrão do clique com o
    preventDefault e com isso acionando a função de navegação */
document.querySelectorAll('[page]').forEach(link => {
    const url = link.attributes['page'].value
    const seletorDestino = link.attributes['destino'].value

    link.onclick = evento => {
        evento.preventDefault()
        navegarAjax(url, seletorDestino)
    }
})