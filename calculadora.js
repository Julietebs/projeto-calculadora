const valor = document.querySelector('#valor')
function clickbotoes(event) {
    let conteudobotao = event.target.textContent;
    valor.textContent += conteudobotao;

}

function apagaTudo(){
    valor.innerText = ``

}
